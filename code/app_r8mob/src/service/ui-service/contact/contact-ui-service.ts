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
     * Creates an instance of ContactUIService.
     * @memberof ContactUIService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): ContactUIService {
        return new ContactUIService({ context: context });
    }
}
export default ContactUIService;