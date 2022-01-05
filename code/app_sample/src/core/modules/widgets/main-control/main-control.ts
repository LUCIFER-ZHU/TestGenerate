import { ControlBase, MainControlProps, MainControlState } from '@core';

/**
 * @description 实体部件
 * @export
 * @class MainControl
 * @extends {ControlBase}
 */
export class MainControl extends ControlBase {
  
  /**
   * @description 部件状态
   * @type {MainControlState}
   * @memberof MainControl
   */
  public declare controlState: MainControlState;

  /**
   * @description 根据props调整设置部件state
   * @param {MainControlProps} props 传入的Props
   * @memberof MainControl
   */
  public setState(props: MainControlProps) {
    super.setState(props);
    // 只读属性处理：把props的属性的Ref赋给state，以维持响应性。
    this.controlState.showBusyIndicator = toRef(props, 'showBusyIndicator') as any;
    this.controlState.controlAction = toRef(props, 'controlAction') as any;
  }

  /**
   * @description 安装部件所有功能模块的方法
   * @param {MainControlProps} props 传入的Props
   * @param {Function} [emit] [emit] 事件
   * @return {*} 
   * @memberof MainControl
   */
  public moduleInstall(props: MainControlProps, emit?: Function) {
    const superParams = super.moduleInstall(props, emit);
    return {
      ...superParams,
      state: this.controlState,
    };
  }
}
