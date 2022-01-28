import { IParam, MainControlState } from '@core';

/**
 * @description 搜索栏部件状态
 * @export
 * @interface TabExpPanelControlState
 * @extends {MainControlState}
 */
export interface TabExpPanelControlState extends MainControlState {

  /**
   * 分页栏显示位置
   * 目前支持上，下，左，右
   *
   */
  tabPosition: "left" | "right" | "top" | "bottom";

  /**
   * 当前激活的分页的name
   *
   */
  activePanel: string;
  
}