import { IParam } from '@core';
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
     * 基础UI服务实例
     * 
     * @private
     * @type { CounterData2UIService }
     * @memberof CounterData2UIService
     */
    private static basicUIServiceInstance: CounterData2UIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof CounterData2UIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of CounterData2UIService.
     * @memberof CounterData2UIService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): CounterData2UIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new CounterData2UIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!CounterData2UIService.UIServiceMap.get(opts.srfdynainstid)) {
                CounterData2UIService.UIServiceMap.set(opts.srfdynainstid, new CounterData2UIService(opts));
            }
            return CounterData2UIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default CounterData2UIService;