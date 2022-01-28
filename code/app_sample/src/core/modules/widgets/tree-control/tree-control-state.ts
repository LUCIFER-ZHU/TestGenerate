import { IParam, MDControlState } from "@core";

/**
 * @description 树部件通讯对象
 * @export
 * @interface TreeControlState
 * @extends {MainControlState}
 */
export interface TreeControlState extends MDControlState {

  /**
   * @description 当前选中节点
   * @type {IParam}
   * @memberof TreeControlState
   */
  currentSelectedNode: IParam;

  /**
   * @description 默认展开节点
   * @type {string[]}
   * @memberof TreeControlState
   */
  expandedKeys: string[];

  /**
   * @description 回显选中节点集合
   * @type {IParam[]}
   * @memberof TreeControlState
   */
  echoSelectedNodes: IParam[];

  /**
   * @description 枝干节点是否可用（具有数据能力，可抛出，树导航可用）
   * @type {boolean}
   * @memberof TreeControlState
   */
  isBranchAvailable: boolean;

  /**
   * @description 选中节点
   * @type {IParam[]}
   * @memberof TreeControlState
   */
  selectedNodes: IParam[];

  /**
   * @description 选中节点标识集合
   * @type {string[]}
   * @memberof TreeControlState
   */
  selectedKeys: string[];
}