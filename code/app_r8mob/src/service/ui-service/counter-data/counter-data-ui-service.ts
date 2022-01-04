import { CounterDataUIServiceBase } from './counter-data-ui-service-base';

/**
 * 计数器数据UI服务
 *
 * @export
 * @class CounterDataUIService
 * @extends CounterDataUIServiceBase
 */
export class CounterDataUIService extends CounterDataUIServiceBase {
    /**
     * Creates an instance of CounterDataUIService.
     * @memberof CounterDataUIService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { CounterDataUIService }
     * @memberof CounterDataUIService
     */
    static getInstance(context?: any): CounterDataUIService {
        return new CounterDataUIService({ context: context });
    }
}
export default CounterDataUIService;