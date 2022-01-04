import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 动态数据看板UI服务对象基类
 *
 * @export
 * @class DynaDashboardUIServiceBase
 * @extends {UIServiceBase}
 */
export class DynaDashboardUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of DynaDashboardUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof DynaDashboardUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof DynaDashboardUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}