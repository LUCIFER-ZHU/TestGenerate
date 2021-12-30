import { IParam, MainControlState } from '@ibiz-core';

/**
 * @description 表单部件状态
 * @export
 * @interface FormControlState
 * @extends {MainControlState}
 */
export interface FormControlState extends MainControlState {

  /**
   * @description 表单数据对象
   * @type {IParam}
   * @memberof FormControlState
   */
  data: IParam;

  /**
   * @description 表单成员模型
   * @type {IParam}
   * @memberof FormControlState
   */
  detailsModel: IParam;

  /**
   * @description 表单界面行为模型
   * @type {IParam}
   * @memberof FormControlState
   */
  actionModel: IParam;

  /**
   * @description 值规则
   * @type {IParam}
   * @memberof FormControlState
   */
  rules: IParam;
}
