import qs from "qs";
import { clearCookie, getCookie, setCookie } from "qx-util";
import { deepCopy, getSessionStorage, Http, IAppAuthService, IParam, removeSessionStorage, setSessionStorage } from "@core";
import { Environment } from "@/environments/environment";

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
     * 初始化应用权限
     *
     * @param {IParam} params 应用预置参数
     * @return {*}  {Promise<any>}
     * @memberof AppAuthServiceBase
     */
    public async initAppAuth(params: IParam, hooks: IParam): Promise<any> {
        let result = true;
        if (Environment && Environment.SaaSMode) {
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
            if (!tempViewParam.srfdcsystem && Environment.mockDcSystemId) {
                Object.assign(tempViewParam, { srfdcsystem: Environment.mockDcSystemId });
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

}