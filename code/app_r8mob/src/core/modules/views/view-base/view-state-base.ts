import { Subject } from "rxjs";
import { IActionParam, IParam } from '@core';

/**
 * @description 视图基类状态
 * @export
 * @interface ViewStateBase
 */
export interface ViewStateBase {

  /**
   * @description 视图名称
   * @type {string}
   * @memberof ViewStateBase
   */
  viewName: string;

  /**
   * @description 视图代码名称
   * @type {string}
   * @memberof ViewStateBase
   */
  viewCodeName: string;

  /**
   * @description 上下文参数
   * @type {IParam}
   * @memberof ViewStateBase
   */
  context: IParam;

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
   * @description 视图工具栏模型
   * @type {IParam[]}
   * @memberof ViewStateBase
   */
  viewToolbarModel: IParam[];

  /**
   * 自定义视图导航上下文
   *
   * @type {IParam}
   * @memberof ViewStateBase
   */
  appViewNavContexts: IParam;

  /**
   * 自定义视图参数
   *
   * @type {IParam}
   * @memberof ViewStateBase
   */
  appViewNavParams: IParam;

  // 声明任意属性
  [propName: string]: any;
}
