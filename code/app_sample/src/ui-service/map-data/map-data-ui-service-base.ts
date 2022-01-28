import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
/**
 * 地图示例数据UI服务对象基类
 *
 * @export
 * @class MapDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class MapDataUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of MapDataUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof MapDataUIServiceBase
    */
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {     };

}