import { IParam } from '@core';
import { LogicValidDataServiceBase } from './logic-valid-data-service-base';

/**
 * 示例数据（启用逻辑删除）服务
 *
 * @export
 * @class LogicValidDataService
 * @extends LogicValidDataServiceBase
 */
export class LogicValidDataService extends LogicValidDataServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { LogicValidDataService }
     * @memberof LogicValidDataService
     */
    private static basicDataServiceInstance: LogicValidDataService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof LogicValidDataService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of LogicValidDataService.
     * @memberof LogicValidDataService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { LogicValidDataService }
     * @memberof LogicValidDataService
     */
    static getInstance(opts?: IParam): LogicValidDataService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new LogicValidDataService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!LogicValidDataService.dataServiceMap.get(opts.srfdynainstid)) {
                LogicValidDataService.dataServiceMap.set(opts.srfdynainstid, new LogicValidDataService(opts));
            }
            return LogicValidDataService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default LogicValidDataService;