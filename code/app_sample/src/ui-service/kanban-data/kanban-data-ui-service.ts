import { IParam } from '@core';
import { KanbanDataUIServiceBase } from './kanban-data-ui-service-base';

/**
 * 看板数据UI服务
 *
 * @export
 * @class KanbanDataUIService
 * @extends KanbanDataUIServiceBase
 */
export class KanbanDataUIService extends KanbanDataUIServiceBase {

    /**
     * 基础UI服务实例
     * 
     * @private
     * @type { KanbanDataUIService }
     * @memberof KanbanDataUIService
     */
    private static basicUIServiceInstance: KanbanDataUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof KanbanDataUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of KanbanDataUIService.
     * @memberof KanbanDataUIService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { KanbanDataUIService }
     * @memberof KanbanDataUIService
     */
    static getInstance(opts?: IParam): KanbanDataUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new KanbanDataUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!KanbanDataUIService.UIServiceMap.get(opts.srfdynainstid)) {
                KanbanDataUIService.UIServiceMap.set(opts.srfdynainstid, new KanbanDataUIService(opts));
            }
            return KanbanDataUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default KanbanDataUIService;