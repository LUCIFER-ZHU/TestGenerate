import { IParam } from "@core";

export interface TreeNodeRSVO {
  /**
   * @description 下级节点对象
   * @type {IParam}
   * @memberof TreeNodeRSVO
   */
  childDeTreeNode?: IParam;

  /**
   * @description 导航上下文
   * @type {IParam}
   * @memberof TreeNodeRSVO
   */
  navigateContext?: IParam;

  /**
   * @description 导航参数
   * @type {IParam}
   * @memberof TreeNodeRSVO
   */
  navigateParams?: IParam;

  /**
   * @description 父值过滤项
   * @type {string}
   * @memberof TreeNodeRSVO
   */
  parentFilter?: string;

  /**
   * @description 父值关系
   * @type {IParam}
   * @memberof TreeNodeRSVO
   */
  parentPSDER1N?: IParam;

  /**
   * @description 父关系连接属性
   * @type {IParam}
   * @memberof TreeNodeRSVO
   */
  parentPSAppDEField?: IParam;

  /**
   * @description 上级节点对象
   * @type {IParam}
   * @memberof TreeNodeRSVO
   */
  parentPSDETreeNode?: IParam;

  /**
   * @description 父值级别 {1：上一级、 2：上两级、 3：上三级 }
   * @type {(number | 1 | 2 | 3)}
   * @memberof TreeNodeRSVO
   */
  parentValueLevel: number | 1 | 2 | 3;

  /**
   * @description 搜索模式 {1：有搜索时启用、 2：无搜索时启用、 3：全部启用 }
   * @type {(number | 1 | 2 | 3)}
   * @memberof TreeNodeRSVO
   */
  searchMode: number | 1 | 2 | 3;
}