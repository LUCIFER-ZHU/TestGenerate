import { DistrictUIServiceBase } from './district-ui-service-base';

/**
 * 区UI服务
 *
 * @export
 * @class DistrictUIService
 * @extends DistrictUIServiceBase
 */
export class DistrictUIService extends DistrictUIServiceBase {
    /**
     * Creates an instance of DistrictUIService.
     * @memberof DistrictUIService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { DistrictUIService }
     * @memberof DistrictUIService
     */
    static getInstance(context?: any): DistrictUIService {
        return new DistrictUIService({ context: context });
    }
}
export default DistrictUIService;