import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 活动UI服务对象基类
 *
 * @export
 * @class ActivityUIServiceBase
 * @extends {UIServiceBase}
 */
export class ActivityUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of ActivityUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof ActivityUIServiceBase
    */
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {     };

}