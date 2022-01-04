import { Http, EntityService } from '@ibiz-core';

/**
 * 订单报表数据服务对象基类
 *
 * @export
 * @class OrderRepData
 * @extends {EntityBaseService}
 */
export class OrderRepDataServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"orderrepdatas","parameterName":"orderrepdata"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'OrderRepData';
  protected APPDENAMEPLURAL = "OrderRepData";



}