import { IParam } from '@ibiz-core';
export const CtrlConfig = {
  controlCodeName: "Main",
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
  title: "活动名称",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 150,
  resizable: true,
  dataIndex: "activityname",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
{
  title: "活动类型",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 100,
  resizable: true,
  dataIndex: "activitytype",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
{
  title: "客户名称",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 100,
  resizable: true,
  dataIndex: "customername",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
{
  title: "起始时间",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 100,
  resizable: true,
  dataIndex: "begintime",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
{
  title: "结束时间",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 100,
  resizable: true,
  dataIndex: "endtime",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
{
  title: "更新时间",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 150,
  resizable: true,
  dataIndex: "updatedate",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
  ]
};