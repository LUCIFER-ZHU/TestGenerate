import { AppAuthServiceBase, IAppAuthService } from "@core";

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
     * Creates an instance of AppAuthService.
     * @memberof AppAuthService
     */
     public constructor() {
        super();
        this.initBaseData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof AppAuthService
     */
    public initBaseData() {
        // 系统默认操作标识
        this.sysOPPrivs = {};
    }

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