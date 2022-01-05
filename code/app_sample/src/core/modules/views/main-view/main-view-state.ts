import { ControlAction, ViewStateBase } from '@core';

/**
 * @description 实体部件状态
 * @export
 * @interface MainViewState
 * @extends {ViewStateBase}
 */
export interface MainViewState extends ViewStateBase {
  
  /**
   * @description 视图所有部件的部件行为
   * @type {Record<string,ControlAction>}
   * @memberof MainViewState
   */
  controlsAction: Record<string,ControlAction>;
}
