import { IParam } from '@core';
import { ChartDataServiceBase } from './chart-data-service-base';

/**
 * 图表服务
 *
 * @export
 * @class ChartDataService
 * @extends ChartDataServiceBase
 */
export class ChartDataService extends ChartDataServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { ChartDataService }
     * @memberof ChartDataService
     */
    private static basicDataServiceInstance: ChartDataService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof ChartDataService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of ChartDataService.
     * @memberof ChartDataService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { ChartDataService }
     * @memberof ChartDataService
     */
    static getInstance(opts?: IParam): ChartDataService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new ChartDataService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!ChartDataService.dataServiceMap.get(opts.srfdynainstid)) {
                ChartDataService.dataServiceMap.set(opts.srfdynainstid, new ChartDataService(opts));
            }
            return ChartDataService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default ChartDataService;