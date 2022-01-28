import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 市UI服务对象基类
 *
 * @export
 * @class CityUIServiceBase
 * @extends {UIServiceBase}
 */
export class CityUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of CityUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof CityUIServiceBase
    */
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {     };

}