import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 省份UI服务对象基类
 *
 * @export
 * @class ProvinceUIServiceBase
 * @extends {UIServiceBase}
 */
export class ProvinceUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of ProvinceUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof ProvinceUIServiceBase
    */
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {     };

}