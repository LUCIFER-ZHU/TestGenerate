import { Ref, ref } from 'vue';
import { IActionParam, MainControl } from '@ibiz-core';
import { PickupViewPanelControlProps } from './pickupviewpanel-control-prop';
import { PickupViewPanelControlState } from './pickupviewpanel-control-state';

/**
 * @description 选择视图面板部件
 * @export
 * @class PickupViewPanelControl
 * @extends {MainControl}
 */
export class PickupViewPanelControl extends MainControl {

  /**
   * @description 部件状态
   * @type {FormControlState}
   * @memberof FormControl
   */
  public declare controlState: PickupViewPanelControlState;

  /**
   * @description 是否初始化完成
   * @type {Ref<boolean>}
   * @memberof PickupViewPanelControl
   */
  public inited: Ref<boolean> = ref(false);

  public viewdata: string = '';

  public viewparam: string = '';

  /**
   * @description 根据props设置部件state
   * @param {PickupViewPanelControlProps} props
   * @memberof PickupViewPanelControl
   */
  public setState(props: PickupViewPanelControlProps) {
    super.setState(props);
    this.controlState.isSingleSelect = toRef(props, 'isSingleSelect');
    this.controlState.isShowButton = toRef(props, 'isShowButton');
    this.controlState.selectedData = toRef(props, 'selectedData');
  }

  /**
   * @description 
   * @param {PickupViewPanelControlProps} props
   * @memberof PickupViewPanelControl
   */
  public useLoad(props: PickupViewPanelControlProps) {
    const { viewSubject, controlName, context, viewParams } = this.controlState;
    // 订阅viewSubject,监听load行为
    if(viewSubject){
      let subscription = viewSubject.subscribe(({ tag, action, data }: IActionParam)=>{
        if(Object.is(controlName, tag) && Object.is("load", action) ){
          this.viewdata = JSON.stringify(context);
          this.viewparam = JSON.stringify(viewParams);
          this.inited.value = true;
        }
      })
      // 部件卸载时退订viewSubject
      onUnmounted(()=>{
        subscription.unsubscribe();
      })
    }
  }

  /**
   * @description 安装部件所有功能模块的方法
   * @param {PickupViewPanelControlProps} props 传入的Props
   * @param {Function} [emit]
   * @return {*} 
   * @memberof FormControl [emit] 事件
   */
  public moduleInstall(props: PickupViewPanelControlProps, emit?: Function) {
    const superParams = super.moduleInstall(props, emit);
    return {
      ...superParams,
      inited: this.inited,
      viewdata: this.viewdata,
      viewparam: this.viewparam,
      state: this.controlState
    };
  }
}