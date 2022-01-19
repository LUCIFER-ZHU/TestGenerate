import { TreeNodeRSVO } from ".";
import { TreeNodeVO } from "./tree-node-vo";

export interface TreeControlVO {

  /**
   * @description 显示根
   * @type {boolean}
   * @memberof TreeControlVO
   */
  rootVisible: boolean;

  /**
   * @description 树节点
   * @type {TreeNodeVO[]}
   * @memberof TreeControlVO
   */
  treeNodes: TreeNodeVO[];

  /**
   * @description 
   * @type {TreeNodeRSVO[]}
   * @memberof TreeControlVO
   */
  treeNodeRSs: TreeNodeRSVO[];
}