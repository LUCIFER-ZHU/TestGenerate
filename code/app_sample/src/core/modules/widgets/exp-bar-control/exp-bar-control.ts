import { IActionParam, IParam, MainControl } from "@core";
import { ExpBarControlProps } from "./exp-bar-control-prop";
import { ExpBarControlState } from "./exp-bar-control-state";

/**
 * @description 导航栏部件
 * @export
 * @class ExpBarControl
 * @extends {MainControl}
 */
export class ExpBarControl extends MainControl {
  /**
   * @description 部件状态
   * @type {ExpBarControlState}
   * @memberof ExpBarControl
   */
  public declare state: ExpBarControlState;

  /**
   * 当前视图表格部件
   *
   * @type {IParam}
   * @memberof GridView
   */
  public declare xData: IParam;

  /**
   * 通知状态
   *
   * @param { tag: string, action: string, data: any } { tag, action, data }
   * @memberof ViewEngine
   */
  public next({ tag, action, data }: { tag: string, action: string, data: any }): void {
    const { viewSubject } = this.props;
    viewSubject.next({ tag: tag, action: action, data: data })
  }

  /**
   * @description 导航部件初始化
   * @protected
   * @memberof ExpBarControl
   */
  protected useExpCtrlInit() {
    this.xData = ref(null);
    onMounted(() => {
      const xDataControl = this.getXDataCtrl();
      if (xDataControl) {
        this.next({ tag: xDataControl.name, action: 'load', data: null });
      }
    })
  }

  /**
   * @description 处理部件事件
   * @param {IActionParam} actionParam
   * @memberof ExpBarControl
   */
  public onCtrlEvent(actionParam: IActionParam) {
    const { tag, action, data } = actionParam;
    const { selection } = this.state;
    switch (action) {
      case 'selectionchange':
        this.onSelectionChange(data);
        break;
    }
  }

  /**
   * @description 处理选中事件
   * @protected
   * @param {any[]} data
   * @memberof ExpBarControl
   */
  protected onSelectionChange(data: any[]) { }

  /**
   * @description 计算工具栏权限
   * @param {boolean} state
   * @memberof ExpBarControl
   */
  public calcToolbarItemState(state: boolean) {
    //  TODO 计算工具栏权限
    // let _this: any = this;
    // const models: any = _this.toolbarModels;
    // if (models && models.length > 0) {
    //   for (const key in models) {
    //     if (!models.hasOwnProperty(key)) {
    //       return;
    //     }
    //     const _item = models[key];
    //     if (_item.uiaction && (Object.is(_item.uiaction.actionTarget, 'SINGLEKEY') || Object.is(_item.uiaction.actionTarget, 'MULTIKEY'))) {
    //       _item.disabled = state;
    //     }
    //     _item.visabled = true;
    //     if (_item.noprivdisplaymode && _item.noprivdisplaymode === 6) {
    //       _item.visabled = false;
    //     }
    //   }
    //   this.calcNavigationToolbarState();
    // }
  }

  /**
   * @description 计算导航栏工具栏权限
   * @memberof ExpBarControl
   */
  public calcNavigationToolbarState() {
    let _this: any = this;
    if (_this.toolbarModels) {
      // ViewTool.calcActionItemAuthState({}, this.toolbarModels, this.appUIService);
    }
  }

  /**
   * @description 获取多数据部件
   * @private
   * @return {*} 
   * @memberof ExpBarControl
   */
  private getXDataCtrl() {
    return unref(this.xData);
  }

  /**
  * @description 安装部件所有功能模块的方法
  * @return {*}
  * @memberof ExpBarControl [emit] 事件
  */
  public moduleInstall() {
    const superParams = super.moduleInstall();
    this.useExpCtrlInit();
    return {
      ...superParams,
      xData: this.xData,
      onCtrlEvent: this.onCtrlEvent.bind(this)
    };
  }
}