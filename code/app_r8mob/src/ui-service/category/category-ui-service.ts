import { IParam } from '@core';
import { CategoryUIServiceBase } from './category-ui-service-base';

/**
 * 类别UI服务
 *
 * @export
 * @class CategoryUIService
 * @extends CategoryUIServiceBase
 */
export class CategoryUIService extends CategoryUIServiceBase {

    /**
     * 基础UI服务实例
     * 
     * @private
     * @type { CategoryUIService }
     * @memberof CategoryUIService
     */
    private static basicUIServiceInstance: CategoryUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof CategoryUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of CategoryUIService.
     * @memberof CategoryUIService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { CategoryUIService }
     * @memberof CategoryUIService
     */
    static getInstance(opts?: IParam): CategoryUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new CategoryUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!CategoryUIService.UIServiceMap.get(opts.srfdynainstid)) {
                CategoryUIService.UIServiceMap.set(opts.srfdynainstid, new CategoryUIService(opts));
            }
            return CategoryUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default CategoryUIService;