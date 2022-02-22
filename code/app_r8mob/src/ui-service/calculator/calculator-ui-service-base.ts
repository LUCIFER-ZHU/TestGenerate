import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 计算器UI服务对象基类
 *
 * @export
 * @class CalculatorUIServiceBase
 * @extends {UIServiceBase}
 */
export class CalculatorUIServiceBase extends UIServiceBase {

    /**
      * Creates an instance of CalculatorUIServiceBase
      * 
      * @param {*} [opts={}]
      * @memberof CalculatorUIServiceBase
      */
    constructor(opts: IParam = {}) {
        super(opts);
        this.initBasicData();
    }

    /**
     * 初始化基础数据
     *
     * @memberof CalculatorUIServiceBase
     */
    public initBasicData() {
        // 应用实体主键属性
        this.appDeKeyFieldName = 'calculatorid';
        // 是否启用主状态
        this.isEnableDEMainState = false;
    }



}