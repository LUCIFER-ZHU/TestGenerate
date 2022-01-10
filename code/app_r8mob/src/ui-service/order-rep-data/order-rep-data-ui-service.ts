import { IParam } from '@core';
import { OrderRepDataUIServiceBase } from './order-rep-data-ui-service-base';

/**
 * 订单报表数据UI服务
 *
 * @export
 * @class OrderRepDataUIService
 * @extends OrderRepDataUIServiceBase
 */
export class OrderRepDataUIService extends OrderRepDataUIServiceBase {

    /**
     * 基础UI服务实例
     * 
     * @private
     * @type { OrderRepDataUIService }
     * @memberof OrderRepDataUIService
     */
    private static basicUIServiceInstance: OrderRepDataUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof OrderRepDataUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of OrderRepDataUIService.
     * @memberof OrderRepDataUIService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { OrderRepDataUIService }
     * @memberof OrderRepDataUIService
     */
    static getInstance(opts?: IParam): OrderRepDataUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new OrderRepDataUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!OrderRepDataUIService.UIServiceMap.get(opts.srfdynainstid)) {
                OrderRepDataUIService.UIServiceMap.set(opts.srfdynainstid, new OrderRepDataUIService(opts));
            }
            return OrderRepDataUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default OrderRepDataUIService;