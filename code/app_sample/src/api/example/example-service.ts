import { IParam } from '@core';
import { ExampleServiceBase } from './example-service-base';

/**
 * 示例服务
 *
 * @export
 * @class ExampleService
 * @extends ExampleServiceBase
 */
export class ExampleService extends ExampleServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { ExampleService }
     * @memberof ExampleService
     */
    private static basicDataServiceInstance: ExampleService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof ExampleService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of ExampleService.
     * @memberof ExampleService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): ExampleService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new ExampleService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!ExampleService.dataServiceMap.get(opts.srfdynainstid)) {
                ExampleService.dataServiceMap.set(opts.srfdynainstid, new ExampleService(opts));
            }
            return ExampleService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default ExampleService;