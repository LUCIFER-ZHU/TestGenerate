import { AppActionServiceBase } from "@core";
import { IAppActionService } from "@core/interface";

/**
 * 界面行为服务
 *
 * @export
 * @class AppActionService
 * @extends {AppActionServiceBase}
 * @implements {IAppActionService}
 */
export class AppActionService extends AppActionServiceBase implements IAppActionService {

    /**
     * @description 唯一实例
     * @private
     * @static
     * @memberof AppActionService
     */
    private static readonly instance = new AppActionService();

    /**
     * @description 获取唯一实例
     * @static
     * @return {*}  {AppActionService}
     * @memberof AppActionService
     */
    public static getInstance(): AppActionService {
        return AppActionService.instance;
    }

}