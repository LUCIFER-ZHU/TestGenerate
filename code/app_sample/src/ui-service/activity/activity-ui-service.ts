import { IParam } from '@core';
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
     * 基础UI服务实例
     * 
     * @private
     * @type { ActivityUIService }
     * @memberof ActivityUIService
     */
    private static basicUIServiceInstance: ActivityUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof ActivityUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of ActivityUIService.
     * @memberof ActivityUIService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): ActivityUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new ActivityUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!ActivityUIService.UIServiceMap.get(opts.srfdynainstid)) {
                ActivityUIService.UIServiceMap.set(opts.srfdynainstid, new ActivityUIService(opts));
            }
            return ActivityUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default ActivityUIService;