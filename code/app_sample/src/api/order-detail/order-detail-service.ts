import { IParam } from '@core';
import { OrderDetailServiceBase } from './order-detail-service-base';

/**
 * 订单明细服务
 *
 * @export
 * @class OrderDetailService
 * @extends OrderDetailServiceBase
 */
export class OrderDetailService extends OrderDetailServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { OrderDetailService }
     * @memberof OrderDetailService
     */
    private static basicDataServiceInstance: OrderDetailService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof OrderDetailService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of OrderDetailService.
     * @memberof OrderDetailService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { OrderDetailService }
     * @memberof OrderDetailService
     */
    static getInstance(opts?: IParam): OrderDetailService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new OrderDetailService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!OrderDetailService.dataServiceMap.get(opts.srfdynainstid)) {
                OrderDetailService.dataServiceMap.set(opts.srfdynainstid, new OrderDetailService(opts));
            }
            return OrderDetailService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default OrderDetailService;