import { IParam } from '@core';
import { CalculatorServiceBase } from './calculator-service-base';

/**
 * 计算器服务
 *
 * @export
 * @class CalculatorService
 * @extends CalculatorServiceBase
 */
export class CalculatorService extends CalculatorServiceBase {

    /**
     * 基础数据服务实例
     * 
     * @private
     * @type { CalculatorService }
     * @memberof CalculatorService
     */
    private static basicDataServiceInstance: CalculatorService;

    /**
     * 数据服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof CalculatorService
     */
    private static dataServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of CalculatorService.
     * @memberof CalculatorService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { CalculatorService }
     * @memberof CalculatorService
     */
    static getInstance(opts?: IParam): CalculatorService {
        if (!this.basicDataServiceInstance) {
            this.basicDataServiceInstance = new CalculatorService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicDataServiceInstance;
        } else {
            if (!CalculatorService.dataServiceMap.get(opts.srfdynainstid)) {
                CalculatorService.dataServiceMap.set(opts.srfdynainstid, new CalculatorService(opts));
            }
            return CalculatorService.dataServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default CalculatorService;