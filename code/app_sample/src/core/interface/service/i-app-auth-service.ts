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
     * 获取指定数据操作标识是否鉴权
     *
     * @param {IParam} context 应用上下文
     * @param {string} dataAccAction 操作标识
     * @param {string} [key] 数据主键
     * @param {IParam} [mainSateOPPrivs] 指定数据主状态操作标识
     * @param {IParam} [param] 额外参数
     * @return {*}  {IParam}
     * @memberof IAppAuthService
     */
    getOPEnableAuth(context: IParam, dataAccAction: string, key?: string, mainSateOPPrivs?: IParam, param?: IParam): IParam;

    /**
     * 获取应用权限
     *
     * @param {string | undefined} dataAccAction 操作标识
     * @param {('RESOURCE'|'RT'|'MINIX')} [mode='RESOURCE'] RT(RT模式),RESOURCE(资源模式),MINIX(混合模式),默认值RESOURCE
     * @return {*}  {boolean}
     * @memberof IAppAuthService
     */
    getAppAuth(dataAccAction: string | undefined, mode: 'RESOURCE' | 'RT' | 'MINIX'): boolean;

    /**
     * 获取实体级权限
     *
     * @param {IParam} context 应用上下文
     * @param {string} key 数据主键标识
     * @param {string} dataAccAction 操作标识
     * @param {IParam} [param] 额外参数
     * @return {*}  {boolean}
     * @memberof IAppAuthService
     */
    getDEAuth(context: IParam, key: string, dataAccAction: string, param?: IParam): boolean;


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