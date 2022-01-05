import { ChartDataServiceBase } from './chart-data-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class ChartDataService
 * @extends ChartDataServiceBase
 */
export class ChartDataService extends ChartDataServiceBase {
    /**
     * Creates an instance of ChartDataService.
     * @memberof ChartDataService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): ChartDataService {
        return new ChartDataService({ context: context });
    }
}
export default ChartDataService;