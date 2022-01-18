import { toRef } from "vue";
import { deepCopy, deepObjectMerge, IActionParam, MainControl } from "@core";
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
   * @description 根据props调整设置部件state
   * @param {TreeControlProps} props 传入的props
   * @memberof TreeControl
   */
  public setState(props: TreeControlProps): void {
    super.setState(props);
    this.controlState.isBranchAvailable = toRef(props, 'isBranchAvailable') as any;
  }

  /**
   * @description 树节点选中
   * @param {string} nodeId
   * @param { nativeEvent: MouseEvent, node: any, selected: boolean } e
   * @memberof TreeControl
   */
  public treeNodeSelect(nodeId: string, e: { nativeEvent: MouseEvent, node: any, selected: boolean }) {
    if (e.node.disabled) {
      e.node.isCurrent = false;
      return;
    }
    const { isBranchAvailable, currentselectedNode, multiple, selectedNodes, controlName } = this.controlState;
    if (isBranchAvailable && e.node.leaf) {
      if (currentselectedNode && Object.keys(currentselectedNode).length > 0) {
        currentselectedNode.value.srfchecked = 0;
      }
      e.node.srfchecked = 1;
      currentselectedNode.value = e.node;
      if (!multiple) {
        selectedNodes.push(currentselectedNode.value);
        this.emit("ctrlEvent",{ tag: controlName, action: 'selectionchange', data: deepCopy(selectedNodes) });
      }
    }
  }

  /**
   * @description 计算节点上下文
   * @private
   * @param {*} curNode
   * @return {*} 
   * @memberof TreeControl
   */
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
   * @param {TreeControlProps} props 传入的props
   * @return {*}
   * @memberof TreeControl
   */
  public useLoad(props: TreeControlProps) {
    const { viewSubject, controlName } = this.controlState;
    const load = async (node: any, isFirst: boolean = false) => {
      if (node?.dataRef?.children) {
        return null;
      }
      const {
        controlService, data, viewParams, srfnodefilter
      } = this.controlState;
      let tempViewParams: any = deepCopy(viewParams);
      let curNode: any = {};
      curNode = deepObjectMerge(curNode, node);
      const params: any = {
        srfnodeid: node.dataRef && node.dataRef.id ? node.dataRef.id : '#',
        srfnodefilter: srfnodefilter,
        parentData: curNode.dataRef?.curData
      }
      let tempContext: any = this.computecurNodeContext(curNode);
      if (curNode.dataRef && curNode.dataRef.sefparentdename) {
        Object.assign(tempContext, { srfparentdename: curNode.dataRef.srfparentdename });
        Object.assign(tempViewParams, { srfparentdename: curNode.dataRef.srfparentdename });
      }
      if (curNode.dataRef && curNode.dataRef.srfparentdemapname) {
        Object.assign(tempContext, { srfparentdemapname: curNode.dataRef.srfparentdemapname });
        Object.assign(tempViewParams, { srfparentdemapname: curNode.dataRef.srfparentdemapname });
      }
      if (curNode.dataRef && curNode.dataRef.srfparentkey) {
        Object.assign(tempContext, { srfparentkey: curNode.dataRef.srfparentkey });
        Object.assign(tempViewParams, { srfparentkey: curNode.dataRef.srfparentkey });
      }
      Object.assign(params, { viewParams: tempViewParams });
      try {
        const response = await controlService.getNodes(tempContext, params);
        if (!response || response.status !== 200) {
          return null;
        }
        const items = response.data;
        // TODO 展开
        // this.formatExpanded(items);
        // this.formatAppendCaption(items);
        const isRoot = Object.is(node.level, 0);
        if (isFirst) {
          data.splice(0, data.length);
          items.forEach((item: any) => {
            data.push(item);
          });
        } else {
          node.dataRef.children = items;
        }
        const isSelectedAll = node.checked;
        // TODO 默认选中
        // this.setDefaultSelection(items, isRoot, isSelectedAll);
        this.emit("ctrlEvent",{ tag: controlName, action: "load", data: items });
      } catch (error) {
        console.error(error);
      }
    }
    // 订阅viewSubject,监听load行为
    if (viewSubject) {
      let subscription = viewSubject.subscribe(({ tag, action, data }: IActionParam) => {
        if (Object.is(controlName, tag) && Object.is("load", action)) {
          load(data, true);
        }
      })
      // 部件卸载时退订viewSubject
      onUnmounted(() => {
        subscription.unsubscribe();
      })
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
      treeNodeSelect: this.treeNodeSelect.bind(this),
      load
    };
  }
}