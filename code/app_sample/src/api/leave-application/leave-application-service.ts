import { IParam } from '@core';
import { LeaveApplicationServiceBase } from './leave-application-service-base';

/**
 * 请假申请服务
 *
 * @export
 * @class LeaveApplicationService
 * @extends LeaveApplicationServiceBase
 */
export class LeaveApplicationService extends LeaveApplicationServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { LeaveApplicationService }
     * @memberof LeaveApplicationService
     */
    private static basicDataServiceInstance: LeaveApplicationService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof LeaveApplicationService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of LeaveApplicationService.
     * @memberof LeaveApplicationService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): LeaveApplicationService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new LeaveApplicationService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!LeaveApplicationService.dataServiceMap.get(opts.srfdynainstid)) {
                LeaveApplicationService.dataServiceMap.set(opts.srfdynainstid, new LeaveApplicationService(opts));
            }
            return LeaveApplicationService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default LeaveApplicationService;