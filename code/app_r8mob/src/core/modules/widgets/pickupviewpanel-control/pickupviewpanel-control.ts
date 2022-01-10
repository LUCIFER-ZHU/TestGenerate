import { Ref, ref } from 'vue';
import { IActionParam, MainControl } from '@core';
import { PickupViewPanelControlProps } from './pickupviewpanel-control-prop';
import { PickupViewPanelControlState } from './pickupviewpanel-control-state';

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
   * @memberof FormControl
   */
  public declare controlState: PickupViewPanelControlState;


  /**
   * @description 根据props设置部件state
   * @param {PickupViewPanelControlProps} props
   * @memberof PickupViewPanelControl
   */
  public setState(props: PickupViewPanelControlProps) {
    super.setState(props);
  }

  /**
   * @description 
   * @param {PickupViewPanelControlProps} props
   * @memberof PickupViewPanelControl
   */
  public useLoad(props: PickupViewPanelControlProps) {
    const { viewSubject, controlName, context, viewParams } = this.controlState;
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
    const { controlName } = this.controlState;
    if (Object.is("selectionChange", action)) {
      this.emit('ctrlEvent', { tag: controlName, action: action, data: data });
    }
  }

  /**
   * @description 安装部件所有功能模块的方法
   * @param {PickupViewPanelControlProps} props 传入的Props
   * @param {Function} [emit]
   * @return {*} 
   * @memberof FormControl [emit] 事件
   */
  public moduleInstall(props: PickupViewPanelControlProps, emit?: Function) {
    const superParams = super.moduleInstall(props, emit);
    return {
      ...superParams,
      handleViewEvent: this.handleViewEvent.bind(this),
      state: this.controlState
    };
  }
}