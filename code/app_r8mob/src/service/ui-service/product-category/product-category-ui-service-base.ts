import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 产品类别UI服务对象基类
 *
 * @export
 * @class ProductCategoryUIServiceBase
 * @extends {UIServiceBase}
 */
export class ProductCategoryUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of ProductCategoryUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof ProductCategoryUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof ProductCategoryUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}