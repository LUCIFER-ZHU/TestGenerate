import { LeaveApplicationUIServiceBase } from './leave-application-ui-service-base';

/**
 * 请假申请UI服务
 *
 * @export
 * @class LeaveApplicationUIService
 * @extends LeaveApplicationUIServiceBase
 */
export class LeaveApplicationUIService extends LeaveApplicationUIServiceBase {
    /**
     * Creates an instance of LeaveApplicationUIService.
     * @memberof LeaveApplicationUIService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { LeaveApplicationUIService }
     * @memberof LeaveApplicationUIService
     */
    static getInstance(context?: any): LeaveApplicationUIService {
        return new LeaveApplicationUIService({ context: context });
    }
}
export default LeaveApplicationUIService;