import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 计数器数据UI服务对象基类
 *
 * @export
 * @class CounterDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class CounterDataUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of CounterDataUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof CounterDataUIServiceBase
    */
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {     };

}