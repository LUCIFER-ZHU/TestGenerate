import { IParam } from '@core';
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
     * 基础UI服务实例
     * 
     * @private
     * @type { Example2UIService }
     * @memberof Example2UIService
     */
    private static basicUIServiceInstance: Example2UIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof Example2UIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of Example2UIService.
     * @memberof Example2UIService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): Example2UIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new Example2UIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!Example2UIService.UIServiceMap.get(opts.srfdynainstid)) {
                Example2UIService.UIServiceMap.set(opts.srfdynainstid, new Example2UIService(opts));
            }
            return Example2UIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default Example2UIService;