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
     * Creates an instance of OrderRepDataUIService.
     * @memberof OrderRepDataUIService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): OrderRepDataUIService {
        return new OrderRepDataUIService({ context: context });
    }
}
export default OrderRepDataUIService;