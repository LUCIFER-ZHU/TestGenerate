import { ViewMsgDataServiceBase } from './view-msg-data-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class ViewMsgDataService
 * @extends ViewMsgDataServiceBase
 */
export class ViewMsgDataService extends ViewMsgDataServiceBase {
    /**
     * Creates an instance of ViewMsgDataService.
     * @memberof ViewMsgDataService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { ViewMsgDataService }
     * @memberof ViewMsgDataService
     */
    static getInstance(context?: any): ViewMsgDataService {
        return new ViewMsgDataService({ context: context });
    }
}
export default ViewMsgDataService;