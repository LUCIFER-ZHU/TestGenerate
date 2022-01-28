import { SyncSeriesHook } from "qx-util";
import { Environment } from "@/environments/environment";
import router from "@/router";
import { AppBase, IParam, ViewDetail, IApp, IOpenViewService, deepCopy, Http, IAppAuthService, IAppNotificationService, IAppFuncService, IAppActionService, IAppCodeListService } from "@core";
import { AppFuncConfig, AppViewConfig, AppEntityConfig } from './config';
import { DataServiceRegister, UIServiceRegister } from "./register";
import { AppActionService, AppAuthService, AppCodeListService, AppFuncService, AppNotificationService, OpenViewService } from "@/service";

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
     * 初始化应用
     *
     * @param {IParam} params 应用预置参数
     * @return {*}  {Promise<any>}
     * @memberof App
     */
    public async initApp(params: IParam): Promise<any> {
        return await this.getAppAuthService().initAppAuth(params, App.hooks);
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
     * 获取应用权限服务
     *
     * @return {*}  {IAppAuthService}
     * @memberof App
     */
    public getAppAuthService(): IAppAuthService {
        return AppAuthService.getInstance();
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
     * 获取通知服务
     *
     * @return {*}  {IAppNotificationService}
     * @memberof App
     */
    public getNotificationService(): IAppNotificationService {
        return AppNotificationService.getInstance();
    }

    /**
     * 获取应用功能服务
     *
     * @return {IAppFuncService}
     * @memberof App
     */
    public getAppFuncService(): IAppFuncService {
        return AppFuncService.getInstance();
    }

    /**
     * 获取界面行为服务
     *
     * @return {*}  {IAppActionService}
     * @memberof App
     */
    public getAppActionService(): IAppActionService {
        return AppActionService.getInstance();
    }

    /**
     * 获取代码表服务
     *
     * @return {*}  {IAppCodeListService}
     * @memberof App
     */
    public getCodeListService(): IAppCodeListService {
        return AppCodeListService.getInstance();
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

}