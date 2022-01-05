import { ProductServiceBase } from './product-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class ProductService
 * @extends ProductServiceBase
 */
export class ProductService extends ProductServiceBase {
    /**
     * Creates an instance of ProductService.
     * @memberof ProductService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { ProductService }
     * @memberof ProductService
     */
    static getInstance(context?: any): ProductService {
        return new ProductService({ context: context });
    }
}
export default ProductService;