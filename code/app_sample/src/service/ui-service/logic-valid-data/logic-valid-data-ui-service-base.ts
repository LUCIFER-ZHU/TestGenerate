import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 示例数据（启用逻辑删除）UI服务对象基类
 *
 * @export
 * @class LogicValidDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class LogicValidDataUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of LogicValidDataUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof LogicValidDataUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof LogicValidDataUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}