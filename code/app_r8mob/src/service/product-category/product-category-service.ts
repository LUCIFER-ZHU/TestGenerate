import { ProductCategoryServiceBase } from './product-category-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class ProductCategoryService
 * @extends ProductCategoryServiceBase
 */
export class ProductCategoryService extends ProductCategoryServiceBase {
    /**
     * Creates an instance of ProductCategoryService.
     * @memberof ProductCategoryService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { ProductCategoryService }
     * @memberof ProductCategoryService
     */
    static getInstance(context?: any): ProductCategoryService {
        return new ProductCategoryService({ context: context });
    }
}
export default ProductCategoryService;