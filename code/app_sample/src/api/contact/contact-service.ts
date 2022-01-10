import { IParam } from '@core';
import { ContactServiceBase } from './contact-service-base';

/**
 * 联系人服务
 *
 * @export
 * @class ContactService
 * @extends ContactServiceBase
 */
export class ContactService extends ContactServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { ContactService }
     * @memberof ContactService
     */
    private static basicDataServiceInstance: ContactService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof ContactService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of ContactService.
     * @memberof ContactService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { ContactService }
     * @memberof ContactService
     */
    static getInstance(opts?: IParam): ContactService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new ContactService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!ContactService.dataServiceMap.get(opts.srfdynainstid)) {
                ContactService.dataServiceMap.set(opts.srfdynainstid, new ContactService(opts));
            }
            return ContactService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default ContactService;