import { IActionParam, IParam, MDView } from "@core";
import { TreeViewState } from "./tree-view-state";

/**
 * @description 树视图
 * @export
 * @class TreeView
 * @extends {MDView}
 */
export class TreeView extends MDView {
  /**
   * @description 视图状态数据
   * @type {TreeViewState}
   * @memberof TreeView
   */
  public declare state: TreeViewState;

  /**
   * @description 当前视图部件
   * @type {IParam}
   * @memberof TreeView
   */
  public declare tree: IParam;

  /**
   * @description 处理视图初始化
   * @memberof TreeView
   */
  public useViewInit(): void {
    super.useViewInit();
    this.tree = ref(null);
  }

  /**
   * 处理部件事件
   *
   * @param {IActionParam} actionParam
   * @memberof TreeView
   */
  public onCtrlEvent(actionParam: IActionParam) {
    const { tag, action, data } = actionParam;
    const { xDataControlName } = this.state;
    if (Object.is(tag, xDataControlName)) {
      this.MDCtrlEvent(action, data);
      return;
    }
    super.onCtrlEvent(actionParam);
  }

  /**
   *  获取多数据部件
   *
   * @return {*}  {*}
   * @memberof TreeView
   */
  public getMDCtrl(): any {
    return unref(this.tree);
  }

  /**
   * @description 安装视图所有功能模块的方法
   * @return {*} 
   * @memberof TreeView
   */
  public moduleInstall() {
    const superParams = super.moduleInstall();
    return {
      ...superParams,
      tree: this.tree
    };
  }
}