import { ViewBase, MainViewState, IActionParam, IParam, isExistAndNotEmpty } from '@core';

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
   * 视图实体UI服务
   *
   * @type {*}
   * @memberof MainView
   */
  public appUIService: any;

  /**
   * @description 使用视图初始化模块
   * @memberof MainView
   */
  public useViewInit(): void {
    super.useViewInit();
    const { viewSubject, viewCodeName } = this.state;
    if (viewSubject) {
      viewSubject.subscribe(({ tag, action, data }) => {
        if (!tag || tag !== viewCodeName) {
          return;
        }
        if (action === 'viewRefresh') {
          this.refresh(data);
        }
      })
    }
  }

  /**
   * @description 数据部件加载
   * @protected
   * @param {IParam} [data]
   * @memberof MainView
   */
  protected xDataControlLoad(data?: IParam): void { }

  /**
   * @description 视图刷新
   * @protected
   * @param {IParam} [data]
   * @memberof MainView
   */
  protected refresh(data?: IParam): void { }

  /**
   * @description 使用视图刷新模块
   * @return {*} 
   * @memberof MainView
   */
  public useRefresh() {
    const refresh = (data?: IParam) => {
      const { xDataControlName } = this.state;
      if (isExistAndNotEmpty(xDataControlName)) {
        this.xDataControlLoad();
      }
    }
    this.refresh = refresh;
    return refresh;
  }

  /**
   * 设置工具栏项状态
   *
   * @param {boolean} state 初始化状态
   * @param {IParam} data 数据
   * @return {*} 
   * @memberof MainView
   */
  public async setToolbarItemState(state: boolean, data?: IParam) {
    if (!this.state.toolbar) {
      return;
    }
    if (!this.appUIService) {
      await this.useUIService();
    }
    for (const key in this.state.toolbar) {
      // 设置初始化状态
      if (!this.state.toolbar.hasOwnProperty(key)) {
        return;
      }
      const item = this.state.toolbar[key];
      if (item.uIAction && (Object.is(item.uIAction.actionTarget, 'SINGLEKEY') || Object.is(item.uIAction.actionTarget, 'MULTIKEY'))) {
        item.disabled = state;
      }
      item.visible = true;
      if (item.noPrivDisplayMode && Object.is(item.noPrivDisplayMode, '6')) {
        item.visible = false;
      }
      // 设置权限状态
      if (item && item.uIAction && item.uIAction.dataAccessAction) {
        let dataActionResult: any;
        const { actionTarget, uIActionTag, dataAccessAction } = item.uIAction;
        // 不需要数据的界面行为
        if (item.uIAction && (Object.is(actionTarget, "NONE") || !actionTarget)) {
          if (!actionTarget && Object.is(uIActionTag, "Save") && this.appUIService.isEnableDEMainState) {
            if (data && Object.keys(data).length > 0) {
              dataActionResult = this.appUIService.getAllOPPrivs(data, dataAccessAction);
            }
          } else {
            dataActionResult = this.appUIService.getAllOPPrivs(undefined, dataAccessAction);
          }
        } else {
          if (data && Object.keys(data).length > 0 && this.appUIService.isEnableDEMainState) {
            dataActionResult = this.appUIService.getAllOPPrivs(data, dataAccessAction);
          } else {
            dataActionResult = this.appUIService.getAllOPPrivs(undefined, dataAccessAction);
          }
        }
        // 无权限:0;有权限:1
        if (dataActionResult === 0) {
          // 禁用:1;隐藏:2;隐藏且默认隐藏:6
          if (item.noPrivDisplayMode === 1) {
            item.disabled = true;
          }
          if ((item.noPrivDisplayMode === 2) || (item.noPrivDisplayMode === 6)) {
            item.visible = false;
          } else {
            item.visible = true;
          }
        }
        if (dataActionResult === 1) {
          item.visible = true;
          item.visible = false;
        }
      }
    }
  }

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
   * @description 注册UI服务
   *
   * @private
   * @memberof MainView
   */
  private useUIService() {
    const { context, appEntityCodeName } = this.state;
    App.getUIService(appEntityCodeName.toLowerCase(), context).then((service: IParam) => {
      this.appUIService = service;
      this.state.UIService = this.appUIService;
    });
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
      refresh: this.useRefresh(),
      onToolbarEvent: this.onToolbarEvent.bind(this),
    };
  }
}
