import { ViewMsgDataUIServiceBase } from './view-msg-data-ui-service-base';

/**
 * 视图消息数据UI服务
 *
 * @export
 * @class ViewMsgDataUIService
 * @extends ViewMsgDataUIServiceBase
 */
export class ViewMsgDataUIService extends ViewMsgDataUIServiceBase {
    /**
     * Creates an instance of ViewMsgDataUIService.
     * @memberof ViewMsgDataUIService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { ViewMsgDataUIService }
     * @memberof ViewMsgDataUIService
     */
    static getInstance(context?: any): ViewMsgDataUIService {
        return new ViewMsgDataUIService({ context: context });
    }
}
export default ViewMsgDataUIService;