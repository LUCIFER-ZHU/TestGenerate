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
     * Creates an instance of KanbanDataUIService.
     * @memberof KanbanDataUIService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): KanbanDataUIService {
        return new KanbanDataUIService({ context: context });
    }
}
export default KanbanDataUIService;