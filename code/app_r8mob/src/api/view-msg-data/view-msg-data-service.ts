import { IParam } from '@core';
import { ViewMsgDataServiceBase } from './view-msg-data-service-base';

/**
 * 视图消息数据服务
 *
 * @export
 * @class ViewMsgDataService
 * @extends ViewMsgDataServiceBase
 */
export class ViewMsgDataService extends ViewMsgDataServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { ViewMsgDataService }
     * @memberof ViewMsgDataService
     */
    private static basicDataServiceInstance: ViewMsgDataService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof ViewMsgDataService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of ViewMsgDataService.
     * @memberof ViewMsgDataService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): ViewMsgDataService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new ViewMsgDataService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!ViewMsgDataService.dataServiceMap.get(opts.srfdynainstid)) {
                ViewMsgDataService.dataServiceMap.set(opts.srfdynainstid, new ViewMsgDataService(opts));
            }
            return ViewMsgDataService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default ViewMsgDataService;