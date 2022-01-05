import { CounterData2ServiceBase } from './counter-data2-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class CounterData2Service
 * @extends CounterData2ServiceBase
 */
export class CounterData2Service extends CounterData2ServiceBase {
    /**
     * Creates an instance of CounterData2Service.
     * @memberof CounterData2Service
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { CounterData2Service }
     * @memberof CounterData2Service
     */
    static getInstance(context?: any): CounterData2Service {
        return new CounterData2Service({ context: context });
    }
}
export default CounterData2Service;