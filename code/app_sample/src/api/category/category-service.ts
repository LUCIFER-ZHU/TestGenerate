import { IParam } from '@core';
import { CategoryServiceBase } from './category-service-base';

/**
 * 类别服务
 *
 * @export
 * @class CategoryService
 * @extends CategoryServiceBase
 */
export class CategoryService extends CategoryServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { CategoryService }
     * @memberof CategoryService
     */
    private static basicDataServiceInstance: CategoryService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof CategoryService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of CategoryService.
     * @memberof CategoryService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { CategoryService }
     * @memberof CategoryService
     */
    static getInstance(opts?: IParam): CategoryService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new CategoryService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!CategoryService.dataServiceMap.get(opts.srfdynainstid)) {
                CategoryService.dataServiceMap.set(opts.srfdynainstid, new CategoryService(opts));
            }
            return CategoryService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default CategoryService;