import { EventServiceBase } from './event-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class EventService
 * @extends EventServiceBase
 */
export class EventService extends EventServiceBase {
    /**
     * Creates an instance of EventService.
     * @memberof EventService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): EventService {
        return new EventService({ context: context });
    }
}
export default EventService;