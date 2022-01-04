import { Http, EntityService } from '@ibiz-core';

/**
 * 产品服务对象基类
 *
 * @export
 * @class Product
 * @extends {EntityBaseService}
 */
export class ProductServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"products","parameterName":"product"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'Product';
  protected APPDENAMEPLURAL = "Product";



}