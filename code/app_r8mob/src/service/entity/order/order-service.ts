import { OrderServiceBase } from './order-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class OrderService
 * @extends OrderServiceBase
 */
export class OrderService extends OrderServiceBase {
    /**
     * Creates an instance of OrderService.
     * @memberof OrderService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): OrderService {
        return new OrderService({ context: context });
    }
}
export default OrderService;