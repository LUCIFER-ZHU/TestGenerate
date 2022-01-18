import { IParam } from '@core';
import { LogicValidDataUIServiceBase } from './logic-valid-data-ui-service-base';

/**
 * 示例数据（启用逻辑删除）UI服务
 *
 * @export
 * @class LogicValidDataUIService
 * @extends LogicValidDataUIServiceBase
 */
export class LogicValidDataUIService extends LogicValidDataUIServiceBase {

    /**
     * 基础UI服务实例
     * 
     * @private
     * @type { LogicValidDataUIService }
     * @memberof LogicValidDataUIService
     */
    private static basicUIServiceInstance: LogicValidDataUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof LogicValidDataUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of LogicValidDataUIService.
     * @memberof LogicValidDataUIService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { LogicValidDataUIService }
     * @memberof LogicValidDataUIService
     */
    static getInstance(opts?: IParam): LogicValidDataUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new LogicValidDataUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!LogicValidDataUIService.UIServiceMap.get(opts.srfdynainstid)) {
                LogicValidDataUIService.UIServiceMap.set(opts.srfdynainstid, new LogicValidDataUIService(opts));
            }
            return LogicValidDataUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default LogicValidDataUIService;