import { IParam } from '@core';
import { DynaDashboardServiceBase } from './dyna-dashboard-service-base';

/**
 * 动态数据看板服务
 *
 * @export
 * @class DynaDashboardService
 * @extends DynaDashboardServiceBase
 */
export class DynaDashboardService extends DynaDashboardServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { DynaDashboardService }
     * @memberof DynaDashboardService
     */
    private static basicDataServiceInstance: DynaDashboardService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof DynaDashboardService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of DynaDashboardService.
     * @memberof DynaDashboardService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { DynaDashboardService }
     * @memberof DynaDashboardService
     */
    static getInstance(opts?: IParam): DynaDashboardService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new DynaDashboardService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!DynaDashboardService.dataServiceMap.get(opts.srfdynainstid)) {
                DynaDashboardService.dataServiceMap.set(opts.srfdynainstid, new DynaDashboardService(opts));
            }
            return DynaDashboardService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default DynaDashboardService;