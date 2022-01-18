import { IParam } from '@core';
import { Example2ServiceBase } from './example2-service-base';

/**
 * 示例明细服务
 *
 * @export
 * @class Example2Service
 * @extends Example2ServiceBase
 */
export class Example2Service extends Example2ServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { Example2Service }
     * @memberof Example2Service
     */
    private static basicDataServiceInstance: Example2Service;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof Example2Service
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of Example2Service.
     * @memberof Example2Service
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { Example2Service }
     * @memberof Example2Service
     */
    static getInstance(opts?: IParam): Example2Service {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new Example2Service(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!Example2Service.dataServiceMap.get(opts.srfdynainstid)) {
                Example2Service.dataServiceMap.set(opts.srfdynainstid, new Example2Service(opts));
            }
            return Example2Service.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default Example2Service;