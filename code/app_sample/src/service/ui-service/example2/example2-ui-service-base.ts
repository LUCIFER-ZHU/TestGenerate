import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 示例明细UI服务对象基类
 *
 * @export
 * @class Example2UIServiceBase
 * @extends {UIServiceBase}
 */
export class Example2UIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of Example2UIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof Example2UIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof Example2UIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}