import { IParam } from '@core';
import { OrderServiceBase } from './order-service-base';

/**
 * 订单服务
 *
 * @export
 * @class OrderService
 * @extends OrderServiceBase
 */
export class OrderService extends OrderServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { OrderService }
     * @memberof OrderService
     */
    private static basicDataServiceInstance: OrderService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof OrderService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of OrderService.
     * @memberof OrderService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { OrderService }
     * @memberof OrderService
     */
    static getInstance(opts?: IParam): OrderService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new OrderService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!OrderService.dataServiceMap.get(opts.srfdynainstid)) {
                OrderService.dataServiceMap.set(opts.srfdynainstid, new OrderService(opts));
            }
            return OrderService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default OrderService;