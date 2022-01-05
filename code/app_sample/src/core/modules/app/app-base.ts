import { AppFuncService, IApp, IAppFuncService, IOpenViewService, ViewDetail } from "@core";
import { IParam } from "@core/interface";

/**
 * 应用基类
 *
 * @export
 * @class AppBase
 */
export abstract class AppBase implements IApp {

  /**
   * 应用功能服务
   *
   * @private
   * @type {AppFuncService}
   * @memberof AppBase
   */
  private appFuncService: AppFuncService = AppFuncService.getInstance();

  /**
   * 获取应用功能服务
   *
   * @return {IAppFuncService}
   * @memberof AppBase
   */
  public getAppFuncService(): IAppFuncService {
    return this.appFuncService;
  }

  /**
   * 获取打开视图服务
   *
   * @return {*}  {IOpenViewService}
   * @memberof AppBase
   */
  public getOpenViewService(): IOpenViewService {
    throw new Error("Method not implemented.");
  }

  /**
   * 获取所有应用功能
   *
   * @return {*}  {IParam[]}
   * @memberof AppBase
   */
  public getAllFuncs(): IParam[] {
    return [];
  }

  /**
   * 获取视图信息
   *
   * @param codeName 视图codeName
   */
  public getViewInfo(codeName: string): ViewDetail | undefined {
    return undefined;
  }
}