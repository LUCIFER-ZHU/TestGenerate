import { CityUIServiceBase } from './city-ui-service-base';

/**
 * 市UI服务
 *
 * @export
 * @class CityUIService
 * @extends CityUIServiceBase
 */
export class CityUIService extends CityUIServiceBase {
    /**
     * Creates an instance of CityUIService.
     * @memberof CityUIService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { CityUIService }
     * @memberof CityUIService
     */
    static getInstance(context?: any): CityUIService {
        return new CityUIService({ context: context });
    }
}
export default CityUIService;