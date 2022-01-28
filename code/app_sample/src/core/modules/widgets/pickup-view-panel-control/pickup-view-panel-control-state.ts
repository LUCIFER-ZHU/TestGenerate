import { IParam, MainControlState } from '@core';

/**
 * @description 选择视图面板通讯对象
 * @export
 * @interface PickupViewPanelControlState
 * @extends {MainControlState}
 */
export interface PickupViewPanelControlState extends MainControlState {

  /**
   * @description 是否单选
   * @type {boolean}
   * @memberof PickupViewPanelControlState
   */
  isSingleSelect: boolean;

  /**
   * @description 是否显示按钮
   * @type {boolean}
   * @memberof PickupViewPanelControlState
   */
  isShowButton: boolean;

  /**
   * @description 选中数据字符
   * @type {string}
   * @memberof PickupViewPanelControlState
   */
  selectedData: string;
}