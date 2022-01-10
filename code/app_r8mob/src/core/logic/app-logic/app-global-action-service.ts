import { IContext, IParam, ViewUtil } from "@core";


/**
 * 全局界面行为服务
 *
 * @export
 * @class AppGlobalActionService
 */
export class AppGlobalActionService {

    /**
     * 单例变量声明
     *
     * @private
     * @static
     * @type {AppGlobalActionService}
     * @memberof AppGlobalActionService
     */
    private static AppGlobalActionService: AppGlobalActionService;

    /**
     * 获取 AppGlobalActionService 单例对象
     *
     * @static
     * @returns {AppGlobalActionService}
     * @memberof AppGlobalActionService
     */
    public static getInstance(): AppGlobalActionService {
        if (!AppGlobalActionService.AppGlobalActionService) {
            AppGlobalActionService.AppGlobalActionService = new AppGlobalActionService();
        }
        return this.AppGlobalActionService;
    }

    /**
     * 执行全局界面行为
     *
     * @param {IParam} uiAction
     * @param { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam } params
     * @memberof AppGlobalActionService
     */
    public executeGlobalAction(uiAction: IParam, params: { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam }) {
        const tag = uiAction.uIActionTag;
        switch (tag) {
            case "Edit":
                this.Edit(params);
                break;
            case "New":
                this.New(params);
                break;
            default:
                console.log(`未支持${tag}`);
        }
    }


    /**
     * 编辑
     *
     * @param { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam } params
     * @return {*}
     * @memberof AppGlobalActionService
     */
    public Edit(params: { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam }) {
        const { actionEnvironment } = params
        if (!actionEnvironment?.viewState?.editDataViewName) {
            return;
        }
        const viewName = actionEnvironment?.viewState?.editDataViewName;
        const view = App.getViewInfo(viewName);
        if (!view) {
            return;
        }
        ViewUtil.openData(view, params);
    }

    /**
     * 新建
     *
     * @param { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam } params
     * @return {*}
     * @memberof AppGlobalActionService
     */
    public New(params: { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam }) {
        const { actionEnvironment } = params
        if (!actionEnvironment?.viewState?.openDataViewName) {
            return;
        }
        const viewName = actionEnvironment?.viewState?.openDataViewName;
        const view = App.getViewInfo(viewName);
        if (!view) {
            return;
        }
        ViewUtil.newData(view, params);
    }

}