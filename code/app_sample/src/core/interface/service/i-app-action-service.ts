import { IContext, IParam } from "../common";

/**
 * @description 界面行为服务
 * @export
 * @interface IAppActionService
 */
export interface IAppActionService {

    /**
     * 执行界面行为
     *
     * @param uiAction 界面行为信息
     * @param params 运行参数 { context: 上下文对象, viewParams: 视图参数, data: 当前激活数据, event: 事件源对象, actionEnvironment:操作环境}
     * @memberof IAppActionService
     */
    execute(uiAction: IParam, params: { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam }): void;

}