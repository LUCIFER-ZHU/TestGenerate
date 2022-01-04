import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 区UI服务对象基类
 *
 * @export
 * @class DistrictUIServiceBase
 * @extends {UIServiceBase}
 */
export class DistrictUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of DistrictUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof DistrictUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof DistrictUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}