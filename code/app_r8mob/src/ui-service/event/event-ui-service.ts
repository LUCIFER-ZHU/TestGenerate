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
     * Creates an instance of EventUIService.
     * @memberof EventUIService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): EventUIService {
        return new EventUIService({ context: context });
    }
}
export default EventUIService;