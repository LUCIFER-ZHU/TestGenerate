import { ContactServiceBase } from './contact-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class ContactService
 * @extends ContactServiceBase
 */
export class ContactService extends ContactServiceBase {
    /**
     * Creates an instance of ContactService.
     * @memberof ContactService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): ContactService {
        return new ContactService({ context: context });
    }
}
export default ContactService;