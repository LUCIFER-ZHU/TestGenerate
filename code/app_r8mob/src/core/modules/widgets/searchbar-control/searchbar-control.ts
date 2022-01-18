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
   * @type {GridControlState}
   * @memberof GridControl
   */
  public declare controlState: SearchBarControlState;

  /**
   * @description
   * @param {GridControlProps} props
   * @memberof GridControl
   */
  public setState(props: SearchBarControlState) {
    super.setState(props);
    this.controlState.filterFields = Object.values(this.controlState.detailsModel);
    this.controlState.filterItems = [];
  }

  /**
   * @description 安装部件所有功能模块的方法
   * @param {GridControlProps} props 传入的Props
   * @param {Function} [emit]
   * @return {*}
   * @memberof GridControl [emit] 事件
   */
  public moduleInstall(props: SearchBarControlProps, emit?: Function) {
    const superParams = super.moduleInstall(props, emit);
    return {
      ...superParams,
      state: this.controlState,
    };
  }

}