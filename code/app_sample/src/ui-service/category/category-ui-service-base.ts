import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 类别UI服务对象基类
 *
 * @export
 * @class CategoryUIServiceBase
 * @extends {UIServiceBase}
 */
export class CategoryUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of CategoryUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof CategoryUIServiceBase
    */
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {     };

}