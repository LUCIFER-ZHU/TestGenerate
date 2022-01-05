import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 视图消息数据UI服务对象基类
 *
 * @export
 * @class ViewMsgDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class ViewMsgDataUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of ViewMsgDataUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof ViewMsgDataUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof ViewMsgDataUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}