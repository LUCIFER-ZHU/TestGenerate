import { OrgDataServiceBase } from './org-data-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class OrgDataService
 * @extends OrgDataServiceBase
 */
export class OrgDataService extends OrgDataServiceBase {
    /**
     * Creates an instance of OrgDataService.
     * @memberof OrgDataService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): OrgDataService {
        return new OrgDataService({ context: context });
    }
}
export default OrgDataService;