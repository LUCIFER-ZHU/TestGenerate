import { IParam } from '@core';
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
     * 基础UI服务实例
     * 
     * @private
     * @type { LeaveApplicationUIService }
     * @memberof LeaveApplicationUIService
     */
    private static basicUIServiceInstance: LeaveApplicationUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof LeaveApplicationUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of LeaveApplicationUIService.
     * @memberof LeaveApplicationUIService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): LeaveApplicationUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new LeaveApplicationUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!LeaveApplicationUIService.UIServiceMap.get(opts.srfdynainstid)) {
                LeaveApplicationUIService.UIServiceMap.set(opts.srfdynainstid, new LeaveApplicationUIService(opts));
            }
            return LeaveApplicationUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default LeaveApplicationUIService;