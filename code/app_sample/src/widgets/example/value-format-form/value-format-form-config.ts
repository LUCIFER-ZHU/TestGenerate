import { ControlVOBase, verifyRules } from '@ibiz-core';
import { ControlService } from './value-format-form-service';

export const CtrlConfig = {
  controlCodeName: 'ValueFormat',
  controlName: 'form',
  controlService: new ControlService(),
  data: {},
  itemsModel: [
{
  caption: '分组',
  codeName: 'group1',
  name: 'group1',
},
{
  caption: '',
  codeName: 'rawitem1',
  name: 'rawitem1',
},
{
  caption: '数值编辑器格式化',
  codeName: 'format1',
  name: 'format1',
  dataType: '6',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '',
  codeName: 'rawitem2',
  name: 'rawitem2',
},
{
  caption: '标签编辑器格式化',
  codeName: 'format2',
  name: 'format2',
  dataType: '6',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '',
  codeName: 'rawitem3',
  name: 'rawitem3',
},
{
  caption: '表单项',
  codeName: 'datatype',
  name: 'datatype',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '',
  codeName: 'rawitem4',
  name: 'rawitem4',
},
{
  caption: '表单项',
  codeName: 'formitem',
  name: 'formitem',
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

  get format1() {
    return this.$DO.format1;
  }
  set format1(value: any) {
    this.$DO.format1 = value;
  }

  get format2() {
    return this.$DO.format2;
  }
  set format2(value: any) {
    this.$DO.format2 = value;
  }

  get datatype() {
    return this.$DO.datatype;
  }
  set datatype(value: any) {
    this.$DO.datatype = value;
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
  formitem: any;
}