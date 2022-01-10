import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 示例版本UI服务对象基类
 *
 * @export
 * @class SampleVerUIServiceBase
 * @extends {UIServiceBase}
 */
export class SampleVerUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of SampleVerUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof SampleVerUIServiceBase
    */
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {     };

}