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
     * Creates an instance of OrgDataUIService.
     * @memberof OrgDataUIService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): OrgDataUIService {
        return new OrgDataUIService({ context: context });
    }
}
export default OrgDataUIService;