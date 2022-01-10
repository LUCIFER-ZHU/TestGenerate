import { IParam } from '@core';
import { DeptDataUIServiceBase } from './dept-data-ui-service-base';

/**
 * 部门数据UI服务
 *
 * @export
 * @class DeptDataUIService
 * @extends DeptDataUIServiceBase
 */
export class DeptDataUIService extends DeptDataUIServiceBase {

    /**
     * 基础UI服务实例
     * 
     * @private
     * @type { DeptDataUIService }
     * @memberof DeptDataUIService
     */
    private static basicUIServiceInstance: DeptDataUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof DeptDataUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of DeptDataUIService.
     * @memberof DeptDataUIService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { DeptDataUIService }
     * @memberof DeptDataUIService
     */
    static getInstance(opts?: IParam): DeptDataUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new DeptDataUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!DeptDataUIService.UIServiceMap.get(opts.srfdynainstid)) {
                DeptDataUIService.UIServiceMap.set(opts.srfdynainstid, new DeptDataUIService(opts));
            }
            return DeptDataUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default DeptDataUIService;