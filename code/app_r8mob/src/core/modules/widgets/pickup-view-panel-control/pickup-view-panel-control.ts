import { IActionParam, MainControl } from '@core';
import { PickupViewPanelControlProps } from './pickup-view-panel-control-prop';
import { PickupViewPanelControlState } from './pickup-view-panel-control-state';

/**
 * @description 选择视图面板部件
 * @export
 * @class PickupViewPanelControl
 * @extends {MainControl}
 */
export class PickupViewPanelControl extends MainControl {

  /**
   * @description 部件状态
   * @type {FormControlState}
   * @memberof PickupViewPanelControl
   */
  public declare state: PickupViewPanelControlState;

  /**
   * @description 
   * @param {PickupViewPanelControlProps} props
   * @memberof PickupViewPanelControl
   */
  public useLoad(props: PickupViewPanelControlProps) {
    const { viewSubject, controlName, context, viewParams } = this.state;
    // 订阅viewSubject,监听load行为
    if (viewSubject) {
      let subscription = viewSubject.subscribe(({ tag, action, data }: IActionParam) => {
        if (Object.is(controlName, tag) && Object.is("load", action)) {

        }
      })
      // 部件卸载时退订viewSubject
      onUnmounted(() => {
        subscription.unsubscribe();
      })
    }
  }


  /**
   * 部件事件
   *
   * @param {IActionParam} actionParam
   * @memberof PickupViewPanelControl
   */
  public handleViewEvent(actionParam: IActionParam) {
    const { tag, action, data } = actionParam;
    const { controlName } = this.state;
    if (Object.is("selectionChange", action)) {
      this.emit("ctrlEvent", { tag: this.props.name, action: action, data: data });
    }
  }

  /**
   * @description 安装部件所有功能模块的方法
   * @return {*} 
   * @memberof PickupViewPanelControl
   */
  public moduleInstall() {
    const superParams = super.moduleInstall();
    return {
      ...superParams,
      handleViewEvent: this.handleViewEvent.bind(this)
    };
  }
}