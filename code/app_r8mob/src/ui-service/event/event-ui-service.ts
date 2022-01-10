import { IParam } from '@core';
import { EventUIServiceBase } from './event-ui-service-base';

/**
 * 事件UI服务
 *
 * @export
 * @class EventUIService
 * @extends EventUIServiceBase
 */
export class EventUIService extends EventUIServiceBase {

    /**
     * 基础UI服务实例
     * 
     * @private
     * @type { EventUIService }
     * @memberof EventUIService
     */
    private static basicUIServiceInstance: EventUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof EventUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of EventUIService.
     * @memberof EventUIService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { EventUIService }
     * @memberof EventUIService
     */
    static getInstance(opts?: IParam): EventUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new EventUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!EventUIService.UIServiceMap.get(opts.srfdynainstid)) {
                EventUIService.UIServiceMap.set(opts.srfdynainstid, new EventUIService(opts));
            }
            return EventUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default EventUIService;