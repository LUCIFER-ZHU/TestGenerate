import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 示例版本UI服务对象基类
 *
 * @export
 * @class SampleVerUIServiceBase
 * @extends {UIServiceBase}
 */
export class SampleVerUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of SampleVerUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof SampleVerUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof SampleVerUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}