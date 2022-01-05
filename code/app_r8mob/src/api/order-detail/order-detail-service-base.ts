import { Http, EntityService } from '@core';

/**
 * 订单明细服务对象基类
 *
 * @export
 * @class OrderDetail
 * @extends {EntityBaseService}
 */
export class OrderDetailServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"orders","parameterName":"order"},{"pathName":"orderdetails","parameterName":"orderdetail"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'OrderDetail';
  protected APPDENAMEPLURAL = "OrderDetail";



}