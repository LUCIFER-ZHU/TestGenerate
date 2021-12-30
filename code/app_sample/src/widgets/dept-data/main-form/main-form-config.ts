import { ControlVOBase, verifyRules } from '@ibiz-core';
import { ControlService } from './main-form-service';

export const CtrlConfig = {
  controlCodeName: 'Main',
  controlName: 'form',
  controlService: new ControlService(),
  data: {},
  itemsModel: [
{
  caption: '部门数据基本信息',
  codeName: 'group1',
  name: 'group1',
},
{
  caption: '组织名称',
  codeName: 'orgdataname',
  name: 'orgdataname',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: 'orgdataid',
},
{
  caption: '部门名称',
  codeName: 'deptdataname',
  name: 'deptdataname',
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
    return this.$DO.deptdataid;
  }
  set srfkey(value: any) {
    this.$DO.deptdataid = value;
  }

  get srfmajortext() {
    return this.$DO.deptdataname;
  }
  set srfmajortext(value: any) {
    this.$DO.deptdataname = value;
  }

  get orgdataname() {
    return this.$DO.orgdataname;
  }
  set orgdataname(value: any) {
    this.$DO.orgdataname = value;
  }

  get deptdataname() {
    return this.$DO.deptdataname;
  }
  set deptdataname(value: any) {
    this.$DO.deptdataname = value;
  }

  get deptdataid() {
    return this.$DO.deptdataid;
  }
  set deptdataid(value: any) {
    this.$DO.deptdataid = value;
  }

  get orgdataid() {
    return this.$DO.orgdataid;
  }
  set orgdataid(value: any) {
    this.$DO.orgdataid = value;
  }


  // 表单里没有映射实体属性的字段
  srforikey: any;
  srftempmode: any;
  srfuf: any;
  srfdeid: any;
  srfsourcekey: any;
}