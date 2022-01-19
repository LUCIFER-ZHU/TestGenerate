import { IParam } from "@core"

export interface TreeNodeVO {
  /**
   * @description 允许拖到节点
   * @type {boolean}
   * @memberof TreeNodeVO
   */
  allowDrag: boolean,

  /**
   * @description 允许拖入节点
   * @type {boolean}
   * @memberof TreeNodeVO
   */
  allowDrop: boolean,

  /**
   * @description 允许编辑节点文本
   * @type {boolean}
   * @memberof TreeNodeVO
   */
  allowEditText: boolean,

  /**
   * @description 允许节点排序
   * @type {boolean}
   * @memberof TreeNodeVO
   */
  allowOrder: boolean,

  /**
   * @description 应用实体标识
   * @type {string}
   * @memberof TreeNodeVO
   */
  appDataEntity?: IParam,

  /**
   * @description 应用实体结果集对象
   * @type {IParam}
   * @memberof TreeNodeVO
   */
  appDeDataSet?: IParam;

  /**
   * @description 附加父节点标识
   * @type {boolean}
   * @memberof TreeNodeVO
   */
  appendPNodeId: boolean,

  /**
   * @description 代码表
   * @type {IParam}
   * @memberof TreeNodeVO
   */
  codeList?: IParam,

  /**
   * @description 计数器标识
   * @type {string}
   * @memberof TreeNodeVO
   */
  counterId: string,

  /**
   * @description 计数器模式 {0：默认、 1：0 值时隐藏 }
   * @type {number}
   * @memberof TreeNodeVO
   */
  counterMode: number,

  /**
   * @description 节点样式表
   * @type {string}
   * @memberof TreeNodeVO
   */
  cssName?: string,

  /**
   * @description 树节点数据项集合
   * @type {*}
   * @memberof TreeNodeVO
   */
  deTreeNodeDataItems?: any[] | null;

  /**
   * @description 禁止选择
   * @type {boolean}
   * @memberof TreeNodeVO
   */
  disableSelect: boolean,

  /**
   * @description 支持选中
   * @type {boolean}
   * @memberof TreeNodeVO
   */
  enableCheck: boolean,

  /**
   * @description 支持快速搜索
   * @type {boolean}
   * @memberof TreeNodeVO
   */
  enableQuickSearch: boolean,

  /**
   * @description 仅展开首节点
   * @type {boolean}
   * @memberof TreeNodeVO
   */
  expandFirstOnly: boolean,

  /**
   * @description 默认展开
   * @type {boolean}
   * @memberof TreeNodeVO
   */
  expanded: boolean,

  /**
   * @description 是否有子节点
   * @type {(boolean | null)}
   * @memberof TreeNodeVO
   */
  hasPSDETreeNodeRSs: boolean | null;

  /**
   * @description 叶节点标识值应用实体属性
   * @type {IParam}
   * @memberof TreeNodeVO
   */
  leafFlagPSAppDEField?: IParam;

  /**
   * @description 节点标识值应用实体属性(DE 节点)
   * @type {IParam}
   * @memberof TreeNodeVO
   */
  idPSAppDEField?: IParam;

  /**
   * @description 节点标识
   * @type {string}
   * @memberof TreeNodeVO
   */
  id: string;

  /**
   * @description 节点图标值应用实体属性
   * @type {IParam}
   * @memberof TreeNodeVO
   */
  iconPSAppDEField?: IParam;

  /**
   * @description 图片样式
   * @type {string}
   * @memberof TreeNodeVO
   */
  iconcls?: string,

  /**
   * @description 图片路径
   * @type {string}
   * @memberof TreeNodeVO
   */
  icon?: string,

  /**
   * @description 节点过滤属性
   * @type {string}
   * @memberof TreeNodeVO
   */
  navFilter: string,

  /**
   * @description 导航上下文
   * @type {IParam}
   * @memberof TreeNodeVO
   */
  navigateContext?: IParam;

  /**
   * @description 导航参数
   * @type {IParam}
   * @memberof TreeNodeVO
   */
  navigateParams?: IParam;
  
  /**
   * @description 导航视图
   * @type {IParam}
   * @memberof TreeNodeVO
   */
  navView?: IParam,


  /**
   * @description 节点标识
   * @type {string}
   * @memberof TreeNodeVO
   */
  nodeType: string,

  /**
   * @description 节点值(STATIC 节点)
   * @type {rootNode}
   * @memberof TreeNodeVO
   */
  nodeValue?: string,

  /**
   * @description 根节点
   * @type {boolean}
   * @memberof TreeNodeVO
   */
  rootNode: boolean,

  /**
   * @description 仅选择首节点
   * @type {boolean}
   * @memberof TreeNodeVO
   */
  selectFirstOnly: boolean,

  /**
   * @description 默认选择
   * @type {boolean}
   * @memberof TreeNodeVO
   */
  selected: boolean,

  /**
   * @description 排序方向
   * @type {string}
   * @memberof TreeNodeVO
   */
  sortDir?: string;

  /**
   * @description 节点排序值应用实体属性
   * @type {IParam}
   * @memberof TreeNodeVO
   */
  sortPSAppDEField?: IParam;

  /**
   * @description 节点文本格式化
   * @type {string}
   * @memberof TreeNodeVO
   */
  textFormat?: string;

  /**
   * @description 节点文本值属性对象
   * @type {IParam}
   * @memberof TreeNodeVO
   */
  textPSAppDEField?: IParam;

  /**
   * @description 文本
   * @type {string}
   * @memberof TreeNodeVO
   */
  text?: string,

  /**
   * @description 提示信息
   * @type {string}
   * @memberof TreeNodeVO
   */
  tooltip?: string,
  
  /**
   * @description 节点类型
   * @type {string}
   * @memberof TreeNodeVO
   */
  treeNodeType: 'STATIC' | 'DE' | 'CODELIST' | string,
}