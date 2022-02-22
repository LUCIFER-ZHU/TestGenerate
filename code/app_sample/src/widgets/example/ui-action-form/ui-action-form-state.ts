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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','wd','exampleid'];  
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
  wd: any;
}

// 部件配置对象
export const ctrlState = {
  controlCodeName: 'UIAction',
  controlName: 'form',
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
    {
      createDV: "ibiz",
      createDVT: "",
      property: "wd",
    },
  ],
  //  更新默认值
  updateDefaultItems: [
  ],
  detailsModel: {
    formpage1: {
      caption: '基本信息',
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
      caption: '打开模态',
      name: 'group1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    button1: {
      caption: '前台界面行为（打开模态）',
      name: 'button1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'BUTTON',
      showCaption: true,
      uIAction: { caption: '前台界面行为（打开模态）', uIActionMode: "FRONT", disabled: false, visible: true, uIActionTag: 'openModel', showCaption: true,  },
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
      caption: '打开顶级视图',
      name: 'grouppanel1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    button2: {
      caption: '前台界面行为（打开顶级视图）',
      name: 'button2',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'BUTTON',
      showCaption: true,
      uIAction: { caption: '前台界面行为（打开顶级视图）', uIActionMode: "FRONT", disabled: false, visible: true, uIActionTag: 'openWindow', showCaption: true,  },
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
    grouppanel2: {
      caption: '打开HTML页面',
      name: 'grouppanel2',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    wd: {
      caption: '搜索',
      name: 'wd',
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
      caption: '前台界面行为（打开HTML页面）（百度一下）',
      name: 'button3',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'BUTTON',
      showCaption: true,
      uIAction: { caption: '前台界面行为（打开HTML页面）', uIActionMode: "FRONT", disabled: false, visible: true, uIActionTag: 'openHtml', showCaption: true,  },
    },
    grouppanel3: {
      caption: '界面行为（后续界面行为）',
      name: 'grouppanel3',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    rawitem4: {
      caption: '',
      name: 'rawitem4',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'RAWITEM',
      showCaption: true,
    },
    button4: {
      caption: '界面行为（后续界面行为）',
      name: 'button4',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'BUTTON',
      showCaption: true,
      uIAction: { caption: '快速新建', uIActionMode: "FRONT", disabled: false, visible: true, uIActionTag: 'Quick', showCaption: true,  },
    },
  },
  actionModel: {
      'openModel': { disabled: false, visible: true, noPrivDisplayMode: "", dataAccessAction: '', actionTarget: 'NONE' },
      'openWindow': { disabled: false, visible: true, noPrivDisplayMode: "", dataAccessAction: '', actionTarget: 'NONE' },
      'openHtml': { disabled: false, visible: true, noPrivDisplayMode: "", dataAccessAction: '', actionTarget: 'SINGLEKEY' },
      'Quick': { disabled: false, visible: true, noPrivDisplayMode: "", dataAccessAction: '', actionTarget: 'NONE' },
  },
  rules: {
  },
};