import { ControlVOBase, verifyRules } from '@ibiz-core';
import { ControlService } from './auto-complete-form-service';

export const CtrlConfig = {
  controlCodeName: 'AutoComplete',
  controlName: 'form',
  controlService: new ControlService(),
  data: {},
  itemsModel: [
{
  caption: '示例基本信息',
  codeName: 'group1',
  name: 'group1',
},
{
  caption: '',
  codeName: 'rawitem1',
  name: 'rawitem1',
},
{
  caption: '自动填充属性',
  codeName: 'acfield',
  name: 'acfield',
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
    return this.$DO.exampleid;
  }
  set srfkey(value: any) {
    this.$DO.exampleid = value;
  }

  get srfmajortext() {
    return this.$DO.examplename;
  }
  set srfmajortext(value: any) {
    this.$DO.examplename = value;
  }

  get acfield() {
    return this.$DO.acfield;
  }
  set acfield(value: any) {
    this.$DO.acfield = value;
  }

  get exampleid() {
    return this.$DO.exampleid;
  }
  set exampleid(value: any) {
    this.$DO.exampleid = value;
  }


  // 表单里没有映射实体属性的字段
  srforikey: any;
  srftempmode: any;
  srfuf: any;
  srfdeid: any;
  srfsourcekey: any;
}