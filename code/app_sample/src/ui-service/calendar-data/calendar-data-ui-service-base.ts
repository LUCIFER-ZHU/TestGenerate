import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 日历示例数据UI服务对象基类
 *
 * @export
 * @class CalendarDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class CalendarDataUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of CalendarDataUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof CalendarDataUIServiceBase
    */
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {     };

}