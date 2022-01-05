import { Example2UIServiceBase } from './example2-ui-service-base';

/**
 * 示例明细UI服务
 *
 * @export
 * @class Example2UIService
 * @extends Example2UIServiceBase
 */
export class Example2UIService extends Example2UIServiceBase {
    /**
     * Creates an instance of Example2UIService.
     * @memberof Example2UIService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { Example2UIService }
     * @memberof Example2UIService
     */
    static getInstance(context?: any): Example2UIService {
        return new Example2UIService({ context: context });
    }
}
export default Example2UIService;