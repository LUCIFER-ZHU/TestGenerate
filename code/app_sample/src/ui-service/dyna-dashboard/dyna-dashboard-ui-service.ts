import { IParam } from '@core';
import { DynaDashboardUIServiceBase } from './dyna-dashboard-ui-service-base';

/**
 * 动态数据看板UI服务
 *
 * @export
 * @class DynaDashboardUIService
 * @extends DynaDashboardUIServiceBase
 */
export class DynaDashboardUIService extends DynaDashboardUIServiceBase {

    /**
     * 基础UI服务实例
     * 
     * @private
     * @type { DynaDashboardUIService }
     * @memberof DynaDashboardUIService
     */
    private static basicUIServiceInstance: DynaDashboardUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof DynaDashboardUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of DynaDashboardUIService.
     * @memberof DynaDashboardUIService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { DynaDashboardUIService }
     * @memberof DynaDashboardUIService
     */
    static getInstance(opts?: IParam): DynaDashboardUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new DynaDashboardUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!DynaDashboardUIService.UIServiceMap.get(opts.srfdynainstid)) {
                DynaDashboardUIService.UIServiceMap.set(opts.srfdynainstid, new DynaDashboardUIService(opts));
            }
            return DynaDashboardUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default DynaDashboardUIService;