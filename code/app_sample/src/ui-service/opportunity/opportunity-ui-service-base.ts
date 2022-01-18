import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 商机UI服务对象基类
 *
 * @export
 * @class OpportunityUIServiceBase
 * @extends {UIServiceBase}
 */
export class OpportunityUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of OpportunityUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof OpportunityUIServiceBase
    */
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {     };

}