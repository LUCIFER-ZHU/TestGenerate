import { IParam } from '@core';
import { LogicValidData2UIServiceBase } from './logic-valid-data2-ui-service-base';

/**
 * 示例数据（启用逻辑删除）（主键数值）UI服务
 *
 * @export
 * @class LogicValidData2UIService
 * @extends LogicValidData2UIServiceBase
 */
export class LogicValidData2UIService extends LogicValidData2UIServiceBase {

    /**
     * 基础UI服务实例
     * 
     * @private
     * @type { LogicValidData2UIService }
     * @memberof LogicValidData2UIService
     */
    private static basicUIServiceInstance: LogicValidData2UIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof LogicValidData2UIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of LogicValidData2UIService.
     * @memberof LogicValidData2UIService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { LogicValidData2UIService }
     * @memberof LogicValidData2UIService
     */
    static getInstance(opts?: IParam): LogicValidData2UIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new LogicValidData2UIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!LogicValidData2UIService.UIServiceMap.get(opts.srfdynainstid)) {
                LogicValidData2UIService.UIServiceMap.set(opts.srfdynainstid, new LogicValidData2UIService(opts));
            }
            return LogicValidData2UIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default LogicValidData2UIService;