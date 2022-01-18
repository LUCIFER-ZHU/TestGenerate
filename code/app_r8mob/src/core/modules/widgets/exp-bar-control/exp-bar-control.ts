import { IActionParam, MainControl } from "@core";
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
  public declare controlState: ExpBarControlState;

  /**
   * @description 处理部件事件
   * @param {IActionParam} actionParam
   * @memberof ExpBarControl
   */
  public handleCtrlEvent(actionParam: IActionParam) {
    const { tag, action, data } = actionParam;
    const { selection } = this.controlState;
    switch (action) {
      case 'selectionchange':
        this.onSelectionChange(data);
        break;
    }
  }

  protected onSelectionChange(data: any[]) {
    console.log("处理选中事件", data);
  }

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

  public calcNavigationToolbarState() {
    let _this: any = this;
    if (_this.toolbarModels) {
      // ViewTool.calcActionItemAuthState({}, this.toolbarModels, this.appUIService);
    }
  }

  /**
  * @description 安装部件所有功能模块的方法
  * @param {ExpBarControlProps} props 传入的Props
  * @param {Function} [emit]
  * @return {*}
  * @memberof ExpBarControl [emit] 事件
  */
  public moduleInstall(props: ExpBarControlProps, emit?: Function) {
    const superParams = super.moduleInstall(props, emit);
    return {
      ...superParams,
      state: this.controlState,
      handleCtrlEvent: this.handleCtrlEvent.bind(this)
    };
  }
}