import { IParam } from '@core';
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
     * 基础UI服务实例
     * 
     * @private
     * @type { DistrictUIService }
     * @memberof DistrictUIService
     */
    private static basicUIServiceInstance: DistrictUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof DistrictUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of DistrictUIService.
     * @memberof DistrictUIService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): DistrictUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new DistrictUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!DistrictUIService.UIServiceMap.get(opts.srfdynainstid)) {
                DistrictUIService.UIServiceMap.set(opts.srfdynainstid, new DistrictUIService(opts));
            }
            return DistrictUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default DistrictUIService;