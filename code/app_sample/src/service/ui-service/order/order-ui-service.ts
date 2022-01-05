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
     * Creates an instance of OrderUIService.
     * @memberof OrderUIService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): OrderUIService {
        return new OrderUIService({ context: context });
    }
}
export default OrderUIService;