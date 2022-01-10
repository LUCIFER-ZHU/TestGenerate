import { IParam } from "@core";

/**
 * 界面服务基类
 *
 * @export
 * @class UIServiceBase
 */
export class UIServiceBase {

  /**
   * 应用上下文
   *
   * @protected
   * @type {IParam}
   * @memberof UIServiceBase
   */
  protected context: IParam;

  /**
   *
   * @param {*} [opts={}]
   * @memberof UIServiceBase
   */
  constructor(context: IParam = {}) {
    this.context = context;
  }

  /**
   * 界面行为模型对象
   *
   * @type {*}
   * @memberof UIServiceBase
   */
  public uiActionModes: any = {};

  /**
   *
   * 获取界面行为模型对象
   *
   * @param {string} actionName
   * @memberof UIServiceBase
   */
  public getUIActionModel(actionName: string) {
    if (!actionName) {
      return;
    }
    return this.uiActionModes[actionName] ? this.uiActionModes[actionName] : null;
  }
}
