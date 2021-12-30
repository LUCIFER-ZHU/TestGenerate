import { CityServiceBase } from './city-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class CityService
 * @extends CityServiceBase
 */
export class CityService extends CityServiceBase {
    /**
     * Creates an instance of CityService.
     * @memberof CityService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { CityService }
     * @memberof CityService
     */
    static getInstance(context?: any): CityService {
        return new CityService({ context: context });
    }
}
export default CityService;