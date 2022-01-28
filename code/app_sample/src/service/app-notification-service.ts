import { IAppNotificationService, AppNotificationServiceBase } from "@core";

/**
 * 通知提示服务
 *
 * @export
 * @class AppNotificationService
 * @extends {AppNotificationServiceBase}
 * @implements {IAppNotificationService}
 */
export class AppNotificationService extends AppNotificationServiceBase implements IAppNotificationService {

    /**
     * 唯一实例
     *
     * @private
     * @static
     * @memberof AppNotificationService
     */
    private static readonly instance = new AppNotificationService();

    /**
     * 获取唯一实例
     *
     * @static
     * @return {*}  {AppNotificationService}
     * @memberof AppNotificationService
     */
    public static getInstance(): AppNotificationService {
        return AppNotificationService.instance;
    }

}