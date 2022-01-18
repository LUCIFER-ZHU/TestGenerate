import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 订单报表数据UI服务对象基类
 *
 * @export
 * @class OrderRepDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class OrderRepDataUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of OrderRepDataUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof OrderRepDataUIServiceBase
    */
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {     };

}