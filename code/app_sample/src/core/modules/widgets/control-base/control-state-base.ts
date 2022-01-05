import { IActionParam, IParam } from "@core";
import { Subject } from "rxjs";

/**
 * @description 部件状态基类
 * @export
 * @interface ControlStateBase
 */
export interface ControlStateBase {
  
  /**
   * @description 部件名称
   * @type {string}
   * @memberof ControlStateBase
   */
  controlName: string;

  /**
   * @description 部件代码名称
   * @type {string}
   * @memberof ControlStateBase
   */
  controlCodeName: string;

  /**
   * @description 上下文参数
   * @type {IParam}
   * @memberof ControlStateBase
   */
  context: IParam;

  /**
   * @description 视图参数
   * @type {IParam}
   * @memberof ControlStateBase
   */
  viewParams: IParam;

  /**
   * @description 视图订阅对象
   * @type {Subject<IActionParam>}
   * @memberof ControlStateBase
   */
  viewSubject: Subject<IActionParam>;

  // 声明任意属性
  [propName: string]: any;
}