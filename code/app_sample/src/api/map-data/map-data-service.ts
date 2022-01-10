import { IParam } from '@core';
import { MapDataServiceBase } from './map-data-service-base';

/**
 * 地图示例数据服务
 *
 * @export
 * @class MapDataService
 * @extends MapDataServiceBase
 */
export class MapDataService extends MapDataServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { MapDataService }
     * @memberof MapDataService
     */
    private static basicDataServiceInstance: MapDataService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof MapDataService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of MapDataService.
     * @memberof MapDataService
     */
    constructor(opts?: IParam) {
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
    static getInstance(opts?: IParam): MapDataService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new MapDataService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!MapDataService.dataServiceMap.get(opts.srfdynainstid)) {
                MapDataService.dataServiceMap.set(opts.srfdynainstid, new MapDataService(opts));
            }
            return MapDataService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default MapDataService;