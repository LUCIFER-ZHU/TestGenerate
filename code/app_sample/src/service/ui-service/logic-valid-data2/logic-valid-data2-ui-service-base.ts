import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 示例数据（启用逻辑删除）（主键数值）UI服务对象基类
 *
 * @export
 * @class LogicValidData2UIServiceBase
 * @extends {UIServiceBase}
 */
export class LogicValidData2UIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of LogicValidData2UIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof LogicValidData2UIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof LogicValidData2UIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}