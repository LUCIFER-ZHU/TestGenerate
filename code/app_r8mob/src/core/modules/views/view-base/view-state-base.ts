import { Subject } from "rxjs";
import { IActionParam, IParam } from '@core';

/**
 * @description 视图基类状态
 * @export
 * @interface ViewStateBase
 */
export interface ViewStateBase {

  /**
   * @description 上下文参数
   * @type {IParam}
   * @memberof ViewStateBase
   */
  context: IParam;

  /**
   * @description 视图标识
   * @type {string}
   * @memberof ViewStateBase
   */
  viewCodeName: string;

  /**
   * @description 视图参数
   * @type {IParam}
   * @memberof ViewStateBase
   */
  viewParams: IParam;

  /**
   * @description 视图参数(外部传入)
   * @type {Subject<IActionParam>}
   * @memberof ViewStateBase
   */
  viewSubject: Subject<IActionParam>;

  /**
   * @description 是否显示标题栏
   * @type {boolean}
   * @memberof ViewStateBase
   */
  showCaptionBar: boolean;

  // 声明任意属性
  [propName: string]: any;
}
