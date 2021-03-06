import { createUUID } from 'qx-util';
import { calcActionItemAuthState, deepCopy, GridControlProps, GridControlState, IActionParam, IParam, MainControl } from '@ibiz-core';

/**
 * @description 表格部件
 * @export
 * @class GridControl
 * @extends {MainControl}
 */
export class GridControl extends MainControl {
  
  /**
   * @description 部件状态
   * @type {GridControlState}
   * @memberof GridControl
   */
  public declare controlState: GridControlState;

  /**
   * @description
   * @param {GridControlProps} props
   * @memberof GridControl
   */
  public setState(props: GridControlProps) {
    super.setState(props);
    this.controlState.multiple = toRef(props, "multiple") as any;
    this.controlState.rowEditState = toRef(props, "rowEditState") as any;
    this.controlState.rowActiveMode = toRef(props, "rowActiveMode") as any;
    this.controlState.selectedData = toRef(props, "selectedData") as any;
    this.controlState.selectFirstDefault = toRef(props, "selectFirstDefault") as any;
  }

  /**
   * @description 表格数据改变
   * @param {number} rowIndex 行索引
   * @param {string} name 表格列属性名称
   * @param {*} value 表格列属性值
   * @memberof GridControl
   */
  public gridDataChange(rowIndex: number, name: string, value: any){
    if (this.controlState.items[rowIndex][name] !== value) {
      this.controlState.items[rowIndex][name] = value;
      if (!this.controlState.items[rowIndex]["rowDataState"]) {
        this.controlState.items[rowIndex]["rowDataState"] = "update";
      }
    }
  }

  /**
   * @description 获取界面行为权限状态
   * @param {IParam} rowData 行数据
   * @return {*} 
   * @memberof GridControl
   */
  public getActionAuthState(rowData: IParam) {
    const { UIService, uAColumnModel } = this.controlState;
    let tempModel: any = deepCopy(uAColumnModel);
    calcActionItemAuthState(rowData, tempModel, UIService);
    return tempModel;
  }

  /**
   * @description 获取指定列类型模型
   * @param {IParam[]} columns 表格列集合
   * @param {string} columnType 表格列类型
   * @return {*}  {*}
   * @memberof GridControl
   */
  public getGridColumn(columns: IParam[], columnType: string): any {
    for (const column of columns) {
      if (Object.is(column.columnType, columnType)) {
        return deepCopy(column);
      }
      if (column.children?.length > 0) {
        return this.getGridColumn(column.children, columnType);
      }
    }
  }

  /**
   * @description 自动分组
   * @memberof GridControl
   */
  public autoGroup() {
    const { groupField } = this.controlState;
    const dataRef = toRef(this.controlState, "items");
    let autoGroup: string[] = [];
    dataRef.value.forEach((item: IParam) => {
      if (item.hasOwnProperty(groupField)) {
        autoGroup.push(item[groupField]);
      }
    })
    autoGroup = [...new Set(autoGroup)];
    if (autoGroup.length > 0) {
      const columnsModelRef = toRef(this.controlState, "columnsModel");
      const groupColumn = this.getGridColumn(columnsModelRef.value, "GROUP");
      const gridData: IParam[] = [];
      autoGroup.forEach((group: string, index: number) => {
        const children: IParam[] = [];
        dataRef.value.forEach((item: IParam) => {
          if (Object.is(group, item[groupField])) {
            children.push(item);
          }
        })
        gridData.push({
          srfkey: createUUID(),
          [groupColumn.dataIndex]: group,
          children: deepCopy(children),
        })
      });
      dataRef.value = gridData;
    }
  }

  /**
   * @description 代码表分组
   * @memberof GridControl
   */
  public async codeListGroup() {
    const { groupField } = this.controlState;
    const dataRef = toRef(this.controlState, "items");
    // TODO 代码表数据
    let codeListGroup: IParam[] = [];
    if (codeListGroup.length > 0) {
      const columnsModelRef = toRef(this.controlState, "columnsModel");
      const groupColumn = this.getGridColumn(columnsModelRef.value, "GROUP");
      const gridData: IParam[] = [];
      const otherGroup: IParam[] = [];
      codeListGroup.forEach((group: IParam) => {
        const children: IParam[] = [];
        dataRef.value.forEach((item: IParam) => {
          if (Object.is(group.value, item[groupField])) {
            children.push(item);
          }
        });
        gridData.push({
          srfkey: createUUID(),
          [groupColumn.dataIndex]: group.text,
          children: deepCopy(children),
        })
      });
      dataRef.value.forEach((item: IParam) => {
        const index: number = codeListGroup.findIndex((_item: IParam) => Object.is(item[groupField], _item.value));
        if (index < 0) {
          otherGroup.push(item);
        }
      });
      if (otherGroup.length > 0) {
        gridData.push({
          srfkey: createUUID(),
          [groupColumn.dataIndex]: "其它",
          children: deepCopy(otherGroup),
        })
      }
      dataRef.value = gridData;
    }
  }

  /**
   * @description 计算表格行为权限
   * @memberof GridControl
   */
  public calcGridAuthState() {
    const dataRef = toRef(this.controlState, "items");
    const columnsModelRef = toRef(this.controlState, "columnsModel");
    let columnModel = this.getGridColumn(columnsModelRef.value, "UAGRIDCOLUMN");
    if (columnModel) {
      dataRef.value.forEach((item: IParam) => {
        Object.assign(item, {
          [columnModel.dataIndex]: this.getActionAuthState(item),
        })
      })
    }
  }

  /**
   * @description 设置表格合并列
   * @memberof GridControl
   */
  public setGridColSpan() {
    const columnsModelRef = toRef(this.controlState, "columnsModel");
    columnsModelRef.value.forEach((columnModel: IParam) => {
      const customRender = ({text, record, index, column}: IParam) => {
        const option = {
          props: {} as IParam,
        };
        if (record.children) {
          if (Object.is(column.columnType, "GROUP")) {
            Object.assign(option.props,{ 
              colSpan: columnsModelRef.value.length,
            });
          } else {
            Object.assign(option.props,{ 
              colSpan: 0 
            });
          }
        }
        return option;
      }
      Object.assign(columnModel,{
        customRender: customRender,
      })
    });
  }

  /**
   * @description 处理表格分组
   * @memberof GridControl
   */
  public handleGridGroup() {
    const { groupMode, groupField } = this.controlState;
    if (groupField && !Object.is(groupMode, "NONE")) {
      if (Object.is(groupMode, "AUTO")) {
        this.autoGroup();
      } else if (Object.is(groupMode, "CODELIST")) {
        this.codeListGroup();
      }
      this.setGridColSpan();
    }
  }

  /**
   * @description 远程聚合
   * @memberof GridControl
   */
  public async remoteAgg(): Promise<IParam[]> {
    const { aggEntity, aggDataSet } = this.controlState;
    const aggData: IParam[] = [];
    // TODO 调用服务获取聚合数据
    return aggData;
  }

  /**
   * @description 获取聚合值
   * @param {IParam[]} aggData 聚合数据
   * @param {string} column 列模型
   * @memberof GridControl
   */
  public getAggValue(aggData: IParam[], column: IParam): string {
    switch (column.aggMode) {
      case "NONE":
        return "";
      case "SUM":
        let sum: number = 0;
        aggData.forEach((item: IParam) => {
          sum += Number(item[column.dataIndex] ? item[column.dataIndex] : 0);
        })
        return "SUM:" + sum;
      case "AVG":
        let sum2: number = 0;
        aggData.forEach((item: IParam) => {
          sum2 += Number(item[column.dataIndex] ? item[column.dataIndex] : 0);
        })
        return "AVG:" + Number(sum2 / (aggData.length)).toFixed(3);
      case "MAX":
        let max: number = 0;
        aggData.forEach((item: IParam) => {
          const value: number = Number(item[column.dataIndex] ? item[column.dataIndex] : 0);
          if (value > max) {
            max = value;
          }
        })
        return "MAX:" + max;
      case "MIN":
        let min: number = 0;
        aggData.forEach((item: IParam) => {
          const value: number = Number(item[column.dataIndex] ? item[column.dataIndex] : 0);
          if (min > value) {
            min = value;
          }
        })
        return "MIN:" + min;
      default:
        return "";
    }
  }

  /**
   * @description 处理数据聚合
   * @memberof GridControl
   */
  public async handleDataAgg() {
    const { aggMode, enablePagingBar } = this.controlState;
    if (!Object.is(aggMode, "NONE")) {
      const dataAggRef = toRef(this.controlState, "dataAgg");
      const currentRef = toRef(this.controlState, "current");
      const pageSizeRef = toRef(this.controlState, "pageSize");
      let aggData: IParam[] = [];
      if (Object.is(aggMode, "PAGE")) {
        const dataRef = toRef(this.controlState, "items");
        aggData = [...dataRef.value];
      } else if (Object.is(aggMode, "ALL")) {
        aggData = await this.remoteAgg();
      }
      if (enablePagingBar) {
        const start: number = (currentRef.value - 1) * pageSizeRef.value > 0 ? (currentRef.value - 1) * pageSizeRef.value - 1 : 0;
        const end: number = currentRef.value * pageSizeRef.value;
        aggData = aggData.slice(start, end);
      }
      const columnsModelRef = toRef(this.controlState, "columnsModel");
      const columnsModel: IParam[] = [];
      columnsModelRef.value.forEach((column: IParam) => {
        if (!Object.is(column.columnType, "GROUPGRIDCOLUMN")) {
          columnsModel.push(column);
        }
      });
      const dataAgg: string[] = [];
      columnsModel.forEach((column: IParam) => {
        dataAgg.push(this.getAggValue(aggData, column))
      })
      dataAggRef.value = [...dataAgg];
    }
  }

  /**
   * @description 处理默认选中
   * @memberof GridControl
   */
  public handleDefaultSelect() {
    const { selectedData, selectFirstDefault, controlName } = this.controlState;
    if (selectedData?.length > 0) {
      const selectedRowKeys: string[] = [];
      const selectedRowKeysRef = toRef(this.controlState, "selectedRowKeys");
      selectedData.forEach((selected: IParam) => {
        if (selected.srfkey) {
          selectedRowKeys.push(selected.srfkey);
        }
      });
      selectedRowKeysRef.value = selectedRowKeys;
    } else if (selectFirstDefault) {
      const dataRef = toRef(this.controlState, "items");
      if (dataRef.value[0]) {
        this.emit("ctrlEvent", {
          tag: controlName,
          action: "selectionChange",
          data: [deepCopy(dataRef.value[0])],
        });
      }
    }
  }

  /**
   * @description 使用加载功能模块
   * @param {GridControlProps} props 传入的props
   * @return {*} 
   * @memberof GridControl
   */
  public useLoad(props: GridControlProps){
    const { viewSubject, controlName } = this.controlState;
    const load = async (opt: any = {})=>{
      try {
        const { 
          controlService, context, viewParams, showBusyIndicator, noSort, minorSortDir, minorSortPSDEF,
          enablePagingBar, controlAction
        } = this.controlState;
        const dataRef = toRef(this.controlState, "items");
        const paginationRef = toRef(this.controlState, "pagination");
        if(!controlAction.loadAction){
          return;
        }
        const arg: any = { ...opt };
        let _context = deepCopy(context ? context : {});
        let _viewParams = deepCopy(viewParams ? context : {});
        if (noSort && minorSortDir && minorSortPSDEF) {
          Object.assign(_viewParams, { sort: `${minorSortPSDEF},${minorSortDir}`});
        }
        if (enablePagingBar) {
          const currentRef = toRef(this.controlState, "current");
          const pageSizeRef = toRef(this.controlState, "pageSize");
          Object.assign(_viewParams, { page: currentRef.value - 1, size: pageSizeRef.value});
        }
        Object.assign(arg, { viewParams: _viewParams });
        const response = await controlService.get(
          _context, 
          arg,
          { action: controlAction.loadAction, isLoading: showBusyIndicator}
        );
        if (response.status || response.status == 200) {
          dataRef.value = response.data;
          if (enablePagingBar) {
            paginationRef.value['total'] = response.total;
          }
          this.calcGridAuthState();
          this.handleDefaultSelect();
          this.handleGridGroup();
          this.handleDataAgg();
        }
      } catch (error) {
        // todo 错误异常处理
        console.error(error)
      }
    }

    // 订阅viewSubject,监听load行为
    if(viewSubject){
      let subscription = viewSubject.subscribe(({ tag, action, data }: IActionParam)=>{
        if(Object.is(controlName, tag) && Object.is("load", action) ){
          load(data)
        }
      })
      // 部件卸载时退订viewSubject
      onUnmounted(()=>{
        subscription.unsubscribe();
      })
    }

    return {
      load: load
    }
  }

  /**
   * @description 使用保存功能模块
   * @param {GridControlProps} props 传入的props
   * @return {*} 
   * @memberof GridControl
   */
  public useSave(props: GridControlProps) {
    const { viewSubject, controlName } = this.controlState;
    const save = async (opt: any = {}) => {
      try {
        const { controlService, context, viewParams, showBusyIndicator, items, controlAction } = this.controlState;
        // TODO 值规则校验处理

        for (const item of items) {
          const { updateAction, createAction } = controlAction;
          const saveAction: any = item.rowDataState == "update" ? updateAction : item.rowDataState == "create" ? createAction : "";
          const saveFunName = item.rowDataState;
          if (!saveAction || !saveFunName) {
            return;
          }
          const arg: any = { ...opt };
          let _context = deepCopy(context);
          let _viewParams = deepCopy(viewParams);
          Object.assign(arg, item.getDo());
          Object.assign(arg, { viewParams: _viewParams });
          const response = await controlService[saveFunName](
            _context,
            arg,
            { action: saveAction, isLoading: showBusyIndicator },
          );
          if (response.status || response.status == 200) {
            
          }
        }
      } catch (error) {
        // TODO 错误异常处理
        console.log(error);
      }
    };
    // 订阅viewSubject,监听load行为
    if (viewSubject) {
      let subscription = viewSubject.subscribe(({ tag, action, data }: IActionParam) => {
        if (Object.is(controlName, tag) && Object.is("save", action)) {
          save(data);
        }
      });
      // 部件卸载时退订viewSubject
      onUnmounted(() => {
        subscription.unsubscribe();
      });
    }

    return {
      save: save,
    };
  }

  /**
   * @description 使用删除功能模块
   * @param {GridControlProps} props 传入的props
   * @return {*} 
   * @memberof GridControl
   */
  public useRemove(props: GridControlProps) {
    const { viewSubject, controlName } = this.controlState;
    const remove = async (opt: IParam[] = []) => {
      try {
        const { controlService, context, viewParams, showBusyIndicator, controlAction, appDeCodeName } = this.controlState;
        if (!controlAction.removeAction) {
          return;
        }
        const dataRef = toRef(this.controlState, "items");
        const data: IParam[] = [];
        opt.forEach((item: IParam, index: number) => {
          if (Object.is(item.srfuf, "0")) {
            dataRef.value.some((val: any, num: number) => {
                if (JSON.stringify(val) == JSON.stringify(item)) {
                    dataRef.value.splice(num, 1);
                    return true;
                }
            });
          } else {
            data.push(opt[index]);
          }
        });
        if (data.length > 0) {
          const keys: string[] = [];
          data.forEach((item: IParam) => {
            keys.push(item.srfkey);
          });
          const _removeAction = keys.length > 1 ? "removeBatch" : controlAction.removeAction;
          let _context = deepCopy(context);
          Object.assign(_context, {[appDeCodeName]: keys});
          let _viewParams = deepCopy(viewParams);
          const arg: IParam = {
            [appDeCodeName]: keys,
          };
          Object.assign(arg, { viewParams: _viewParams });
          const response = await controlService.remove(
            _context,
            arg,
            { action: _removeAction, isLoading: showBusyIndicator },
          );
          if (response.status || response.status == 200) {
  
          }
        }
      } catch (error) {
        // TODO 错误异常处理
        console.log(error);
      }
    };

    // 订阅viewSubject,监听load行为
    if (viewSubject) {
      let subscription = viewSubject.subscribe(({ tag, action, data }: IActionParam) => {
        if (Object.is(controlName, tag) && Object.is("remove", action)) {
          remove(data);
        }
      });
      // 部件卸载时退订viewSubject
      onUnmounted(() => {
        subscription.unsubscribe();
      });
    }

    return {
      remove: remove,
    };
  }

  /**
   * @description 使用新建行功能模块
   * @param {GridControlProps} props 传入的props
   * @return {*} 
   * @memberof GridControl
   */
  public useNewRow(props: GridControlProps) {
    const { viewSubject, controlName } = this.controlState;
    const newRow = async (opt: any = {}) => {
      try {
        const { controlService, context, viewParams, showBusyIndicator, controlAction } = this.controlState;
        if (!controlAction.loadDraftAction) {
          return;
        }
        const dataRef = toRef(this.controlState, "items");
        let _context = deepCopy(context);
        let _viewParams = deepCopy(viewParams);
        const arg: any = {...opt};
        Object.assign(arg, { viewParams: _viewParams });
        const response = await controlService.loadDraft(
          _context,
          arg,
          { action: controlAction.loadDraftAction, isLoading: showBusyIndicator },
        );
        if (response.status || response.status == 200) {
          dataRef.value = [...dataRef.value,[response.data]];
        }
      } catch (error) {
        // TODO 错误异常处理
        console.log(error);
      }
    };

    // 订阅viewSubject,监听load行为
    if (viewSubject) {
      let subscription = viewSubject.subscribe(({ tag, action, data }: IActionParam) => {
        if (Object.is(controlName, tag) && Object.is("newRow", action)) {
          newRow(data);
        }
      });
      // 部件卸载时退订viewSubject
      onUnmounted(() => {
        subscription.unsubscribe();
      });
    }

    return {
      remove: newRow,
    };
  }

  /**
   * @description 处理编辑器事件
   * @param {IActionParam} actionParam 行为参数
   * @memberof GridControl
   */
  public handleEditorEvent(rowIndex: number, actionParam: IActionParam) {
    const { tag, action, data } = actionParam;
    switch (action) {
      case "valueChange":
        this.gridDataChange(rowIndex, tag, data);
        break;
      default:
        break;
    }
  }

  /**
   * @description 处理表格操作列事件
   * @param {IActionParam} actionParam 行为参数
   * @param {IParam} [row] 表格行数据
   * @memberof GridControl
   */
  public handleToolbarEvent(actionParam: IActionParam, row?: IParam) {
    const { tag, action, data } = actionParam;
    console.log('触发界面行为', actionParam, row);
  }

  /**
   * @description 安装部件所有功能模块的方法
   * @param {GridControlProps} props 传入的Props
   * @param {Function} [emit]
   * @return {*} 
   * @memberof GridControl [emit] 事件
   */
  public moduleInstall(props: GridControlProps, emit?: Function) {
    const superParams = super.moduleInstall(props, emit);
    const { load } = this.useLoad(props);

    return {
      ...superParams,
      state: this.controlState,
      load,
      handleEditorEvent: this.handleEditorEvent.bind(this),
      handleToolbarEvent: this.handleToolbarEvent.bind(this),
    };
  }
}
