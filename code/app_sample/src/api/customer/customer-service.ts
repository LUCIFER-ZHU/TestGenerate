import { IParam } from '@core';
import { CustomerServiceBase } from './customer-service-base';

/**
 * 客户服务
 *
 * @export
 * @class CustomerService
 * @extends CustomerServiceBase
 */
export class CustomerService extends CustomerServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { CustomerService }
     * @memberof CustomerService
     */
    private static basicDataServiceInstance: CustomerService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof CustomerService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of CustomerService.
     * @memberof CustomerService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { CustomerService }
     * @memberof CustomerService
     */
    static getInstance(opts?: IParam): CustomerService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new CustomerService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!CustomerService.dataServiceMap.get(opts.srfdynainstid)) {
                CustomerService.dataServiceMap.set(opts.srfdynainstid, new CustomerService(opts));
            }
            return CustomerService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default CustomerService;