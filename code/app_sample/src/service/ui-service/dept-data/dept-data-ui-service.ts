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
     * Creates an instance of DeptDataUIService.
     * @memberof DeptDataUIService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): DeptDataUIService {
        return new DeptDataUIService({ context: context });
    }
}
export default DeptDataUIService;