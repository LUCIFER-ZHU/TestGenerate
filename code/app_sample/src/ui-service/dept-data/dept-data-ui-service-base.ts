import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 部门数据UI服务对象基类
 *
 * @export
 * @class DeptDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class DeptDataUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of DeptDataUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof DeptDataUIServiceBase
    */
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {     };

}