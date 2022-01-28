import { IParam, MainControlState } from '@core';

/**
 * @description 选择视图面板通讯对象
 * @export
 * @interface TabViewPanelControlState
 * @extends {MainControlState}
 */
export interface TabViewPanelControlState extends MainControlState {

  /**
   * 导航过滤项
   */
  navFilter?:string;

  /**
   * 导航上下文集合
   */
  navContexts?:IParam;

  /**
   * 导航参数集合
   */
  navParams?:IParam;
}