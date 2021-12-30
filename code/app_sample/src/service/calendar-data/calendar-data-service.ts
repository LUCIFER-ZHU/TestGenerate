import { CalendarDataServiceBase } from './calendar-data-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class CalendarDataService
 * @extends CalendarDataServiceBase
 */
export class CalendarDataService extends CalendarDataServiceBase {
    /**
     * Creates an instance of CalendarDataService.
     * @memberof CalendarDataService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { CalendarDataService }
     * @memberof CalendarDataService
     */
    static getInstance(context?: any): CalendarDataService {
        return new CalendarDataService({ context: context });
    }
}
export default CalendarDataService;