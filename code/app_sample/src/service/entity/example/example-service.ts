import { ExampleServiceBase } from './example-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class ExampleService
 * @extends ExampleServiceBase
 */
export class ExampleService extends ExampleServiceBase {
    /**
     * Creates an instance of ExampleService.
     * @memberof ExampleService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { ExampleService }
     * @memberof ExampleService
     */
    static getInstance(context?: any): ExampleService {
        return new ExampleService({ context: context });
    }
}
export default ExampleService;