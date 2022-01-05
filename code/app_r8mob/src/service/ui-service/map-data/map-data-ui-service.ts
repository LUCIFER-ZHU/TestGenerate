import { MapDataUIServiceBase } from './map-data-ui-service-base';

/**
 * 地图示例数据UI服务
 *
 * @export
 * @class MapDataUIService
 * @extends MapDataUIServiceBase
 */
export class MapDataUIService extends MapDataUIServiceBase {
    /**
     * Creates an instance of MapDataUIService.
     * @memberof MapDataUIService
     */
    constructor(opts?: any) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { MapDataUIService }
     * @memberof MapDataUIService
     */
    static getInstance(context?: any): MapDataUIService {
        return new MapDataUIService({ context: context });
    }
}
export default MapDataUIService;