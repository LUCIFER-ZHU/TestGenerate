import { ExampleUIServiceBase } from './example-ui-service-base';

/**
 * 示例UI服务
 *
 * @export
 * @class ExampleUIService
 * @extends ExampleUIServiceBase
 */
export class ExampleUIService extends ExampleUIServiceBase {
    /**
     * Creates an instance of ExampleUIService.
     * @memberof ExampleUIService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { ExampleUIService }
     * @memberof ExampleUIService
     */
    static getInstance(context?: any): ExampleUIService {
        return new ExampleUIService({ context: context });
    }
}
export default ExampleUIService;