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
     * Creates an instance of CalculatorUIService.
     * @memberof CalculatorUIService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): CalculatorUIService {
        return new CalculatorUIService({ context: context });
    }
}
export default CalculatorUIService;