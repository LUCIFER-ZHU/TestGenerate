import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 组织数据UI服务对象基类
 *
 * @export
 * @class OrgDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class OrgDataUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of OrgDataUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof OrgDataUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof OrgDataUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}