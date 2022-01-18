import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 编辑器值UI服务对象基类
 *
 * @export
 * @class EditorValueUIServiceBase
 * @extends {UIServiceBase}
 */
export class EditorValueUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of EditorValueUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof EditorValueUIServiceBase
    */
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {     };

}