import { IContext, IParam } from "@core";
/**
 * 前台界面行为
 *
 * @export
 * @class AppFrontAction
 */
export class AppFrontAction {

  /**
   * 执行前台界面行为
   *
   * @static
   * @param {IParam} uiAction 界面行为对象
   * @param { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment:IParam} params { context: 上下文对象, viewParams: 视图参数, data: 当前激活数据, event: 事件源对象, actionEnvironment:操作环境}
   * @memberof AppBackendAction
   */
  public static async execute(uiAction: IParam, params: { context: IContext, viewParams: IParam, data: IParam, event: MouseEvent, actionEnvironment: IParam }) {
    // TODO 前台界面行为
    console.log(uiAction,params);
  }

}
