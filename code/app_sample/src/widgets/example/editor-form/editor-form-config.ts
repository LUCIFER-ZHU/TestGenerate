import { ControlVOBase, verifyRules } from '@ibiz-core';
import { ControlService } from './editor-form-service';

export const CtrlConfig = {
  controlCodeName: 'Editor',
  controlName: 'form',
  controlService: new ControlService(),
  data: {},
  itemsModel: [
{
  caption: '基础',
  codeName: 'group1',
  name: 'group1',
},
{
  caption: '文本框',
  codeName: 'formitem',
  name: 'formitem',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '多行输入',
  codeName: 'formitem3',
  name: 'formitem3',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '数值框',
  codeName: 'formitem1',
  name: 'formitem1',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '密码框',
  codeName: 'formitem2',
  name: 'formitem2',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '标签',
  codeName: 'formitem4',
  name: 'formitem4',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '步进器',
  codeName: 'formitem22',
  name: 'formitem22',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '评分器',
  codeName: 'formitem23',
  name: 'formitem23',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '滑动输入条',
  codeName: 'formitem24',
  name: 'formitem24',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '选项框',
  codeName: 'formitem7',
  name: 'formitem7',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '控制开关',
  codeName: 'formitem9',
  name: 'formitem9',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '图片',
  codeName: 'formitem20',
  name: 'formitem20',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '图片（单项）',
  codeName: 'formitem47',
  name: 'formitem47',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '文件上传',
  codeName: 'formitem21',
  name: 'formitem21',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '文件上传（单项）',
  codeName: 'formitem48',
  name: 'formitem48',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '代码表',
  codeName: 'grouppanel2',
  name: 'grouppanel2',
},
{
  caption: '下拉列表框',
  codeName: 'formitem5',
  name: 'formitem5',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '下拉列表框（多选）',
  codeName: 'formitem6',
  name: 'formitem6',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '单选项列表',
  codeName: 'formitem10',
  name: 'formitem10',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '选项框列表',
  codeName: 'formitem8',
  name: 'formitem8',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '列表框',
  codeName: 'formitem11',
  name: 'formitem11',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '列表框（选择）',
  codeName: 'formitem12',
  name: 'formitem12',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '自动填充',
  codeName: 'grouppanel5',
  name: 'grouppanel5',
},
{
  caption: '默认',
  codeName: 'formitem52',
  name: 'formitem52',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '只能选择',
  codeName: 'formitem51',
  name: 'formitem51',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '无按钮',
  codeName: 'formitem50',
  name: 'formitem50',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '只能选择、无按钮',
  codeName: 'formitem49',
  name: 'formitem49',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '时间选择器',
  codeName: 'grouppanel4',
  name: 'grouppanel4',
},
{
  caption: 'HH:mm',
  codeName: 'formitem19',
  name: 'formitem19',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: 'HH:mm:ss',
  codeName: 'formitem29',
  name: 'formitem29',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: 'YYYY-MM-DD',
  codeName: 'formitem15',
  name: 'formitem15',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: 'YYYY-MM-DD HH',
  codeName: 'formitem27',
  name: 'formitem27',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: 'YYYY-MM-DD HH:mm',
  codeName: 'formitem28',
  name: 'formitem28',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: 'YYYY-MM-DD HH:mm:ss',
  codeName: 'formitem14',
  name: 'formitem14',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '数据选择',
  codeName: 'grouppanel3',
  name: 'grouppanel3',
},
{
  caption: '默认',
  codeName: 'formitem26',
  name: 'formitem26',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: 'formitem17',
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
  caption: '数据链接',
  codeName: 'formitem33',
  name: 'formitem33',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: 'formitem39',
},
{
  caption: '',
  codeName: 'formitem39',
  name: 'formitem39',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '无AC',
  codeName: 'formitem32',
  name: 'formitem32',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: 'formitem40',
},
{
  caption: '',
  codeName: 'formitem40',
  name: 'formitem40',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '无AC、数据链接',
  codeName: 'formitem31',
  name: 'formitem31',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: 'formitem36',
},
{
  caption: '',
  codeName: 'formitem36',
  name: 'formitem36',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '下拉',
  codeName: 'formitem30',
  name: 'formitem30',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: 'formitem41',
},
{
  caption: '',
  codeName: 'formitem41',
  name: 'formitem41',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '下拉、数据链接',
  codeName: 'formitem35',
  name: 'formitem35',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: 'formitem42',
},
{
  caption: '',
  codeName: 'formitem42',
  name: 'formitem42',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '无按钮',
  codeName: 'formitem37',
  name: 'formitem37',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: 'formitem43',
},
{
  caption: '',
  codeName: 'formitem43',
  name: 'formitem43',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '下拉视图',
  codeName: 'formitem38',
  name: 'formitem38',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: 'formitem44',
},
{
  caption: '',
  codeName: 'formitem44',
  name: 'formitem44',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '下拉树视图',
  codeName: 'formitem61',
  name: 'formitem61',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: 'formitem62',
},
{
  caption: '',
  codeName: 'formitem62',
  name: 'formitem62',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '下拉视图、数据链接',
  codeName: 'formitem34',
  name: 'formitem34',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: 'formitem45',
},
{
  caption: '',
  codeName: 'formitem45',
  name: 'formitem45',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '嵌入选择视图',
  codeName: 'formitem16',
  name: 'formitem16',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: 'formitem46',
},
{
  caption: '',
  codeName: 'formitem46',
  name: 'formitem46',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '数据多选',
  codeName: 'formitem13',
  name: 'formitem13',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '直接内容',
  codeName: 'grouppanel6',
  name: 'grouppanel6',
},
{
  caption: '',
  codeName: 'rawitem1',
  name: 'rawitem1',
},
{
  caption: '直接内容（RAW）',
  codeName: 'formitem57',
  name: 'formitem57',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '直接内容（HTML）',
  codeName: 'formitem58',
  name: 'formitem58',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '直接内容（IMAGE）',
  codeName: 'formitem59',
  name: 'formitem59',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '直接内容（MARKDOWN）',
  codeName: 'formitem60',
  name: 'formitem60',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '高级',
  codeName: 'grouppanel1',
  name: 'grouppanel1',
},
{
  caption: 'IP地址',
  codeName: 'formitem25',
  name: 'formitem25',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: 'HTML编辑框',
  codeName: 'formitem18',
  name: 'formitem18',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '代码编辑框',
  codeName: 'formitem55',
  name: 'formitem55',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: 'MD编辑器（预览）',
  codeName: 'formitem54',
  name: 'formitem54',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: 'MD编辑器（编辑）',
  codeName: 'formitem53',
  name: 'formitem53',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: 'MD编辑器（即时预览）',
  codeName: 'formitem56',
  name: 'formitem56',
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

  get formitem12() {
    return this.$DO.field;
  }
  set formitem12(value: any) {
    this.$DO.field = value;
  }

  get formitem52() {
    return this.$DO.field;
  }
  set formitem52(value: any) {
    this.$DO.field = value;
  }

  get formitem51() {
    return this.$DO.field;
  }
  set formitem51(value: any) {
    this.$DO.field = value;
  }

  get formitem50() {
    return this.$DO.field;
  }
  set formitem50(value: any) {
    this.$DO.field = value;
  }

  get formitem49() {
    return this.$DO.field;
  }
  set formitem49(value: any) {
    this.$DO.field = value;
  }

  get formitem26() {
    return this.$DO.field;
  }
  set formitem26(value: any) {
    this.$DO.field = value;
  }

  get formitem33() {
    return this.$DO.field;
  }
  set formitem33(value: any) {
    this.$DO.field = value;
  }

  get formitem32() {
    return this.$DO.field;
  }
  set formitem32(value: any) {
    this.$DO.field = value;
  }

  get formitem31() {
    return this.$DO.field;
  }
  set formitem31(value: any) {
    this.$DO.field = value;
  }

  get formitem30() {
    return this.$DO.field;
  }
  set formitem30(value: any) {
    this.$DO.field = value;
  }

  get formitem35() {
    return this.$DO.field;
  }
  set formitem35(value: any) {
    this.$DO.field = value;
  }

  get formitem37() {
    return this.$DO.field;
  }
  set formitem37(value: any) {
    this.$DO.field = value;
  }

  get formitem38() {
    return this.$DO.field;
  }
  set formitem38(value: any) {
    this.$DO.field = value;
  }

  get formitem61() {
    return this.$DO.field;
  }
  set formitem61(value: any) {
    this.$DO.field = value;
  }

  get formitem34() {
    return this.$DO.field;
  }
  set formitem34(value: any) {
    this.$DO.field = value;
  }

  get formitem16() {
    return this.$DO.field;
  }
  set formitem16(value: any) {
    this.$DO.field = value;
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
  formitem3: any;
  formitem1: any;
  formitem2: any;
  formitem4: any;
  formitem22: any;
  formitem23: any;
  formitem24: any;
  formitem7: any;
  formitem9: any;
  formitem20: any;
  formitem47: any;
  formitem21: any;
  formitem48: any;
  formitem5: any;
  formitem6: any;
  formitem10: any;
  formitem8: any;
  formitem11: any;
  formitem19: any;
  formitem29: any;
  formitem15: any;
  formitem27: any;
  formitem28: any;
  formitem14: any;
  formitem17: any;
  formitem39: any;
  formitem40: any;
  formitem36: any;
  formitem41: any;
  formitem42: any;
  formitem43: any;
  formitem44: any;
  formitem62: any;
  formitem45: any;
  formitem46: any;
  formitem13: any;
  formitem57: any;
  formitem58: any;
  formitem59: any;
  formitem60: any;
  formitem25: any;
  formitem18: any;
  formitem55: any;
  formitem54: any;
  formitem53: any;
  formitem56: any;
}