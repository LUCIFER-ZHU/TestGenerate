import { Http, EntityService } from '@ibiz-core';

/**
 * 客户服务对象基类
 *
 * @export
 * @class Customer
 * @extends {EntityBaseService}
 */
export class CustomerServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"customers","parameterName":"customer"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'Customer';
  protected APPDENAMEPLURAL = "Customer";



}