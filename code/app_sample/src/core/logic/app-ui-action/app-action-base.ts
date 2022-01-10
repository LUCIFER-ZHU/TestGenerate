import { IContext, IParam } from "@core";
import { AppUIAction } from ".";
export interface ActionParams {

    /**
     * 行为上下文
     *
     * @type {IParam}
     * @memberof ActionParams
     */
    context: IParam,

    /**
     * 行为视图参数
     *
     * @type {IParam}
     * @memberof ActionParams
     */
    viewParams: IParam,

    /**
     * 行为数据
     *
     * @type {IParam}
     * @memberof ActionParams
     */
    data: any
}

export interface UIActionResult {
    /**
     * 是否成功
     *
     * @type {*}
     * @memberof UIActionResult
     */
    ok: boolean;

    /**
     * 返回数据对象
     *
     * @type {*}
     * @memberof UIActionResult
     */
    result: any;
}
/**
 * 前台界面行为
 *
 * @export
 * @class AppFrontAction
 */
export class AppActionBase {

    /**
     * 获取界面服务
     *
     * @static
     * @param {IParam} actionEnvironment
     * @return {*}
     * @memberof AppActionBase
     */
    public static async getUIService(actionEnvironment: IParam) {
        const entityName = actionEnvironment?.viewState?.appEntityName;
        if (!entityName) {
            console.log("实体名称不存在");
            return;
        }
        const UIService = await App.getUIService(entityName.toLowerCase());
        if (!UIService) {
            console.log("界面服务不存在");
            return
        }
        return UIService;
    }

    /**
     * 根据数据目标处理行为参数
     *
     * @param {string} ActionTarget
     * @param { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam } params
     * @memberof AppFrontAction
     */
    public static handleActionTarget(ActionTarget: string, params: { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam }): IParam {
        // todo
        return {};
    }

    /**
     * 处理行为参数 导航参数
     *
     * @static
     * @param {IParam} uiAction
     * @param { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam } params
     * @memberof AppFrontAction
     */
    public static handleActionParam(uiAction: IParam, params: { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam }, data: IParam): ActionParams {
        // todo
        return { context: {}, viewParams: {}, data: {} };
    }

    /**
     * 执行界面逻辑
     *
     * @static
     * @param {IParam} uiAction
     * @param { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam } params
     * @memberof AppFrontAction
     */
    public static async executeUILogic(uiAction: IParam, params: { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam }) {
        // todo
    }

    /**
     * 执行后附加操作
     *
     * @static
     * @param {IParam} uiAction
     * @param { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam } params
     * @memberof AppFrontAction
     */
    public static async afterAction(uiAction: IParam, params: { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam }, data: IParam) {
        const { actionEnvironment } = params;
        // 刷新视图
        if (uiAction.reloadData && actionEnvironment && actionEnvironment.refresh && actionEnvironment.refresh instanceof Function) {
            actionEnvironment.refresh(data);
        }
        // 关闭视图
        if (uiAction.closeEditView) {
            actionEnvironment.closeView(null);
        }
        // 执行界面逻辑
        if (Object.is(uiAction?.uILogicAttachMode, 'AFTER')) {
            this.executeUILogic(uiAction, params);
        }
        // 后续界面行为
        if (!uiAction.nextActionCodeName) {
            return;
        }
        const UIService = await this.getUIService(actionEnvironment);
        if (!UIService.getUIActionModel || !(UIService.getUIActionModel instanceof Function)) {
            return;
        }
        const actionModel = UIService.getUIActionModel(uiAction.nextActionCodeName);
        if (!actionModel) {
            console.log("后续行为Model获取失败");
            return;
        }
        //  参数合并 todo
        AppUIAction.execute(actionModel, params);
    }

    /**
     * 执行界面行为
     *
     * @static
     * @param {IParam} uiAction 界面行为对象
     * @param { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment:IParam} params { context: 上下文对象, viewParams: 视图参数, data: 当前激活数据, event: 事件源对象, actionEnvironment:操作环境}
     * @memberof AppBackendAction
     */
    public static async execute(uiAction: IParam, params: { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam }) {
        const { actionEnvironment } = params;
        const UIService = await this.getUIService(actionEnvironment);
        const actionName = uiAction.codeName;
        if (UIService[actionName] && typeof UIService[actionName] === 'function') {
            UIService[actionName](params);
        }
    }
}