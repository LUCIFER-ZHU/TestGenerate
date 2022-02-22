import { IApp, IAppFuncService, IOpenViewService, ViewDetail } from "@core";
import { IAppActionService, IAppAuthService, IAppCodeListService, IAppNotificationService, IParam } from "@core/interface";

/**
 * 应用基类
 *
 * @export
 * @class AppBase
 */
export abstract class AppBase implements IApp {

  /**
   *  初始化应用
   *
   * @param {IParam} opt
   * @memberof AppBase
   */
  public initApp(params: IParam): Promise<any> {
    throw new Error("Method not implemented.");
  }

  /**
   *  设置应用数据
   *
   * @param {IParam} opt
   * @memberof AppBase
   */
  public setAppData(opt: IParam): void {
    this.getAppAuthService().setAppData(opt);
  }

  /**
   *  获取应用数据
   *
   * @return {*}  {IParam}
   * @memberof AppBase
   */
  public getAppData(): IParam {
    return this.getAppAuthService().getAppData();
  }

  /**
   * 获取应用权限服务
   *
   * @return {IAppFuncService}
   * @memberof AppBase
   */
  public getAppAuthService(): IAppAuthService {
    throw new Error("Method not implemented.");
  }

  /**
   * 获取通知服务
   *
   * @return {*}  {IAppNotificationService}
   * @memberof AppBase
   */
  public getNotificationService(): IAppNotificationService {
    throw new Error("Method not implemented.");
  }

  /**
   * 获取应用功能服务
   *
   * @return {IAppFuncService}
   * @memberof AppBase
   */
  public getAppFuncService(): IAppFuncService {
    throw new Error("Method not implemented.");
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
   * 获取界面行为服务
   *
   * @return {*}  {IAppActionService}
   * @memberof AppBase
   */
  public getAppActionService(): IAppActionService {
    throw new Error("Method not implemented.");
  }

  /**
   * 获取代码表服务
   *
   * @return {*}  {IAppCodeListService}
   * @memberof AppBase
   */
  public getCodeListService(): IAppCodeListService {
    throw new Error("Method not implemented.");
  }

  /**
   * 获取UI服务
   *
   * @param {string} entityKey 应用实体名小写
   * @param {*} context 应用上下文
   * @return {Promise<any>}
   * @memberof AppBase
   */
  public getUIService(entityKey: string, context?: IParam): Promise<any> {
    throw new Error("Method not implemented.");
  }

  /**
   * 获取数据服务
   *
   * @param {string} entityKey 应用实体名小写
   * @param {*} context 应用上下文
   * @return {Promise<any>}
   * @memberof AppBase
   */
  public getDataService(entityKey: string, context?: IParam): Promise<any> {
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

  /**
   * 获取环境参数
   *
   * @return {*}  {IParam}
   * @memberof AppBase
   */
  public getEnvironmentParam(): IParam {
    throw new Error("Method not implemented.");
  }


  /**
   * @description 获取实体信息
   *
   * @param {string} codeName
   * @memberof AppBase
   */
  public getEntityInfo(codeName: string) {
    throw new Error("Method not implemented.");
  }

  /**
   * @description 跳转登录页面
   *
   * @memberof AppBase
   */
  public gotoLoginPage(): void {
    throw new Error("Method not implemented.");
  }

}