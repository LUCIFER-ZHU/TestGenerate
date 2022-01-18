import { IParam } from '@core';
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
     * 基础UI服务实例
     * 
     * @private
     * @type { CalendarDataUIService }
     * @memberof CalendarDataUIService
     */
    private static basicUIServiceInstance: CalendarDataUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof CalendarDataUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of CalendarDataUIService.
     * @memberof CalendarDataUIService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): CalendarDataUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new CalendarDataUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!CalendarDataUIService.UIServiceMap.get(opts.srfdynainstid)) {
                CalendarDataUIService.UIServiceMap.set(opts.srfdynainstid, new CalendarDataUIService(opts));
            }
            return CalendarDataUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default CalendarDataUIService;