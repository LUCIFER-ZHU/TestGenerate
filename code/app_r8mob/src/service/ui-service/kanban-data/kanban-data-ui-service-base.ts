import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 看板数据UI服务对象基类
 *
 * @export
 * @class KanbanDataUIServiceBase
 * @extends {UIServiceBase}
 */
export class KanbanDataUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of KanbanDataUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof KanbanDataUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof KanbanDataUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}