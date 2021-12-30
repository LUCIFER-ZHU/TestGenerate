import { ActivityServiceBase } from './activity-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class ActivityService
 * @extends ActivityServiceBase
 */
export class ActivityService extends ActivityServiceBase {
    /**
     * Creates an instance of ActivityService.
     * @memberof ActivityService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { ActivityService }
     * @memberof ActivityService
     */
    static getInstance(context?: any): ActivityService {
        return new ActivityService({ context: context });
    }
}
export default ActivityService;