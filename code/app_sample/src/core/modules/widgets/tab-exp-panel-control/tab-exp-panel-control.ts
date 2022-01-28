import { UIUtil, deepCopy, IActionParam, IParam, MainControl, TabExpPanelControlState, TabExpPanelControlProps } from '@core';

/**
 * @description 分页导航部件
 * @export
 * @class TabExpPanelControl
 * @extends {MainControl}
 */
export class TabExpPanelControl extends MainControl {

  /**
   * @description 部件状态
   * @type {TabExpPanelControlState}
   * @memberof TabExpPanelControl
   */
  public declare state: TabExpPanelControlState;

  /**
   * @memberof TabExpPanelControl
   */
   public setState() {
    super.setState();
    this.state.tabPosition = toRef(this.props, 'tabPosition') as any;
    this.state.activePanel = this.props.defaultActivePanel;
  }

  /**
   * @description 安装部件所有功能模块的方法
   * @param {TabExpPanelControlProps} props 
   * @param {Function} [emit]
   * @return {*}
   * @memberof TabExpPanelControl [emit] 事件
   */
  public moduleInstall() {
    const superParams = super.moduleInstall();
    return {
      ...superParams,
      state: this.state,
    };
  }

}