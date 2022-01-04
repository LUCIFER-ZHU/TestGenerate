import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 订单明细UI服务对象基类
 *
 * @export
 * @class OrderDetailUIServiceBase
 * @extends {UIServiceBase}
 */
export class OrderDetailUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of OrderDetailUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof OrderDetailUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof OrderDetailUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}