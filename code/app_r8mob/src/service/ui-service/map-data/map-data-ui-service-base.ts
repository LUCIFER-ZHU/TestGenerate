import { Http, UIServiceBase } from '@ibiz-core';

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
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof MapDataUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}