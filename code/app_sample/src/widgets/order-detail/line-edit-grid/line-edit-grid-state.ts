import { ControlVOBase, IParam, GridService } from '@core';
import { OrderDetailService } from '@api/order-detail/order-detail-service';

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

  get price() {
    return this.$DO.price;
  }
  set price(value: any) {
    this.$DO.price = value;
  }

  get productid() {
    return this.$DO.productid;
  }
  set productid(value: any) {
    this.$DO.productid = value;
  }

  get qty() {
    return this.$DO.qty;
  }
  set qty(value: any) {
    this.$DO.qty = value;
  }

  get orderid() {
    return this.$DO.orderid;
  }
  set orderid(value: any) {
    this.$DO.orderid = value;
  }

  get srfmajortext() {
    return this.$DO.orderdetailname;
  }
  set srfmajortext(value: any) {
    this.$DO.orderdetailname = value;
  }

  get srfdataaccaction() {
    return this.$DO.orderdetailid;
  }
  set srfdataaccaction(value: any) {
    this.$DO.orderdetailid = value;
  }

  get srfkey() {
    return this.$DO.orderdetailid;
  }
  set srfkey(value: any) {
    this.$DO.orderdetailid = value;
  }

  get productname() {
    return this.$DO.productname;
  }
  set productname(value: any) {
    this.$DO.productname = value;
  }

}

export const ctrlState = {
  controlCodeName: 'LineEdit',
  controlName: 'grid',
  appEntityCodeName:'OrderDetail',
  controlService: new GridService<ControlVO>(ControlVO, new OrderDetailService() ),
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
    enablePagingBar: false,
    current: 1,
    pageSize: 20,
    pagination: false,
  },
  gridAgg: {
    aggMode: "NONE",
    aggData: [],
  },
  uAColumnModel:[
  ],
  columnsModel: [
    {
      title: "产品",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "productname",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "单价",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "price",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "数量",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "qty",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "小计",
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
  // 是否单选
  isSingleSelect:false,
};