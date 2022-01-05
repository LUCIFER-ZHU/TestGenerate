import { KanbanDataServiceBase } from './kanban-data-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class KanbanDataService
 * @extends KanbanDataServiceBase
 */
export class KanbanDataService extends KanbanDataServiceBase {
    /**
     * Creates an instance of KanbanDataService.
     * @memberof KanbanDataService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): KanbanDataService {
        return new KanbanDataService({ context: context });
    }
}
export default KanbanDataService;