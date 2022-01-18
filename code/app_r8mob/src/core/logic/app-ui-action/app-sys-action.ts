import { IContext, IParam, ViewUtil } from "@core";

/**
 * 系统预置界面行为
 *
 * @export
 * @class AppSysAction
 */
export class AppSysAction {

    /**
     * 执行预置界面行为
     *
     * @static
     * @param {IParam} uiAction 界面行为对象
     * @param { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment:IParam} params { context: 上下文对象, viewParams: 视图参数, data: 当前激活数据, event: 事件源对象, actionEnvironment:操作环境}
     * @memberof AppSysAction
     */
    public static async execute(uiAction: IParam, params: { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam }) {
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
     * @memberof AppSysAction
     */
    public static Edit(params: { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam }) {
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
    public static New(params: { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam }) {
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
