import { IParam } from '@core';
import { ChartDataUIServiceBase } from './chart-data-ui-service-base';

/**
 * 图表UI服务
 *
 * @export
 * @class ChartDataUIService
 * @extends ChartDataUIServiceBase
 */
export class ChartDataUIService extends ChartDataUIServiceBase {

    /**
     * 基础UI服务实例
     * 
     * @private
     * @type { ChartDataUIService }
     * @memberof ChartDataUIService
     */
    private static basicUIServiceInstance: ChartDataUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof ChartDataUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of ChartDataUIService.
     * @memberof ChartDataUIService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { ChartDataUIService }
     * @memberof ChartDataUIService
     */
    static getInstance(opts?: IParam): ChartDataUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new ChartDataUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!ChartDataUIService.UIServiceMap.get(opts.srfdynainstid)) {
                ChartDataUIService.UIServiceMap.set(opts.srfdynainstid, new ChartDataUIService(opts));
            }
            return ChartDataUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default ChartDataUIService;