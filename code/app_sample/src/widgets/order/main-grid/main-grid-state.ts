import { ControlVOBase, IParam, GridService } from '@core';
import { OrderService } from '@api/order/order-service';

export class ControlVO extends ControlVOBase {
  
  constructor(data: any){
    super(data);
  }

  get amount() {
    return this.$DO.amount;
  }
  set amount(value: any) {
    this.$DO.amount = value;
  }

  get customerid() {
    return this.$DO.customerid;
  }
  set customerid(value: any) {
    this.$DO.customerid = value;
  }

  get orderdate() {
    return this.$DO.orderdate;
  }
  set orderdate(value: any) {
    this.$DO.orderdate = value;
  }

  get ordername() {
    return this.$DO.ordername;
  }
  set ordername(value: any) {
    this.$DO.ordername = value;
  }

  get state() {
    return this.$DO.state;
  }
  set state(value: any) {
    this.$DO.state = value;
  }

  get srfmajortext() {
    return this.$DO.ordername;
  }
  set srfmajortext(value: any) {
    this.$DO.ordername = value;
  }

  get srfdataaccaction() {
    return this.$DO.orderid;
  }
  set srfdataaccaction(value: any) {
    this.$DO.orderid = value;
  }

  get srfkey() {
    return this.$DO.orderid;
  }
  set srfkey(value: any) {
    this.$DO.orderid = value;
  }

  get customername() {
    return this.$DO.customername;
  }
  set customername(value: any) {
    this.$DO.customername = value;
  }

}

export const ctrlState = {
  controlCodeName: 'Main',
  controlName: 'grid',
  appEntityCodeName:'Order',
  controlService: new GridService<ControlVO>(ControlVO, new OrderService() ),
  items: [],
  selectedRowKeys: [],
  // 多数据部件分组
  mdCtrlGroup: {
    enableGroup: false,
    groupMode: "NONE",
    groupField: "",
  },
  // 多数据部件排序
  mdCtrlSort: {
    noSort: false,
    minorSortDir: "",
    minorSortPSDEF: "",
  },
  // 多数据部件分页
  mdCtrlPaging: {
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
  gridAgg: {
    aggMode: "NONE",
    aggData: [],
  },
  uAColumnModel:[
  ],
  columnsModel: [
    {
      title: "客户",
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
      title: "订单号",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "ordername",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "订单时间",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "orderdate",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "订单状态",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "state",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "金额",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "amount",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
  ],
};