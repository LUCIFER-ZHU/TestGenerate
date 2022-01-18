import { IParam } from '@core';
import { CalendarDataServiceBase } from './calendar-data-service-base';

/**
 * 日历示例数据服务
 *
 * @export
 * @class CalendarDataService
 * @extends CalendarDataServiceBase
 */
export class CalendarDataService extends CalendarDataServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { CalendarDataService }
     * @memberof CalendarDataService
     */
    private static basicDataServiceInstance: CalendarDataService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof CalendarDataService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of CalendarDataService.
     * @memberof CalendarDataService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): CalendarDataService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new CalendarDataService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!CalendarDataService.dataServiceMap.get(opts.srfdynainstid)) {
                CalendarDataService.dataServiceMap.set(opts.srfdynainstid, new CalendarDataService(opts));
            }
            return CalendarDataService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default CalendarDataService;