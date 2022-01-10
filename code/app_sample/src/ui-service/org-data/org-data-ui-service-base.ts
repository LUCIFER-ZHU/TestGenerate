import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 组织数据UI服务对象基类
 *
 * @export
 * @class OrgDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class OrgDataUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of OrgDataUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof OrgDataUIServiceBase
    */
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {     };

}