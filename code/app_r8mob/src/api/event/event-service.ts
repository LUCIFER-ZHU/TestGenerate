import { IParam } from '@core';
import { EventServiceBase } from './event-service-base';

/**
 * 事件服务
 *
 * @export
 * @class EventService
 * @extends EventServiceBase
 */
export class EventService extends EventServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { EventService }
     * @memberof EventService
     */
    private static basicDataServiceInstance: EventService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof EventService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of EventService.
     * @memberof EventService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { EventService }
     * @memberof EventService
     */
    static getInstance(opts?: IParam): EventService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new EventService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!EventService.dataServiceMap.get(opts.srfdynainstid)) {
                EventService.dataServiceMap.set(opts.srfdynainstid, new EventService(opts));
            }
            return EventService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default EventService;