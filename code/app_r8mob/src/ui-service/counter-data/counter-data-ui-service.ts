import { IParam } from '@core';
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
     * 基础UI服务实例
     * 
     * @private
     * @type { CounterDataUIService }
     * @memberof CounterDataUIService
     */
    private static basicUIServiceInstance: CounterDataUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof CounterDataUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of CounterDataUIService.
     * @memberof CounterDataUIService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): CounterDataUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new CounterDataUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!CounterDataUIService.UIServiceMap.get(opts.srfdynainstid)) {
                CounterDataUIService.UIServiceMap.set(opts.srfdynainstid, new CounterDataUIService(opts));
            }
            return CounterDataUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default CounterDataUIService;