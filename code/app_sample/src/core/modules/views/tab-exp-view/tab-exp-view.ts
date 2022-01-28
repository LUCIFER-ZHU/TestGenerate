import { ExpView, isExist } from '@core';
import { TabExpViewProps } from './tab-exp-view-prop';
import { TabExpViewState } from './tab-exp-view-state';

/**
 * @description 分页导航视图
 * @export
 * @class TabExpView
 * @extends {ExpView}
 */
export class TabExpView extends ExpView {
  /**
   * @description 视图状态
   * @type {TabExpViewState}
   * @memberof TabExpView
   */
  public declare state: TabExpViewState;

  /**
   *【内置功能】提供通过viewparams里的srfDefaultPanel指定默认打开的分页的功能
   */
  public useDefaultPanel() {
    const { srfDefaultPanel } = this.state.viewParams;
    if (isExist(srfDefaultPanel)) {
      this.state.defaultActivePanel = srfDefaultPanel;
    }
  }

  /**
   * @description 安装视图所有功能模块的方法
   * @return {*}
   * @memberof TabExpView
   */
  public moduleInstall() {
    const superParams = super.moduleInstall();
    this.useDefaultPanel()
    return {
      ...superParams,
    };
  }
}
