import { ProvinceUIServiceBase } from './province-ui-service-base';

/**
 * 省份UI服务
 *
 * @export
 * @class ProvinceUIService
 * @extends ProvinceUIServiceBase
 */
export class ProvinceUIService extends ProvinceUIServiceBase {
    /**
     * Creates an instance of ProvinceUIService.
     * @memberof ProvinceUIService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { ProvinceUIService }
     * @memberof ProvinceUIService
     */
    static getInstance(context?: any): ProvinceUIService {
        return new ProvinceUIService({ context: context });
    }
}
export default ProvinceUIService;