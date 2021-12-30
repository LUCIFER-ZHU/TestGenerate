import { ControlVOBase, verifyRules } from '@ibiz-core';
import { ControlService } from './form-logic-form-service';

export const CtrlConfig = {
  controlCodeName: 'FormLogic',
  controlName: 'form',
  controlService: new ControlService(),
  data: {},
  itemsModel: [
{
  caption: '基础控制逻辑',
  codeName: 'group2',
  name: 'group2',
},
{
  caption: '分组面板',
  codeName: 'grouppanel1_1',
  name: 'grouppanel1_1',
},
{
  caption: '是否显示',
  codeName: 'formitem',
  name: 'formitem',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '显示项',
  codeName: 'formitem1',
  name: 'formitem1',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '分组面板',
  codeName: 'grouppanel2_1',
  name: 'grouppanel2_1',
},
{
  caption: '是否启用',
  codeName: 'formitem2',
  name: 'formitem2',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '启用项',
  codeName: 'formitem3',
  name: 'formitem3',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '分组面板',
  codeName: 'grouppanel3_1',
  name: 'grouppanel3_1',
},
{
  caption: '是否空输入',
  codeName: 'formitem4',
  name: 'formitem4',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '空输入项',
  codeName: 'formitem5',
  name: 'formitem5',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '分组面板',
  codeName: 'grouppanel4_1',
  name: 'grouppanel4_1',
},
{
  caption: '值变化置空',
  codeName: 'formitem6',
  name: 'formitem6',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '置空项',
  codeName: 'formitem7',
  name: 'formitem7',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: 'formitem6',
  valueItemName: '',
},
{
  caption: '组合逻辑控制',
  codeName: 'grouppanel8',
  name: 'grouppanel8',
},
{
  caption: '分组面板',
  codeName: 'grouppanel5',
  name: 'grouppanel5',
},
{
  caption: '值1',
  codeName: 'formitem11',
  name: 'formitem11',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '值2',
  codeName: 'formitem12',
  name: 'formitem12',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '表单项',
  codeName: 'formitem13',
  name: 'formitem13',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '分组面板',
  codeName: 'grouppanel7',
  name: 'grouppanel7',
},
{
  caption: '值3',
  codeName: 'formitem14',
  name: 'formitem14',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '值4',
  codeName: 'formitem15',
  name: 'formitem15',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '表单项',
  codeName: 'formitem16',
  name: 'formitem16',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '层级选择',
  codeName: 'group1',
  name: 'group1',
},
{
  caption: '省市区',
  codeName: 'grouppanel1',
  name: 'grouppanel1',
},
{
  caption: '省份',
  codeName: 'provincename',
  name: 'provincename',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: 'provinceid',
},
{
  caption: '市',
  codeName: 'cityname',
  name: 'cityname',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: 'provinceid',
  valueItemName: 'cityid',
},
{
  caption: '区/县',
  codeName: 'districtname',
  name: 'districtname',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: 'cityid',
  valueItemName: 'districtid',
},
{
  caption: '市标识',
  codeName: 'cityid',
  name: 'cityid',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '省份标识',
  codeName: 'provinceid',
  name: 'provinceid',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '区标识',
  codeName: 'districtid',
  name: 'districtid',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '表单项更新（直接代码）',
  codeName: 'grouppanel9',
  name: 'grouppanel9',
},
{
  caption: '分组面板',
  codeName: 'grouppanel10',
  name: 'grouppanel10',
},
{
  caption: '(x值',
  codeName: 'fieldx1',
  name: 'fieldx1',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '+Y值',
  codeName: 'fieldy1',
  name: 'fieldy1',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: ')*2=Z值',
  codeName: 'fieldz1',
  name: 'fieldz1',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '',
  codeName: 'formitem18',
  name: 'formitem18',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '表单项更新（调用行为）',
  codeName: 'grouppanel2',
  name: 'grouppanel2',
},
{
  caption: '分组面板',
  codeName: 'grouppanel6',
  name: 'grouppanel6',
},
{
  caption: '(x值',
  codeName: 'fieldx',
  name: 'fieldx',
  dataType: '6',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '+Y值',
  codeName: 'fieldy',
  name: 'fieldy',
  dataType: '6',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: ')*2=Z值',
  codeName: 'fieldz',
  name: 'fieldz',
  dataType: '6',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '',
  codeName: 'formitem17',
  name: 'formitem17',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '动态分组标题',
  codeName: 'grouppanel3',
  name: 'grouppanel3',
},
{
  caption: '',
  codeName: 'formitem8',
  name: 'formitem8',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '动态表单项标签标题',
  codeName: 'grouppanel4',
  name: 'grouppanel4',
},
{
  caption: '',
  codeName: 'formitem10',
  name: 'formitem10',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '',
  codeName: 'formitem9',
  name: 'formitem9',
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

  get provincename() {
    return this.$DO.provincename;
  }
  set provincename(value: any) {
    this.$DO.provincename = value;
  }

  get cityname() {
    return this.$DO.cityname;
  }
  set cityname(value: any) {
    this.$DO.cityname = value;
  }

  get districtname() {
    return this.$DO.districtname;
  }
  set districtname(value: any) {
    this.$DO.districtname = value;
  }

  get cityid() {
    return this.$DO.cityid;
  }
  set cityid(value: any) {
    this.$DO.cityid = value;
  }

  get provinceid() {
    return this.$DO.provinceid;
  }
  set provinceid(value: any) {
    this.$DO.provinceid = value;
  }

  get districtid() {
    return this.$DO.districtid;
  }
  set districtid(value: any) {
    this.$DO.districtid = value;
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

  get fieldz() {
    return this.$DO.fieldz;
  }
  set fieldz(value: any) {
    this.$DO.fieldz = value;
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
  formitem1: any;
  formitem2: any;
  formitem3: any;
  formitem4: any;
  formitem5: any;
  formitem6: any;
  formitem7: any;
  formitem11: any;
  formitem12: any;
  formitem13: any;
  formitem14: any;
  formitem15: any;
  formitem16: any;
  fieldx1: any;
  fieldy1: any;
  fieldz1: any;
  formitem18: any;
  formitem17: any;
  formitem8: any;
  formitem10: any;
  formitem9: any;
}