import { IParam } from '@core';
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
     * 基础UI服务实例
     * 
     * @private
     * @type { ViewMsgDataUIService }
     * @memberof ViewMsgDataUIService
     */
    private static basicUIServiceInstance: ViewMsgDataUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof ViewMsgDataUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of ViewMsgDataUIService.
     * @memberof ViewMsgDataUIService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): ViewMsgDataUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new ViewMsgDataUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!ViewMsgDataUIService.UIServiceMap.get(opts.srfdynainstid)) {
                ViewMsgDataUIService.UIServiceMap.set(opts.srfdynainstid, new ViewMsgDataUIService(opts));
            }
            return ViewMsgDataUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default ViewMsgDataUIService;