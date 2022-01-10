import { IParam } from '@core';
import { CounterDataServiceBase } from './counter-data-service-base';

/**
 * 计数器数据服务
 *
 * @export
 * @class CounterDataService
 * @extends CounterDataServiceBase
 */
export class CounterDataService extends CounterDataServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { CounterDataService }
     * @memberof CounterDataService
     */
    private static basicDataServiceInstance: CounterDataService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof CounterDataService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of CounterDataService.
     * @memberof CounterDataService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): CounterDataService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new CounterDataService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!CounterDataService.dataServiceMap.get(opts.srfdynainstid)) {
                CounterDataService.dataServiceMap.set(opts.srfdynainstid, new CounterDataService(opts));
            }
            return CounterDataService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default CounterDataService;