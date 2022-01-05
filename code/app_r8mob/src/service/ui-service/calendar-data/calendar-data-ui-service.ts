import { CalendarDataUIServiceBase } from './calendar-data-ui-service-base';

/**
 * 日历示例数据UI服务
 *
 * @export
 * @class CalendarDataUIService
 * @extends CalendarDataUIServiceBase
 */
export class CalendarDataUIService extends CalendarDataUIServiceBase {
    /**
     * Creates an instance of CalendarDataUIService.
     * @memberof CalendarDataUIService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { CalendarDataUIService }
     * @memberof CalendarDataUIService
     */
    static getInstance(context?: any): CalendarDataUIService {
        return new CalendarDataUIService({ context: context });
    }
}
export default CalendarDataUIService;