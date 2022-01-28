import { IParam } from '@core';
import { OrderUIServiceBase } from './order-ui-service-base';

/**
 * 订单UI服务
 *
 * @export
 * @class OrderUIService
 * @extends OrderUIServiceBase
 */
export class OrderUIService extends OrderUIServiceBase {

    /**
     * 基础UI服务实例
     * 
     * @private
     * @type { OrderUIService }
     * @memberof OrderUIService
     */
    private static basicUIServiceInstance: OrderUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof OrderUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of OrderUIService.
     * @memberof OrderUIService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { OrderUIService }
     * @memberof OrderUIService
     */
    static getInstance(opts?: IParam): OrderUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new OrderUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!OrderUIService.UIServiceMap.get(opts.srfdynainstid)) {
                OrderUIService.UIServiceMap.set(opts.srfdynainstid, new OrderUIService(opts));
            }
            return OrderUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default OrderUIService;