import { IActionParam } from "@core";
import { PickupView } from "../pickup-view";
import { PickupGridViewProps } from "./pickup-grid-view-prop";
import { PickupGridViewState } from "./pickup-grid-view-state";

/**
 * @description 选择视图
 * @export
 * @class PickupGridView
 * @extends {MainView}
 */
export class PickupGridView extends PickupView {

  /**
   * @description 视图状态
   * @type {PickupGridViewState}
   * @memberof PickupGridView
   */
  public declare state: PickupGridViewState;


  /**
   * @description 使用加载功能模块
   * @param {PickupGridViewProps} props 传入的props
   * @memberof PickupGridView
   */
  public useLoad(props: PickupGridViewProps) {
    const { viewSubject } = this.state;
    onMounted(() => {
      viewSubject.next({ tag: 'grid', action: "load", data: {} })
    })
  }


  /**
   * 部件事件
   *
   * @param {IActionParam} actionParam
   * @memberof PickupGridView
   */
  public handleCtrlEvent(actionParam: IActionParam) {
    const { tag, action, data } = actionParam;
    if (tag !== 'grid') {
      return;
    }
    if (action === 'selectionChange') {
      this.selectData = data;
      this.emit('viewEvent', actionParam)
    }
  }


  /**
   * @description 安装视图所有功能模块的方法
   * @param {PickupGridViewProps} props 传入的Props
   * @param {Function} [emit] [emit] 事件
   * @return {*} 
   * @memberof PickupGridView
   */
  public moduleInstall() {
    const superParams = super.moduleInstall();
    return {
      ...superParams
    };
  }
}