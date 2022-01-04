import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 订单报表数据UI服务对象基类
 *
 * @export
 * @class OrderRepDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class OrderRepDataUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of OrderRepDataUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof OrderRepDataUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof OrderRepDataUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}