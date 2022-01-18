import { IContext, IParam, EntityService } from '@core';

/**
 * 订单明细服务对象基类
 *
 * @export
 * @class OrderDetail
 * @extends {EntityBaseService}
 */
export class OrderDetailServiceBase extends EntityService {
  
  /**
  * Creates an instance of OrderDetailServiceBase.
  *
  * @param {*} [opts={}]
  * @memberof OrderDetailServiceBase
  */
  constructor(opts: IParam = {}) {
      super(opts,'OrderDetail');
  }

  /**
   * 初始化基础数据
   *
   * @protected
   * @memberof ChartDataServiceBase
   */
  protected initBasicData() {
    this.appEntityCodeName = 'orderdetail';
    this.appEntityCodeNames = 'orderdetails';
    // 初始化关系实体路径集合
    this.deResPaths = [
        [{"pathName":"orders","parameterName":"order"},{"pathName":"orderdetails","parameterName":"orderdetail"}]
    ]
  }

}