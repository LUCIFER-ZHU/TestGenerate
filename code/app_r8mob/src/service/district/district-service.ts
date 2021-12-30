import { DistrictServiceBase } from './district-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class DistrictService
 * @extends DistrictServiceBase
 */
export class DistrictService extends DistrictServiceBase {
    /**
     * Creates an instance of DistrictService.
     * @memberof DistrictService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { DistrictService }
     * @memberof DistrictService
     */
    static getInstance(context?: any): DistrictService {
        return new DistrictService({ context: context });
    }
}
export default DistrictService;