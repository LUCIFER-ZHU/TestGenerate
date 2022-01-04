import { ProductCategoryUIServiceBase } from './product-category-ui-service-base';

/**
 * 产品类别UI服务
 *
 * @export
 * @class ProductCategoryUIService
 * @extends ProductCategoryUIServiceBase
 */
export class ProductCategoryUIService extends ProductCategoryUIServiceBase {
    /**
     * Creates an instance of ProductCategoryUIService.
     * @memberof ProductCategoryUIService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { ProductCategoryUIService }
     * @memberof ProductCategoryUIService
     */
    static getInstance(context?: any): ProductCategoryUIService {
        return new ProductCategoryUIService({ context: context });
    }
}
export default ProductCategoryUIService;