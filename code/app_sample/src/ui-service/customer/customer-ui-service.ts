import { IParam } from '@core';
import { CustomerUIServiceBase } from './customer-ui-service-base';

/**
 * 客户UI服务
 *
 * @export
 * @class CustomerUIService
 * @extends CustomerUIServiceBase
 */
export class CustomerUIService extends CustomerUIServiceBase {

    /**
     * 基础UI服务实例
     * 
     * @private
     * @type { CustomerUIService }
     * @memberof CustomerUIService
     */
    private static basicUIServiceInstance: CustomerUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof CustomerUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of CustomerUIService.
     * @memberof CustomerUIService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { CustomerUIService }
     * @memberof CustomerUIService
     */
    static getInstance(opts?: IParam): CustomerUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new CustomerUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!CustomerUIService.UIServiceMap.get(opts.srfdynainstid)) {
                CustomerUIService.UIServiceMap.set(opts.srfdynainstid, new CustomerUIService(opts));
            }
            return CustomerUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default CustomerUIService;