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
     * Creates an instance of OrderDetailUIService.
     * @memberof OrderDetailUIService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): OrderDetailUIService {
        return new OrderDetailUIService({ context: context });
    }
}
export default OrderDetailUIService;