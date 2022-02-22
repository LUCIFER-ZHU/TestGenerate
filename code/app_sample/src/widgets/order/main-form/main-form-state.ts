import { ControlVOBase, EditFormService, Verify, isEmpty } from '@core';
import { OrderService } from '@api/order/order-service';

/**
 * 部件展示数据对象
 * @export
 * @class ControlVO
 */
export class ControlVO extends ControlVOBase {
  /**
   * 用后台数据对象创建部件数据对象
   * @param data 后台数据
   */
  constructor(data: any){
    super(data);
    // 记录没有映射的属性
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','ordername','customername','orderdate','amount','state','customerid','orderid'];  
  }

  // 表单里映射了属性的字段
  get srfupdatedate() {
    return this.$DO.updatedate;
  }
  set srfupdatedate(value: any) {
    this.$DO.updatedate = value;
  }

  get srfkey() {
    return this.$DO.orderid;
  }
  set srfkey(value: any) {
    this.$DO.orderid = value;
  }

  get srfmajortext() {
    return this.$DO.ordername;
  }
  set srfmajortext(value: any) {
    this.$DO.ordername = value;
  }

  get ordername() {
    return this.$DO.ordername;
  }
  set ordername(value: any) {
    this.$DO.ordername = value;
  }

  get customername() {
    return this.$DO.customername;
  }
  set customername(value: any) {
    this.$DO.customername = value;
  }

  get orderdate() {
    return this.$DO.orderdate;
  }
  set orderdate(value: any) {
    this.$DO.orderdate = value;
  }

  get amount() {
    return this.$DO.amount;
  }
  set amount(value: any) {
    this.$DO.amount = value;
  }

  get state() {
    return this.$DO.state;
  }
  set state(value: any) {
    this.$DO.state = value;
  }

  get customerid() {
    return this.$DO.customerid;
  }
  set customerid(value: any) {
    this.$DO.customerid = value;
  }

  get orderid() {
    return this.$DO.orderid;
  }
  set orderid(value: any) {
    this.$DO.orderid = value;
  }


  // 表单里没有映射实体属性的字段(srfuf除外)
  srforikey: any;
  srftempmode: any;
  srfdeid: any;
  srfsourcekey: any;
}

// 部件配置对象
export const ctrlState = {
  controlCodeName: 'Main',
  controlName: 'form',
  controlService: new EditFormService<ControlVO>(ControlVO, new OrderService() ),
  data: new ControlVO({}),
  appEntityCodeName: 'Order',
  appDeCodeName:'Order',
  appDeLogicName: '订单',
  appDeKeyFieldName: 'OrderId',
  appDeMajorFieldName: 'OrderName',
  enableAutoSave: false,
  errorMessage: [],
  //  新建默认值
  createDefaultItems: [
    {
      createDV: "10",
      createDVT: "",
      property: "state",
      valueFormat: "",
      dataType: "0"
    },
  ],
  //  更新默认值
  updateDefaultItems: [
  ],
  detailsModel: {
    formpage1: {
      caption: '基本信息',
      name: 'formpage1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMPAGE',
      showCaption: false,
    },
    group1: {
      caption: '订单基本信息',
      name: 'group1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    ordername: {
      caption: '订单号',
      name: 'ordername',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: true,
      enableCond: 3,
    },
    customername: {
      caption: '客户',
      name: 'customername',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
      valueItemName: 'customerid',
    },
    orderdate: {
      caption: '订单时间',
      name: 'orderdate',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: 'YYYY-MM-DD',
      dataType: '5',
      required: true,
      enableCond: 3,
    },
    amount: {
      caption: '金额',
      name: 'amount',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '7',
      required: true,
      enableCond: 3,
    },
    state: {
      caption: '订单状态',
      name: 'state',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: true,
      enableCond: 0,
    },
    grouppanel1: {
      caption: '订单明细',
      name: 'grouppanel1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    druipart1: {
      caption: '',
      name: 'druipart1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'DRUIPART',
      showCaption: true,
    },
  },
  actionModel: {
  },
  rules: {
  },
};