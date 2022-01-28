import { IParam } from '@core';
import { ProvinceServiceBase } from './province-service-base';

/**
 * 省份服务
 *
 * @export
 * @class ProvinceService
 * @extends ProvinceServiceBase
 */
export class ProvinceService extends ProvinceServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { ProvinceService }
     * @memberof ProvinceService
     */
    private static basicDataServiceInstance: ProvinceService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof ProvinceService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of ProvinceService.
     * @memberof ProvinceService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): ProvinceService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new ProvinceService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!ProvinceService.dataServiceMap.get(opts.srfdynainstid)) {
                ProvinceService.dataServiceMap.set(opts.srfdynainstid, new ProvinceService(opts));
            }
            return ProvinceService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default ProvinceService;