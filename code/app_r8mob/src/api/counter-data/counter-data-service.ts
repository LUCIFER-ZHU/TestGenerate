import { CounterDataServiceBase } from './counter-data-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class CounterDataService
 * @extends CounterDataServiceBase
 */
export class CounterDataService extends CounterDataServiceBase {
    /**
     * Creates an instance of CounterDataService.
     * @memberof CounterDataService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { CounterDataService }
     * @memberof CounterDataService
     */
    static getInstance(context?: any): CounterDataService {
        return new CounterDataService({ context: context });
    }
}
export default CounterDataService;