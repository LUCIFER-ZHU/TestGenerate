import { ViewBase, MainViewProps, MainViewState, IActionParam } from '@ibiz-core';

/**
 * 实体部件
 * @export
 * @class ViewBase
 */
export class MainView extends ViewBase {
  /**
   * 部件状态
   */
  public declare viewState: MainViewState;

  /**
   * 根据props调整设置部件state
   * @param props 传入的Props
   */
  public setState(props: MainViewProps) {
    super.setState(props);
    // 只读属性处理：把props的属性的Ref赋给state，以维持响应性。
  }

  /**
   * 打开编辑视图功能模块
   * @todo
   * @param props
   */
  public useOpenData(props: MainViewProps) {}

  /**
   * 打开新建视图功能模块
   * @todo
   * @param props
   */
  public useNewData(props: MainViewProps) {}

   /**
    * @description 处理工具栏事件
    * @param {IActionParam} actionParam
    * @memberof MainView
    */
   public handleToolbarEvent(actionParam: IActionParam) {
    const { tag, action, data } = actionParam;
    //todo
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
      handleToolbarEvent: this.handleToolbarEvent.bind(this),
      handleCtrlEvent: this.handleCtrlEvent.bind(this),
    };
  }
}
