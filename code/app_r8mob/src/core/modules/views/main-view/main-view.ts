import { ViewBase, MainViewState, IActionParam, IParam } from '@core';

/**
 * 实体视图
 * @export
 * @class ViewBase
 */
export class MainView extends ViewBase {

  /**
   *  视图状态数据
   *
   * @type {MainViewState}
   * @memberof MainView
   */
  public declare state: MainViewState;

  /**
   * @description 处理工具栏事件
   * 
   * @param {IActionParam} actionParam
   * @memberof MainView
   */
  public onToolbarEvent(actionParam: IActionParam) {
    const { data } = actionParam;
    if (!data) {
      console.warn("工具栏执行参数不足");
      return;
    }
    const { uIAction } = data;
    if (!uIAction) {
      console.warn("工具栏执行参数不足");
      return;
    }
    // 准备参数
    const inputParam = {
      context: this.state.context,
      viewParams: this.state.viewParams,
      data: this.xDataControl?.getData(),
      event: data.event,
      actionEnvironment: this
    };
    // 执行行为
    App.getAppActionService().execute(uIAction, inputParam);
  }

  /**
   * @description 安装视图所有功能模块的方法
   * 
   * @memberof MainView
   */
  public moduleInstall() {
    const superParams = super.moduleInstall();
    return {
      ...superParams,
      xDataControl: this.xDataControl,
      onToolbarEvent: this.onToolbarEvent.bind(this),
    };
  }
}
