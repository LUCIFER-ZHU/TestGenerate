import { IParam } from '@core';
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
     * 基础UI服务实例
     * 
     * @private
     * @type { PersonDataUIService }
     * @memberof PersonDataUIService
     */
    private static basicUIServiceInstance: PersonDataUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof PersonDataUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of PersonDataUIService.
     * @memberof PersonDataUIService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): PersonDataUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new PersonDataUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!PersonDataUIService.UIServiceMap.get(opts.srfdynainstid)) {
                PersonDataUIService.UIServiceMap.set(opts.srfdynainstid, new PersonDataUIService(opts));
            }
            return PersonDataUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default PersonDataUIService;