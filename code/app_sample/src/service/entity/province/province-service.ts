import { ProvinceServiceBase } from './province-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class ProvinceService
 * @extends ProvinceServiceBase
 */
export class ProvinceService extends ProvinceServiceBase {
    /**
     * Creates an instance of ProvinceService.
     * @memberof ProvinceService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { ProvinceService }
     * @memberof ProvinceService
     */
    static getInstance(context?: any): ProvinceService {
        return new ProvinceService({ context: context });
    }
}
export default ProvinceService;