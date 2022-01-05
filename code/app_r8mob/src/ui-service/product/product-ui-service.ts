import { ProductUIServiceBase } from './product-ui-service-base';

/**
 * 产品UI服务
 *
 * @export
 * @class ProductUIService
 * @extends ProductUIServiceBase
 */
export class ProductUIService extends ProductUIServiceBase {
    /**
     * Creates an instance of ProductUIService.
     * @memberof ProductUIService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { ProductUIService }
     * @memberof ProductUIService
     */
    static getInstance(context?: any): ProductUIService {
        return new ProductUIService({ context: context });
    }
}
export default ProductUIService;