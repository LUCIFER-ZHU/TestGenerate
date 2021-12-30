import { OpportunityServiceBase } from './opportunity-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class OpportunityService
 * @extends OpportunityServiceBase
 */
export class OpportunityService extends OpportunityServiceBase {
    /**
     * Creates an instance of OpportunityService.
     * @memberof OpportunityService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): OpportunityService {
        return new OpportunityService({ context: context });
    }
}
export default OpportunityService;