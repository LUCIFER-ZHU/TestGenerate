import { MainControl } from "@core";
import { TreeControlProps } from "./tree-control-prop";
import { TreeControlState } from "./tree-control-state";

/**
 * @description 树部件
 * @export
 * @class TreeControl
 * @extends {MainControl}
 */
export class TreeControl extends MainControl {
  /**
   * @description 部件状态
   * @type {TreeControlState}
   * @memberof TreeControl
   */
  public declare controlState: TreeControlState;

  /**
   * @description 使用加载功能模块
   * @param {TreeControlProps} props 传入的props
   * @return {*}
   * @memberof TreeControl
   */
  public useLoad(props: TreeControlProps) {
    const { viewSubject, controlName } = this.controlState;
    const load = async (opt: any = {}) => {
    }
    return {
      load
    };
  }

  /**
   * @description 安装部件所有功能模块的方法
   * @param {TreeControlProps} props 传入的Props
   * @param {Function} [emit]
   * @return {*}
   * @memberof TreeControl [emit] 事件
   */
  public moduleInstall(props: TreeControlProps, emit?: Function) {
    const superParams = super.moduleInstall(props, emit);
    const { load } = this.useLoad(props);
    return {
      ...superParams,
      state: this.controlState,
      load
    };
  }
}