import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 市UI服务对象基类
 *
 * @export
 * @class CityUIServiceBase
 * @extends {UIServiceBase}
 */
export class CityUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of CityUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof CityUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof CityUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}