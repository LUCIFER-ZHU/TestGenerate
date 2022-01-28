import { IActionParam, MainControl } from '@core';
import { DashboardControlProps } from './dashboard-control-prop';
import { DashboardControlState } from './dashboard-control-state';

/**
 * @description 选择视图面板部件
 * @export
 * @class DashboardControl
 * @extends {MainControl}
 */
export class DashboardControl extends MainControl {

  /**
   * @description 部件状态
   * @type {DashboardControlState}
   * @memberof DashboardControl
   */
  public declare state: DashboardControlState;

  /**
   * @description 
   * @param {DashboardControlProps} props
   * @memberof DashboardControl
   */
  public useLoad(props: DashboardControlProps) {
    const { viewSubject, controlName, context, viewParams } = this.state;
    // 订阅viewSubject,监听load行为
    if (viewSubject) {
      let subscription = viewSubject.subscribe(({ tag, action, data }: IActionParam) => {
        if (Object.is(controlName, tag) && Object.is("load", action)) {
          viewSubject.next({ tag: tag, action: "load", data: data });
        }
      })
      // 部件卸载时退订viewSubject
      onUnmounted(() => {
        subscription.unsubscribe();
      })
    }
  }

  /**
   * 处理部件事件
   *
   * @param {IActionParam} actionParam
   * @memberof PortletControl
   */
  public onCtrlEvent(actionParam: IActionParam) {
    const { tag, action, data } = actionParam;
    const { controlName } = this.state;     
  }

  /**
   * @description 安装部件所有功能模块的方法
   * @return {*} 
   * @memberof DashboardControl
   */
  public moduleInstall() {
    const superParams = super.moduleInstall();
    return {
      ...superParams,
      load:this.useLoad.bind(this),
      onCtrlEvent: this.onCtrlEvent.bind(this),      
    };
  }
}