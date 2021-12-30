import { ControlVOBase, verifyRules } from '@ibiz-core';
import { ControlService } from './quick-form-service';

export const CtrlConfig = {
  controlCodeName: 'Quick',
  controlName: 'form',
  controlService: new ControlService(),
  data: {},
  itemsModel: [
{
  caption: '快速新建',
  codeName: 'group1',
  name: 'group1',
},
{
  caption: '客户名称',
  codeName: 'customername',
  name: 'customername',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '上级客户',
  codeName: 'pcustomername',
  name: 'pcustomername',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: 'pcustomerid',
},
{
  caption: '类型',
  codeName: 'type',
  name: 'type',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '备注',
  codeName: 'memo',
  name: 'memo',
  dataType: '25',
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
    return this.$DO.customerid;
  }
  set srfkey(value: any) {
    this.$DO.customerid = value;
  }

  get srfmajortext() {
    return this.$DO.customername;
  }
  set srfmajortext(value: any) {
    this.$DO.customername = value;
  }

  get customername() {
    return this.$DO.customername;
  }
  set customername(value: any) {
    this.$DO.customername = value;
  }

  get pcustomername() {
    return this.$DO.pcustomername;
  }
  set pcustomername(value: any) {
    this.$DO.pcustomername = value;
  }

  get type() {
    return this.$DO.type;
  }
  set type(value: any) {
    this.$DO.type = value;
  }

  get memo() {
    return this.$DO.memo;
  }
  set memo(value: any) {
    this.$DO.memo = value;
  }

  get customerid() {
    return this.$DO.customerid;
  }
  set customerid(value: any) {
    this.$DO.customerid = value;
  }

  get pcustomerid() {
    return this.$DO.pcustomerid;
  }
  set pcustomerid(value: any) {
    this.$DO.pcustomerid = value;
  }


  // 表单里没有映射实体属性的字段
  srforikey: any;
  srftempmode: any;
  srfuf: any;
  srfdeid: any;
  srfsourcekey: any;
}