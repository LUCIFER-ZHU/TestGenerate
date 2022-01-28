import { IActionParam, IParam, PickupView } from "@core";
import { MainView } from "../main-view";
import { MPickupViewProps } from "./mpickup-view-prop";
import { MPickupViewState } from "./mpickup-view-state";

/**
 * @description 多选视图
 * @export
 * @class MPickupView
 * @extends {PickupView}
 */
export class MPickupView extends PickupView {

  /**
   * @description 视图状态
   * @type {MPickupViewState}
   * @memberof PickupView
   */
  public declare state: MPickupViewState;

  public select: IParam = {};

  public useSelections: any[] = [];

  public onMoveRight() {
    this.useSelections.push(this.selectData);
  }

  public onMoveLeft() {
    const index = this.useSelections.findIndex((selection: any) => Object.is(this.select.srfkey, selection.srfkey));
    if (index !== -1) {
        this.useSelections.splice(index, 1);
    }
  }

  public onAllMoveRight() {
    //todo
  }

  public onAllMoveLeft() {
    this.useSelections = [];
  }

  /**
   * @description 安装视图所有功能模块的方法
   * @return {*} 
   * @memberof PickupView
   */
  public moduleInstall() {
    const superParams = super.moduleInstall();
    return {
      ...superParams,
      useSelections: this.useSelections,
      onMoveRight: this.onMoveRight.bind(this),
      onMoveLeft: this.onMoveLeft.bind(this),
      onAllMoveRight: this.onAllMoveRight.bind(this),
      onAllMoveLeft: this.onAllMoveLeft.bind(this),
    };
  }
}