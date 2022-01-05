import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 产品UI服务对象基类
 *
 * @export
 * @class ProductUIServiceBase
 * @extends {UIServiceBase}
 */
export class ProductUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of ProductUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof ProductUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof ProductUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}