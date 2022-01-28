import { IParam, ViewDetail } from "../common";
import { IAppActionService, IAppAuthService, IAppCodeListService, IAppFuncService, IAppNotificationService, IOpenViewService } from "../service";


/**
 * 应用接口
 *
 * @export
 * @interface IApp
 */
export interface IApp {

    /**
     * 初始化应用
     *
     * @param {IParam} params 应用预置参数
     * @return {*}  {Promise<any>}
     * @memberof IApp
     */
    initApp(params: IParam): Promise<any>;

    /**
     * 获取应用功能服务
     *
     * @return {*}  {IAppFuncService}
     * @memberof IApp
     */
    getAppFuncService(): IAppFuncService;

    /**
     * 获取打开视图服务
     *
     * @return {*}  {IOpenViewService}
     * @memberof IApp
     */
    getOpenViewService(): IOpenViewService;

    /**
     * 获取应用权限服务
     *
     * @return {*}  {IAppAuthService}
     * @memberof IApp
     */
    getAppAuthService(): IAppAuthService;

    /**
     * 获取通知服务
     *
     * @return {*}  {IAppNotificationService}
     * @memberof IApp
     */
    getNotificationService(): IAppNotificationService;

    /**
     * 获取界面行为服务
     *
     * @return {*}  {IAppActionService}
     * @memberof IApp
     */
    getAppActionService(): IAppActionService;

    /**
     * 获取代码表服务
     *
     * @return {*}  {IAppCodeListService}
     * @memberof IApp
     */
    getCodeListService(): IAppCodeListService;

    /**
     * 获取UI服务
     *
     * @param {string} entityKey 应用实体名小写
     * @param {*} context 应用上下文
     * @return {Promise<any>}
     * @memberof IApp
     */
    getUIService(entityKey: string, context?: IParam): Promise<any>;

    /**
     * 获取全局数据服务
     *
     * @param {string} entityKey 应用实体名小写
     * @param {*} context 应用上下文
     * @return {Promise<any>}
     * @memberof IApp
     */
    getDataService(entityKey: string, context?: IParam): Promise<any>;

    /**
     * 获取应用所有功能
     *
     * @return {*}  {IParam[]}
     * @memberof IApp
     */
    getAllFuncs(): IParam[];

    /**
     * 获取指定视图信息
     *
     * @param {string} codeName
     * @return {*}  {(ViewDetail | undefined)}
     * @memberof IApp
     */
    getViewInfo(codeName: string): ViewDetail | undefined;


    /**
     * 获取实体信息
     *
     * @static
     * @param codeName 实体codeName
     * @return {*}
     */
    getEntityInfo(codeName: string): any;

    /**
     * 获取应用数据
     *
     * @return {*}  {IParam}
     * @memberof IApp
     */
    getAppData(): IParam;

    /**
     *  设置应用数据
     *
     * @param {IParam} opt
     * @memberof IApp
     */
    setAppData(opt: IParam): void;

    /**
     * @description 跳转登录页
     *
     * @memberof IApp
     */
    gotoLoginPage(): void;

}