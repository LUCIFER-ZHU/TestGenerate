import { ActivityUIServiceBase } from './activity-ui-service-base';

/**
 * 活动UI服务
 *
 * @export
 * @class ActivityUIService
 * @extends ActivityUIServiceBase
 */
export class ActivityUIService extends ActivityUIServiceBase {
    /**
     * Creates an instance of ActivityUIService.
     * @memberof ActivityUIService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { ActivityUIService }
     * @memberof ActivityUIService
     */
    static getInstance(context?: any): ActivityUIService {
        return new ActivityUIService({ context: context });
    }
}
export default ActivityUIService;