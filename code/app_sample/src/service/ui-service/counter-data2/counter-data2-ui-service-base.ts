import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 计数器数据2UI服务对象基类
 *
 * @export
 * @class CounterData2UIServiceBase
 * @extends {UIServiceBase}
 */
export class CounterData2UIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of CounterData2UIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof CounterData2UIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof CounterData2UIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}