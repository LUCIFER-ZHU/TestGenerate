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
  }



   public uiActionModes = {     };

}