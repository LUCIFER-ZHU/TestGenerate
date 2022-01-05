import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 联系人UI服务对象基类
 *
 * @export
 * @class ContactUIServiceBase
 * @extends {UIServiceBase}
 */
export class ContactUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of ContactUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof ContactUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof ContactUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}