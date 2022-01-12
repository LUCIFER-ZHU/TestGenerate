import { deepCopy, deepObjectMerge, ExpBarControl, IParam } from "@core";
import { TreeExpBarControlProps } from "./tree-exp-bar-control-prop";
import { TreeExpBarControlState } from "./tree-exp-bar-control-state";

/**
 * @description 导航栏部件
 * @export
 * @class TreeExpBarControl
 * @extends {ExpBarControl}
 */
export class TreeExpBarControl extends ExpBarControl {
  /**
   * @description 部件状态
   * @type {ExpBarControlState}
   * @memberof TreeExpBarControl
   */
  public declare controlState: TreeExpBarControlState;

  /**
   * @description 选中数据
   * @private
   * @type {IParam}
   * @memberof TreeExpBarControl
   */
  private selection: IParam = {};

  private computecurNodeContext(curNode: any) {
    const { context } = this.controlState;
    let tempContext: any = {};
    if (curNode && curNode.data && curNode.data.srfappctx) {
      tempContext = deepCopy(curNode.data.srfappctx);
    } else {
      tempContext = deepCopy(context);
    }
    return tempContext;
  }

  /**
   * @description 使用加载功能模块
   * @param {TreeExpBarControlProps} props 传入的props
   * @memberof TreeExpBarControl
   */
  public useLoad(props: TreeExpBarControlProps) {
    const load = async (node: IParam) => {
      console.log(1111, node);
      if (node.dataRef.children) {
        return null;
      }
      const {
        controlService, context, viewParams, srfnodefilter
      } = this.controlState;
      let tempViewParams: any = deepCopy(viewParams);
      let curNode: any = {};
      curNode = deepObjectMerge(curNode, node);
      const params: any = {
        srfnodeid: node.data && node.data.id ? node.data.id : '#',
        srfnodefilter: srfnodefilter,
        parentData: curNode.data?.curData
      }
      let tempContext: any = this.computecurNodeContext(curNode);
    }
    return {
      load
    }
  }

  /**
  * @description 安装部件所有功能模块的方法
  * @param {TreeExpBarControlProps} props 传入的Props
  * @param {Function} [emit]
  * @return {*}
  * @memberof TreeExpBarControl [emit] 事件
  */
  public moduleInstall(props: TreeExpBarControlProps, emit?: Function) {
    const superParams = super.moduleInstall(props, emit);
    const { load } = this.useLoad(props);
    return {
      ...superParams,
      selection: this.selection,
      load
    };
  }
}