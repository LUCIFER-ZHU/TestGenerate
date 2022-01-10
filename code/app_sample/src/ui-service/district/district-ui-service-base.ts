import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 区UI服务对象基类
 *
 * @export
 * @class DistrictUIServiceBase
 * @extends {UIServiceBase}
 */
export class DistrictUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of DistrictUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof DistrictUIServiceBase
    */
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {     };

}