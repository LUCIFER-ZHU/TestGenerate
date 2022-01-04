import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 计数器数据UI服务对象基类
 *
 * @export
 * @class CounterDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class CounterDataUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of CounterDataUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof CounterDataUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof CounterDataUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}