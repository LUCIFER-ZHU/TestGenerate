import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 人员数据UI服务对象基类
 *
 * @export
 * @class PersonDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class PersonDataUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of PersonDataUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof PersonDataUIServiceBase
    */
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {     };

}