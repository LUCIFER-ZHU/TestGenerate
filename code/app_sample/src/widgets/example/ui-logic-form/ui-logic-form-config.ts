import { ControlVOBase, verifyRules, EditFormService } from '@core';
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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','inputtext','exampleid','fieldx','formitem','fieldz','currentdate','fieldupdate'];  
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

  get currentdate() {
    return this.$DO.currentdate;
  }
  set currentdate(value: any) {
    this.$DO.currentdate = value;
  }


  // 表单里没有映射实体属性的字段(srfuf除外)
  srforikey: any;
  srftempmode: any;
  srfdeid: any;
  srfsourcekey: any;
  inputtext: any;
  exampleid: any;
  fieldx: any;
  formitem: any;
  fieldz: any;
  fieldupdate: any;
}

// 部件配置对象
export const CtrlConfig = {
  controlCodeName: 'UILogic',
  controlName: 'form',
  controlService: new EditFormService<ControlVO>(ControlVO, new ExampleService() ),
  data: new ControlVO({}),
  detailsModel: {
    rawitem1: {
      caption: '',
      name: 'rawitem1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'RAWITEM',
      showCaption: true,
    },
    grouppanel1: {
      caption: '分组面板',
      name: 'grouppanel1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    inputtext: {
      caption: '输入提示',
      name: 'inputtext',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    button1: {
      caption: '显示对话框',
      name: 'button1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'BUTTON',
      showCaption: true,
      uIActionTag: 'CallUISimple',
    },
    rawitem2: {
      caption: '',
      name: 'rawitem2',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'RAWITEM',
      showCaption: true,
    },
    grouppanel2: {
      caption: '分组面板',
      name: 'grouppanel2',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    grouppanel5: {
      caption: '分组面板',
      name: 'grouppanel5',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    exampleid: {
      caption: '数据主键',
      name: 'exampleid',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    button2: {
      caption: '调用界面行为打开视图',
      name: 'button2',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'BUTTON',
      showCaption: true,
      uIActionTag: 'CallUIActionTest',
    },
    fieldx: {
      caption: 'X值回显',
      name: 'fieldx',
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
      caption: '分组面板',
      name: 'grouppanel6',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    formitem: {
      caption: '',
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
    button4: {
      caption: '动态设置上下文并获取数据',
      name: 'button4',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'BUTTON',
      showCaption: true,
      uIActionTag: 'PrepareCtx',
    },
    fieldz: {
      caption: 'Z值回显',
      name: 'fieldz',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    currentdate: {
      caption: '当前日期',
      name: 'currentdate',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '5',
      required: false,
      enableCond: 3,
    },
    rawitem3: {
      caption: '',
      name: 'rawitem3',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'RAWITEM',
      showCaption: true,
    },
    grouppanel3: {
      caption: '分组面板',
      name: 'grouppanel3',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    fieldupdate: {
      caption: '更新值回显',
      name: 'fieldupdate',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    button3: {
      caption: '调用后台更新值',
      name: 'button3',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'BUTTON',
      showCaption: true,
      uIActionTag: 'CallUpdateFieldy',
    },
  },
  actionModel: {
    CallUISimple: { disabled: false, visible: true, noPrivDisplayMode: , dataAccessAction: '', actionTarget: 'SINGLEDATA' },
    CallUIActionTest: { disabled: false, visible: true, noPrivDisplayMode: , dataAccessAction: '', actionTarget: 'SINGLEDATA' },
    PrepareCtx: { disabled: false, visible: true, noPrivDisplayMode: , dataAccessAction: '', actionTarget: 'SINGLEKEY' },
    CallUpdateFieldy: { disabled: false, visible: true, noPrivDisplayMode: , dataAccessAction: '', actionTarget: 'SINGLEDATA' },
  },
  rules: {
  },
};