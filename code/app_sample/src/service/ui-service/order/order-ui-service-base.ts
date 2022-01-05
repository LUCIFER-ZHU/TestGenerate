import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 订单UI服务对象基类
 *
 * @export
 * @class OrderUIServiceBase
 * @extends {UIServiceBase}
 */
export class OrderUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of OrderUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof OrderUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof OrderUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}