import { IParam } from '@core';
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
     * 基础UI服务实例
     * 
     * @private
     * @type { CityUIService }
     * @memberof CityUIService
     */
    private static basicUIServiceInstance: CityUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof CityUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of CityUIService.
     * @memberof CityUIService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): CityUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new CityUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!CityUIService.UIServiceMap.get(opts.srfdynainstid)) {
                CityUIService.UIServiceMap.set(opts.srfdynainstid, new CityUIService(opts));
            }
            return CityUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default CityUIService;