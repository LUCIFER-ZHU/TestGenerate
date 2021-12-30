import { LogicValidData2ServiceBase } from './logic-valid-data2-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class LogicValidData2Service
 * @extends LogicValidData2ServiceBase
 */
export class LogicValidData2Service extends LogicValidData2ServiceBase {
    /**
     * Creates an instance of LogicValidData2Service.
     * @memberof LogicValidData2Service
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): LogicValidData2Service {
        return new LogicValidData2Service({ context: context });
    }
}
export default LogicValidData2Service;