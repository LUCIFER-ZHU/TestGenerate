import { PortalViewState, IParam, ViewBase, IActionParam } from '@core';

/**
 * @description 应用看板（门户）视图
 * @export
 * @class PortalView
 * @extends {PortalView}
 */
export class PortalView extends ViewBase {
  /**
   * 视图状态
   *
   * @type {PortalViewState}
   * @memberof PortalView
   */
  public declare state: PortalViewState;

  /**
   * 当前视图数据看板
   *
   * @type {IParam}
   * @memberof PortalView
   */
  public declare dashboard: IParam;

  /**
   * @description 处理视图初始化
   *
   * @memberof PortalView
   */
  public useViewInit() {
    // 初始化数据看板引用
    this.dashboard = ref(null);
    const { viewSubject } = this.state;
    onMounted(() => {
      const { viewParams } = this.state;
      viewSubject.next({ tag: this.getDashboard().name, action: "load", data: viewParams });
    })
  }

  /**
   *  获取数据看板部件
   *
   * @return {*}  {*}
   * @memberof PortalView
   */
  public getDashboard(): any {
    if (this.dashboard.value) {
      return this.dashboard.value;
    } else {
      return null;
    }
  }

  /**
   * 处理部件事件
   *
   * @param {IActionParam} actionParam
   * @memberof PortalView
   */  
  public onCtrlEvent(actionParam: IActionParam) {
    const { tag, action, data } = actionParam;
    // TODO
  }

  /**
   * @description 安装视图所有功能模块的方法
   * 
   * @memberof PortalView
   */
  public moduleInstall() {
    const superParams = super.moduleInstall();
    return {
      ...superParams,
      dashboard: this.dashboard
    };
  }

}
