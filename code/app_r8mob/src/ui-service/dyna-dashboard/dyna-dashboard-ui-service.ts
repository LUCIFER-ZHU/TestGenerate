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
     * Creates an instance of DynaDashboardUIService.
     * @memberof DynaDashboardUIService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): DynaDashboardUIService {
        return new DynaDashboardUIService({ context: context });
    }
}
export default DynaDashboardUIService;