/**
 * @description 应用权限服务
 * @export
 * @interface IAppNotificationService
 */
export interface IAppNotificationService {

    /**
     * 成功提示
     *
     * @param {*} opts 参数
     * @memberof IAppNotificationService
     */
    success(opts: any): void;

    /**
     * 信息提示
     *
     * @param {*} opts 参数
     * @memberof IAppNotificationService
     */
    info(opts: any): void;

    /**
     * 警告提示
     *
     * @param {*} opts 参数
     * @memberof IAppNotificationService
     */
    warning(opts: any): void;

    /**
     * 错误提示
     *
     * @param {*} opts 参数
     * @memberof IAppNotificationService
     */
    error(opts: any): void;


}