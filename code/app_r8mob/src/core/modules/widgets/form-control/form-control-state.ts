import { Subject } from 'rxjs';
import { ControlVOBase, IParam, MainControlState } from '@core';

/**
 * @description 表单部件状态
 * @export
 * @interface FormControlState
 * @extends {MainControlState}
 */
export interface FormControlState extends MainControlState {

  /**
   * @description 行为模型
   * @type {IParam}
   * @memberof FormControlState
   */
  actionModel: IParam;

  /**
   * @description 新建默认值集合
   * @type {IParam[]}
   * @memberof FormControlState
   */
  createDefaultItems: IParam[];

  /**
   * @description 表单数据对象
   * @type {IParam}
   * @memberof FormControlState
   */
  data: ControlVOBase;

  /**
   * @description 表单成员模型
   * @type {IParam}
   * @memberof FormControlState
   */
  detailsModel: IParam;

  /**
   * @description 错误信息
   * @type {string[]}
   * @memberof FormControlState
   */
  errorMessage: string[];

  /**
   * @description 表单通讯对象
   * @type {Subject<any>}
   * @memberof FormControlState
   */
  formSubject: Subject<any>;

  /**
   * @description 值规则
   * @type {IParam}
   * @memberof FormControlState
   */
  rules: IParam;

  /**
   * @description 支持自动保存
   * @type {boolean}
   * @memberof FormControlState
   */
  enableAutoSave: boolean;

  /**
   * @description 更新默认值集合
   * @type {IParam[]}
   * @memberof FormControlState
   */
  updateDefaultItems: IParam[];
}
