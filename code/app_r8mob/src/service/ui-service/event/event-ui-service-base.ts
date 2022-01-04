import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 事件UI服务对象基类
 *
 * @export
 * @class EventUIServiceBase
 * @extends {UIServiceBase}
 */
export class EventUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of EventUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof EventUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof EventUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}