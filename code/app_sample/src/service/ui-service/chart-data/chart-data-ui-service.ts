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
     * Creates an instance of ChartDataUIService.
     * @memberof ChartDataUIService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): ChartDataUIService {
        return new ChartDataUIService({ context: context });
    }
}
export default ChartDataUIService;