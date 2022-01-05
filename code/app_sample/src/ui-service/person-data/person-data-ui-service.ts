import { PersonDataUIServiceBase } from './person-data-ui-service-base';

/**
 * 人员数据UI服务
 *
 * @export
 * @class PersonDataUIService
 * @extends PersonDataUIServiceBase
 */
export class PersonDataUIService extends PersonDataUIServiceBase {
    /**
     * Creates an instance of PersonDataUIService.
     * @memberof PersonDataUIService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { PersonDataUIService }
     * @memberof PersonDataUIService
     */
    static getInstance(context?: any): PersonDataUIService {
        return new PersonDataUIService({ context: context });
    }
}
export default PersonDataUIService;