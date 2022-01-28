import { IParam } from '@core';
import { ProductServiceBase } from './product-service-base';

/**
 * 产品服务
 *
 * @export
 * @class ProductService
 * @extends ProductServiceBase
 */
export class ProductService extends ProductServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { ProductService }
     * @memberof ProductService
     */
    private static basicDataServiceInstance: ProductService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof ProductService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of ProductService.
     * @memberof ProductService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): ProductService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new ProductService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!ProductService.dataServiceMap.get(opts.srfdynainstid)) {
                ProductService.dataServiceMap.set(opts.srfdynainstid, new ProductService(opts));
            }
            return ProductService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default ProductService;