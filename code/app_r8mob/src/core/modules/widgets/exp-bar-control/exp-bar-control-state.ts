import { IParam, MainControlState } from "@core";

/**
 * @description 导航栏部件通讯对象
 * @export
 * @interface ExpBarControlState
 * @extends {MainControlState}
 */
export interface ExpBarControlState extends MainControlState {

  /**
   * @description 选中数据
   * @type {IParam}
   * @memberof ExpBarControlState
   */
  selection: IParam;

  /**
   * @description 分割栏绑定值
   * @type {number}
   * @memberof ExpBarControlState
   */
  split: number;
}