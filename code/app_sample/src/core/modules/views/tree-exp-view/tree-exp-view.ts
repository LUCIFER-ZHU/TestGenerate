import { ExpView } from "@core";
import { TreeExpViewProps } from "./tree-exp-view-prop";
import { TreeExpViewState } from "./tree-exp-view-state";

/**
 * @description 树导航视图
 * @export
 * @class TreeExpView
 * @extends {ExpView}
 */
export class TreeExpView extends ExpView {

  /**
   * @description 视图状态
   * @type {TreeExpViewState}
   * @memberof TreeExpView
   */
  public declare state: TreeExpViewState;

  /**
   * @description 使用加载功能模块
   * @param {TreeExpViewProps} props 传入的props
   * @memberof TreeExpView
   */
  public useLoad(props: TreeExpViewProps) {
    const { viewSubject, treeExpBarName } = this.state;
    onMounted(() => {
      viewSubject.next({ tag: treeExpBarName, action: "load", data: {} });
    })
  }

  /**
   * @description 安装视图所有功能模块的方法
   * @return {*} 
   * @memberof TreeExpView
   */
  public moduleInstall() {
    const superParams = super.moduleInstall();
    return {
      ...superParams
    };
  }
}