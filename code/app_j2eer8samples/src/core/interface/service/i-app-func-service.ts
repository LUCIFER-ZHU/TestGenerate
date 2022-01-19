import { IContext, IParam } from "@core";

/**
 * @description 应用功能服务
 * @export
 * @interface IAppFuncService
 */
export interface IAppFuncService {

  /**
   * @description 执行应用功能
   * @param {IParam} menu 菜单项
   * @param {IParam} context 上下文
   * @param {IParam} viewParams 视图参数
   * @return {*}  {*}
   * @memberof IAppFuncService
   */
  executeAppFunc(menu: IParam, context: IContext, viewParams: IParam): any;

}