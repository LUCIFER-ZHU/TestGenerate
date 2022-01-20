import { deepCopy, GridControlState, IActionParam, IParam, MDControl } from "@core";
import { createUUID } from "qx-util";

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
        const { controlName, selectFirstDefault, rowEditState, rowActiveMode, isSingleSelect } = this.state;
        const { selectedRowKeys } = toRefs(this.state);
        // 滚动条配置
        const useScrollOption = computed(() => {
            return {
                scrollToFirstRowOnChange: true,
                x: '110%',
                y: '690px',
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
                    if (!rowEditState) {
                        selectedRowKeys.value = [record.srfkey];
                        if (!record.children) {
                            this.emit("ctrlEvent", { tag: this.props.name, action: "selectionChange", data: [deepCopy(record)] })
                            if (Object.is(rowActiveMode, 1)) {
                                this.emit("ctrlEvent", { tag: this.props.name, action: "rowClick", data: [deepCopy(record)] })
                            }
                        }
                    }
                },
                onDblclick: () => {
                    if (!record.children && Object.is(rowActiveMode, 2)) {
                        this.emit("ctrlEvent", { tag: this.props.name, action: "rowDbClick", data: [deepCopy(record)] })
                    }
                }
            };
        }
        // 表格选择功能配置
        const useRowSelectionOption = computed(() => {
            if (selectFirstDefault) {
                return false;
            }
            return {
                type:isSingleSelect ? 'radio' : 'checkbox',
                columnWidth: 90,
                selectedRowKeys: selectedRowKeys.value,
                checkStrictly: this.props.multiple ? false : true,
                onChange: (_selectedRowKeys: string[], selectedRows: IParam[]) => {
                    selectedRowKeys.value = _selectedRowKeys;
                    const selection: IParam[] = [];
                    selectedRows.forEach((select: IParam) => {
                        if (!select.children) {
                            selection.push(select);
                        }
                    })
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
        }
        return {
            useScrollOption,
            useRowKey,
            useRowClassName,
            useCustomRow,
            useRowSelectionOption,
            onResizeColumn,
            onGridChange
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
                const { items } = toRefs(this.state);
                if (items.value[rowIndex][tag] !== data) {
                    items.value[rowIndex][tag] = data;
                    items.value[rowIndex]["rowDataState"] = "update";
                }
                break;
            default:
                break;
        }
    }

    /**
     * @description 操作列事件触发
     * @param {IActionParam} action
     * @param {IParam} record
     * @memberof GridControl
     */
    public onToolbarEvent(action: IActionParam, record: IParam) {
      //todo 界面行为
    }

    /**
     * @description 处理表格操作列事件
     * @param {IActionParam} actionParam 行为参数
     * @param {IParam} [row] 表格行数据
     * @memberof GridControl
     */
    public onActionColEvent(actionParam: IActionParam, row?: IParam) {
        const { tag, action, data } = actionParam;
        console.log('触发界面行为', actionParam, row);
    }

    /**
     * 处理数据状态变化(逻辑数据+UI)
     *
     * @memberof GridControl
     */
    public handleStateChange() {
        // 计算表格操作列行为权限
        const { items, columnsModel } = toRefs(this.state);
        // this.getActionAuthState
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
    protected codeListGroupData() {
        const { gridGroup } = this.state;
        const { items, columnsModel } = toRefs(this.state);
        const { groupField } = gridGroup;
        // TODO 代码表数据
        let codeListGroup: IParam[] = [];
        if (codeListGroup.length > 0) {
            const groupColumn = this.getGridColumn(columnsModel.value, "GROUP");
            const gridData: IParam[] = [];
            const otherGroup: IParam[] = [];
            codeListGroup.forEach((group: IParam) => {
                const children: IParam[] = [];
                items.value.forEach((item: IParam) => {
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
            items.value.forEach((item: IParam) => {
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
            items.value = gridData;
        }
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
            onToolbarEvent: this.onToolbarEvent.bind(this)
        };
    }
}
