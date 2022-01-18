import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 订单明细UI服务对象基类
 *
 * @export
 * @class OrderDetailUIServiceBase
 * @extends {UIServiceBase}
 */
export class OrderDetailUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of OrderDetailUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof OrderDetailUIServiceBase
    */
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {     };

}