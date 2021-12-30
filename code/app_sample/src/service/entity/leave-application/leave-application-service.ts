import { LeaveApplicationServiceBase } from './leave-application-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class LeaveApplicationService
 * @extends LeaveApplicationServiceBase
 */
export class LeaveApplicationService extends LeaveApplicationServiceBase {
    /**
     * Creates an instance of LeaveApplicationService.
     * @memberof LeaveApplicationService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { LeaveApplicationService }
     * @memberof LeaveApplicationService
     */
    static getInstance(context?: any): LeaveApplicationService {
        return new LeaveApplicationService({ context: context });
    }
}
export default LeaveApplicationService;