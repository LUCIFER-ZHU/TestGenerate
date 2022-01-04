import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 请假申请UI服务对象基类
 *
 * @export
 * @class LeaveApplicationUIServiceBase
 * @extends {UIServiceBase}
 */
export class LeaveApplicationUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of LeaveApplicationUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof LeaveApplicationUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof LeaveApplicationUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}