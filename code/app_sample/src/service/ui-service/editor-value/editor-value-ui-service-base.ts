import { Http, UIServiceBase } from '@ibiz-core';

/**
 * 编辑器值UI服务对象基类
 *
 * @export
 * @class EditorValueUIServiceBase
 * @extends {UIServiceBase}
 */
export class EditorValueUIServiceBase extends UIServiceBase {

  /**
    * Creates an instance of EditorValueUIServiceBase
    * 
    * @param {*} [opts={}]
    * @memberof EditorValueUIServiceBase
    */
  constructor(opts: any = {}) {
      super(opts);
  }

  /**
    * 初始化界面行为数据
    * 
    * @memberof EditorValueUIServiceBase
    */
  protected async initActionMap(): Promise<void> {
      // TODO 初始化界面行为需要的配置参数
  }

}