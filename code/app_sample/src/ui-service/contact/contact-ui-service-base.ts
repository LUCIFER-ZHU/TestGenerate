import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 联系人UI服务对象基类
 *
 * @export
 * @class ContactUIServiceBase
 * @extends {UIServiceBase}
 */
export class ContactUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of ContactUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof ContactUIServiceBase
    */
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {     };

}