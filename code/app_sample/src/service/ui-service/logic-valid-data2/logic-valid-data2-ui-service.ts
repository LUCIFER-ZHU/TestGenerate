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
     * Creates an instance of LogicValidData2UIService.
     * @memberof LogicValidData2UIService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): LogicValidData2UIService {
        return new LogicValidData2UIService({ context: context });
    }
}
export default LogicValidData2UIService;