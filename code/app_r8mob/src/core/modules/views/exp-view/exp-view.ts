import { MainView } from "@core";
import { ExpViewProps } from "./exp-view-prop";
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
  public declare viewState: ExpViewState;

  /**
 * @description 使用加载功能模块
 * @param {ExpViewProps} props 传入的props
 * @memberof ExpView
 */
  public useLoad(props: ExpViewProps) {
    const { viewSubject } = this.viewState;
  }


  /**
 * @description 安装视图所有功能模块的方法
 * @param {ExpViewProps} props 传入的Props
 * @param {Function} [emit] [emit] 事件
 * @return {*} 
 * @memberof ExpView
 */
  public moduleInstall(props: ExpViewProps, emit?: Function) {
    const superParams = super.moduleInstall(props, emit);
    this.useLoad(props);
    return {
      ...superParams,
      state: this.viewState
    };
  }
}