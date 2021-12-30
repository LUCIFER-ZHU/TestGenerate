import { MapDataServiceBase } from './map-data-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class MapDataService
 * @extends MapDataServiceBase
 */
export class MapDataService extends MapDataServiceBase {
    /**
     * Creates an instance of MapDataService.
     * @memberof MapDataService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { MapDataService }
     * @memberof MapDataService
     */
    static getInstance(context?: any): MapDataService {
        return new MapDataService({ context: context });
    }
}
export default MapDataService;