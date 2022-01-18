import { IParam } from '@core';
import { CounterData2ServiceBase } from './counter-data2-service-base';

/**
 * 计数器数据2服务
 *
 * @export
 * @class CounterData2Service
 * @extends CounterData2ServiceBase
 */
export class CounterData2Service extends CounterData2ServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { CounterData2Service }
     * @memberof CounterData2Service
     */
    private static basicDataServiceInstance: CounterData2Service;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof CounterData2Service
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of CounterData2Service.
     * @memberof CounterData2Service
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): CounterData2Service {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new CounterData2Service(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!CounterData2Service.dataServiceMap.get(opts.srfdynainstid)) {
                CounterData2Service.dataServiceMap.set(opts.srfdynainstid, new CounterData2Service(opts));
            }
            return CounterData2Service.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default CounterData2Service;