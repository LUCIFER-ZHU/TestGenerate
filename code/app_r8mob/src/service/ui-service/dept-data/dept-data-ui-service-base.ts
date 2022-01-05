import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 部门数据UI服务对象基类
 *
 * @export
 * @class DeptDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class DeptDataUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of DeptDataUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof DeptDataUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof DeptDataUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}