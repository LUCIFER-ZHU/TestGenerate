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
     * Creates an instance of CategoryUIService.
     * @memberof CategoryUIService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): CategoryUIService {
        return new CategoryUIService({ context: context });
    }
}
export default CategoryUIService;