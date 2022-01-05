import { IParam, ViewDetail } from "../common";
import { IAppFuncService, IOpenViewService } from "../logic";


/**
 * 应用接口
 *
 * @export
 * @interface IApp
 */
export interface IApp {

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
     * @return {*}  {AppFuncService}
     * @memberof IApp
     */
    getAppFuncService(): IAppFuncService;

    /**
     * 获取打开视图服务
     *
     * @return {*}  {IParam}
     * @memberof IApp
     */
    getOpenViewService(): IOpenViewService;

    /**
     * 获取指定视图信息
     *
     * @param {string} codeName
     * @return {*}  {(ViewDetail | undefined)}
     * @memberof IApp
     */
    getViewInfo(codeName: string): ViewDetail | undefined

}