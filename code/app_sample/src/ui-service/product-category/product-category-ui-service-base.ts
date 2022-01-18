import { IParam, UIServiceBase } from '@core';
import { AppFrontAction, AppBackendAction } from '@core';
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
  constructor(opts: IParam = {}) {
      super(opts);
  }



   public uiActionModes = {     };

}