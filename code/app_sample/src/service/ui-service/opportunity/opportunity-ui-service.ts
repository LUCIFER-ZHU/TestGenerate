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
     * Creates an instance of OpportunityUIService.
     * @memberof OpportunityUIService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): OpportunityUIService {
        return new OpportunityUIService({ context: context });
    }
}
export default OpportunityUIService;