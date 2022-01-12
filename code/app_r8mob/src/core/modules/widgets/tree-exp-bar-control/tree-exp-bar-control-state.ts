import { ExpBarControlState } from "@core";

/**
 * @description 树导航栏部件通讯对象
 * @export
 * @interface TreeExpBarControlState
 * @extends {ExpBarControlState}
 */
export interface TreeExpBarControlState extends ExpBarControlState {
  /**
   * @description 过滤属性
   * @type {string}
   * @memberof TreeExpBarControlState
   */
  srfnodefilter: string;
}