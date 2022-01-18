import { hasFunction } from "@core";
import { IParam, IContext, IAppActionService } from "@core/interface";
import { AppSysAction } from "../app-ui-action/app-sys-action";

export class AppActionService implements IAppActionService {

    /**
     * @description 唯一实例
     * @private
     * @static
     * @memberof AppActionService
     */
    private static readonly instance = new AppActionService();

    /**
     * @description 获取唯一实例
     * @static
     * @return {*}  {AppActionService}
     * @memberof AppActionService
     */
    public static getInstance(): AppActionService {
        return AppActionService.instance;
    }

    /**
     * 执行界面行为
     *
     * @param uiAction 界面行为信息
     * @param params 运行参数 { context: 上下文对象, viewParams: 视图参数, data: 当前激活数据, event: 事件源对象, actionEnvironment:操作环境}
     */
    public execute(uiAction: IParam, params: { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam }) {
        const { uIActionTag } = uiAction;
        if (uiAction.uIActionMode == 'SYS') {
            AppSysAction.execute(uiAction, params);
        } else {
            const { actionEnvironment } = params;
            if (actionEnvironment && actionEnvironment.appUIService && hasFunction(actionEnvironment.appUIService, uIActionTag)) {
                actionEnvironment.appUIService[uIActionTag](uiAction, params);
            } else {
                console.warn("非（前台界面行为、后台界面行为、系统预置界面行为）暂未支持");
            }
        }
    }

}