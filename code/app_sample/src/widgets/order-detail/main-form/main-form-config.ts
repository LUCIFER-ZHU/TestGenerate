import { ControlVOBase, verifyRules, EditFormService } from '@core';
import { OrderDetailService } from '@api/order-detail/order-detail-service';

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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','productname','price','qty','amount','orderdetailid','productid'];  
  }

  // 表单里映射了属性的字段
  get srfupdatedate() {
    return this.$DO.updatedate;
  }
  set srfupdatedate(value: any) {
    this.$DO.updatedate = value;
  }

  get srfkey() {
    return this.$DO.orderdetailid;
  }
  set srfkey(value: any) {
    this.$DO.orderdetailid = value;
  }

  get srfmajortext() {
    return this.$DO.orderdetailname;
  }
  set srfmajortext(value: any) {
    this.$DO.orderdetailname = value;
  }

  get productname() {
    return this.$DO.productname;
  }
  set productname(value: any) {
    this.$DO.productname = value;
  }

  get price() {
    return this.$DO.price;
  }
  set price(value: any) {
    this.$DO.price = value;
  }

  get qty() {
    return this.$DO.qty;
  }
  set qty(value: any) {
    this.$DO.qty = value;
  }

  get amount() {
    return this.$DO.amount;
  }
  set amount(value: any) {
    this.$DO.amount = value;
  }

  get orderdetailid() {
    return this.$DO.orderdetailid;
  }
  set orderdetailid(value: any) {
    this.$DO.orderdetailid = value;
  }

  get productid() {
    return this.$DO.productid;
  }
  set productid(value: any) {
    this.$DO.productid = value;
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
  controlService: new EditFormService<ControlVO>(ControlVO, new OrderDetailService() ),
  data: new ControlVO({}),
  formDetails: [
    {
      caption: '订单明细基本信息',
      codeName: 'group1',
      name: 'group1',
    },
    {
      caption: '产品',
      codeName: 'productname',
      name: 'productname',
      dataType: '25',
      detailStyle: 'DEFAULT',
      valueItemName: 'productid',
    },
    {
      caption: '单价',
      codeName: 'price',
      name: 'price',
      dataType: '7',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '数量',
      codeName: 'qty',
      name: 'qty',
      dataType: '9',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '小计',
      codeName: 'amount',
      name: 'amount',
      dataType: '7',
      detailStyle: 'DEFAULT',
    },
  ],
  rules: {
  },
};