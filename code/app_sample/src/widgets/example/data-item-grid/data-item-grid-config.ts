import { IParam } from '@ibiz-core';
export const CtrlConfig = {
  controlCodeName: "DataItem",
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
  title: "名称",
  columnType: "DEFGRIDCOLUMN",
  align: "left",
  width: 200,
  resizable: true,
  dataIndex: "defgridcolumn",
  ellipsis: true,
  enableSort: true,
  aggMode: "NONE",
},
  ]
};