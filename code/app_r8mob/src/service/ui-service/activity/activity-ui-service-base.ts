import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 活动UI服务对象基类
 *
 * @export
 * @class ActivityUIServiceBase
 * @extends {UIServiceBase}
 */
export class ActivityUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of ActivityUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof ActivityUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof ActivityUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}