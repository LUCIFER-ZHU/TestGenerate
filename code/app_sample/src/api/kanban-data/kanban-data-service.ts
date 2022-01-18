import { IParam } from '@core';
import { KanbanDataServiceBase } from './kanban-data-service-base';

/**
 * 看板数据服务
 *
 * @export
 * @class KanbanDataService
 * @extends KanbanDataServiceBase
 */
export class KanbanDataService extends KanbanDataServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { KanbanDataService }
     * @memberof KanbanDataService
     */
    private static basicDataServiceInstance: KanbanDataService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof KanbanDataService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of KanbanDataService.
     * @memberof KanbanDataService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { KanbanDataService }
     * @memberof KanbanDataService
     */
    static getInstance(opts?: IParam): KanbanDataService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new KanbanDataService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!KanbanDataService.dataServiceMap.get(opts.srfdynainstid)) {
                KanbanDataService.dataServiceMap.set(opts.srfdynainstid, new KanbanDataService(opts));
            }
            return KanbanDataService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default KanbanDataService;