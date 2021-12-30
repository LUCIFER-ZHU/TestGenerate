import { ControlVOBase, verifyRules } from '@ibiz-core';
import { ControlService } from './info-form-service';

export const CtrlConfig = {
  controlCodeName: 'Info',
  controlName: 'form',
  controlService: new ControlService(),
  data: {},
  itemsModel: [
{
  caption: '订单基本信息',
  codeName: 'group1',
  name: 'group1',
},
{
  caption: '客户',
  codeName: 'customername',
  name: 'customername',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '订单号',
  codeName: 'ordername',
  name: 'ordername',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '订单时间',
  codeName: 'orderdate',
  name: 'orderdate',
  dataType: '5',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '订单状态',
  codeName: 'state',
  name: 'state',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '金额',
  codeName: 'amount',
  name: 'amount',
  dataType: '7',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
  ],
  rules: {
  },
};

/**
 * 部件展示数据对象
 * @export
 * @class ControlVO
 */
export class ControlVO extends ControlVOBase {
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

  get customername() {
    return this.$DO.customername;
  }
  set customername(value: any) {
    this.$DO.customername = value;
  }

  get ordername() {
    return this.$DO.ordername;
  }
  set ordername(value: any) {
    this.$DO.ordername = value;
  }

  get orderdate() {
    return this.$DO.orderdate;
  }
  set orderdate(value: any) {
    this.$DO.orderdate = value;
  }

  get state() {
    return this.$DO.state;
  }
  set state(value: any) {
    this.$DO.state = value;
  }

  get amount() {
    return this.$DO.amount;
  }
  set amount(value: any) {
    this.$DO.amount = value;
  }

  get orderid() {
    return this.$DO.orderid;
  }
  set orderid(value: any) {
    this.$DO.orderid = value;
  }


  // 表单里没有映射实体属性的字段
  srforikey: any;
  srftempmode: any;
  srfuf: any;
  srfdeid: any;
  srfsourcekey: any;
}