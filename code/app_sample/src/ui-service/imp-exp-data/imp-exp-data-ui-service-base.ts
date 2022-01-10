import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 导入导出数据UI服务对象基类
 *
 * @export
 * @class ImpExpDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class ImpExpDataUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of ImpExpDataUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof ImpExpDataUIServiceBase
    */
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {     };

}