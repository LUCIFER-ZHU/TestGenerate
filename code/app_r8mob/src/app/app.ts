import { OpenViewService } from "@/utils";
import { AppBase, IParam, ViewDetail, IApp, IOpenViewService, deepCopy } from "@core";
import { AppFuncConfig } from './app-func-config';
import { AppViewConfig } from './app-view-config';

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
     * 获取视图信息
     *
     * @static
     * @param codeName 视图codeName
     * @return {*}  
     */
    public getViewInfo(codeName: string): ViewDetail | undefined {
        return AppViewConfig[codeName] ? (deepCopy(AppViewConfig[codeName]) as ViewDetail) : undefined;;
    }

}