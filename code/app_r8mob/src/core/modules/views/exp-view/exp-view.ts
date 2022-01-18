import { MainView } from "@core";
import { ExpViewState } from "./exp-view-state";

/**
 * @description 导航视图基类
 * @export
 * @class ExpView
 * @extends {MainView}
 */
export class ExpView extends MainView {

  /**
   * @description 视图状态
   * @type {ExpViewState}
   * @memberof ExpView
   */
  public declare state: ExpViewState;


  /**
 * @description 安装视图所有功能模块的方法
 * @return {*} 
 * @memberof ExpView
 */
  public moduleInstall() {
    const superParams = super.moduleInstall();
    return {
      ...superParams
    };
  }
}