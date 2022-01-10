import { IParam } from '@core';
import { ContactUIServiceBase } from './contact-ui-service-base';

/**
 * 联系人UI服务
 *
 * @export
 * @class ContactUIService
 * @extends ContactUIServiceBase
 */
export class ContactUIService extends ContactUIServiceBase {

    /**
     * 基础UI服务实例
     * 
     * @private
     * @type { ContactUIService }
     * @memberof ContactUIService
     */
    private static basicUIServiceInstance: ContactUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof ContactUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of ContactUIService.
     * @memberof ContactUIService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { ContactUIService }
     * @memberof ContactUIService
     */
    static getInstance(opts?: IParam): ContactUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new ContactUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!ContactUIService.UIServiceMap.get(opts.srfdynainstid)) {
                ContactUIService.UIServiceMap.set(opts.srfdynainstid, new ContactUIService(opts));
            }
            return ContactUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default ContactUIService;