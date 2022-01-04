import { CounterData2UIServiceBase } from './counter-data2-ui-service-base';

/**
 * 计数器数据2UI服务
 *
 * @export
 * @class CounterData2UIService
 * @extends CounterData2UIServiceBase
 */
export class CounterData2UIService extends CounterData2UIServiceBase {
    /**
     * Creates an instance of CounterData2UIService.
     * @memberof CounterData2UIService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { CounterData2UIService }
     * @memberof CounterData2UIService
     */
    static getInstance(context?: any): CounterData2UIService {
        return new CounterData2UIService({ context: context });
    }
}
export default CounterData2UIService;