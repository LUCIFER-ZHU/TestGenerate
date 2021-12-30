import { IParam, MainControlState } from '@ibiz-core';

/**
 * @description 表格部件状态
 * @export
 * @interface GridControlState
 * @extends {MainControlState}
 */
export interface GridControlState extends MainControlState {

  /**
   * @description 表格数据集合
   * @type {IParam[]}
   * @memberof GridControlState
   */
  items: IParam[];

  /**
   * @description 表格列模型
   * @type {IParam}
   * @memberof GridControlState
   */
  columnsModel: IParam[];

  /**
   * @description 表格界面行为模型
   * @type {IParam}
   * @memberof GridControlState
   */
  actionModel: IParam;

  /**
   * @description 值规则
   * @type {IParam}
   * @memberof GridControlState
   */
  rules: IParam;

  /**
   * @description 是否多选
   * @type {boolean}
   * @memberof GridControlState
   */
  multiple: boolean;

  /**
   * @description 行编辑状态
   * @type {boolean}
   * @memberof GridControlState
   */
  rowEditState: boolean;

  /**
   * @description 行激活模式
   * @type {(0 | 1 | 2)} 不激活 | 单击激活 | 双击激活
   * @memberof GridControlState
   */
  rowActiveMode: 0 | 1 | 2;

  /**
   * @description 选中数据
   * @type {IParam[]}
   * @memberof GridControlState
   */
  selectedData: IParam[];

  /**
   * @description 选中行keys
   * @type {string[]}
   * @memberof GridControlState
   */
  selectedRowKeys: string[];

  /**
   * @description 是否默认选中第一条数据
   * @type {boolean}
   * @memberof GridControlState
   */
  selectFirstDefault: boolean;

  /**
   * @description 当前页
   * @type {number}
   * @memberof GridControlState
   */
  current: number;

  /**
   * @description 分页大小
   * @type {number}
   * @memberof GridControlState
   */
  pageSize: number;

  /**
   * @description 是否启用分页
   * @type {boolean}
   * @memberof GridControlState
   */
  enablePagingBar: boolean;

  /**
   * @description 数据聚合
   * @type {IParam}
   * @memberof GridControlState
   */
  dataAgg: string[];

  /**
   * @description 聚合模式
   * @type {string}
   * @memberof GridControlState
   */
  aggMode: string;

  /**
   * @description 聚合实体
   * @type {string}
   * @memberof GridControlState
   */
  aggEntity: string,

  /**
   * @description 聚合数据集
   * @type {string}
   * @memberof GridControlState
   */
  aggDataSet: string,

  /**
   * @description 分组模式
   * @type {string}
   * @memberof GridControlState
   */
  groupMode: string;

  /**
   * @description 分组属性
   * @type {string}
   * @memberof GridControlState
   */
  groupField: string;

  /**
   * @description 分组代码表
   * @type {*}
   * @memberof GridControlState
   */
  groupCodeList: any;

  /**
   * @description 禁用排序
   * @type {boolean}
   * @memberof GridControlState
   */
  noSort: boolean;

  /**
   * @description 排序方向
   * @type {string}
   * @memberof GridControlState
   */
  minorSortDir: string;

  /**
   * @description 排序属性
   * @type {string}
   * @memberof GridControlState
   */
  minorSortPSDEF: string;
}
