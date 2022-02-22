import { AppCodeListConfig } from "@/app/config";
import { AppCodeListServiceBase, IAppCodeListService } from "@core";

/**
 * 应用代码表服务
 *
 * @export
 * @abstract
 * @class AppCodeListService
 * @extends AppCodeListServiceBase
 * @implements {IAppCodeListService}
 */
export class AppCodeListService extends AppCodeListServiceBase implements IAppCodeListService {

    /**
     * 唯一实例
     *
     * @private
     * @static
     * @memberof AppCodeListService
     */
    private static readonly instance = new AppCodeListService();

    /**
     * 获取唯一实例
     *
     * @static
     * @return {*}  {AppCodeListService}
     * @memberof AppCodeListService
     */
    public static getInstance(): AppCodeListService {
        return AppCodeListService.instance;
    }

    /**
     * 通过代码表标识获取代码表
     *
     * @param {string} tag
     * @memberof AppCodeListService
     */
    public getCodeListByTag(tag: string): any {
        return AppCodeListConfig[tag];
    }


}