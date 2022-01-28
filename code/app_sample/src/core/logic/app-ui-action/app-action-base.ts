import { IContext, IParam, UIActionUtil } from "@core";
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
        const entityName = actionEnvironment?.state?.appEntityCodeName;
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
     * @param {string} action
     * @param { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam } params
     * @memberof AppFrontAction
     */
    public static handleActionTarget(action: IParam, params: { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam }): ActionParams {
        const { actionTarget, entityCodeName } = action;
        const { data } = params;
        //  数据目标值
        let resultData: ActionParams = {
            context: {},
            viewParams: {},
            data: {}
        };
        switch (actionTarget) {
            case 'SINGLEKEY':
            case 'MULTIKEY':
                //  多数据主键和单数据主键，合并实体的主键参数和主信息参数 到上下文 后续统一合并进数据目标值
                if (!entityCodeName) {
                    console.log("实体名称不存在");
                    break;
                }
                const entity = App.getEntityInfo(entityCodeName);
                if (!entity) {
                    console.log("实体不存在");
                    break;
                }
                const entityName = entityCodeName.toLowerCase();
                const keyField = entity.keyField.toLowerCase();
                const majorField = entity.majorField.toLowerCase();
                if (data?.[0]?.[keyField]) {
                    Object.assign(resultData.context, { [entityName]: `%${keyField}%` });
                } else {
                    Object.assign(resultData.context, { [entityName]: `%${entityName}%` });
                }
                Object.assign(resultData.viewParams, { [keyField]: `%${keyField}%` });
                Object.assign(resultData.viewParams, { [majorField]: `%${majorField}%` });
                break;
            case 'SINGLEDATA':
                resultData.data = data?.[0]?data?.[0]:{};
                break;
        }
        return resultData;
    }

    /**
     * 处理行为参数 导航参数
     *
     * @static
     * @param {IParam} uiAction
     * @param { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam } params
     * @memberof AppFrontAction
     */
    public static handleActionParam(uiAction: IParam, params: { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam }, data: ActionParams): ActionParams {
        const { navContexts, navParams, actionTarget } = uiAction;
        const { viewParams, context, data: _data } = params;
        const { context: tempContext, viewParams: tempViewParams, } = data;
        let { data: resultData } = data;
        // 合并导航参数和导航上下文至数据目标处理后的参数
        Object.assign(tempContext, navContexts);
        Object.assign(tempViewParams, navParams);
        //  根据上下文和导航参数，解析参数
        const _context = UIActionUtil.formatDataActionData(actionTarget, _data, context, viewParams, tempContext);
        const _viewParams = UIActionUtil.formatDataActionData(actionTarget, _data, context, viewParams, tempViewParams);
        if (Object.is(actionTarget, 'SINGLEDATA')) {
            Object.assign(resultData, _viewParams);
        } else {
            resultData = _viewParams;
        }
        // 多项数据主键转换数据
        if (Object.is(actionTarget, 'MULTIKEY')) {
            let tempDataArray: Array<any> = [];
            if (_data.length > 1 && Object.keys(data).length > 0) {
                for (let i = 0; i < _data.length; i++) {
                    let tempObject: any = {};
                    Object.keys(resultData).forEach((key: string) => {
                        Object.assign(tempObject, { [key]: resultData[key].split(',')[i] });
                    });
                    tempDataArray.push(tempObject);
                }
            } else {
                tempDataArray.push(data);
            }
            resultData = tempDataArray;
        }
        return { context: _context, viewParams: _viewParams, data: resultData };
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
        App.getAppActionService().execute(actionModel, params);
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