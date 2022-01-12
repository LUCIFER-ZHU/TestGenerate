import { MainView, MDViewState } from '@core';

/**
 * 多数据视图
 *
 * @export
 * @class MDView
 * @extends {MainView}
 */
export class MDView extends MainView {
  /**
   * 视图状态数据
   */
  public declare viewState: MDViewState;

}
