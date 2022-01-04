import { Http, EntityService } from '@ibiz-core';

/**
 * 产品类别服务对象基类
 *
 * @export
 * @class ProductCategory
 * @extends {EntityBaseService}
 */
export class ProductCategoryServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"products","parameterName":"product"},{"pathName":"productcategories","parameterName":"productcategory"}],
          [{"pathName":"categories","parameterName":"category"},{"pathName":"productcategories","parameterName":"productcategory"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'ProductCategory';
  protected APPDENAMEPLURAL = "ProductCategory";



}