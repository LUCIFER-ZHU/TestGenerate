import { CustomerServiceBase } from './customer-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class CustomerService
 * @extends CustomerServiceBase
 */
export class CustomerService extends CustomerServiceBase {
    /**
     * Creates an instance of CustomerService.
     * @memberof CustomerService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): CustomerService {
        return new CustomerService({ context: context });
    }
}
export default CustomerService;