import { IParam } from '@core';
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
     * 基础UI服务实例
     * 
     * @private
     * @type { ProductUIService }
     * @memberof ProductUIService
     */
    private static basicUIServiceInstance: ProductUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof ProductUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of ProductUIService.
     * @memberof ProductUIService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): ProductUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new ProductUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!ProductUIService.UIServiceMap.get(opts.srfdynainstid)) {
                ProductUIService.UIServiceMap.set(opts.srfdynainstid, new ProductUIService(opts));
            }
            return ProductUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default ProductUIService;