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
  public declare viewState: PickupGridViewState;

  /**
   * @description 使用加载功能模块
   * @param {PickupGridViewProps} props 传入的props
   * @memberof PickupGridView
   */
  public useLoad(props: PickupGridViewProps) {
    const { viewSubject } = this.viewState;
    onMounted(() => {
      viewSubject.next({ tag: 'grid', action: "load", data: {} })
    })
  }

  /**
   * @description 安装视图所有功能模块的方法
   * @param {PickupGridViewProps} props 传入的Props
   * @param {Function} [emit] [emit] 事件
   * @return {*} 
   * @memberof PickupGridView
   */
  public moduleInstall(props: PickupGridViewProps, emit?: Function) {
    const superParams = super.moduleInstall(props, emit);
    this.useLoad(props);
    return {
      ...superParams,
      state: this.viewState,
    };
  }
}