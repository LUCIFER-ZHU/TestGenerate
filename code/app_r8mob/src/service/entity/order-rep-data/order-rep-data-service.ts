import { OrderRepDataServiceBase } from './order-rep-data-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class OrderRepDataService
 * @extends OrderRepDataServiceBase
 */
export class OrderRepDataService extends OrderRepDataServiceBase {
    /**
     * Creates an instance of OrderRepDataService.
     * @memberof OrderRepDataService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { OrderRepDataService }
     * @memberof OrderRepDataService
     */
    static getInstance(context?: any): OrderRepDataService {
        return new OrderRepDataService({ context: context });
    }
}
export default OrderRepDataService;