import { CategoryServiceBase } from './category-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class CategoryService
 * @extends CategoryServiceBase
 */
export class CategoryService extends CategoryServiceBase {
    /**
     * Creates an instance of CategoryService.
     * @memberof CategoryService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): CategoryService {
        return new CategoryService({ context: context });
    }
}
export default CategoryService;