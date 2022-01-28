import { IParam } from '@core';
import { LogicValidData2ServiceBase } from './logic-valid-data2-service-base';

/**
 * 示例数据（启用逻辑删除）（主键数值）服务
 *
 * @export
 * @class LogicValidData2Service
 * @extends LogicValidData2ServiceBase
 */
export class LogicValidData2Service extends LogicValidData2ServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { LogicValidData2Service }
     * @memberof LogicValidData2Service
     */
    private static basicDataServiceInstance: LogicValidData2Service;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof LogicValidData2Service
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of LogicValidData2Service.
     * @memberof LogicValidData2Service
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { LogicValidData2Service }
     * @memberof LogicValidData2Service
     */
    static getInstance(opts?: IParam): LogicValidData2Service {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new LogicValidData2Service(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!LogicValidData2Service.dataServiceMap.get(opts.srfdynainstid)) {
                LogicValidData2Service.dataServiceMap.set(opts.srfdynainstid, new LogicValidData2Service(opts));
            }
            return LogicValidData2Service.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default LogicValidData2Service;