import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 动态数据看板UI服务对象基类
 *
 * @export
 * @class DynaDashboardUIServiceBase
 * @extends {UIServiceBase}
 */
export class DynaDashboardUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of DynaDashboardUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof DynaDashboardUIServiceBase
    */
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {     };

}