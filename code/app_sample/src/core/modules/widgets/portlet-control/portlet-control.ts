import { IActionParam, MainControl } from '@core';
import { PortletControlProps } from './portlet-control-prop';
import { PortletControlState } from './portlet-control-state';

/**
 * @description 门户部件
 * @export
 * @class PortletControl
 * @extends {MainControl}
 */
export class PortletControl extends MainControl {

  /**
   * @description 部件状态
   * @type {PortletControlState}
   * @memberof PortletControl
   */
  public declare state: PortletControlState;

  /**
   * @description 加载
   * @param {PortletControlProps} props
   * @memberof PortletControl
   */
  public useLoad(props: PortletControlProps) {
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
   * 处理视图事件
   *
   * @param {IActionParam} actionParam
   * @memberof PortletControl
   */
  public onViewEvent(actionParam: IActionParam) {
    const { tag, action, data } = actionParam;
    const { controlName } = this.state;
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
   * 操作栏触发界面行为
   *
   * @memberof PortletControl
   */
  public handleItemClick(actionParam: any): void {
    const { data: uIAction} = actionParam;
    if (!uIAction) {
      console.warn("执行参数不足");
      return;
    }
    // 准备参数
    const inputParam = {
      context: this.state.context,
      viewParams: this.state.viewParams,
      data: [],
      event: actionParam.event,
      actionEnvironment: this
    };
    // 执行行为
    App.getAppActionService().execute(uIAction, inputParam);

  }

  /**
   * 界面行为组触发界面行为
   *
   * @memberof PortletControl
   */  
  public handleActionClick(item:any,event:any):void {
    const uIAction = item ;
    if (!uIAction) {
      console.warn("执行参数不足");
      return;
    }
    // 准备参数
    const inputParam = {
      context: this.state.context,
      viewParams: this.state.viewParams,
      data: [],
      event: event,
      actionEnvironment: this
    };
    // 执行行为
    App.getAppActionService().execute(uIAction, inputParam);
  }

  /**
   * @description 安装部件所有功能模块的方法
   * @return {*} 
   * @memberof PortletControl
   */
  public moduleInstall() {
    const superParams = super.moduleInstall();
    return {
      ...superParams,
      load: this.useLoad.bind(this),
      onViewEvent: this.onViewEvent.bind(this),
      onCtrlEvent: this.onCtrlEvent.bind(this),
      handleItemClick: this.handleItemClick.bind(this),
      handleActionClick: this.handleActionClick.bind(this),
    };
  }
}