import { IParam } from '@core';
import { ActivityServiceBase } from './activity-service-base';

/**
 * 活动服务
 *
 * @export
 * @class ActivityService
 * @extends ActivityServiceBase
 */
export class ActivityService extends ActivityServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { ActivityService }
     * @memberof ActivityService
     */
    private static basicDataServiceInstance: ActivityService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof ActivityService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of ActivityService.
     * @memberof ActivityService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): ActivityService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new ActivityService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!ActivityService.dataServiceMap.get(opts.srfdynainstid)) {
                ActivityService.dataServiceMap.set(opts.srfdynainstid, new ActivityService(opts));
            }
            return ActivityService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default ActivityService;