import { ControlVOBase, IParam, GridService } from '@core';
import { OrderRepDataService } from '@api/order-rep-data/order-rep-data-service';

export class ControlVO extends ControlVOBase {
  
  constructor(data: any){
    super(data);
  }

  get totalval() {
    return this.$DO.totalval;
  }
  set totalval(value: any) {
    this.$DO.totalval = value;
  }

  get payingval() {
    return this.$DO.payingval;
  }
  set payingval(value: any) {
    this.$DO.payingval = value;
  }

  get finishedval() {
    return this.$DO.finishedval;
  }
  set finishedval(value: any) {
    this.$DO.finishedval = value;
  }

  get monthval() {
    return this.$DO.monthval;
  }
  set monthval(value: any) {
    this.$DO.monthval = value;
  }

  get processingval() {
    return this.$DO.processingval;
  }
  set processingval(value: any) {
    this.$DO.processingval = value;
  }

  get quarterval() {
    return this.$DO.quarterval;
  }
  set quarterval(value: any) {
    this.$DO.quarterval = value;
  }

  get yearval() {
    return this.$DO.yearval;
  }
  set yearval(value: any) {
    this.$DO.yearval = value;
  }

  get srfmajortext() {
    return this.$DO.orderrepdataname;
  }
  set srfmajortext(value: any) {
    this.$DO.orderrepdataname = value;
  }

  get srfdataaccaction() {
    return this.$DO.orderrepdataid;
  }
  set srfdataaccaction(value: any) {
    this.$DO.orderrepdataid = value;
  }

  get srfkey() {
    return this.$DO.orderrepdataid;
  }
  set srfkey(value: any) {
    this.$DO.orderrepdataid = value;
  }

  get customername() {
    return this.$DO.customername;
  }
  set customername(value: any) {
    this.$DO.customername = value;
  }

}

export const CtrlConfig = {
  controlCodeName: "Main",
  controlName: "grid",
  controlService: new GridService<ControlVO>(ControlVO, new OrderRepDataService() ),
  data: [],
  selectedRowKeys: [],
  gridAgg: {
    aggMode: "NONE",
    aggData: [],
  },
  gridGroup: {
    enableGroup: false,
    groupMode: "NONE",
    groupField: "",
  },
  gridSort: {
    noSort: false,
    minorSortDir: "",
    minorSortPSDEF: "",
  },
  gridPaging: {
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
  },
  uAColumnModel:[
  ],
  columnsModel: [
    {
      title: "客户名称",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 300,
      resizable: true,
      dataIndex: "customername",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "月份",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "monthval",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "季度",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "quarterval",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "年份",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "yearval",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "处理中金额",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 120,
      resizable: true,
      dataIndex: "processingval",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "待支付金额",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 120,
      resizable: true,
      dataIndex: "payingval",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "已完成金额",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 120,
      resizable: true,
      dataIndex: "finishedval",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "合计",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "totalval",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
  ],
};