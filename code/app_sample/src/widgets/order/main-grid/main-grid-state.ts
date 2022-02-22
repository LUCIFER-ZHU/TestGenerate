import { ControlVOBase, IParam, GridService, isEmpty, Verify } from '@core';
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
  totalColumnWidth: 560,
  selectColumnWidth: 50,
  appEntityCodeName: 'Order',
  appDeCodeName:'Order',
  appDeLogicName: '订单',
  appDeKeyFieldName: 'OrderId',
  appDeMajorFieldName: 'OrderName',
  controlService: new GridService<ControlVO>(ControlVO, new OrderService() ),
  //  新建默认值
  createDefaultItems: [
  ],
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
      showTotal: (total: number, range: IParam[]) => `显示 ${range[0]} - ${range[1]} 条数据，共 ${total} 条数据`,
      pageSizeOptions: ['10','20','50','100'],
    },
  },
  gridAgg: {
    aggMode: "NONE",
    aggData: [],
  },
  uAColumnModel: {
  },
  gridEditState:{
    state:{},
    srfkey:{},
  },
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
    {
      title: "",
      columnType: "EMPTYCOLUMN",
      dataIndex: "autowidthcolumn",
      align: "center",
      resizable: true,
      ellipsis: true,
      aggMode: "NONE",
    },
  ],
  // 是否单选
  isSingleSelect:false,
  //  更新默认值
  updateDefaultItems: [
  ],
  rules:{
    state: [
      {
        trigger: ['change', 'blur'],
        pattern: /[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+/,
        message:'内容必须为电子邮件格式'
      },
    ],
  }
};