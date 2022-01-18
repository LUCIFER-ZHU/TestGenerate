import { IParam } from '@core';
import { OrderDetailUIServiceBase } from './order-detail-ui-service-base';

/**
 * 订单明细UI服务
 *
 * @export
 * @class OrderDetailUIService
 * @extends OrderDetailUIServiceBase
 */
export class OrderDetailUIService extends OrderDetailUIServiceBase {

    /**
     * 基础UI服务实例
     * 
     * @private
     * @type { OrderDetailUIService }
     * @memberof OrderDetailUIService
     */
    private static basicUIServiceInstance: OrderDetailUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof OrderDetailUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of OrderDetailUIService.
     * @memberof OrderDetailUIService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { OrderDetailUIService }
     * @memberof OrderDetailUIService
     */
    static getInstance(opts?: IParam): OrderDetailUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new OrderDetailUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!OrderDetailUIService.UIServiceMap.get(opts.srfdynainstid)) {
                OrderDetailUIService.UIServiceMap.set(opts.srfdynainstid, new OrderDetailUIService(opts));
            }
            return OrderDetailUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default OrderDetailUIService;