import { ControlVOBase, EditFormService, Verify, isEmpty } from '@core';
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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','formitem1','formitem3','formitem4','formitem5','formitemex1','formitem','formitem2','exampleid'];  
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

  get formitem4() {
    return this.$DO.begintime;
  }
  set formitem4(value: any) {
    this.$DO.begintime = value;
  }

  get formitem5() {
    return this.$DO.endtime;
  }
  set formitem5(value: any) {
    this.$DO.endtime = value;
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
  formitem1: any;
  formitem3: any;
  formitemex1: any;
  formitem: any;
  formitem2: any;
}

// 部件配置对象
export const ctrlState = {
  controlCodeName: 'Base',
  controlName: 'form2',
  controlService: new EditFormService<ControlVO>(ControlVO, new ExampleService() ),
  data: new ControlVO({}),
  appEntityCodeName: 'Example',
  appDeCodeName:'Example',
  appDeLogicName: '示例',
  appDeKeyFieldName: 'ExampleId',
  appDeMajorFieldName: 'ExampleName',
  enableAutoSave: false,
  errorMessage: [],
  //  新建默认值
  createDefaultItems: [
  ],
  //  更新默认值
  updateDefaultItems: [
  ],
  detailsModel: {
    formpage1: {
      caption: '表单分页',
      name: 'formpage1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMPAGE',
      showCaption: false,
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
    group1: {
      caption: '表单分组',
      name: 'group1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
    },
    formitem1: {
      caption: '表单项',
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
    grouppanel3: {
      caption: '表单分组（子分组）',
      name: 'grouppanel3',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
    },
    formitem3: {
      caption: '表单项',
      name: 'formitem3',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitemex1: {
      caption: '复合表单项',
      name: 'formitemex1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
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
    grouppanel1: {
      caption: '无标题',
      name: 'grouppanel1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    formitem: {
      caption: '表单项',
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
    rawitem7: {
      caption: '',
      name: 'rawitem7',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'RAWITEM',
      showCaption: true,
    },
    button1: {
      caption: '触发界面行为',
      name: 'button1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'BUTTON',
      showCaption: true,
      uIAction: { caption: '流程自定义操作', uIActionMode: "SYS", disabled: false, visible: true, uIActionTag: '02505cfb9b1806f05690804930190c6e', showCaption: true,  },
    },
    rawitem5: {
      caption: '',
      name: 'rawitem5',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'RAWITEM',
      showCaption: true,
    },
    druipart1: {
      caption: '示例明细',
      name: 'druipart1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'DRUIPART',
      showCaption: true,
    },
    rawitem6: {
      caption: '',
      name: 'rawitem6',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'RAWITEM',
      showCaption: true,
    },
    iframe1: {
      caption: '',
      name: 'iframe1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'IFRAME',
      showCaption: true,
    },
    rawitem11: {
      caption: '',
      name: 'rawitem11',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'RAWITEM',
      showCaption: true,
    },
    rawitem12: {
      caption: '',
      name: 'rawitem12',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'RAWITEM',
      showCaption: true,
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
    tabpanel1: {
      caption: '',
      name: 'tabpanel1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'TABPANEL',
      showCaption: false,
    },
    formpage2: {
      caption: '表单分页2',
      name: 'formpage2',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMPAGE',
      showCaption: false,
    },
    grouppanel2: {
      caption: '分组',
      name: 'grouppanel2',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
    },
    formitem2: {
      caption: '表单项',
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
  },
  actionModel: {
      '02505cfb9b1806f05690804930190c6e': { disabled: false, visible: true, noPrivDisplayMode: "", dataAccessAction: '', actionTarget: 'SINGLEKEY' },
  },
  rules: {
  },
};