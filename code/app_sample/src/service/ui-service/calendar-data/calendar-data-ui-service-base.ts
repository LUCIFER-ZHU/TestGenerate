import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 日历示例数据UI服务对象基类
 *
 * @export
 * @class CalendarDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class CalendarDataUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of CalendarDataUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof CalendarDataUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof CalendarDataUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}