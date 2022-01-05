import { CalculatorServiceBase } from './calculator-service-base';

/**
 * ${appEntity.getLogicName()}服务
 *
 * @export
 * @class CalculatorService
 * @extends CalculatorServiceBase
 */
export class CalculatorService extends CalculatorServiceBase {
    /**
     * Creates an instance of CalculatorService.
     * @memberof CalculatorService
     */
    constructor(opts?: any) {
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
    static getInstance(context?: any): CalculatorService {
        return new CalculatorService({ context: context });
    }
}
export default CalculatorService;