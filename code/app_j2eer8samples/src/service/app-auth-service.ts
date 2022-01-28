import { AppAuthServiceBase, IAppAuthService, IParam } from "@core";

/**
 * 应用权限服务
 *
 * @export
 * @class AppAuthService
 */
export class AppAuthService extends AppAuthServiceBase implements IAppAuthService {

    /**
     * 唯一实例
     *
     * @private
     * @static
     * @memberof AppAuthService
     */
    private static readonly instance = new AppAuthService();

    /**
     * 获取唯一实例
     *
     * @static
     * @return {*}  {AppAuthService}
     * @memberof AppAuthService
     */
    public static getInstance(): AppAuthService {
        return AppAuthService.instance;
    }

}