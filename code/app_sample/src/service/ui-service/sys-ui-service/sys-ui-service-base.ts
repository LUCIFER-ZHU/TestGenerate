import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 系统UI服务对象基类
 *
 * @export
 * @class SysUIServiceBase
 * @extends {UIServiceBase}
 */
export class SysUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of SysUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof SysUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof SysUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}