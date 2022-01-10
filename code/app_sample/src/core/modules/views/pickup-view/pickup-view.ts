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
  public declare viewState: PickupViewState;


  public selectData: any[] = [];

  /**
   * @description 使用加载功能模块
   * @param {PickupViewProps} props 传入的props
   * @memberof PickupView
   */
  public useLoad(props: PickupViewProps) {
    const { viewSubject } = this.viewState;
    onMounted(() => {
      viewSubject.next({ tag: 'grid', action: "load", data: {} })
    })
  }

  /**
   * @description 取消
   * @memberof PickupView
   */
  public cancel() {
    //todo
  }

  /**
   * @description 确认
   * @memberof PickupView
   */
  public confirm() {
    this.emit('viewEvent', { data: this.selectData, tag: '', action: 'close' })
  }
  
  public handleCtrlEvent(actionParam: IActionParam) {
    debugger
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
   * @param {PickupViewProps} props 传入的Props
   * @param {Function} [emit] [emit] 事件
   * @return {*} 
   * @memberof PickupView
   */
  public moduleInstall(props: PickupViewProps, emit?: Function) {
    const superParams = super.moduleInstall(props, emit);
    this.useLoad(props);
    return {
      ...superParams,
      state: this.viewState,
      selectData: this.selectData,
      cancel: this.cancel.bind(this),
      confirm: this.confirm.bind(this)
    };
  }
}