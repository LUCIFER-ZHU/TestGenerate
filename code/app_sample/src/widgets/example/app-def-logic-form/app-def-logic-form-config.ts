import { ControlVOBase, verifyRules } from '@ibiz-core';
import { ControlService } from './app-def-logic-form-service';

export const CtrlConfig = {
  controlCodeName: 'AppDEFLogic',
  controlName: 'form',
  controlService: new ControlService(),
  data: {},
  itemsModel: [
{
  caption: '属性计算逻辑',
  codeName: 'group1',
  name: 'group1',
},
{
  caption: 'X值',
  codeName: 'fieldx',
  name: 'fieldx',
  dataType: '6',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: 'Y值',
  codeName: 'fieldy',
  name: 'fieldy',
  dataType: '6',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: 'XY前端计算值',
  codeName: 'appfield',
  name: 'appfield',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: 'XY前端计算值2',
  codeName: 'appfield2',
  name: 'appfield2',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: 'XY前端计算值4',
  codeName: 'appfield4',
  name: 'appfield4',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '',
  codeName: 'rawitem1',
  name: 'rawitem1',
},
{
  caption: '属性变更逻辑',
  codeName: 'grouppanel1',
  name: 'grouppanel1',
},
{
  caption: 'XY前端计算值3',
  codeName: 'appfield3',
  name: 'appfield3',
  dataType: '9',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '保存',
  codeName: 'button1',
  name: 'button1',
},
{
  caption: '',
  codeName: 'rawitem2',
  name: 'rawitem2',
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

  get fieldx() {
    return this.$DO.fieldx;
  }
  set fieldx(value: any) {
    this.$DO.fieldx = value;
  }

  get fieldy() {
    return this.$DO.fieldy;
  }
  set fieldy(value: any) {
    this.$DO.fieldy = value;
  }

  get appfield() {
    return this.$DO.appfield;
  }
  set appfield(value: any) {
    this.$DO.appfield = value;
  }

  get appfield2() {
    return this.$DO.appfield2;
  }
  set appfield2(value: any) {
    this.$DO.appfield2 = value;
  }

  get appfield4() {
    return this.$DO.appfield4;
  }
  set appfield4(value: any) {
    this.$DO.appfield4 = value;
  }

  get appfield3() {
    return this.$DO.appfield3;
  }
  set appfield3(value: any) {
    this.$DO.appfield3 = value;
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