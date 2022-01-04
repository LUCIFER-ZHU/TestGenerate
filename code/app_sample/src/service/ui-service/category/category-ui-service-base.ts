import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 类别UI服务对象基类
 *
 * @export
 * @class CategoryUIServiceBase
 * @extends {UIServiceBase}
 */
export class CategoryUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of CategoryUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof CategoryUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof CategoryUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}