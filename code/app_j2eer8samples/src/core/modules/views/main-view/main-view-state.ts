import { ControlAction, IViewLogics, ViewStateBase } from '@core';

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

  /**
   * 视图实体名称
   *
   * @type {string}
   * @memberof MainViewState
   */
  appEntityCodeName: string;

  /**
   * 视图实体主属性CodeName
   *
   * @type {string}
   * @memberof MainViewState
   */
  appDeKeyFieldName: string;

  /**
   * 视图实体主信息属性CodeName
   *
   * @type {string}
   * @memberof MainViewState
   */
  appDeMajorFieldName: string;

  /**
   * 视图逻辑配置
   *
   * @type {*}
   * @memberof MainViewState
   */
  viewLogics: IViewLogics;
}
