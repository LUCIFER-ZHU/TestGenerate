import { IParam } from '@core';
import { DeptDataServiceBase } from './dept-data-service-base';

/**
 * 部门数据服务
 *
 * @export
 * @class DeptDataService
 * @extends DeptDataServiceBase
 */
export class DeptDataService extends DeptDataServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { DeptDataService }
     * @memberof DeptDataService
     */
    private static basicDataServiceInstance: DeptDataService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof DeptDataService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of DeptDataService.
     * @memberof DeptDataService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { DeptDataService }
     * @memberof DeptDataService
     */
    static getInstance(opts?: IParam): DeptDataService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new DeptDataService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!DeptDataService.dataServiceMap.get(opts.srfdynainstid)) {
                DeptDataService.dataServiceMap.set(opts.srfdynainstid, new DeptDataService(opts));
            }
            return DeptDataService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default DeptDataService;