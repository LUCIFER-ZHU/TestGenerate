import { IParam, MDControlState } from '@core';

/**
 * @description 表格部件状态
 * @export
 * @interface GridControlState
 * @extends {MDControlState}
 */
export interface GridControlState extends MDControlState {

  /**
   * @description 表格列模型
   * @type {IParam}
   * @memberof GridControlState
   */
  columnsModel: IParam[];

  /**
   * @description 新建默认值编辑项
   * @type {IParam[]}
   * @memberof GridControlState
   */
  createDefaultItems: IParam[];

  /**
   * @description 表格操作列行为模型
   * @type {IParam}
   * @memberof GridControlState
   */
  uAColumnModel: IParam;

  /**
   * @description 值规则
   * @type {IParam}
   * @memberof GridControlState
   */
  rules: IParam;

  /**
   * 表格编辑状态
   *
   * @type {IParam[]}
   * @memberof GridControlState
   */
  gridEditState: any;

  /**
   * @description 表格聚合
   * @type {IParam}
   * @memberof GridControlState
   */
  gridAgg: IParam;

  /**
   * @description 更新默认值编辑项
   * @type {IParam[]}
   * @memberof GridControlState
   */
  updateDefaultItems: IParam[];

  /**
   * @description 表格列总宽度
   * @type {number}
   * @memberof GridControlState
   */
  totalColumnWidth: number;

  /**
   * @description 选择列宽度（默认50，存在聚合列时为100）
   * @type {number}
   * @memberof GridControlState
   */
  selectColumnWidth: number;

}
