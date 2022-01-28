import { IParam } from "../common";

/**
 * @description 应用权限服务
 * @export
 * @interface IAppAuthService
 */
export interface IAppAuthService {

    /**
     * 初始化应用权限
     *
     * @param {IParam} params 应用预置参数
     * @return {*}  {Promise<any>}
     * @memberof IAppAuthService
     */
    initAppAuth(params: IParam, hooks: IParam): Promise<any>;

    /**
     * 获取应用数据
     *
     * @return {*}  {IParam}
     * @memberof IAppAuthService
     */
    getAppData(): IParam;

    /**
     *  设置应用数据
     *
     * @param {IParam} opt
     * @memberof IAppAuthService
     */
    setAppData(opt: IParam): void;

    /**
     * 登录
     *
     * @param {IParam} params 应用预置参数
     * @return {*}  {Promise<any>}
     * @memberof IAppAuthService
     */
    login(opts: IParam): Promise<IParam>;

    /**
     * @description 登出
     * @return {*}  {Promise<IParam>}
     * @memberof IAppAuthService
     */
    logout(): Promise<IParam>;

}