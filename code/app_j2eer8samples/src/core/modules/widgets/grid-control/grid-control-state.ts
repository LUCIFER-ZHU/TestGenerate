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
   * @description 表格聚合
   * @type {IParam}
   * @memberof GridControlState
   */
  gridAgg: IParam;

}
