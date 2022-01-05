import { DeptDataServiceBase } from './dept-data-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class DeptDataService
 * @extends DeptDataServiceBase
 */
export class DeptDataService extends DeptDataServiceBase {
    /**
     * Creates an instance of DeptDataService.
     * @memberof DeptDataService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): DeptDataService {
        return new DeptDataService({ context: context });
    }
}
export default DeptDataService;