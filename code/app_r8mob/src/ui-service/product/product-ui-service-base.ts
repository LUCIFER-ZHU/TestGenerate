import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 产品UI服务对象基类
 *
 * @export
 * @class ProductUIServiceBase
 * @extends {UIServiceBase}
 */
export class ProductUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of ProductUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof ProductUIServiceBase
    */
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {     };

}