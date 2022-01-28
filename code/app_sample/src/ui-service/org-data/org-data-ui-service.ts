import { IParam } from '@core';
import { OrgDataUIServiceBase } from './org-data-ui-service-base';

/**
 * 组织数据UI服务
 *
 * @export
 * @class OrgDataUIService
 * @extends OrgDataUIServiceBase
 */
export class OrgDataUIService extends OrgDataUIServiceBase {

    /**
     * 基础UI服务实例
     * 
     * @private
     * @type { OrgDataUIService }
     * @memberof OrgDataUIService
     */
    private static basicUIServiceInstance: OrgDataUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof OrgDataUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of OrgDataUIService.
     * @memberof OrgDataUIService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { OrgDataUIService }
     * @memberof OrgDataUIService
     */
    static getInstance(opts?: IParam): OrgDataUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new OrgDataUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!OrgDataUIService.UIServiceMap.get(opts.srfdynainstid)) {
                OrgDataUIService.UIServiceMap.set(opts.srfdynainstid, new OrgDataUIService(opts));
            }
            return OrgDataUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default OrgDataUIService;