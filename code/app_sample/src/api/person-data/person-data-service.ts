import { PersonDataServiceBase } from './person-data-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class PersonDataService
 * @extends PersonDataServiceBase
 */
export class PersonDataService extends PersonDataServiceBase {
    /**
     * Creates an instance of PersonDataService.
     * @memberof PersonDataService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { PersonDataService }
     * @memberof PersonDataService
     */
    static getInstance(context?: any): PersonDataService {
        return new PersonDataService({ context: context });
    }
}
export default PersonDataService;