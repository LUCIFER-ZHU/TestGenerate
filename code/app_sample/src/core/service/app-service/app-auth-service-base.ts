import qs from "qs";
import { clearCookie, getCookie, setCookie } from "qx-util";
import { deepCopy, getSessionStorage, Http, IAppAuthService, IParam, removeSessionStorage, setSessionStorage } from "@core";

/**
 * 应用权限服务基类
 *
 * @export
 * @abstract
 * @class AppAuthServiceBase
 * @implements {IAppAuthService}
 */
export abstract class AppAuthServiceBase implements IAppAuthService {

    /**
     *  应用数据
     *
     * @private
     * @type {IParam}
     * @memberof AppAuthServiceBase
     */
    private appData: IParam = {};

    /**
     * 系统默认操作标识
     *
     * @protected
     * @type {IParam}
     * @memberof AppAuthServiceBase
     */
    protected sysOPPrivs: IParam = {};

    /**
     * @description 系统操作标识映射统一资源映射表
     * @type {Map<string, string>}
     * @memberof AppAuthServiceBase
     */
    protected sysOPPrivsMap: Map<string, string> = new Map();

    /**
     * 获取应用数据
     *
     * @return {*}  {IParam}
     * @memberof AppAuthServiceBase
     */
    public getAppData(): IParam {
        return this.appData;
    }

    /**
     * 设置应用数据
     *
     * @param {IParam} opt
     * @memberof AppAuthServiceBase
     */
    public setAppData(opt: IParam = {}): void {
        this.appData = opt;
    }

    /**
     * 应用是否启用权限
     *
     * @return {boolean} 
     * @memberof AppAuthServiceBase
     */
    public getEnablePermission(): boolean {
        return this.appData.enablepermissionvalid && App.getEnvironmentParam().enablePermissionValid;
    }

    /**
     * 初始化应用权限
     *
     * @param {IParam} params 应用预置参数
     * @return {*}  {Promise<any>}
     * @memberof AppAuthServiceBase
     */
    public async initAppAuth(params: IParam, hooks: IParam): Promise<any> {
        let result = true;
        if (App.getEnvironmentParam() && App.getEnvironmentParam().SaaSMode) {
            if (getSessionStorage('activeOrgData')) {
                result = await this.getAppInitData(hooks, params);
            } else {
                result = await this.getOrgsByDcsystem(hooks);
                if (result) {
                    result = await this.getAppInitData(hooks, params);
                }
            }
        } else {
            result = await this.getAppInitData(hooks, params);
        }
        return result;
    }

    /**
     * 获取应用初始数据
     *
     * @param {IParam} hooks 应用钩子
     * @param {IParam} [params={}] 应用参数
     * @return {*}  {Promise<boolean>}
     * @memberof AppAuthServiceBase
     */
    public async getAppInitData(hooks: IParam, params: IParam = {}): Promise<boolean> {
        try {
            // const url = '/appdata';
            // hooks.appBefore.callSync({ url: url, param: params });
            // const response: any = await Http.getInstance().get(url);
            // if (response && response.status === 200) {
            //     let { data }: { data: any } = response;
            //     hooks.appAfter.callSync({ data: data });
            //     if (!data) {
            //         return false;
            //     }
            //     // token认证把用户信息放入应用级数据
            //     let localAppData: any = {};
            //     if (getCookie('ibzuaa-user')) {
            //         let user: any = JSON.parse(getCookie('ibzuaa-user') as string);
            //         if (user.sessionParams) {
            //             localAppData = { context: user.sessionParams };
            //             Object.assign(localAppData, data);
            //         } else {
            //             Object.assign(localAppData, data);
            //         }
            //     } else {
            //         Object.assign(localAppData, data);
            //     }
            //     this.setAppData(deepCopy(localAppData));
            //     return true;
            // } else {
            //     return false;
            // }
        } catch (error) {
            return false;
        }
    }

    /**
     * 获取指定数据操作标识是否鉴权
     *
     * @param {IParam} context 应用上下文
     * @param {{ key: string, dataAccAction: string, mainSateOPPrivs: IParam }} { key, dataAccAction, mainSateOPPrivs } {数据主键，操作标识，指定数据主状态操作标识 }
     * @param {IParam} [param] 额外参数
     * @return {*}  {IParam}
     * @memberof AppAuthServiceBase
     */
    /**
     * 获取指定数据操作标识是否鉴权
     *
     * @param {IParam} context 应用上下文
     * @param {string} dataAccAction 操作标识
     * @param {string} [key] 数据主键
     * @param {IParam} [mainSateOPPrivs] 指定数据主状态操作标识
     * @param {IParam} [param] 额外参数
     * @return {*}  {IParam}
     * @memberof IAppAuthService
     */
    public getOPEnableAuth(context: IParam, dataAccAction: string, key?: string, mainSateOPPrivs?: IParam, param?: IParam): IParam {
        let result: IParam = { [dataAccAction]: 1 };
        // 统一资源权限
        const curDefaultOPPrivs: any = this.handleSysOPPrivs();
        if (curDefaultOPPrivs && (Object.keys(curDefaultOPPrivs).length > 0) && (curDefaultOPPrivs[dataAccAction] === 0)) {
            result[dataAccAction] = 0;
        }
        // 主状态权限
        if (mainSateOPPrivs && (Object.keys(mainSateOPPrivs).length > 0) && mainSateOPPrivs.hasOwnProperty(dataAccAction)) {
            result[dataAccAction] = result[dataAccAction] && mainSateOPPrivs[dataAccAction];
        }
        // 实体级权限
        if (key && !this.getDEAuth(context, key, dataAccAction, param)) {
            result[dataAccAction] = 0;
        }
        return result;
    }

    /**
     * 获取应用权限
     *
     * @param {string | undefined} dataAccAction 操作标识
     * @param {('RESOURCE'|'RT'|'MINIX')} [mode='RESOURCE'] RT(RT模式),RESOURCE(资源模式),MINIX(混合模式),默认值RESOURCE
     * @return {*}  {boolean}
     * @memberof AppAuthServiceBase
     */
    public getAppAuth(dataAccAction: string | undefined, mode: 'RESOURCE' | 'RT' | 'MINIX' = 'RESOURCE'): boolean {
        if (!this.getEnablePermission() || !dataAccAction) {
            return true;
        }
        const computeAuth = (authData: string[]) => {
            if (!authData || (authData.length == 0)) {
                return false;
            }
            const index = authData.findIndex((item: string) => {
                return item === dataAccAction;
            })
            if (index === -1) {
                return false;
            } else {
                return true;
            }
        }
        // 统一资源数据
        const resourceData: string[] = this.getAppData().unires;
        // 菜单数据
        const menuData: string[] = this.getAppData().appmenu;
        // 资源模式
        if (Object.is(mode, 'RESOURCE')) {
            return computeAuth(resourceData);
        }
        // RT模式(菜单)
        if (Object.is(mode, 'RT')) {
            return computeAuth(menuData);
        }
        // 混合模式
        if (Object.is(mode, 'MINIX')) {
            return computeAuth(resourceData) && computeAuth(menuData);
        }
        return false;
    }

    /**
     * 获取实体级权限
     *
     * @param {IParam} context 应用上下文
     * @param {string} key 数据主键标识
     * @param {string} dataAccAction 操作标识
     * @param {IParam} [param] 额外参数
     * @return {*}  {boolean}
     * @memberof AppAuthServiceBase
     */
    public getDEAuth(context: IParam, key: string, dataAccAction: string, param?: IParam): boolean {
        // TODO 暂未实现
        return true;
    }

    /**
     * 通过租户获取组织数据
     *
     * @static
     * @param {IParam} hooks 应用钩子
     * @return {*}  {Promise<boolean>}
     * @memberof AppAuthServiceBase
     */
    public async getOrgsByDcsystem(hooks: IParam): Promise<boolean> {
        try {
            let tempViewParam = this.hanldeViewParam(window.location.href);
            if (!tempViewParam.srfdcsystem) {
                if (!tempViewParam.redirect) {
                    if (getSessionStorage('dcsystem')) {
                        tempViewParam = getSessionStorage('dcsystem');
                    }
                } else {
                    tempViewParam = this.hanldeViewParam(tempViewParam.redirect);
                }
            }
            if (!tempViewParam.srfdcsystem && App.getEnvironmentParam().mockDcSystemId) {
                Object.assign(tempViewParam, { srfdcsystem: App.getEnvironmentParam().mockDcSystemId });
            }
            if (tempViewParam.srfdcsystem) {
                hooks.dcSystemBefore.callSync({ dcsystem: tempViewParam.srfdcsystem });
                setSessionStorage('dcsystem', tempViewParam);
                let requestUrl: string = `/uaa/getbydcsystem/${tempViewParam.srfdcsystem}`;
                const response: any = await Http.getInstance().get(requestUrl);
                if (response && response.status === 200) {
                    let { data }: { data: any } = response;
                    hooks.dcSystemAfter.callSync({ dcsystem: tempViewParam.srfdcsystem, data: data });
                    if (data && data.length > 0) {
                        setSessionStorage('orgsData', data);
                        setSessionStorage('activeOrgData', data[0]);
                    }
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    }

    /**
     * @description 登录
     *
     * @memberof AppAuthServiceBase
     */
    public async login(opts: IParam): Promise<IParam> {
        try {
            this.clearAppData();
            const result: IParam = await Http.getInstance().post('/v7/login', opts, true);
            const { status, data } = result;
            if (status == 200) {
                if (data && data.token) {
                    setCookie('ibzuaa-token', data.token, 7, true);
                }
                if (data && data.user) {
                    setCookie('ibzuaa-user', JSON.stringify(data.user), 7, true);
                }
                setCookie('loginname', opts.loginname, 7, true);
                return result;
            } else {
                return result;
            }
        } catch (error: any) {
            return error;
        }
    }

    /**
     * 登出
     *
     * @return {*}  {Promise<IParam>}
     * @memberof AppAuthServiceBase
     */
    public async logout(): Promise<IParam> {
        try {
            const result: IParam = await Http.getInstance().get('/v7/logout');
            const { status, data } = result;
            if (status === 200) {
                this.clearAppData();
                return result;
            } else {
                return result;
            }
        } catch (error: any) {
            return error;
        }

    }

    /**
     * 清除应用级数据
     *
     * @memberof AppAuthServiceBase
     */
    public clearAppData() {
        // 清除登录信息
        clearCookie('ibzuaa-token', true);
        clearCookie('ibzuaa-user', true);
        clearCookie('loginname', true);
        // 清除应用级数据
        this.setAppData();
        // 清除租户相关信息
        removeSessionStorage('dcsystem');
        removeSessionStorage('orgsData');
        removeSessionStorage('activeOrgData');
    }

    /**
     * 处理路径数据
     *
     * @param {string} urlStr 路径
     * @return {*}  {*}
     * @memberof AppAuthServiceBase
     */
    public hanldeViewParam(urlStr: string): any {
        let tempViewParam: any = {};
        const tempViewparam: any = urlStr.slice(urlStr.indexOf('?') + 1);
        const viewparamArray: Array<string> = decodeURIComponent(tempViewparam).split(';');
        if (viewparamArray.length > 0) {
            viewparamArray.forEach((item: any) => {
                Object.assign(tempViewParam, qs.parse(item));
            });
        }
        return tempViewParam;
    }

    /**
     * 处理统一资源与系统操作标识映射
     *
     * @return {IParam} 
     * @memberof AppAuthServiceBase
     */
    public handleSysOPPrivs() {
        let copySysOPPrivs: IParam = JSON.parse(JSON.stringify(this.sysOPPrivs));
        if (Object.keys(copySysOPPrivs).length === 0) return {};
        Object.keys(copySysOPPrivs).forEach((name: any) => {
            if (this.sysOPPrivsMap.get(name)) {
                copySysOPPrivs[name] = this.getAppAuth(this.sysOPPrivsMap.get(name)) ? 1 : 0;
            }
        })
        return copySysOPPrivs;
    }

}