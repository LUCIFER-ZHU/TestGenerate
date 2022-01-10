import { IParam } from '@core';
import { DistrictServiceBase } from './district-service-base';

/**
 * 区服务
 *
 * @export
 * @class DistrictService
 * @extends DistrictServiceBase
 */
export class DistrictService extends DistrictServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { DistrictService }
     * @memberof DistrictService
     */
    private static basicDataServiceInstance: DistrictService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof DistrictService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of DistrictService.
     * @memberof DistrictService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): DistrictService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new DistrictService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!DistrictService.dataServiceMap.get(opts.srfdynainstid)) {
                DistrictService.dataServiceMap.set(opts.srfdynainstid, new DistrictService(opts));
            }
            return DistrictService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default DistrictService;