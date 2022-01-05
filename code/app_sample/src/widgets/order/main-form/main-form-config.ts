import { ControlVOBase, verifyRules, EditFormService } from '@core';
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
export const CtrlConfig = {
  controlCodeName: 'Main',
  controlName: 'form',
  controlService: new EditFormService<ControlVO>(ControlVO, new OrderService() ),
  data: new ControlVO({}),
  formDetails: [
    {
      caption: '订单基本信息',
      codeName: 'group1',
      name: 'group1',
    },
    {
      caption: '订单号',
      codeName: 'ordername',
      name: 'ordername',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '客户',
      codeName: 'customername',
      name: 'customername',
      dataType: '25',
      detailStyle: 'DEFAULT',
      valueItemName: 'customerid',
    },
    {
      caption: '订单时间',
      codeName: 'orderdate',
      name: 'orderdate',
      dataType: '5',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '金额',
      codeName: 'amount',
      name: 'amount',
      dataType: '7',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '订单状态',
      codeName: 'state',
      name: 'state',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '订单明细',
      codeName: 'grouppanel1',
      name: 'grouppanel1',
    },
    {
      caption: '',
      codeName: 'druipart1',
      name: 'druipart1',
    },
  ],
  rules: {
  },
};