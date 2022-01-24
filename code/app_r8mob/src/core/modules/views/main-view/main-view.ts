import { ViewBase, MainViewState, IActionParam, IParam, AppActionService } from '@core';

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
   * 当前视图具有数据能力部件
   *
   * @type {IParam}
   * @memberof MainView
   */
  public declare xDataControl: IParam;

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
      data: this.xDataControl?.getData?.(),
      event: data.event,
      actionEnvironment: this
    };
    // 执行行为
    AppActionService.getInstance().execute(uIAction, inputParam);
  }

  /**
   * 处理部件事件
   *
   * @param {IActionParam} actionParam
   * @memberof MainView
   */
  public onCtrlEvent(actionParam: IActionParam) { 
    const { tag, action, data } = actionParam;
    if (Object.is(action, 'closeView')) {
      this.closeView();
    }
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
      onCtrlEvent: this.onCtrlEvent.bind(this),
    };
  }
}
