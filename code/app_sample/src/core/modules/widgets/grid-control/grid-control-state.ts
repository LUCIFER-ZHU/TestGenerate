import { IParam, MainControlState } from '@core';

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
  data: IParam[];

  /**
   * @description 表格列模型
   * @type {IParam}
   * @memberof GridControlState
   */
  columnsModel: IParam[];

  /**
   * @description 表格操作列行为模型
   * @type {IParam}
   * @memberof GridControlState
   */
  uAColumnModel: IParam[];

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
   * @description 表格聚合
   * @type {IParam}
   * @memberof GridControlState
   */
  gridAgg: IParam;

  /**
   * @description 表格分组
   * @type {IParam}
   * @memberof GridControlState
   */
  gridGroup: IParam;

  /**
   * @description 表格排序
   * @type {IParam}
   * @memberof GridControlState
   */
  gridSort: IParam;

  /**
   * @description 表格分页
   * @type {IParam}
   * @memberof GridControlState
   */
  gridPaging: IParam;
}
