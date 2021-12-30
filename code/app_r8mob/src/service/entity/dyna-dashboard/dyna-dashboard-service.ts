import { DynaDashboardServiceBase } from './dyna-dashboard-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class DynaDashboardService
 * @extends DynaDashboardServiceBase
 */
export class DynaDashboardService extends DynaDashboardServiceBase {
    /**
     * Creates an instance of DynaDashboardService.
     * @memberof DynaDashboardService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): DynaDashboardService {
        return new DynaDashboardService({ context: context });
    }
}
export default DynaDashboardService;