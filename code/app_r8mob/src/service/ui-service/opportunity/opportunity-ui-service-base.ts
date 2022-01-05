import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 商机UI服务对象基类
 *
 * @export
 * @class OpportunityUIServiceBase
 * @extends {UIServiceBase}
 */
export class OpportunityUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of OpportunityUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof OpportunityUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof OpportunityUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}