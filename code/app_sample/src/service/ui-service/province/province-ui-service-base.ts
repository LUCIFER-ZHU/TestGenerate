import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 省份UI服务对象基类
 *
 * @export
 * @class ProvinceUIServiceBase
 * @extends {UIServiceBase}
 */
export class ProvinceUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of ProvinceUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof ProvinceUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof ProvinceUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}