import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 图表UI服务对象基类
 *
 * @export
 * @class ChartDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class ChartDataUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of ChartDataUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof ChartDataUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof ChartDataUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}