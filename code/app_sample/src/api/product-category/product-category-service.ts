import { IParam } from '@core';
import { ProductCategoryServiceBase } from './product-category-service-base';

/**
 * 产品类别服务
 *
 * @export
 * @class ProductCategoryService
 * @extends ProductCategoryServiceBase
 */
export class ProductCategoryService extends ProductCategoryServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { ProductCategoryService }
     * @memberof ProductCategoryService
     */
    private static basicDataServiceInstance: ProductCategoryService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof ProductCategoryService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of ProductCategoryService.
     * @memberof ProductCategoryService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): ProductCategoryService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new ProductCategoryService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!ProductCategoryService.dataServiceMap.get(opts.srfdynainstid)) {
                ProductCategoryService.dataServiceMap.set(opts.srfdynainstid, new ProductCategoryService(opts));
            }
            return ProductCategoryService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default ProductCategoryService;