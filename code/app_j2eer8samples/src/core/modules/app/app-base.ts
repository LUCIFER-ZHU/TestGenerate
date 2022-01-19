import { AppFuncService, IApp, IAppFuncService, IOpenViewService, ViewDetail } from "@core";
import { IDataServiceRegister, INavDataService, IParam, IUIServiceRegister } from "@core/interface";

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
   *  应用数据
   *
   * @private
   * @type {IParam}
   * @memberof AppBase
   */
  private appData: IParam = {};

  /**
   * 初始化应用权限
   *
   * @param {IParam} params 应用预置参数
   * @return {*}  {Promise<any>}
   * @memberof AppBase
   */
  public async initAppAuth(params: IParam): Promise<any> {
    throw new Error("Method not implemented.");
  }

  /**
   *  设置应用数据
   *
   * @param {IParam} opt
   * @memberof AppBase
   */
  public setAppData(opt: IParam): void {
    this.appData = opt;
  }

  /**
   *  获取应用数据
   *
   * @return {*}  {IParam}
   * @memberof AppBase
   */
  public getAppData(): IParam {
    return this.appData;
  }

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
   * @description 获取导航数据服务
   * @return {*}  {INavDataService}
   * @memberof AppBase
   */
  public getNavDataService(): INavDataService {
    throw new Error("Method not implemented.");
  }
}