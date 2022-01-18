import { IParam } from '@core';
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
     * 基础UI服务实例
     * 
     * @private
     * @type { ExampleUIService }
     * @memberof ExampleUIService
     */
    private static basicUIServiceInstance: ExampleUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof ExampleUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of ExampleUIService.
     * @memberof ExampleUIService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): ExampleUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new ExampleUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!ExampleUIService.UIServiceMap.get(opts.srfdynainstid)) {
                ExampleUIService.UIServiceMap.set(opts.srfdynainstid, new ExampleUIService(opts));
            }
            return ExampleUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default ExampleUIService;