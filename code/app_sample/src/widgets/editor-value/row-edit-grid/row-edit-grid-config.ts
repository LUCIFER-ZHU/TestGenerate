import { IParam } from '@ibiz-core';
export const CtrlConfig = {
  controlCodeName: "RowEdit",
  controlName: "grid",
  items: [],
  dataAgg: [],
  selectedRowKeys: [],
  aggMode: "NONE",
  noSort: false,
  minorSortDir: "",
  minorSortPSDEF: "",
  enablePagingBar: true,
  current: 1,
  pageSize: 20,
  pagination: {
    position: ['bottomRight'],
    defaultPageSize: 20,
    showQuickJumper: true,
    showTotal: (total: number, range: IParam[]) => `${range[0]}-${range[1]} of ${total} items`,
    pageSizeOptions: ['10','20','50','100'],
  },
  columnsModel: [
{
  title: "下拉列表框",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 200,
  resizable: true,
  dataIndex: "dropdownlist",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
{
  title: "下拉列表框（多选）",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 200,
  resizable: true,
  dataIndex: "mdropdownlist",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
{
  title: "开关部件",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 200,
  resizable: true,
  dataIndex: "switchval",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
{
  title: "数值框",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 200,
  resizable: true,
  dataIndex: "numberval",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
{
  title: "数据选择",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 200,
  resizable: true,
  dataIndex: "customername",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
{
  title: "数据选择（下拉视图）",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 200,
  resizable: true,
  dataIndex: "customername2",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
{
  title: "数据选择（下拉）",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 200,
  resizable: true,
  dataIndex: "customername3",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
{
  title: "数据选择（无AC）",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 200,
  resizable: true,
  dataIndex: "customername4",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
{
  title: "数据选择（无按钮）",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 200,
  resizable: true,
  dataIndex: "customername5",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
{
  title: "文本框",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 200,
  resizable: true,
  dataIndex: "textbox",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
{
  title: "时间选择器",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 200,
  resizable: true,
  dataIndex: "datepicker",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
{
  title: "时间选择器（YYYY-MM-DD HH）",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 300,
  resizable: true,
  dataIndex: "datepickerex_hour",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
{
  title: "时间选择器（YYYY-MM-DD HH:mm）",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 300,
  resizable: true,
  dataIndex: "datepickerex_minute",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
{
  title: "时间选择器（HH:mm:ss）",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 300,
  resizable: true,
  dataIndex: "datepickerex_noday",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
{
  title: "时间选择器（HH:mm）",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 300,
  resizable: true,
  dataIndex: "datepickerex_noday_nosecond",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
{
  title: "时间选择器（YYYY-MM-DD）",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 300,
  resizable: true,
  dataIndex: "datepickerex_notime",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
{
  title: "时间选择器（YYYY-MM-DD HH:mm:ss）",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 300,
  resizable: true,
  dataIndex: "datepickerex_second",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
{
  title: "步进器",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 200,
  resizable: true,
  dataIndex: "stepper",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
{
  title: "滑动输入条",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 200,
  resizable: true,
  dataIndex: "slider",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
{
  title: "自动填充",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 200,
  resizable: true,
  dataIndex: "ac",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
{
  title: "评分器",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 200,
  resizable: true,
  dataIndex: "rating",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
{
  title: "选项框",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 200,
  resizable: true,
  dataIndex: "checkbox",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
  ]
};