import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 人员数据UI服务对象基类
 *
 * @export
 * @class PersonDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class PersonDataUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of PersonDataUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof PersonDataUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof PersonDataUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}