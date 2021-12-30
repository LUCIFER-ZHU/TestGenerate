import { OrderDetailServiceBase } from './order-detail-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class OrderDetailService
 * @extends OrderDetailServiceBase
 */
export class OrderDetailService extends OrderDetailServiceBase {
    /**
     * Creates an instance of OrderDetailService.
     * @memberof OrderDetailService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): OrderDetailService {
        return new OrderDetailService({ context: context });
    }
}
export default OrderDetailService;