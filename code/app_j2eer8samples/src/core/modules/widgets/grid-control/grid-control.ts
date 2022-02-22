import { DataTypes, dateFormat, deepCopy, GridControlState, IActionParam, IParam, isExistAndNotEmpty, MDControl } from "@core";
import { createUUID } from "qx-util";
import schema, { ErrorList, FieldErrorList } from 'async-validator';
import { Ref } from "vue";
/**
 * @description 表格部件
 * @export
 * @class GridControl
 * @extends {MDControl}
 */
export class GridControl extends MDControl {

    /**
     * @description 部件状态
     * @type {GridControlState}
     * @memberof GridControl
     */
    public declare state: GridControlState;

    /**
     * @description
     * @param {GridControlProps} props
     * @memberof GridControl
     */
    public setState() {
        super.setState();
    }

    /**
     * @description 使用自定义模块（蚂蚁金服UI自定义）
     * @memberof GridControl
     */
    public useCustom() {
        const { selectFirstDefault, rowEditState, selectColumnWidth, isSingleSelect, totalColumnWidth } = this.state;
        // 滚动条配置
        const useScrollOption = computed(() => {
            return {
                scrollToFirstRowOnChange: true,
                x: totalColumnWidth || '150%',
                y: '100%',
            }
        });
        // 指定表格行key
        const useRowKey = (record: IParam) => {
            return record.srfkey;
        }
        // 表格行样式
        const useRowClassName = (record: IParam, index: number) => {
            return index % 2 === 1 ? "table-striped" : null;
        }
        // 表格行自定义
        const useCustomRow = (record: IParam, index: number) => {
            return {
                onClick: () => {
                    // 单击激活
                    if (this.state.rowActiveMode === 1) {
                        if (!rowEditState) {
                            const activeIndex: number = this.state.selectedRowKeys.findIndex((key: string) => {
                                return record.srfkey === key;
                            });
                            if (activeIndex === -1) {
                                this.state.selectedRowKeys.push(record.srfkey);
                                this.state.selectedData.push(record);
                            } else {
                                this.state.selectedRowKeys = this.state.selectedRowKeys.filter((key: string) => {
                                    return key !== record.srfkey;
                                })
                                this.state.selectedData = this.state.selectedData.filter((item: any) => {
                                    return item.srfkey !== record.srfkey;
                                })
                            }

                            if (!record.children) {
                                this.emit("ctrlEvent", { tag: this.props.name, action: "selectionChange", data: [record] });
                                this.emit("ctrlEvent", { tag: this.props.name, action: "rowClick", data: [record] });
                            }
                        }
                    }
                },
                onDblclick: () => {
                    // 双击激活
                    if (this.state.rowActiveMode === 2) {
                        if (!record.children) {
                            const activeIndex: number = this.state.selectedRowKeys.findIndex((key: string) => {
                                return record.srfkey === key;
                            });
                            if (activeIndex === -1) {
                                this.state.selectedRowKeys.push(record.srfkey);
                                this.state.selectedData.push(record);
                            } else {
                                this.state.selectedRowKeys = this.state.selectedRowKeys.filter((key: string) => {
                                    return key !== record.srfkey;
                                })
                                this.state.selectedData = this.state.selectedData.filter((item: any) => {
                                    return item.srfkey !== record.srfkey;
                                })
                            }
                            this.emit("ctrlEvent", { tag: this.props.name, action: "rowDbClick", data: [record] });
                        }
                    }
                }
            };
        }
        // 展开行
        const useExpandedRowKeys: Ref<Array<string>> = ref([]);
        const onExpandedRowsChange = (expandedRows: string[]) => {
            useExpandedRowKeys.value = expandedRows;
        }
        // 表格选择功能配置
        const useRowSelectionOption = computed(() => {
            if (selectFirstDefault) {
                return false;
            }
            return {
                type: isSingleSelect ? 'radio' : 'checkbox',
                columnWidth: selectColumnWidth,
                selectedRowKeys: this.state.selectedRowKeys,
                checkStrictly: false,
                onSelect: (record: IParam, selected: boolean, selectedRows: IParam[], $event: any) => {
                    if (selected) {
                        const { appDeKeyFieldName } = this.state;
                        const selectedRowKey: string = record[appDeKeyFieldName] || record.srfkey;
                        const index: number = useExpandedRowKeys.value.findIndex((key: string) => Object.is(key, selectedRowKey))
                        if (Object.is(index,-1) && record.children && record.children.length > 0) {
                            useExpandedRowKeys.value.push(selectedRowKey);
                        }
                    }
                },
                onChange: (_selectedRowKeys: string[], selectedRows: any[]) => {
                    this.state.selectedRowKeys = _selectedRowKeys;
                    const selection: IParam[] = [];
                    selectedRows.forEach((select: IParam) => {
                        if (!select.children) {
                            selection.push(select);
                        }
                    })
                    // 选中赋值
                    this.state.selectedData = selection;
                    this.emit("ctrlEvent", { tag: this.props.name, action: "selectionChange", data: selection })
                },
            };
        });
        // 列拖动
        const onResizeColumn = (width: number, column: IParam) => {
            column.width = width;
        }
        // 处理表格变化（分页，过滤，排序）
        const onGridChange = (pagination: IParam, filters: IParam, sorter: IParam, data: IParam) => {
            if (pagination) {
                this.load();
            }
            if (sorter) {
                this.load({ sort: `${sorter.field},${sorter.order == 'descend' ? 'desc' : 'asc'}` });
            }
        }
        return {
            useScrollOption,
            useRowKey,
            useRowClassName,
            useCustomRow,
            useExpandedRowKeys,
            useRowSelectionOption,
            onResizeColumn,
            onGridChange,
            onExpandedRowsChange
        }
    }

    /**
     * @description 处理编辑器事件
     * @param {IActionParam} actionParam 行为参数
     * @memberof GridControl
     */
    public onEditorEvent(actionParam: IActionParam, rowIndex: number) {
        const { tag, action, data } = actionParam;
        switch (action) {
            case "valueChange":
                this.handleGridItemValueChange(rowIndex, tag, data);
                break;
            default:
                break;
        }
    }

    /**
     * @description 表格项值改变
     * @param {*} data
     * @param {number} rowIndex
     * @param {string} tag
     * @memberof GridControl
     */
    private handleGridItemValueChange(rowIndex: number, tag: string, data: any) {
        const { items } = toRefs(this.state);
        if (items.value[rowIndex][tag] !== data) {
            items.value[rowIndex][tag] = data;
            items.value[rowIndex]["rowDataState"] = "update";
            this.resetGridData(tag, data, rowIndex);
            this.validateField(tag, data, rowIndex);
            this.updateGridEditItem(tag, data, rowIndex);
        }
    }

    /**
     * @description 重置表格数据
     * @param {string} name
     * @param {*} data
     * @param {number} rowIndex
     * @memberof GridControl
     */
    public resetGridData(name: string, data: any, rowIndex: number) {
        const { columnsModel } = this.state;
        if (columnsModel && columnsModel.length > 0) {
            columnsModel.forEach((column: any) => {
                if (column.resetItemName && Object.is(name, column.resetItemName)) {
                    this.handleGridItemValueChange(rowIndex, column.dataIndex, null);
                    if (column.valueItemName) {
                        this.handleGridItemValueChange(rowIndex, column.valueItemName, null);
                    }
                }
            })
        }
    }

    /**
     *
     *
     * @param {string} name
     * @param {*} value
     * @memberof GridControl
     */
    public validateField(name: string, value: any, rowIndex: number): Promise<boolean> {
        return new Promise((resolve: any, reject: any) => {
            const { rules, gridEditState } = toRefs(this.state);
            const fileRule = rules.value[name];
            if (!fileRule) {
                resolve(true);
                return;
            }
            const validator = new schema({ [name]: fileRule });
            validator.validate({ [name]: value }, undefined, (errors: ErrorList, fields: FieldErrorList) => {
                const error = errors?.find((item: any) => {
                    return item.field === name;
                })
                gridEditState.value[name][rowIndex] = error;
            })
        })
    }

    /**
     * @description 更新表格编辑项
     * @param {string} name
     * @param {*} data
     * @param {number} rowIndex
     * @memberof GridControl
     */
    public async updateGridEditItem(name: string, data: any, rowIndex: number) {
        const { items, columnsModel, context, viewParams, controlService, appDeCodeName, appDeKeyFieldName } = this.state;
        if (columnsModel && columnsModel.length > 0) {
            columnsModel.forEach(async (column: any) => {
                if (column.updateItem) {
                  const updateItem: any = column.updateItem;
                  if (updateItem.customCode) {
                      if (updateItem.scriptCode) {
                          eval(updateItem.scriptCode);
                      }
                  } else {
                      const arg = Object.assign(deepCopy(viewParams), items[rowIndex]);
                      const tempContext = Object.assign(deepCopy(context), { [appDeCodeName?.toLowerCase()]: items[rowIndex][appDeKeyFieldName] || items[rowIndex].srfkey });
                      const response = await controlService.frontLogic(
                          tempContext,
                          { viewParams: arg },
                          { action: updateItem.appDEMethod, isLoading: updateItem.showBusyIndicator },
                      );
                      if (response.status && response.status == 200) {
                          updateItem.updateDetails?.forEach((detailName: string) => {
                              if (detailName && items[rowIndex].hasOwnProperty(detailName)) {
                                  items[rowIndex][detailName] = response.data[detailName];
                              }
                          });
                      }
                  }
                }
            })
        }
    }

    /**
     * @description 操作列事件触发
     * @param {IActionParam} actionParam
     * @param {IParam} record
     * @memberof GridControl
     */
     public onToolbarEvent(actionParam: IActionParam) {
        const { data } = actionParam;
        if (!data) {
            console.warn("工具栏执行参数不足");
            return;
        }
        const { uIAction } = data;
        if (!uIAction) {
            console.warn("工具栏执行参数不足");
            return;
        }
        // 准备参数
        const inputParam = {
            context: this.state.context,
            viewParams: this.state.viewParams,
            data: this.getData(),
            event: data.event,
            actionEnvironment: this
        };
        // 执行行为
        App.getAppActionService().execute(uIAction, inputParam);
    }

    /**
     * @description 处理表格行事件（操作列，界面行为）
     * @param {IActionParam} actionParam 行为参数
     * @param {IParam} [row] 表格行数据
     * @memberof GridControl
     */
    public onActionColEvent(actionParam: IActionParam, row?: IParam) {
        const { data } = actionParam;
        if (!row || !data) {
            console.warn("工具栏执行参数不足");
            return;
        }
        // 准备参数
        const inputParam = {
            context: this.state.context,
            viewParams: this.state.viewParams,
            data: [row],
            event: data.event,
            actionEnvironment: this
        };
        // 执行行为
        App.getAppActionService().execute(data, inputParam);
    }

    /**
     * 处理数据状态变化(逻辑数据+UI)
     *
     * @memberof GridControl
     */
    public handleStateChange() {
        // 计算表格操作列行为权限
        const { items, uAColumnModel } = toRefs(this.state);
        if (items.value.length > 0 && uAColumnModel.value && Object.keys(uAColumnModel.value).length > 0) {
            Object.keys(uAColumnModel.value).forEach((key: string) => {
                const tempActionModel = uAColumnModel.value[key];
                items.value.forEach((item: any) => {
                    Object.assign(item, { [key]: this.getActionAuthState(item, tempActionModel) });
                });
            })
        }
        // 处理分组
        this.handleDataGroup();
        // 处理数据聚合
        this.handleDataAgg();
        // 处理默认选中
        this.handleDefaultSelect();
        // 设置UI变化
        this.setGridColSpan();
    }

    /**
     * 处理默认选中
     *
     * @memberof GridControl
     */
    public handleDefaultSelect() {
        const { selectedData, selectFirstDefault, controlName, items } = this.state;
        const { selectedRowKeys } = toRefs(this.state);
        if (selectedData?.length > 0) {
            const _selectedRowKeys: string[] = [];
            selectedData.forEach((selected: IParam) => {
                if (selected.srfkey) {
                    _selectedRowKeys.push(selected.srfkey);
                }
            });
            selectedRowKeys.value = _selectedRowKeys;
        } else if (selectFirstDefault) {
            if (items && items.length > 0) {
                this.emit("ctrlEvent", {
                    tag: this.props.name,
                    action: "selectionChange",
                    data: [deepCopy(items[0])],
                });
            }
        }
    }

    /**
     * @description 处理数据聚合
     *
     * @memberof GridControl
     */
    public async handleDataAgg() {
        const { mdCtrlPaging, mdCtrlGroup, columnsModel } = this.state;
        const { gridAgg } = toRefs(this.state);
        let { aggMode, aggData } = gridAgg.value;
        //  先置空再添加，避免重复
        if (aggData && aggData.length > 0) {
            aggData.splice(0, aggData.length);
        }
        const { enableGroup } = mdCtrlGroup;
        if (!Object.is(aggMode, "NONE")) {
            const { enablePagingBar, current, pageSize } = mdCtrlPaging;
            let dataAgg: IParam[] = [];
            if (Object.is(aggMode, "PAGE")) {
                const dataRef = toRef(this.state, "items");
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
     * @description 远程聚合
     *
     * @memberof GridControl
     */
    public async remoteAgg(): Promise<IParam[]> {
        const { gridAgg } = this.state;
        const aggData: IParam[] = [];
        // TODO 调用服务获取聚合数据
        return aggData;
    }

    /**
     * @description 获取聚合值
     *
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
     * 自动分组
     *
     * @protected
     * @memberof GridControl
     */
    protected autoGroupData() {
        const { gridGroup } = this.state;
        const { items, columnsModel } = toRefs(this.state);
        const { groupField } = gridGroup;
        let autoGroup: string[] = [];
        items.value.forEach((item: IParam) => {
            if (item.hasKey(groupField)) {
                autoGroup.push(item[groupField]);
            }
        })
        autoGroup = [...new Set(autoGroup)];
        if (autoGroup.length > 0) {
            const groupColumn = this.getGridColumn(columnsModel.value, "GROUP");
            const gridData: IParam[] = [];
            autoGroup.forEach((group: string, index: number) => {
                const children: IParam[] = [];
                items.value.forEach((item: IParam) => {
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
            items.value = gridData;
        }
    }

    /**
     * 代码表分组
     *
     * @protected
     * @memberof MDControl
     */
    protected async codeListGroupData() {
        const { groupField, groupCodeList } = this.state.mdCtrlGroup;
        const { items, context, viewParams, columnsModel } = toRefs(this.state);
        if (!groupCodeList || !isExistAndNotEmpty(groupCodeList.codeListTag)) {
            App.getNotificationService().warning({
                message: '警告',
                description: '未配置分组代码表'
            });
            return;
        }
        const codeListService = App.getCodeListService();
        let codeListItems: IParam[] = [];
        try {
            codeListItems = await codeListService.getCodeListItems({
                tag: groupCodeList.codeListTag,
                context,
                viewParams
            });
        } catch(error) {
            console.warn(`分组代码表 ${groupCodeList.codeListTag} 获取数据项异常`);
        }
        //  分组列
        const groupColumn = this.getGridColumn(columnsModel.value, "GROUP");
        //  分组数据集合
        const groupItems: IParam[] = [];
        //  其他分组项
        const otherGroupItems: IParam[] = [];
        codeListItems.forEach((group: IParam) => {
            const children: IParam[] = [];
            items.value.forEach((item: IParam) => {
                if (Object.is(group.value, item[groupField])) {
                    children.push(item);
                }
            });
            groupItems.push({
                srfkey: createUUID(),
                [groupColumn.dataIndex]: group.text,
                children: children
            })
        });
        items.value.forEach((item: IParam) => {
            const index: number = codeListItems.findIndex((_item: IParam) => Object.is(item[groupField], _item.value));
            if (index < 0) {
                otherGroupItems.push(item);
            }
        });
        if (otherGroupItems.length > 0) {
            groupItems.push({
                srfkey: createUUID(),
                [groupColumn.dataIndex]: "其它",
                children: otherGroupItems,
            })
        }
        this.state.items = [...groupItems];
    }

    /**
     * @description 设置表格合并列
     * @memberof GridControl
     */
    public setGridColSpan() {
        const { columnsModel } = toRefs(this.state);
        columnsModel.value.forEach((columnModel: IParam) => {
            const customRender = ({ text, record, index, column }: IParam) => {
                const option = {
                    props: {} as IParam,
                };
                if (record.children) {
                    if (Object.is(column.columnType, "GROUP")) {
                        Object.assign(option.props, {
                            colSpan: columnsModel.value.length,
                        });
                    } else {
                        Object.assign(option.props, {
                            colSpan: 0
                        });
                    }
                }
                return option;
            }
            Object.assign(columnModel, {
                customRender: customRender,
            })
        });
    }

    /**
     * @description 获取指定列类型模型
     * @param {IParam[]} columns 表格列集合
     * @param {string} columnType 表格列类型
     * @return {*}  {*}
     * @memberof GridControl
     */
    private getGridColumn(columns: IParam[], columnType: string): any {
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
     * 新建默认值
     *
     * @protected
     * @param {IParam} [row={}]
     * @memberof GridControl
     */
    protected setCreateDefault(row: IParam = {}): void {
        const { createDefaultItems, viewParams, context } = this.state;
        if (createDefaultItems.length === 0) {
            return;
        }
        createDefaultItems.forEach((item: IParam) => {
            const { createDVT, createDV, property, valueFormat, dataType } = item;
            if (createDVT && row.hasKey(property)) {
                switch (createDVT) {
                    case "CONTEXT":
                        if (createDV) {
                            row[property] = viewParams[createDV];
                        }
                        break;
                    case "SESSION":
                    case "APPDATA":
                        if (createDV) {
                            row[property] = context[createDV];
                        }
                        break;
                    case "OPERATORNAME":
                        row[property] = context["srfusername"];
                        break;
                    case "OPERATOR":
                        row[property] = context["srfuserid"];
                        break;
                    case "CURTIME":
                        row[property] = valueFormat ? dateFormat(new Date(), valueFormat) : (new Date()).toDateString();
                        break;
                    case "PARAM":
                        if (item.createDV) {
                            row[property] = this.computeDefaultValueWithParam("CREATE", item.createDV, row);
                        }
                        break;
                }
            } else if (createDV && row.hasKey(property)) {
                row[property] = dataType && DataTypes.isNumber(dataType) ? Number(createDV) : createDV;
            }
        });
    }

    /**
     * 设置更新默认值
     *
     * @protected
     * @return {*}  {void}
     * @memberof GridControl
     */
    protected setUpdateDefault(): void {
        const { updateDefaultItems, viewParams, context, items } = this.state;
        if (updateDefaultItems.length === 0 || items.length === 0) {
            return;
        }
        const setDefault = (row: IParam = {}) => {
            updateDefaultItems.forEach((item: IParam) => {
                const { updateDV, updateDVT, property, valueFormat, dataType } = item;
                if (updateDVT && row.hasKey(property)) {
                    switch (updateDVT) {
                        case "CONTEXT":
                            if (updateDV) {
                                row[property] = viewParams[updateDV];
                            }
                            break;
                        case "SESSION":
                        case "APPDATA":
                            if (updateDV) {
                                row[property] = context[updateDV];
                            }
                            break;
                        case "OPERATORNAME":
                            row[property] = context["srfusername"];
                            break;
                        case "OPERATOR":
                            row[property] = context["srfuserid"];
                            break;
                        case "CURTIME":
                            row[property] = valueFormat ? dateFormat(new Date(), valueFormat) : (new Date()).toDateString();
                            break;
                        case "PARAM":
                            if (item.createDV) {
                                row[property] = this.computeDefaultValueWithParam("UPDATE", updateDV, row);
                            }
                            break;
                    }
                } else if (updateDV && row.hasKey(property)) {
                    row[property] = dataType && DataTypes.isNumber(dataType) ? Number(updateDV) : updateDV;
                }
            });
        }
        items.forEach((item: IParam) => {
            if (item.rowDataState == 'update') {
                setDefault(item);
            }
        });
    }

    /**
     * 计算数据对象类型的默认值
     * @private
     * @param {('UPDATE' | 'CREATE')} action
     * @param {string} param
     * @param {IParam} row
     * @return {*} 
     * @memberof GridControl
     */
    private computeDefaultValueWithParam(action: 'UPDATE' | 'CREATE', param: string, row: IParam) {
        const { controlService, appDeKeyFieldName } = this.state;
        if (Object.is(action, "UPDATE")) {
            const nativeData: any = controlService.getCopynativeData();
            if (nativeData && (nativeData instanceof Array) && nativeData.length > 0) {
                const targetData: any = nativeData.find((item: any) => {
                    return item[appDeKeyFieldName.toLowerCase()] === row.srfkey;
                });
                if (targetData) {
                    return targetData[param] ? targetData[param] : null;
                } else {
                    return null;
                }
            } else {
                return null;
            }
        } else {
            const remoteData = controlService.getRemoteCopyData()[param];
            return remoteData ? remoteData : null;
        }
    }

    /**
     * @description 安装部件所有功能模块的方法
     * @return {*}
     * @memberof GridControl
     */
    public moduleInstall() {
        const superParams = super.moduleInstall();
        return {
            ...superParams,
            useCustom: this.useCustom(),
            onEditorEvent: this.onEditorEvent.bind(this),
            onToolbarEvent: this.onToolbarEvent.bind(this),
            onActionColEvent: this.onActionColEvent.bind(this)
        };
    }
}
