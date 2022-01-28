import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 订单UI服务对象基类
 *
 * @export
 * @class OrderUIServiceBase
 * @extends {UIServiceBase}
 */
export class OrderUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of OrderUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof OrderUIServiceBase
    */
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {     };

}