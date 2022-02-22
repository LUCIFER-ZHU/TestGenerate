import { Subject } from "rxjs";
import { IActionParam, IParam } from "@core";

/**
 * @description 视图props的基类
 * @export
 * @interface ViewPropsBase
 */
export interface ViewPropsBase {
  
  /**
   * @description 上下文参数(外部传入)
   * @type {IParam}
   * @memberof ViewPropsBase
   */
  context?: IParam;

  /**
   * @description 视图参数(外部传入)
   * @type {IParam}
   * @memberof ViewPropsBase
   */
  viewParams?: IParam;

  /**
   * @description 视图参数(外部传入)
   * @type {Subject<IActionParam>}
   * @memberof ViewPropsBase
   */
  viewSubject?: Subject<IActionParam>;

  /**
   * @description 视图打开方式，默认为路由方式
   * @type {("ROUTE" | "MODAL" | "EMBED")} 路由 | 模态 | 内嵌
   * @memberof ViewPropsBase
   */
  openType?: "ROUTE" | "MODAL" | "EMBED";

  /**
   * @description 是否显示标题栏
   * @type {boolean}
   * @memberof ViewPropsBase
   */
  showCaptionBar?: boolean;
}