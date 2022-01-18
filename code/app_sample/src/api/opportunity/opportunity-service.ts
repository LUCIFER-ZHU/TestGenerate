import { IParam } from '@core';
import { OpportunityServiceBase } from './opportunity-service-base';

/**
 * 商机服务
 *
 * @export
 * @class OpportunityService
 * @extends OpportunityServiceBase
 */
export class OpportunityService extends OpportunityServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { OpportunityService }
     * @memberof OpportunityService
     */
    private static basicDataServiceInstance: OpportunityService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof OpportunityService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of OpportunityService.
     * @memberof OpportunityService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { OpportunityService }
     * @memberof OpportunityService
     */
    static getInstance(opts?: IParam): OpportunityService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new OpportunityService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!OpportunityService.dataServiceMap.get(opts.srfdynainstid)) {
                OpportunityService.dataServiceMap.set(opts.srfdynainstid, new OpportunityService(opts));
            }
            return OpportunityService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default OpportunityService;