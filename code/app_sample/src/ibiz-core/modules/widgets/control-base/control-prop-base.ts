import { Subject } from "rxjs";
import { IActionParam, IParam } from "@ibiz-core";

/**
 * @description 部件props的基类
 * @export
 * @interface ControlPropsBase
 */
export interface ControlPropsBase {
  
  /**
   * @description 上下文参数(外部传入)
   * @type {IParam}
   * @memberof ControlPropsBase
   */
  context?: IParam;

  /**
   * @description 视图参数(外部传入)
   * @type {IParam}
   * @memberof ControlPropsBase
   */
  viewParams?: IParam;

  /**
   * @description 视图参数(外部传入)
   * @type {Subject<IActionParam>}
   * @memberof ControlPropsBase
   */
  viewSubject: Subject<IActionParam>;
}