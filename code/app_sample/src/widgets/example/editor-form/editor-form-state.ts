import { ControlVOBase, EditFormService } from '@core';
import { ExampleService } from '@api/example/example-service';

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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','formitem','formitem3','formitem1','formitem2','formitem4','formitem22','formitem23','formitem24','formitem7','formitem9','formitem20','formitem47','formitem21','formitem48','formitem5','formitem6','formitem10','formitem8','formitem11','formitem12','formitem52','formitem51','formitem50','formitem49','formitem19','formitem29','formitem15','formitem27','formitem28','formitem14','formitem26','formitem17','formitem33','formitem39','formitem32','formitem40','formitem31','formitem36','formitem30','formitem41','formitem35','formitem42','formitem37','formitem43','formitem38','formitem44','formitem61','formitem62','formitem34','formitem45','formitem16','formitem46','formitem13','formitem57','formitem58','formitem59','formitem60','formitem25','formitem18','formitem55','formitem54','formitem53','formitem56','format8','exampleid'];  
  }

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

  get format8() {
    return this.$DO.format8;
  }
  set format8(value: any) {
    this.$DO.format8 = value;
  }

  get exampleid() {
    return this.$DO.exampleid;
  }
  set exampleid(value: any) {
    this.$DO.exampleid = value;
  }


  // 表单里没有映射实体属性的字段(srfuf除外)
  srforikey: any;
  srftempmode: any;
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

// 部件配置对象
export const ctrlState = {
  controlCodeName: 'Editor',
  controlName: 'form',
  controlService: new EditFormService<ControlVO>(ControlVO, new ExampleService() ),
  data: new ControlVO({}),
  appDeKeyFieldName: 'ExampleId',
  appDeMajorFieldName: 'ExampleName',
  enableAutoSave: false,
  detailsModel: {
    group1: {
      caption: '基础',
      name: 'group1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
    },
    formitem: {
      caption: '文本框',
      name: 'formitem',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem3: {
      caption: '多行输入',
      name: 'formitem3',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: true,
      enableCond: 3,
    },
    formitem1: {
      caption: '数值框',
      name: 'formitem1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem2: {
      caption: '密码框',
      name: 'formitem2',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem4: {
      caption: '标签',
      name: 'formitem4',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem22: {
      caption: '步进器',
      name: 'formitem22',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem23: {
      caption: '评分器',
      name: 'formitem23',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem24: {
      caption: '滑动输入条',
      name: 'formitem24',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem7: {
      caption: '选项框',
      name: 'formitem7',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem9: {
      caption: '控制开关',
      name: 'formitem9',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem20: {
      caption: '图片',
      name: 'formitem20',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem47: {
      caption: '图片（单项）',
      name: 'formitem47',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem21: {
      caption: '文件上传',
      name: 'formitem21',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem48: {
      caption: '文件上传（单项）',
      name: 'formitem48',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    grouppanel2: {
      caption: '代码表',
      name: 'grouppanel2',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
    },
    formitem5: {
      caption: '下拉列表框',
      name: 'formitem5',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem6: {
      caption: '下拉列表框（多选）',
      name: 'formitem6',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem10: {
      caption: '单选项列表',
      name: 'formitem10',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem8: {
      caption: '选项框列表',
      name: 'formitem8',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem11: {
      caption: '列表框',
      name: 'formitem11',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem12: {
      caption: '列表框（选择）',
      name: 'formitem12',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    grouppanel5: {
      caption: '自动填充',
      name: 'grouppanel5',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
    },
    formitem52: {
      caption: '默认',
      name: 'formitem52',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem51: {
      caption: '只能选择',
      name: 'formitem51',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem50: {
      caption: '无按钮',
      name: 'formitem50',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem49: {
      caption: '只能选择、无按钮',
      name: 'formitem49',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    grouppanel4: {
      caption: '时间选择器',
      name: 'grouppanel4',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
    },
    formitem19: {
      caption: 'HH:mm',
      name: 'formitem19',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
      createDVT: "CURTIME",
      createDV: "",
    },
    formitem29: {
      caption: 'HH:mm:ss',
      name: 'formitem29',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
      createDVT: "CURTIME",
      createDV: "",
    },
    formitem15: {
      caption: 'YYYY-MM-DD',
      name: 'formitem15',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
      createDVT: "CURTIME",
      createDV: "",
    },
    formitem27: {
      caption: 'YYYY-MM-DD HH',
      name: 'formitem27',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
      createDVT: "CURTIME",
      createDV: "",
    },
    formitem28: {
      caption: 'YYYY-MM-DD HH:mm',
      name: 'formitem28',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
      createDVT: "CURTIME",
      createDV: "",
    },
    formitem14: {
      caption: 'YYYY-MM-DD HH:mm:ss',
      name: 'formitem14',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
      createDVT: "CURTIME",
      createDV: "",
    },
    grouppanel3: {
      caption: '数据选择',
      name: 'grouppanel3',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
    },
    formitem26: {
      caption: '默认',
      name: 'formitem26',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
      valueItemName: 'formitem17',
    },
    formitem17: {
      caption: '',
      name: 'formitem17',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: false,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem33: {
      caption: '数据链接',
      name: 'formitem33',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
      valueItemName: 'formitem39',
    },
    formitem39: {
      caption: '',
      name: 'formitem39',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: false,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem32: {
      caption: '无AC',
      name: 'formitem32',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
      valueItemName: 'formitem40',
    },
    formitem40: {
      caption: '',
      name: 'formitem40',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: false,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem31: {
      caption: '无AC、数据链接',
      name: 'formitem31',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
      valueItemName: 'formitem36',
    },
    formitem36: {
      caption: '',
      name: 'formitem36',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: false,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem30: {
      caption: '下拉',
      name: 'formitem30',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
      valueItemName: 'formitem41',
    },
    formitem41: {
      caption: '',
      name: 'formitem41',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: false,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem35: {
      caption: '下拉、数据链接',
      name: 'formitem35',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
      valueItemName: 'formitem42',
    },
    formitem42: {
      caption: '',
      name: 'formitem42',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: false,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem37: {
      caption: '无按钮',
      name: 'formitem37',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
      valueItemName: 'formitem43',
    },
    formitem43: {
      caption: '',
      name: 'formitem43',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: false,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem38: {
      caption: '下拉视图',
      name: 'formitem38',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
      valueItemName: 'formitem44',
    },
    formitem44: {
      caption: '',
      name: 'formitem44',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: false,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem61: {
      caption: '下拉树视图',
      name: 'formitem61',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
      valueItemName: 'formitem62',
    },
    formitem62: {
      caption: '',
      name: 'formitem62',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: false,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem34: {
      caption: '下拉视图、数据链接',
      name: 'formitem34',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
      valueItemName: 'formitem45',
    },
    formitem45: {
      caption: '',
      name: 'formitem45',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: false,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem16: {
      caption: '嵌入选择视图',
      name: 'formitem16',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
      valueItemName: 'formitem46',
    },
    formitem46: {
      caption: '',
      name: 'formitem46',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: false,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem13: {
      caption: '数据多选',
      name: 'formitem13',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    grouppanel6: {
      caption: '直接内容',
      name: 'grouppanel6',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
    },
    rawitem1: {
      caption: '',
      name: 'rawitem1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'RAWITEM',
      showCaption: true,
    },
    formitem57: {
      caption: '直接内容（RAW）',
      name: 'formitem57',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem58: {
      caption: '直接内容（HTML）',
      name: 'formitem58',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem59: {
      caption: '直接内容（IMAGE）',
      name: 'formitem59',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem60: {
      caption: '直接内容（MARKDOWN）',
      name: 'formitem60',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    grouppanel1: {
      caption: '高级',
      name: 'grouppanel1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
    },
    formitem25: {
      caption: 'IP地址',
      name: 'formitem25',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem18: {
      caption: 'HTML编辑框',
      name: 'formitem18',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem55: {
      caption: '代码编辑框',
      name: 'formitem55',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem54: {
      caption: 'MD编辑器（预览）',
      name: 'formitem54',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem53: {
      caption: 'MD编辑器（编辑）',
      name: 'formitem53',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem56: {
      caption: 'MD编辑器（即时预览）',
      name: 'formitem56',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    druipart1: {
      caption: '关系界面',
      name: 'druipart1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'DRUIPART',
      showCaption: true,
    },
    format8: {
      caption: '文本占位符（@）',
      name: 'format8',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: true,
      enableCond: 3,
      groupLogics: [
        {
          name: '表单成员[format8][表单项空输入]逻辑',
          groupOP: 'AND',
          relatedDetailNames: '[formitem1]',
          logicCat: 'ITEMBLANK',
          logicType: 'GROUP',
          notMode: 'false',
          logics: [
          {condOP: 'EQ',dEFDName: 'formitem1',logicType: 'SINGLE',name: 'formitem1 等于(=) (1)',value:'1'},
          ],
        },
        {
          name: '表单成员[format8][表单项启用]逻辑',
          groupOP: 'AND',
          relatedDetailNames: '[formitem]',
          logicCat: 'ITEMENABLE',
          logicType: 'GROUP',
          notMode: 'false',
          logics: [
          {condOP: 'EQ',dEFDName: 'formitem',logicType: 'SINGLE',name: 'formitem 等于(=) (1)',value:'1'},
          ],
        },
        {
          name: '表单成员[format8][面板显示]逻辑',
          groupOP: 'AND',
          relatedDetailNames: '[formitem3]',
          logicCat: 'PANELVISIBLE',
          logicType: 'GROUP',
          notMode: 'false',
          logics: [
          {condOP: 'EQ',dEFDName: 'formitem3',logicType: 'SINGLE',name: 'formitem3 等于(=) (1)',value:'1'},
          ],
        },
      ],
    },
  },
  actionModel: {
  },
  rules: {
  },
};