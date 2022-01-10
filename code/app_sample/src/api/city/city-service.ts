import { IParam } from '@core';
import { CityServiceBase } from './city-service-base';

/**
 * 市服务
 *
 * @export
 * @class CityService
 * @extends CityServiceBase
 */
export class CityService extends CityServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { CityService }
     * @memberof CityService
     */
    private static basicDataServiceInstance: CityService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof CityService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of CityService.
     * @memberof CityService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): CityService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new CityService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!CityService.dataServiceMap.get(opts.srfdynainstid)) {
                CityService.dataServiceMap.set(opts.srfdynainstid, new CityService(opts));
            }
            return CityService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default CityService;