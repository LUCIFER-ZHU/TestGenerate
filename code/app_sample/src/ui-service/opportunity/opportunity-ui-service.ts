import { IParam } from '@core';
import { OpportunityUIServiceBase } from './opportunity-ui-service-base';

/**
 * 商机UI服务
 *
 * @export
 * @class OpportunityUIService
 * @extends OpportunityUIServiceBase
 */
export class OpportunityUIService extends OpportunityUIServiceBase {

    /**
     * 基础UI服务实例
     * 
     * @private
     * @type { OpportunityUIService }
     * @memberof OpportunityUIService
     */
    private static basicUIServiceInstance: OpportunityUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof OpportunityUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of OpportunityUIService.
     * @memberof OpportunityUIService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { OpportunityUIService }
     * @memberof OpportunityUIService
     */
    static getInstance(opts?: IParam): OpportunityUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new OpportunityUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!OpportunityUIService.UIServiceMap.get(opts.srfdynainstid)) {
                OpportunityUIService.UIServiceMap.set(opts.srfdynainstid, new OpportunityUIService(opts));
            }
            return OpportunityUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default OpportunityUIService;