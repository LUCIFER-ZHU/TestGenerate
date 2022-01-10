import { IParam } from '@core';
import { OrgDataServiceBase } from './org-data-service-base';

/**
 * 组织数据服务
 *
 * @export
 * @class OrgDataService
 * @extends OrgDataServiceBase
 */
export class OrgDataService extends OrgDataServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { OrgDataService }
     * @memberof OrgDataService
     */
    private static basicDataServiceInstance: OrgDataService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof OrgDataService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of OrgDataService.
     * @memberof OrgDataService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { OrgDataService }
     * @memberof OrgDataService
     */
    static getInstance(opts?: IParam): OrgDataService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new OrgDataService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!OrgDataService.dataServiceMap.get(opts.srfdynainstid)) {
                OrgDataService.dataServiceMap.set(opts.srfdynainstid, new OrgDataService(opts));
            }
            return OrgDataService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default OrgDataService;