import { createUUID } from 'qx-util';
import { UIUtil, deepCopy, GridControlProps, GridControlState, IActionParam, IParam, MainControl } from '@core';

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
      const { data } = toRefs(this.controlState);
      if (data.value[rowIndex][name] !== value) {
        data.value[rowIndex][name] = value;
        data.value[rowIndex]["rowDataState"] = "update";
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
        UIUtil.calcActionItemAuthState(rowData, tempModel, UIService);
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
        const { gridGroup } = this.controlState;
        const { data, columnsModel } = toRefs(this.controlState);
        const { groupField } = gridGroup;
        let autoGroup: string[] = [];
        data.value.forEach((item: IParam) => {
            if (item.hasOwnProperty(groupField)) {
                autoGroup.push(item[groupField]);
            }
        })
        autoGroup = [...new Set(autoGroup)];
        if (autoGroup.length > 0) {
            const groupColumn = this.getGridColumn(columnsModel.value, "GROUP");
            const gridData: IParam[] = [];
            autoGroup.forEach((group: string, index: number) => {
                const children: IParam[] = [];
                data.value.forEach((item: IParam) => {
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
            data.value = gridData;
        }
    }

    /**
     * @description 代码表分组
     * @memberof GridControl
     */
    public async codeListGroup() {
        const { gridGroup } = this.controlState;
        const { data, columnsModel } = toRefs(this.controlState);
        const { groupField } = gridGroup;
        // TODO 代码表数据
        let codeListGroup: IParam[] = [];
        if (codeListGroup.length > 0) {
            const groupColumn = this.getGridColumn(columnsModel.value, "GROUP");
            const gridData: IParam[] = [];
            const otherGroup: IParam[] = [];
            codeListGroup.forEach((group: IParam) => {
                const children: IParam[] = [];
                data.value.forEach((item: IParam) => {
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
            data.value.forEach((item: IParam) => {
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
            data.value = gridData;
        }
    }

    /**
     * @description 计算表格行为权限
     * @memberof GridControl
     */
    public calcGridAuthState() {
        const { data, columnsModel } = toRefs(this.controlState);
        let columnModel = this.getGridColumn(columnsModel.value, "UAGRIDCOLUMN");
        if (columnModel) {
            data.value.forEach((item: IParam) => {
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
        const { columnsModel } = toRefs(this.controlState);
        columnsModel.value.forEach((columnModel: IParam) => {
            const customRender = ({text, record, index, column}: IParam) => {
                const option = {
                    props: {} as IParam,
                };
                if (record.children) {
                    if (Object.is(column.columnType, "GROUP")) {
                        Object.assign(option.props,{
                            colSpan: columnsModel.value.length,
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
        const { gridGroup } = this.controlState;
        const { enableGroup, groupField, groupMode } = gridGroup;
        if (enableGroup && groupField && !Object.is(groupMode, "NONE")) {
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
        const { gridAgg } = this.controlState;
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
        const { gridPaging, gridGroup, columnsModel } = this.controlState;
        const { gridAgg } = toRefs(this.controlState);
        let { aggMode, aggData } = gridAgg.value;
        const { enableGroup } = gridGroup;
        if (!Object.is(aggMode, "NONE")) {
            const { enablePagingBar, current, pageSize } = gridPaging;
            let dataAgg: IParam[] = [];
            if (Object.is(aggMode, "PAGE")) {
                const dataRef = toRef(this.controlState, "data");
                dataAgg = [...dataRef.value];
            } else if (Object.is(aggMode, "ALL")) {
                dataAgg = await this.remoteAgg();
            }
            if (enablePagingBar) {
                const start: number = (current - 1) * pageSize > 0 ? (current - 1) * pageSize - 1 : 0;
                const end: number = current * pageSize;
                dataAgg = dataAgg.slice(start, end);
            }
            if (enableGroup) {
                const _dataAgg: IParam[] = [];
                dataAgg.forEach((item: IParam) => {
                    item.children?.forEach((child: IParam) => {
                        _dataAgg.push(child);
                    })
                })
                dataAgg = _dataAgg;
            }
            const _columnsModel: IParam[] = [];
            columnsModel.forEach((column: IParam) => {
                if (!Object.is(column.columnType, "GROUPGRIDCOLUMN")) {
                  _columnsModel.push(column);
                }
            });
            _columnsModel.forEach((column: IParam) => {
                aggData.push(this.getAggValue(dataAgg, column))
            });
        }
    }

    /**
     * @description 处理默认选中
     * @memberof GridControl
     */
    public handleDefaultSelect() {
        const { selectedData, selectFirstDefault, controlName, data } = this.controlState;
        const { selectedRowKeys } = toRefs(this.controlState);
        if (selectedData?.length > 0) {
            const _selectedRowKeys: string[] = [];
            selectedData.forEach((selected: IParam) => {
                if (selected.srfkey) {
                    _selectedRowKeys.push(selected.srfkey);
                }
            });
            selectedRowKeys.value = _selectedRowKeys;
        } else if (selectFirstDefault) {
            if (data[0]) {
                this.emit("ctrlEvent", {
                    tag: controlName,
                    action: "selectionChange",
                    data: [deepCopy(data[0])],
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
    public useLoad(props: GridControlProps) {
        const { viewSubject, controlName } = this.controlState;
        const load = async (opt: any = {}) => {
            try {
                const {
                    controlService, context, viewParams, showBusyIndicator, controlAction, gridSort
                } = this.controlState;
                const { gridPaging, data } = toRefs(this.controlState);
                if (!controlAction.fetchAction) {
                    return;
                }
                const { noSort, minorSortDir, minorSortPSDEF } = gridSort;
                let { enablePagingBar, pagination, current, pageSize } = gridPaging.value;
                const arg: any = { ...opt };
                let _context = deepCopy(context ? context : {});
                let _viewParams = deepCopy(viewParams ? viewParams : {});
                if (noSort && minorSortDir && minorSortPSDEF) {
                    Object.assign(_viewParams, { sort: `${minorSortPSDEF},${minorSortDir}` });
                }
                if (enablePagingBar) {
                    Object.assign(_viewParams, { page: current - 1, size: pageSize });
                }
                Object.assign(arg, _viewParams);
                const response = await controlService.get(
                    _context,
                    arg,
                    { action: controlAction.fetchAction, isLoading: showBusyIndicator }
                );
                if (response.status || response.status == 200) {
                    data.value = response.data;
                    if (enablePagingBar) {
                        pagination['total'] = response.total;
                    }
                    this.calcGridAuthState();
                    this.handleDefaultSelect();
                    this.handleGridGroup();
                    this.handleDataAgg();
                }
            } catch (error) {
                // todo 错误异常处理
                console.log(error);
            }
        }
        // 订阅viewSubject,监听load行为
        if (viewSubject) {
            let subscription = viewSubject.subscribe(({ tag, action, data }: IActionParam) => {
                if (Object.is(controlName, tag) && Object.is("load", action)) {
                    load(data)
                }
            })
            // 部件卸载时退订viewSubject
            onUnmounted(() => {
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
                const { controlService, context, viewParams, showBusyIndicator, data, controlAction } = this.controlState;
                // TODO 值规则校验处理

                for (const item of data) {
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
                const { data } = toRefs(this.controlState);
                if (!controlAction.removeAction) {
                    return;
                }
                const _data: IParam[] = [];
                opt.forEach((item: IParam, index: number) => {
                    if (Object.is(item.srfuf, "0")) {
                        data.value.some((val: any, num: number) => {
                            if (JSON.stringify(val) == JSON.stringify(item)) {
                                data.value.splice(num, 1);
                                return true;
                            }
                        });
                    } else {
                        _data.push(opt[index]);
                    }
                });
                if (_data.length > 0) {
                    const keys: string[] = [];
                    _data.forEach((item: IParam) => {
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
                const { data } = toRefs(this.controlState);
                if (!controlAction.loadDraftAction) {
                    return;
                }
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
                  data.value = [...data.value,[response.data]];
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
            newRow: newRow,
        };
    }

    /**
     * @description 使用自定义模块（蚂蚁金服UI自定义）
     * @param {GridControlProps} props
     * @memberof GridControl
     */
    public useCustom(props: GridControlProps) {
        const { controlName, selectFirstDefault, rowEditState, rowActiveMode } = this.controlState;
        const { selectedRowKeys, gridPaging } = toRefs(this.controlState);
        let { current, pageSize } = gridPaging.value;
        // 滚动条配置
        const scrollOption = computed(() => {
            return {
                scrollToFirstRowOnChange: true,
                x: '110%',
                y: '690px',
            }
        });
        // 指定表格行key
        const rowKey = (record: IParam) => {
            return record.srfkey;
        }
        // 表格行样式
        const rowClassName = (record: IParam, index: number) => {
            return index % 2 === 1 ? "table-striped" : null;
        }
        // 表格行自定义
        const customRow = (record: IParam, index: number) => {
            return {
                onClick: () => {
                    if (!rowEditState) {
                        selectedRowKeys.value = [record.srfkey];
                        if (!record.children) {
                            this.emit("ctrlEvent",{ tag: controlName, action: "selectionChange", data: [deepCopy(record)] })
                            if (Object.is(rowActiveMode, 1)) {
                                this.emit("ctrlEvent",{ tag: controlName, action: "rowClick", data: [deepCopy(record)] })
                            }
                        }
                    }
                },
                onDblclick: () => {
                    if (!record.children && Object.is(rowActiveMode, 2)) {
                        this.emit("ctrlEvent",{ tag: controlName, action: "rowDbClick", data: [deepCopy(record)] })
                    }
                }
            };
        }
        // 表格选择功能配置
        const rowSelectionOption = computed(() => {
            if (selectFirstDefault) {
                return false;
            }
            return {
                columnWidth: 90,
                selectedRowKeys: selectedRowKeys.value,
                checkStrictly: props.multiple ? false : true,
                onChange: (_selectedRowKeys: string[], selectedRows: IParam[]) => {
                    selectedRowKeys.value = _selectedRowKeys;
                    const selection: IParam[] = [];
                    selectedRows.forEach((select: IParam) => {
                        if (!select.children) {
                            selection.push(select);
                        }
                    })
                    this.emit("ctrlEvent",{ tag: controlName, action: "selectionChange", data: selection })
                },
            };
        });
        // 列拖动
        const resizeColumn = (width: number, column: IParam) => {
            column.width = width;
        }
        // 处理表格变化（分页，过滤，排序）
        const handleGridChange = (pagination: IParam, filters: IParam, sorter: IParam, data: IParam) => {
            if (pagination) {
                current = pagination.current;
                pageSize = pagination.pageSize;
                this.useLoad(props).load();
            }
        }
        return {
            custom: {
                scrollOption,
                rowKey,
                rowClassName,
                customRow,
                rowSelectionOption,
                resizeColumn,
                handleGridChange,
            }
        }
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
        const { custom } = this.useCustom(props);
        return {
            ...superParams,
            state: this.controlState,
            load,
            custom,
            handleEditorEvent: this.handleEditorEvent.bind(this),
            handleToolbarEvent: this.handleToolbarEvent.bind(this),
        };
    }
}
