import { IParam } from '@core';
import { PersonDataServiceBase } from './person-data-service-base';

/**
 * 人员数据服务
 *
 * @export
 * @class PersonDataService
 * @extends PersonDataServiceBase
 */
export class PersonDataService extends PersonDataServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { PersonDataService }
     * @memberof PersonDataService
     */
    private static basicDataServiceInstance: PersonDataService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof PersonDataService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of PersonDataService.
     * @memberof PersonDataService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): PersonDataService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new PersonDataService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!PersonDataService.dataServiceMap.get(opts.srfdynainstid)) {
                PersonDataService.dataServiceMap.set(opts.srfdynainstid, new PersonDataService(opts));
            }
            return PersonDataService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default PersonDataService;