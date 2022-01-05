import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 导入导出数据UI服务对象基类
 *
 * @export
 * @class ImpExpDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class ImpExpDataUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of ImpExpDataUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof ImpExpDataUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof ImpExpDataUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}