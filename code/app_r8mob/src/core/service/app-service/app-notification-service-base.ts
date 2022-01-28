import { IAppNotificationService } from "@core/interface";
import { notification } from 'ant-design-vue';

/**
 * 应用通知服务基类
 *
 * @export
 * @abstract
 * @class AppNotificationServiceBase
 * @implements {IAppNotificationService}
 */
export abstract class AppNotificationServiceBase implements IAppNotificationService {

    /**
     * 成功提示
     *
     * @param {*} opts
     * @memberof AppNotificationServiceBase
     */
    public success(opts: any): void {
        notification.success(opts);
    }

    /**
     * 信息提示
     *
     * @param {*} opts
     * @memberof AppNotificationServiceBase
     */
    public info(opts: any): void {
        notification.info(opts);
    }

    /**
     * 警告提示
     *
     * @param {*} opts
     * @memberof AppNotificationServiceBase
     */
    public warning(opts: any): void {
        notification.warning(opts);
    }

    /**
     * 错误提示
     *
     * @param {*} opts
     * @memberof AppNotificationServiceBase
     */
    public error(opts: any): void {
        notification.error(opts);
    }

}