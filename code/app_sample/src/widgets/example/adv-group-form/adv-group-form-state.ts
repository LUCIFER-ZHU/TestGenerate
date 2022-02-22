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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','formitem','formitem1','formitem2','formitem3','formitem4','formitem5','fieldx','fieldy','fieldz','exampleid'];  
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


  // 表单里没有映射实体属性的字段(srfuf除外)
  srforikey: any;
  srftempmode: any;
  srfdeid: any;
  srfsourcekey: any;
  formitem: any;
  formitem1: any;
  formitem2: any;
  formitem3: any;
  formitem4: any;
  formitem5: any;
}

// 部件配置对象
export const ctrlState = {
  controlCodeName: 'AdvGroup',
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
      caption: '收缩分组（默认展开）',
      name: 'group1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
    },
    formitem: {
      caption: '表单项（默认已展开）',
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
      caption: '收缩分组（默认关闭）',
      name: 'grouppanel1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
    },
    formitem1: {
      caption: '表单项（打开才能看到）',
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
    rawitem4: {
      caption: '',
      name: 'rawitem4',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'RAWITEM',
      showCaption: true,
    },
    grouppanel2: {
      caption: '表单界面行为组',
      name: 'grouppanel2',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
      uIActionGroup: {
        extractMode: '',
        caption: '表单分组',
        details: [
          { caption: '表单项更新前台计算', uIActionMode: "BACKEND", disabled: false, visible: true, uIActionTag: 'CalcPF', showCaption: true, showIcon: true,  },
          { caption: '执行', uIActionMode: "FRONT", disabled: false, visible: true, uIActionTag: 'CallUISimple', showCaption: true, showIcon: true,  },
        ],
      },
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
      caption: '更多分组成员',
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
    grouppanel4: {
      caption: '受控内容',
      name: 'grouppanel4',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    formitem4: {
      caption: '更多表单项1',
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
    formitem5: {
      caption: '更多表单项2',
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
    rawitem5: {
      caption: '',
      name: 'rawitem5',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'RAWITEM',
      showCaption: true,
    },
    grouppanel5: {
      caption: '隐藏无值表单项',
      name: 'grouppanel5',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
      uIActionGroup: {
        extractMode: '',
        caption: '表单快速配置',
        details: [
          { caption: '编辑', uIActionMode: "FRONT", disabled: false, visible: true, uIActionTag: 'Edit', showCaption: true, showIcon: true,  },
        ],
      },
    },
    fieldx: {
      caption: 'X值',
      name: 'fieldx',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '6',
      required: false,
      enableCond: 3,
      groupLogics: [
        {
        	name: '表单成员[fieldx][面板显示]逻辑',
        	logicType: 'GROUP',
        	logicCat: 'PANELVISIBLE',
        	notMode: false,
        	groupOP: 'AND',
        	relatedDetailNames: ["fieldx"],
        	childLogics: [
        		{
        			name: '',
        			logicType: 'SINGLE',
        			logicCat: '',
        			condOP: "ISNOTNULL",
        			dEFDName: "fieldx",
        			value: ""
        		},
        		{
        			name: '',
        			logicType: 'SINGLE',
        			logicCat: '',
        			condOP: "NOTEQ",
        			dEFDName: "fieldx",
        			value: ""
        		},
        	]
        },
      ],
    },
    fieldy: {
      caption: 'Y值',
      name: 'fieldy',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '6',
      required: false,
      enableCond: 3,
      groupLogics: [
        {
        	name: '表单成员[fieldy][面板显示]逻辑',
        	logicType: 'GROUP',
        	logicCat: 'PANELVISIBLE',
        	notMode: false,
        	groupOP: 'AND',
        	relatedDetailNames: ["fieldy"],
        	childLogics: [
        		{
        			name: '',
        			logicType: 'SINGLE',
        			logicCat: '',
        			condOP: "ISNOTNULL",
        			dEFDName: "fieldy",
        			value: ""
        		},
        		{
        			name: '',
        			logicType: 'SINGLE',
        			logicCat: '',
        			condOP: "NOTEQ",
        			dEFDName: "fieldy",
        			value: ""
        		},
        	]
        },
      ],
    },
    fieldz: {
      caption: 'Z值',
      name: 'fieldz',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '6',
      required: false,
      enableCond: 3,
      groupLogics: [
        {
        	name: '表单成员[fieldz][面板显示]逻辑',
        	logicType: 'GROUP',
        	logicCat: 'PANELVISIBLE',
        	notMode: false,
        	groupOP: 'AND',
        	relatedDetailNames: ["fieldz"],
        	childLogics: [
        		{
        			name: '',
        			logicType: 'SINGLE',
        			logicCat: '',
        			condOP: "ISNOTNULL",
        			dEFDName: "fieldz",
        			value: ""
        		},
        		{
        			name: '',
        			logicType: 'SINGLE',
        			logicCat: '',
        			condOP: "NOTEQ",
        			dEFDName: "fieldz",
        			value: ""
        		},
        	]
        },
      ],
    },
  },
  actionModel: {
      'CalcPF': { disabled: false, visible: true, noPrivDisplayMode: "", dataAccessAction: '', actionTarget: 'SINGLEKEY' },
      'CallUISimple': { disabled: false, visible: true, noPrivDisplayMode: "", dataAccessAction: '', actionTarget: 'SINGLEDATA' },
      'Edit': { disabled: false, visible: true, noPrivDisplayMode: "", dataAccessAction: '', actionTarget: 'SINGLEKEY' },
  },
  rules: {
  },
};