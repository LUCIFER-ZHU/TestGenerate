import { ViewBase, MainViewProps, MainViewState, IActionParam, IParam, AppUIAction } from '@core';

/**
 * 实体部件
 * @export
 * @class ViewBase
 */
export class MainView extends ViewBase {
  /**
   * 视图状态数据
   */
  public declare viewState: MainViewState;

  /**
   * 当前视图具有数据能力部件
   *
   * @type {IParam}
   * @memberof MainView
   */
  public declare xDataControl: IParam;

  /**
   * 根据props调整设置部件state
   * @param props 传入的Props
   */
  public setState(props: MainViewProps) {
    super.setState(props);
    this.xDataControl = ref(null);
  }

  /**
   * 打开编辑视图功能模块
   * @todo
   * @param props
   */
  public useOpenData(props: MainViewProps) { }

  /**
   * 打开新建视图功能模块
   * @todo
   * @param props
   */
  public useNewData(props: MainViewProps) { }

  /**
   * @description 处理工具栏事件
   * @param {IActionParam} actionParam
   * @memberof MainView
   */
  public handleToolbarEvent(actionParam: IActionParam) {
    const { tag, action, data } = actionParam;
    if (!tag || !action || !data) {
      console.warn("工具栏执行参数不足");
      return;
    }
    const { xDataControlName, uIAction } = data;
    if (!xDataControlName || !uIAction) {
      console.warn("工具栏执行参数不足");
      return;
    }
    // 准备参数
    const inputParam = {
      context: this.viewState.context,
      viewParams: this.viewState.viewParams,
      data: this.xDataControl?.value?.data,
      event: data.event,
      actionEnvironment: this
    };
    // 执行行为
    AppUIAction.execute(uIAction, inputParam);
  }

  public handleCtrlEvent(actionParam: IActionParam) {
    const { tag, action, data } = actionParam;
    // TODO
    console.log(tag, action, data);
  }

  /**
   * 安装部件所有功能模块的方法
   * @param props 传入的Props
   * @param [emit] 事件
   */
  public moduleInstall(props: MainViewProps, emit?: Function) {
    const superParams = super.moduleInstall(props, emit);
    const handleToolbarEvent = this.handleToolbarEvent.bind(this);
    this.handleToolbarEvent = (actionParam: IActionParam) => {
      handleToolbarEvent(actionParam)
    }
    return {
      ...superParams,
      state: this.viewState,
      xDataControl: this.xDataControl,
      handleToolbarEvent: this.handleToolbarEvent.bind(this),
      handleCtrlEvent: this.handleCtrlEvent.bind(this),
    };
  }
}
