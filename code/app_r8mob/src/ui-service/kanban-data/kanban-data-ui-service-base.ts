import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 看板数据UI服务对象基类
 *
 * @export
 * @class KanbanDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class KanbanDataUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of KanbanDataUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof KanbanDataUIServiceBase
    */
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {     };

}