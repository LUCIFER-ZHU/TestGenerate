import { SyncSeriesHook } from "qx-util";
import { Environment } from "@/environments/environment";
import router from "@/router";
import { OpenViewService } from "@/utils";
import { AppBase, IParam, ViewDetail, IApp, IOpenViewService, deepCopy, getSessionStorage, Http, AppUtil } from "@core";
import { AppFuncConfig, AppViewConfig, AppEntityConfig } from './config';
import { DataServiceRegister, UIServiceRegister } from "./register";

export class App extends AppBase implements IApp {

    /**
     * 唯一实例
     *
     * @private
     * @static
     * @memberof App
     */
    private static readonly instance = new App();

    /**
     *  HTTP服务类
     *
     * @protected
     * @memberof App
     */
    protected http = Http.getInstance();

    /**
     * 执行钩子(包含获取租户前、获取租户后、获取应用数据前、获取应用数据后)
     *
     * @static
     * @memberof App
     */
    public static hooks = {
        dcSystemBefore: new SyncSeriesHook<[], { dcsystem: string }>(),
        dcSystemAfter: new SyncSeriesHook<[], { dcsystem: string, data: any }>(),
        appBefore: new SyncSeriesHook<[], { url: string, param: any }>(),
        appAfter: new SyncSeriesHook<[], { data: any }>()
    };

    /**
     * 获取唯一实例
     *
     * @static
     * @return {*}  {App}
     * @memberof App
     */
    public static getInstance(): App {
        return App.instance;
    }

    /**
     * 初始化应用权限
     *
     * @param {IParam} params 应用预置参数
     * @return {*}  {Promise<any>}
     * @memberof App
     */
    public async initAppAuth(params: IParam): Promise<any> {
        let result = true;
        if (Environment && Environment.SaaSMode) {
            if (getSessionStorage('activeOrgData')) {
                result = await AppUtil.getAppData(App.hooks, params);
            } else {
                result = await AppUtil.getOrgsByDcsystem(App.hooks);
                if (result) {
                    result = await AppUtil.getAppData(App.hooks, params);
                }
            }
        } else {
            result = await AppUtil.getAppData(App.hooks, params);
        }
        if (!result) {
            // 登录
        }
        // TODO
        return true;
    }

    /**
     * 获取所有应用功能
     *
     * @return {*}  {IParam[]}
     * @memberof App
     */
    public getAllFuncs(): IParam[] {
        return AppFuncConfig;
    }

    /**
     * 获取打开视图服务
     *
     * @return {*}  {IOpenViewService}
     * @memberof App
     */
    public getOpenViewService(): IOpenViewService {
        return OpenViewService.getInstance();
    }

    /**
     * 获取UI服务
     *
     * @param {string} entityKey 应用实体名小写
     * @param {*} context 应用上下文
     * @return {Promise<any>}
     * @memberof App
     */
    public getUIService(entityKey: string, context?: IParam): Promise<any> {
        return UIServiceRegister.getInstance().getService(entityKey, context);
    }

    /**
     * 获取数据服务
     *
     * @param {string} entityKey 应用实体名小写
     * @param {*} context 应用上下文
     * @return {Promise<any>}
     * @memberof App
     */
    public getDataService(entityKey: string, context?: IParam): Promise<any> {
        return DataServiceRegister.getInstance().getService(entityKey, context);
    }

    /**
     * 获取视图信息
     *
     * @param codeName 视图codeName
     * @return {*}
     */
    public getViewInfo(codeName: string): ViewDetail | undefined {
        return AppViewConfig[codeName] ? (deepCopy(AppViewConfig[codeName]) as ViewDetail) : undefined;;
    }

    /**
     * 获取实体信息
     *
     * @param codeName 实体codeName
     * @return {*}
     */
    public getEntityInfo(codeName: string): any {
        return AppEntityConfig[codeName] ? deepCopy(AppEntityConfig[codeName]) : undefined;
    }

    /**
     * @description 跳转登录页
     *
     * @memberof App
     */
    gotoLoginPage(): void {
        const currentRoute = unref(router.currentRoute);
        if (Environment.loginUrl) {
            window.location.href = `${Environment.loginUrl}?redirect=${window.location.href}`;
        } else {
            if (Object.is(currentRoute.name, 'login')) {
                return;
            }
            router.push({ name: 'login', query: { redirect: window.location.hash.replace("#", '') } });
        }
    }

    /**
     * @description 登录
     *
     * @return {*}  {Promise<IParam>}
     * @memberof App
     */
    handleLogin(): Promise<IParam> {
        throw new Error("Method not implemented.");
    }

}