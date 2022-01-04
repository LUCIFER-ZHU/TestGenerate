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
     * Creates an instance of CustomerUIService.
     * @memberof CustomerUIService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): CustomerUIService {
        return new CustomerUIService({ context: context });
    }
}
export default CustomerUIService;