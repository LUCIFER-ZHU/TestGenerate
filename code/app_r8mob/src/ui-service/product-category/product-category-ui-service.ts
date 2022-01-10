import { IParam } from '@core';
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
     * 基础UI服务实例
     * 
     * @private
     * @type { ProductCategoryUIService }
     * @memberof ProductCategoryUIService
     */
    private static basicUIServiceInstance: ProductCategoryUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof ProductCategoryUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of ProductCategoryUIService.
     * @memberof ProductCategoryUIService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): ProductCategoryUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new ProductCategoryUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!ProductCategoryUIService.UIServiceMap.get(opts.srfdynainstid)) {
                ProductCategoryUIService.UIServiceMap.set(opts.srfdynainstid, new ProductCategoryUIService(opts));
            }
            return ProductCategoryUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default ProductCategoryUIService;