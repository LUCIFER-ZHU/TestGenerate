import { AppFuncServiceBase, IAppFuncService } from "@core";

/**
 * 应用功能服务
 *
 * @export
 * @class AppFuncService
 * @extends {AppFuncServiceBase}
 * @implements {IAppFuncService}
 */
export class AppFuncService extends AppFuncServiceBase implements IAppFuncService {

  /**
   * @description 唯一实例
   * @private
   * @static
   * @memberof AppFuncService
   */
  private static readonly instance = new AppFuncService();

  /**
   * @description 获取唯一实例
   * @static
   * @return {*}  {AppFuncService}
   * @memberof AppFuncService
   */
  public static getInstance(): AppFuncService {
    return AppFuncService.instance;
  }

}