import { Http, EntityService } from '@ibiz-core';

/**
 * 订单服务对象基类
 *
 * @export
 * @class Order
 * @extends {EntityBaseService}
 */
export class OrderServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"customers","parameterName":"customer"},{"pathName":"orders","parameterName":"order"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'Order';
  protected APPDENAMEPLURAL = "Order";



}