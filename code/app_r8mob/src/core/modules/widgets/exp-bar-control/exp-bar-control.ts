import { MainControl } from "@core";
import { ExpBarControlProps } from "./exp-bar-control-prop";
import { ExpBarControlState } from "./exp-bar-control-state";

/**
 * @description 导航栏部件
 * @export
 * @class ExpBarControl
 * @extends {MainControl}
 */
export class ExpBarControl extends MainControl {
  /**
   * @description 部件状态
   * @type {ExpBarControlState}
   * @memberof ExpBarControl
   */
  public declare controlState: ExpBarControlState;

  /**
   * @description 使用加载功能模块
   * @param {ExpBarControlProps} props 传入的props
   * @memberof ExpBarControl
   */
  public useLoad(props: ExpBarControlProps) {
  }

  /**
  * @description 安装部件所有功能模块的方法
  * @param {ExpBarControlProps} props 传入的Props
  * @param {Function} [emit]
  * @return {*}
  * @memberof ExpBarControl [emit] 事件
  */
  public moduleInstall(props: ExpBarControlProps, emit?: Function) {
    const superParams = super.moduleInstall(props, emit);
    return {
      ...superParams,
      state: this.controlState,
    };
  }
}