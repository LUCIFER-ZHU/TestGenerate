import { IParam } from '@core';
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
     * 基础UI服务实例
     * 
     * @private
     * @type { ProvinceUIService }
     * @memberof ProvinceUIService
     */
    private static basicUIServiceInstance: ProvinceUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof ProvinceUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of ProvinceUIService.
     * @memberof ProvinceUIService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): ProvinceUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new ProvinceUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!ProvinceUIService.UIServiceMap.get(opts.srfdynainstid)) {
                ProvinceUIService.UIServiceMap.set(opts.srfdynainstid, new ProvinceUIService(opts));
            }
            return ProvinceUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default ProvinceUIService;