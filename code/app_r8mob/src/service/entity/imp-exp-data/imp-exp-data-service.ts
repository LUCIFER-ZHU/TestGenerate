import { ImpExpDataServiceBase } from './imp-exp-data-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class ImpExpDataService
 * @extends ImpExpDataServiceBase
 */
export class ImpExpDataService extends ImpExpDataServiceBase {
    /**
     * Creates an instance of ImpExpDataService.
     * @memberof ImpExpDataService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { ImpExpDataService }
     * @memberof ImpExpDataService
     */
    static getInstance(context?: any): ImpExpDataService {
        return new ImpExpDataService({ context: context });
    }
}
export default ImpExpDataService;