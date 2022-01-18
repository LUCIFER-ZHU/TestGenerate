import { UIUtil, deepCopy, IActionParam, IParam, MainControl, SearchBarControlState, SearchBarControlProps } from '@core';

/**
 * @description 搜索栏部件
 * @export
 * @class SearchBarControl
 * @extends {MainControl}
 */
export class SearchBarControl extends MainControl {

  /**
   * @description 部件状态
   * @type {SearchBarControlState}
   * @memberof SearchBarControl
   */
  public declare state: SearchBarControlState;

  /**
   * @description
   * @param {SearchBarControlProps} props
   * @memberof SearchBarControl
   */
  public setState(props: SearchBarControlState) {
    super.setState(props);
    this.state.filterFields = Object.values(this.state.detailsModel);
    this.state.filterItems = [];
  }

  /**
   * @description 安装部件所有功能模块的方法
   * @param {SearchBarControlProps} props 
   * @param {Function} [emit]
   * @return {*}
   * @memberof SearchBarControl [emit] 事件
   */
  public moduleInstall(props: SearchBarControlProps, emit?: Function) {
    const superParams = super.moduleInstall(props, emit);
    return {
      ...superParams,
      state: this.state,
    };
  }

}