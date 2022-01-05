import { LogicValidDataServiceBase } from './logic-valid-data-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class LogicValidDataService
 * @extends LogicValidDataServiceBase
 */
export class LogicValidDataService extends LogicValidDataServiceBase {
    /**
     * Creates an instance of LogicValidDataService.
     * @memberof LogicValidDataService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): LogicValidDataService {
        return new LogicValidDataService({ context: context });
    }
}
export default LogicValidDataService;