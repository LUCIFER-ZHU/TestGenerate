import { IParam } from '@core';
import { OrderRepDataServiceBase } from './order-rep-data-service-base';

/**
 * 订单报表数据服务
 *
 * @export
 * @class OrderRepDataService
 * @extends OrderRepDataServiceBase
 */
export class OrderRepDataService extends OrderRepDataServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { OrderRepDataService }
     * @memberof OrderRepDataService
     */
    private static basicDataServiceInstance: OrderRepDataService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof OrderRepDataService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of OrderRepDataService.
     * @memberof OrderRepDataService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): OrderRepDataService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new OrderRepDataService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!OrderRepDataService.dataServiceMap.get(opts.srfdynainstid)) {
                OrderRepDataService.dataServiceMap.set(opts.srfdynainstid, new OrderRepDataService(opts));
            }
            return OrderRepDataService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default OrderRepDataService;