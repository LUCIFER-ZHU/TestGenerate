import { IParam } from '@core';
import { CalculatorUIServiceBase } from './calculator-ui-service-base';

/**
 * 计算器UI服务
 *
 * @export
 * @class CalculatorUIService
 * @extends CalculatorUIServiceBase
 */
export class CalculatorUIService extends CalculatorUIServiceBase {

    /**
     * 基础UI服务实例
     * 
     * @private
     * @type { CalculatorUIService }
     * @memberof CalculatorUIService
     */
    private static basicUIServiceInstance: CalculatorUIService;

    /**
     * UI服务存储Map对象
     *
     * @private
     * @type {Map<string, any>}
     * @memberof CalculatorUIService
     */
    private static UIServiceMap: Map<string, any> = new Map();

    /**
     * Creates an instance of CalculatorUIService.
     * @memberof CalculatorUIService
     */
    constructor(opts?: IParam) {
        super(opts);
    }

    /**
     * 获取实例
     *
     * @static
     * @param 应用上下文
     * @return {*}  { CalculatorUIService }
     * @memberof CalculatorUIService
     */
    static getInstance(opts?: IParam): CalculatorUIService {
         if (!this.basicUIServiceInstance) {
            this.basicUIServiceInstance = new CalculatorUIService(opts);
        }
        if (!opts || !opts.srfdynainstid) {
            return this.basicUIServiceInstance;
        } else {
            if (!CalculatorUIService.UIServiceMap.get(opts.srfdynainstid)) {
                CalculatorUIService.UIServiceMap.set(opts.srfdynainstid, new CalculatorUIService(opts));
            }
            return CalculatorUIService.UIServiceMap.get(opts.srfdynainstid);
        }
    }
}
export default CalculatorUIService;