import { IParam } from '@core';
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
     * 基础UI服务实例
     * 
     * @private
     * @type { MapDataUIService }
     * @memberof MapDataUIService
     */
    private static basicUIServiceInstance: MapDataUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof MapDataUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of MapDataUIService.
     * @memberof MapDataUIService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): MapDataUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new MapDataUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!MapDataUIService.UIServiceMap.get(opts.srfdynainstid)) {
                MapDataUIService.UIServiceMap.set(opts.srfdynainstid, new MapDataUIService(opts));
            }
            return MapDataUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default MapDataUIService;