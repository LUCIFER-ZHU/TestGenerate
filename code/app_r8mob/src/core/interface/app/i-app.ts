import { IParam, ViewDetail } from "../common";
import { IAppFuncService, IDataServiceRegister, IOpenViewService, IUIServiceRegister } from "../service";


/**
 * 应用接口
 *
 * @export
 * @interface IApp
 */
export interface IApp {

    /**
     * 初始化应用权限
     *
     * @param {IParam} params 应用预置参数
     * @return {*}  {Promise<any>}
     * @memberof IApp
     */
    initAppAuth(params: IParam): Promise<any>;

    /**
     * 获取应用所有功能
     *
     * @return {*}  {IParam[]}
     * @memberof IApp
     */
    getAllFuncs(): IParam[];

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
     * 获取指定视图信息
     *
     * @param {string} codeName
     * @return {*}  {(ViewDetail | undefined)}
     * @memberof IApp
     */
    getViewInfo(codeName: string): ViewDetail | undefined;

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
    setAppData(opt:IParam): void;

}