import { deepCopy, deepObjectMerge, IActionParam, IParam, isEmpty, MDControl } from "@core";
import { TreeControlProps } from "./tree-control-prop";
import { TreeControlState } from "./tree-control-state";

/**
 * @description 树部件
 * @export
 * @class TreeControl
 * @extends {MainControl}
 */
export class TreeControl extends MDControl {
  /**
   * @description 部件状态
   * @type {TreeControlState}
   * @memberof TreeControl
   */
  public declare state: TreeControlState;

  /**
   * @description 根据props调整设置部件state
   * @memberof TreeControl
   */
  public setState(): void {
    super.setState();
    this.state.isBranchAvailable = toRef(this.props, 'isBranchAvailable') !== false;
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
    const { isBranchAvailable, currentSelectedNode, isMultiple } = this.state;
    let { selectedNodes } = this.state;
    if (isBranchAvailable && e.node.isLeaf) {
      if (currentSelectedNode.value && Object.keys(currentSelectedNode.value).length > 0) {
        currentSelectedNode.value.srfchecked = 0;
      }
      e.node.srfchecked = 1;
      currentSelectedNode.value = e.node;
      //  多选树树选中不识别，使用checkbox多选
      if (!isMultiple) {
        selectedNodes = [currentSelectedNode.value];
        this.emit("ctrlEvent", { tag: this.props.name, action: 'selectionchange', data: deepCopy(selectedNodes) });
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
    const { context } = this.state;
    let tempContext: any = {};
    if (curNode && curNode.data && curNode.data.srfappctx) {
      tempContext = deepCopy(curNode.data.srfappctx);
    } else {
      tempContext = deepCopy(context);
    }
    return tempContext;
  }

  /**
   * @description 加载数据
   * @protected
   * @param {*} node 树节点
   * @param {boolean} [isFirst]
   * @return {*}  {Promise<any>}
   * @memberof TreeControl
   */
  protected async load(node: any, isFirst?: boolean): Promise<any> { }

  /**
   * @description 使用加载功能模块
   * @return {*}
   * @memberof TreeControl
   */
  public useLoad() {
    const { viewSubject, controlName } = this.state;
    const load = async (node?: any, isFirst: boolean = false): Promise<any> => {
      if (node?.dataRef?.children) {
        return null;
      }
      const {
        controlService, data, viewParams, srfnodefilter
      } = this.state;
      let tempViewParams: any = deepCopy(viewParams);
      let curNode: any = {};
      curNode = deepObjectMerge(curNode, node);
      const params: any = {
        srfnodeid: node?.dataRef && node.dataRef.id ? node.dataRef.id : '#',
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
        this.formatExpanded(items);
        this.formatAppendCaption(items);
        const isRoot = !node || !node.parent;
        if (isFirst) {
          data.splice(0, data.length);
          items.forEach((item: any) => {
            data.push(item);
          });
        } else {
          node.dataRef.children = items;
        }
        const isSelectedAll = node?.checked;
        this.setDefaultSelection(items, isRoot, isSelectedAll);
        this.emit("ctrlEvent", { tag: this.props.name, action: "load", data: items });
      } catch (error) {
        console.error(error);
      }
    }

    // 在类里绑定能力方法
    this.load = load;

    // 订阅viewSubject,监听load行为
    if (viewSubject) {
      let subscription = viewSubject.subscribe(({ tag, action, data }: IActionParam) => {
        if (!Object.is(controlName, tag)) {
          return;
        }
        if (Object.is("load", action)) {
          load(data, true);
        }
      })
      // 部件卸载时退订viewSubject
      onUnmounted(() => {
        subscription.unsubscribe();
      })
    }
    return load;
  }

  /**
   * @description 设置默认展开节点
   * @protected
   * @param {IParam[]} items
   * @memberof TreeControl
   */
  protected formatExpanded(items: IParam[]) {
    const { expandedKeys } = this.state;
    items.forEach((item: any) => {
      if (item.expanded) {
        expandedKeys.push(item.id);
      }
    })
  }

  /**
   * @description 设置附加标题栏
   * @protected
   * @param {IParam[]} items
   * @memberof TreeControl
   */
  protected formatAppendCaption(items: IParam[]) {
    items.forEach(item => {
      if (item.appendCaption && item.textFormat) {
        item.text = item.textFormat + item.text;
      }
    });
  }

  /**
   * @description 设置默认选中
   * @protected
   * @param {IParam[]} items 节点数据
   * @param {boolean} [isRoot=false] 是否是根节点
   * @param {boolean} [isSelectedAll=false] 是否选中全部
   * @return {*}  {void}
   * @memberof TreeControl
   */
  protected setDefaultSelection(items: IParam[], isRoot: boolean = false, isSelectedAll: boolean = false): void {
    if (items.length === 0) {
      return;
    }
    const {
      selectFirstDefault,
      isMultiple,
      viewParams,
      currentSelectedNode,
      isBranchAvailable
    } = this.state;
    let { selectedNodes, echoSelectedNodes, selectedKeys } = this.state;
    let defaultData: any;
    //  导航视图中，有选中数据时选中该数据，无选中数据默认选中第一项
    if (selectFirstDefault) {
      //  单选
      if (!isMultiple) {
        let index: number = -1;
        if (selectedNodes && selectedNodes.length > 0) {
          //  单选时选中节点数组只有一项
          const selectedNode: IParam = selectedNodes[0];
          index = items.findIndex((item: IParam) => {
            if (isEmpty(item.srfkey)) {
              return selectedNode.id == item.id;
            } else {
              return selectedNode.srfkey == item.srfkey;
            }
          });
        }
        if (index === -1) {
          if (isRoot) {
            if (viewParams && viewParams.srfnavtag) {
              const activate = viewParams.srfnavtag;
              index = items.findIndex((item: any) => {
                return item.id && item.id.split(';') && (item.id.split(';')[0] == activate);
              });
              if (index === -1) index = 0;
            } else {
              index = 0;
            }
          } else {
            return;
          }
        }
        defaultData = items[index];
        // 置空选中节点标识集合，避免破坏响应式
        selectedKeys.splice(0, selectedKeys.length);
        selectedKeys.push(defaultData.id);
        currentSelectedNode.value = deepCopy(defaultData);
        if (isBranchAvailable || defaultData.isLeaf) {
          selectedNodes.splice(0, selectedNodes.length);
          selectedNodes.push(currentSelectedNode.value);
          this.emit("ctrlEvent", { tag: this.props.name, action: "selectionchange", data: selectedNodes });
        }
      }
    }
    //  回显已选数据
    if (echoSelectedNodes && echoSelectedNodes.length > 0) {
      const checkedNodes = items.filter((item: IParam) => {
        return echoSelectedNodes.some((val: IParam) => {
          if (Object.is(item.srfkey, val.srfkey) && Object.is(item.srfmajortext, val.srfmajortext)) {
            val.used = true;
            selectedNodes.push(val);
            this.emit("ctrlEvent", { tag: this.props.name, action: "selectionchange", data: selectedNodes });
            return true;
          }
        })
      });
      if (checkedNodes.length) {
        // TODO 待确认响应式是否会消失
        echoSelectedNodes = echoSelectedNodes.filter((item: any) => !item.used);
        if (!isSelectedAll) {
          if (isMultiple) {
            selectedNodes.push([...checkedNodes]);
            // selectedNodes = selectedNodes.concat(checkedNodes);
            //  TODO 设置选中树节点
          } else {
            //  TODO 设置选中树节点高亮
            currentSelectedNode.value = deepCopy(checkedNodes[0]);
            selectedNodes.splice(0, selectedNodes.length);
            selectedNodes.push(currentSelectedNode.value);
          }
        }
      }
    }
    //  父节点选中树，选中所有子节点
    if (isSelectedAll) {
      const leafNodes = items.filter((item: any) => item.isLeaf);
      selectedNodes = selectedNodes.concat(leafNodes);
      this.emit("ctrlEvent", { tag: this.props.name, action: 'selectionchange', data: selectedNodes });
    }
  }

  /**
   * @description 安装部件所有功能模块的方法
   * @return {*}
   * @memberof TreeControl
   */
  public moduleInstall() {
    const superParams = super.moduleInstall();
    return {
      ...superParams,
      treeNodeSelect: this.treeNodeSelect.bind(this),
      load: this.useLoad(),
    };
  }
}