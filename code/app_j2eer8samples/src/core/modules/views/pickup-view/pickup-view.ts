import { IActionParam } from "@core";
import { MainView } from "../main-view";
import { PickupViewProps } from "./pickup-view-prop";
import { PickupViewState } from "./pickup-view-state";

/**
 * @description 选择视图
 * @export
 * @class PickupView
 * @extends {MainView}
 */
export class PickupView extends MainView {

  /**
   * @description 视图状态
   * @type {PickupViewState}
   * @memberof PickupView
   */
  public declare state: PickupViewState;


  public selectData: any[] = [];

  /**
   * @description 使用加载功能模块
   * @param {PickupViewProps} props 传入的props
   * @memberof PickupView
   */
  public useLoad(props: PickupViewProps) {
    const { viewSubject } = this.state;
    onMounted(() => {
      viewSubject.next({ tag: 'grid', action: "load", data: {} })
    })
  }

  /**
   * @description 取消
   * @memberof PickupView
   */
  public onCancel() {
    this.emit('close', []);
  }

  /**
   * @description 确认
   * @memberof PickupView
   */
  public onConfirm() {
    this.emit('viewEvent', { data: this.selectData, tag: '', action: 'close' })
  }

  public onCtrlEvent(actionParam: IActionParam) {
    const { tag, action, data } = actionParam;
    // TODO

    if (action === 'selectionChange') {
      this.selectData = data;
      this.emit('viewEvent', { data: this.selectData, tag: '', action: 'viewDataChange' })
    }
    if (action === 'close') {
      this.emit('viewEvent', { data: this.selectData, tag: '', action: 'viewDataChange' })
    }
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
      selectData:this.selectData,      
      onCancel: this.onCancel.bind(this),
      onConfirm: this.onConfirm.bind(this)
    };
  }
}