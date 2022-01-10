import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 事件UI服务对象基类
 *
 * @export
 * @class EventUIServiceBase
 * @extends {UIServiceBase}
 */
export class EventUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of EventUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof EventUIServiceBase
    */
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {     };

}