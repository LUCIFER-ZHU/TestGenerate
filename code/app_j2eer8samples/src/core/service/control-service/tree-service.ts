import { ControlServiceBase, ControlVOBase, deepCopy, IContext, IParam, isEmpty, TreeNodeRSVO, TreeNodeVO } from "@core";
import { Environment } from "@/environments/environment";

/**
 * @description 树部件服务
 * @export
 * @class TreeService
 * @extends {ControlServiceBase<T>}
 * @template T
 */
export class TreeService<T extends ControlVOBase> extends ControlServiceBase<T> {

  /**
   * @description 节点分隔符号
   * @type {string}
   * @memberof TreeService
   */
  public TREENODE_SEPARATOR: string = ';';

  /**
   * @description 获取节点
   * @param {IContext} [context={}] 应用上下文
   * @param {IParam} [data={}] 参数
   * @param {boolean} [isloading]
   * @memberof TreeService
   */
  async getNodes(context: IContext = {}, data: IParam = {}, isloading?: boolean) {
    let { srfparentkey, srfcat, srfnodeid, srfnodefilter, query } = data;
    srfnodefilter = query ? query : srfnodefilter;
    let list: any[] = [];
    let filter: any = {};
    const treeVO = this.newControlVO({});
    const { treeNodes, rootVisible } = treeVO;
    //  根节点
    const rootNode = treeNodes.find((node: IParam) => {
      return node.rootNode;
    });
    // 处理是否显示根节点
    if (!srfnodeid || Object.is(srfnodeid, '#')) {
      if (rootVisible) {
        await this.fillNodeData(rootNode, context, filter, list);
        return Promise.resolve({ status: 200, data: list });
      } else {
        srfnodeid = rootNode?.nodeType;
      }
    }
    let strTreeNodeId: string = srfnodeid;
    let strRealNodeId: string = '';
    let bRootSelect: boolean = false;
    let strNodeType: string;
    let strRootSelectNode: string = '';
    if (Object.is(strTreeNodeId, rootNode?.nodeType)) {
      strNodeType = rootNode?.nodeType;
      if (srfparentkey) {
        strRealNodeId = srfparentkey;
      }
    } else {
      let nPos = strTreeNodeId.indexOf(this.TREENODE_SEPARATOR);
      if (nPos === -1) {
        return Promise.reject({
          status: 500,
          data: { title: '失败', message: `树节点${strTreeNodeId}标识无效` },
        });
      }
      strNodeType = strTreeNodeId.substring(0, nPos);
      strRealNodeId = strTreeNodeId.substring(nPos + 1);
    }

    // 处理过滤参数
    Object.assign(filter, {
      srfparentkey: srfparentkey,
      srfcat: srfcat,
      srfnodefilter: srfnodefilter,
      strRealNodeId: strRealNodeId,
      srfnodeid: srfnodeid,
      strNodeType: strNodeType,
      viewparams: deepCopy(data).viewparams,
      srfparentdata: deepCopy(data).parentData
    });

    // 分解节点标识
    let nodeid: string[] = strRealNodeId.split(this.TREENODE_SEPARATOR);
    for (let i = 0; i < nodeid.length; i++) {
      switch (i) {
        case 0:
          Object.assign(filter, { nodeid: nodeid[0] });
          break;
        case 1:
          Object.assign(filter, { nodeid2: nodeid[1] });
          break;
        case 2:
          Object.assign(filter, { nodeid3: nodeid[2] });
          break;
        case 3:
          Object.assign(filter, { nodeid4: nodeid[3] });
          break;
        default:
          break;
      }
    }

    // 根据节点标识填充节点
    const nodeJson = treeNodes.find((_node: TreeNodeVO) => {
      return _node.nodeType == strNodeType;
    });
    if (nodeJson) {
      await this.fillChildNodes(nodeJson, context, filter, list);
      return Promise.resolve({ status: 200, data: list });
    } else {
      return Promise.resolve({ status: 500, data: { title: '失败', message: `树节点${strTreeNodeId}标识无效` } });
    }
  }

  private async fillChildNodes(nodeJson: TreeNodeVO, context: any = {}, filter: any, list: any[]): Promise<any> {
    // 过滤出父节点是该节点的节点关系集合
    const treeVO = this.newControlVO({});
    const { treeNodes, treeNodeRSs } = treeVO;
    if (treeNodeRSs.length > 0) {
      let nodeRSs = treeNodeRSs.filter((nodeRS: TreeNodeRSVO) => {
        if (nodeRS.parentPSDETreeNode?.id !== nodeJson.id) {
          return false;
        }
        // 搜索模式 1 有搜索时启用， 2 无搜索时启用， 3 全部启用
        switch (nodeRS.searchMode) {
          case 1:
            return !isEmpty(filter.srfnodefilter);
          case 2:
            return isEmpty(filter.srfnodefilter);
          case 3:
            return true;
          default:
            return false;
        }
      });
      // 填充对应节点关系的子节点
      if (nodeRSs && nodeRSs.length > 0) {
        for (let i = 0, len = nodeRSs.length; i < len; i++) {
          let rsNavContext: any = nodeRSs[i].navigateContext;
          let rsNavParams: any = nodeRSs[i].navigateParams;
          let rsParams: any = nodeRSs[i].params;
          // 根据节点标识填充节点
          let treeNode: any = treeNodes.find((_node: TreeNodeVO) => {
            return nodeRSs[i].childDeTreeNode?.id == _node.id;
          });
          if (treeNode) {
            await this.fillNodeData(treeNode, context, filter, list, rsNavContext, rsNavParams, rsParams);
          }
        }
      }
    }
  }

  fillNodeData(
    node: TreeNodeVO,
    context: IContext = {},
    filter: any,
    list: IParam[],
    rsNavContext?: IParam,
    rsNavParams?: IParam,
    rsParams?: IParam
  ): Promise<any> {
    context = this.handleResNavContext(context, filter, rsNavContext);
    filter = this.handleResNavParams(context, filter, rsNavParams, rsParams);
    return new Promise((resolve: any, reject: any) => {
      //  静态节点
      if (node.treeNodeType == 'STATIC') {
        //  快速搜索过滤
        if (
          node.enableQuickSearch
          && filter.srfnodefilter
          && !Object.is(filter.srfnodefilter, "")
          && node.text?.toUpperCase().indexOf(filter.srfnodefilter.toUpperCase()) == -1
        ) {
          resolve(list);
          return;
        }
        const treeNode: any = {
          text: node.text,
          tooltip: node.tooltip,
          cssName: node.cssName,
          nodeType: node.treeNodeType,
          isUseLangRes: false,
          allowDrag: node.allowDrag,
          allowDrop: node.allowDrop,
          allowEditText: node.allowEditText,
          allowOrder: node.allowOrder,
          srfappctx: context,
          srfmajortext: node.text,
          enableckeck: node.enableCheck,
          disabled: node.disableSelect,
          expanded: node.expanded || filter.isAutoExpand,
          isLeaf: !node.hasPSDETreeNodeRSs,
          selected: node.selected,
          navfilter: node.navFilter,
          navigateContext: node.navigateContext,
          navigateParams: node.navigateParams
        };
        //  删除无用属性
        let strNodeId: string = node.nodeType;
        if (isEmpty(node.nodeValue)) {
          Object.assign(treeNode, { srfkey: node.nodeValue });
          strNodeId += this.TREENODE_SEPARATOR + node.nodeValue;
          if (node.appendPNodeId) {
            strNodeId += this.TREENODE_SEPARATOR + filter.strRealNodeId;
          }
        } else {
          //  没有指定节点值，直接使用父节点值
          Object.assign(treeNode, { srfkey: filter.strRealNodeId });
          strNodeId += this.TREENODE_SEPARATOR + filter.strRealNodeId;
        }
        Object.assign(treeNode, { id: strNodeId });
        Object.assign(treeNode, { nodeid: treeNode.srfkey, nodeid2: filter.strRealNodeId });
        list.push(treeNode);
        resolve(list);
      } else if (node.treeNodeType == 'CODELIST') {
        //  代码表节点
        const codeListItems: any[] = [];
        //  TODO 待补充代码表服务
      } else if (node.treeNodeType == 'DE' && node.appDataEntity) {
        //  实体节点
        let bFirst: boolean = true;
        let searchFilter: any = {};
        const treeVO = this.newControlVO({});
        const { treeNodeRSs, treeNodes } = treeVO;
        if (treeNodeRSs && treeNodeRSs.length > 0) {
          treeNodeRSs.forEach((noders: TreeNodeRSVO) => {
            if (noders.childDeTreeNode?.id == node.id) {
              const pickupField: string =
                noders.parentFilter
                  ? noders.parentFilter.toLowerCase()
                  : noders.parentPSDER1N && noders.parentPSAppDEField
                    ? noders.parentPSAppDEField.name?.toLowerCase() : '';
              if (pickupField && pickupField !== '') {
                const tempNode = treeNodes.find((_node: TreeNodeVO) => {
                  return noders.parentPSDETreeNode?.id == _node.id;
                });
                if (tempNode && Object.is(filter.strNodeType, tempNode.nodeType)) {
                  Object.assign(searchFilter, { [`n_${pickupField}_eq`]: filter[`nodeid${noders.parentValueLevel > 1 ? noders.parentValueLevel : ""}`] })
                }
              }
            }
          })
        }
        Object.assign(searchFilter, { total: false });
        if (node.enableQuickSearch) {
          Object.assign(searchFilter, { query: filter.srfnodefilter });
        }
        try {
          this.searchNodeData(node, context, searchFilter, filter).then((records: any) => {
            if (records && records.length) {
              records.forEach((entity: any) => {
                let treeNode: any = {};
                let strId: string = '';
                const deCodeName: string = node.appDataEntity?.codeName;
                if (node.idPSAppDEField && node.idPSAppDEField.codeName) {
                  strId = entity[node.idPSAppDEField.codeName.toLowerCase()];
                } else {
                  strId = entity[node.appDataEntity?.keyField?.toLowerCase()];
                }
                //  设置实体主信息属性
                let strText: string = '';
                if (node.textPSAppDEField?.codeName) {
                  const codeName = node.textPSAppDEField.codeName.toLowerCase();
                  Object.assign(treeNode, { nodeTextField: codeName });
                  strText = entity[codeName];
                } else {
                  strText = entity[node.appDataEntity?.majorField.toLowerCase()];
                }
                Object.assign(treeNode, {
                  srfparentdename: deCodeName,
                  srfparentdemapname: node.appDataEntity?.deName,
                  srfparentkey: strId
                });
                let tempContext = deepCopy(context);
                Object.assign(tempContext, {
                  srfparentdename: deCodeName,
                  srfparentdemapname: node.appDataEntity?.deName,
                  srfparentkey: strId
                });
                Object.assign(treeNode, {
                  srfappctx: tempContext,
                  [deCodeName.toLowerCase()]: strId,
                  srfkey: strId,
                  text: strText,
                  srfmajortext: strText
                });
                let strNodeId: string = node.nodeType;
                strNodeId += this.TREENODE_SEPARATOR + strId;
                if (node.appendPNodeId) {
                  strNodeId += this.TREENODE_SEPARATOR + filter.realnodeid;
                }
                Object.assign(treeNode, { id: strNodeId });
                if (node.iconPSAppDEField?.codeName) {
                  Object.assign(treeNode, { icon: entity[node.iconPSAppDEField.codeName.toLowerCase()] });
                } else if (node.iconcls) {
                  Object.assign(treeNode, { iconcls: node.iconcls });
                } else if (node.icon) {
                  Object.assign(treeNode, { icon: node.icon });
                }
                if (node.enableCheck) {
                  Object.assign(treeNode, { enablecheck: true });
                }
                if (node.disableSelect) {
                  Object.assign(treeNode, { disabled: true });
                }
                if (node.allowDrag) {
                  Object.assign(treeNode, { allowDrag: true });
                }
                if (node.allowDrop) {
                  Object.assign(treeNode, { allowDrop: true });
                }
                if (node.allowEditText) {
                  Object.assign(treeNode, { allowEditText: true });
                }
                if (node.allowOrder) {
                  Object.assign(treeNode, { allowOrder: true });
                }
                if (node.cssName) {
                  Object.assign(treeNode, { cssName: node.cssName });
                }
                if (node.expanded) {
                  Object.assign(treeNode, { expanded: node.expandFirstOnly ? bFirst : true });
                } else {
                  Object.assign(treeNode, { expanded: filter.isAutoExpand });
                }
                if (node.appendCaption) {
                  Object.assign(treeNode, { appendCaption: true });
                }
                if (node.textFormat) {
                  Object.assign(treeNode, { textFormat: node.textFormat });
                }
                Object.assign(treeNode, { isLeaf: !node.hasPSDETreeNodeRSs });
                if (node.leafFlagPSAppDEField?.codeName) {
                  const leafFlag = entity[node.leafFlagPSAppDEField.codeName.toLowerCase()];
                  if (leafFlag != null && leafFlag != undefined) {
                    let strLeafFlag: string = leafFlag.toString().toLowerCase();
                    if (Object.is(strLeafFlag, '1') || Object.is(strLeafFlag, 'true')) {
                      Object.assign(treeNode, { isLeaf: true });
                    } else {
                      Object.assign(treeNode, { isLeaf: false });
                    }
                  }
                }
                const nodeDataItems: any[] = node.deTreeNodeDataItems || [];
                if (nodeDataItems.length > 0) {
                  nodeDataItems.forEach((item: any) => {
                    const name = item.name.toLowerCase();
                    if (item.fieldCodeName) {
                      Object.assign(treeNode, {
                        [name]: entity[item.fieldCodeName.toLowerCase()],
                      })
                    }
                    if (Object.is('text', name) && item.customCode) {
                      Object.assign(treeNode, { textCustomCode: true, textScriptCode: item.scriptCode });
                    }
                    if (Object.is('icon', name) && item.customCode) {
                      Object.assign(treeNode, { iconCustomCode: true, iconScriptCode: item.scriptCode });
                    }
                  })
                }
                Object.assign(treeNode, { selected: node.selected });
                if (node.navFilter) {
                  Object.assign(treeNode, { navfilter: node.navFilter });
                }
                Object.assign(treeNode, { curData: entity });
                if (node.counterId) {
                  Object.assign(treeNode, { counterId: node.counterId });
                }
                // 为1时计数器不显示0值
                if (node.counterMode) {
                  Object.assign(treeNode, { counterMode: node.counterMode });
                }
                Object.assign(treeNode, { nodeid: treeNode.srfkey });
                Object.assign(treeNode, { nodeid2: filter.strRealNodeId });

                Object.assign(treeNode, { nodeType: node.nodeType, appEntityName: deCodeName });
                list.push(treeNode);
                resolve(list);
                bFirst = false;
              });
            } else {
              resolve(list);
            }
          });
        } catch (error: any) {
          console.error(error);
        }
      } else {
        resolve(list);
      }
    });
  }

  /**
   * @description 获取查询集合
   * @private
   * @param {TreeNodeVO} node 树节点VO对象
   * @param {IContext} [context={}] 上下文
   * @param {*} searchFilter 搜索过滤参数
   * @param {*} filter 过滤参数
   * @return {*}  {Promise<any>}
   * @memberof TreeService
   */
  private async searchNodeData(node: TreeNodeVO, context: IContext = {}, searchFilter: any, filter: any): Promise<any> {
    if (filter.viewParams) {
      Object.assign(searchFilter, filter.viewParams);
    }
    if (!searchFilter.page) {
      Object.assign(searchFilter, { page: 0 });
    }
    if (!searchFilter.size) {
      Object.assign(searchFilter, { size: 1000 });
    }
    if (context && context.srfparentdename) {
      Object.assign(searchFilter, { srfparentdename: deepCopy(context).srfparentdename });
    }
    if (context && context.srfparentkey) {
      Object.assign(searchFilter, { srfparentkey: deepCopy(context).srfparentkey });
      if (Environment && Environment.enableIssue) {
        Object.assign(searchFilter, { nodeid: deepCopy(context).srfparentkey });
      }
    }
    if (node.sortPSAppDEField?.codeName) {
      Object.assign(searchFilter, { sort: `${node.sortPSAppDEField.codeName.toLowerCase()},${node.sortDir ? node.sortDir : 'asc'}` });
    }
    let list: any = [];
    if (node.appDataEntity) {
      const dataSet = node.appDeDataSet?.codeName;
      const appEntityService = await App.getDataService(node.appDataEntity.codeName.toLowerCase(), context);
      if (appEntityService && appEntityService[dataSet] instanceof Function) {
        try {
          const response: any = await appEntityService[dataSet](context, searchFilter, false);
          if (!response.status || response.status !== 200) {
            console.error(`查询 ${dataSet} 数据集异常!`);
            return [];
          }
          const data: any = response.data;
          if (Object.keys(data).length > 0) {
            list = deepCopy(data);
            return list;
          } else {
            return [];
          }
        } catch (error) {
          console.error(`查询 ${dataSet} 数据集异常!`);
          return [];
        }
      }
    } else {
      return [];
    }
  }

  public handleResNavContext(context: any, filter: any, resNavContext: any) {
    if (resNavContext && Object.keys(resNavContext).length > 0) {
      let tempContextData: any = deepCopy(context);
      let tempViewParams: any = {};
      if (filter && filter.viewparams) {
        tempViewParams = filter.viewparams;
      }
      Object.keys(resNavContext).forEach((item: any) => {
        let curDataObj: any = resNavContext[item];
        this.handleCustomDataLogic(context, tempViewParams, curDataObj, tempContextData, item, filter?.srfparentdata);
      });
      return tempContextData;
    } else {
      return context;
    }
  }

  /**
   * @description 处理关系导航参数
   * @param context 应用上下文
   * @param filter 参数
   * @param resNavParams 节点关系导航参数
   * @param resParams 节点关系参数
   * @memberof TreeService
   */
  public handleResNavParams(context: any, filter: any, resNavParams: any, resParams: any) {
    if ((resNavParams && Object.keys(resNavParams).length > 0) || (resParams && Object.keys(resParams).length > 0)) {
      let tempViewParamData: any = {};
      let tempViewParams: any = {};
      if (filter && filter.viewparams) {
        tempViewParams = filter.viewparams;
        tempViewParamData = deepCopy(filter.viewparams);
      }
      if (Object.keys(resNavParams).length > 0) {
        Object.keys(resNavParams).forEach((item: any) => {
          let curDataObj: any = resNavParams[item];
          this.handleCustomDataLogic(context, tempViewParams, curDataObj, tempViewParamData, item, filter?.srfparentdata);
        });
      }
      if (Object.keys(resParams).length > 0) {
        Object.keys(resParams).forEach((item: any) => {
          let curDataObj: any = resParams[item];
          tempViewParamData[item.toLowerCase()] = curDataObj.value;
        });
      }
      Object.assign(filter, { viewparams: tempViewParamData });
      return filter;
    } else {
      return filter;
    }
  }

  /**
   * @description 处理自定义节点关系导航数据
   * @param context 应用上下文
   * @param viewparams 参数
   * @param curNavData 节点关系导航参数对象
   * @param tempData 返回数据
   * @param item 节点关系导航参数键值
   * @param parentData 父值
   * @memberof TreeService
   */
  public handleCustomDataLogic(context: any, viewparams: any, curNavData: any, tempData: any, item: string, parentData?: any) {
    // 直接值直接赋值
    if (curNavData.isRawValue) {
      if (isEmpty(curNavData.value)) {
        Object.defineProperty(tempData, item.toLowerCase(), {
          value: null,
          writable: true,
          enumerable: true,
          configurable: true,
        });
      } else {
        Object.defineProperty(tempData, item.toLowerCase(), {
          value: curNavData.value,
          writable: true,
          enumerable: true,
          configurable: true,
        });
      }
    } else {
      // 先从导航上下文取数，没有再从导航参数（URL）取数，如果导航上下文和导航参数都没有则为null
      if (parentData && parentData[curNavData.value.toLowerCase()] != null) {
        Object.defineProperty(tempData, item.toLowerCase(), {
          value: parentData[curNavData.value.toLowerCase()],
          writable: true,
          enumerable: true,
          configurable: true,
        });
      } else if (context[curNavData.value.toLowerCase()] != null) {
        Object.defineProperty(tempData, item.toLowerCase(), {
          value: context[curNavData.value.toLowerCase()],
          writable: true,
          enumerable: true,
          configurable: true,
        });
      } else {
        if (viewparams[curNavData.value.toLowerCase()] != null) {
          Object.defineProperty(tempData, item.toLowerCase(), {
            value: viewparams[curNavData.value.toLowerCase()],
            writable: true,
            enumerable: true,
            configurable: true,
          });
        } else {
          Object.defineProperty(tempData, item.toLowerCase(), {
            value: null,
            writable: true,
            enumerable: true,
            configurable: true,
          });
        }
      }
    }
  }

}