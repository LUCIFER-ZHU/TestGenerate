import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 向导数据UI服务对象基类
 *
 * @export
 * @class WizardDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class WizardDataUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of WizardDataUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof WizardDataUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof WizardDataUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}