/**
 * 界面服务基类
 *
 * @export
 * @class UIServiceBase
 */
export class UIServiceBase {
  /**
   * 执行界面行为统一入口
   *
   * @param {string} uIActionTag 界面行为tag
   * @param {any[]} args 当前数据
   * @param {any} context 行为附加上下文
   * @param {*} [params] 附加参数
   * @param {*} [$event] 事件源
   * @param {*} [xData]  执行行为所需当前部件
   * @param {*} [actionContext]  执行行为上下文
   * @param {*} [srfParentDeName] 父实体名称
   *
   * @memberof UIServiceBase
   */
  protected async excuteAction(
    uIActionTag: string,
    args: any[],
    context: any = {},
    params: any = {},
    $event?: any,
    xData?: any,
    actionContext?: any,
    srfParentDeName?: string,
  ) {
     // TODO 执行UI服务
  }
}
