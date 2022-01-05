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
     * Creates an instance of LogicValidDataUIService.
     * @memberof LogicValidDataUIService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): LogicValidDataUIService {
        return new LogicValidDataUIService({ context: context });
    }
}
export default LogicValidDataUIService;