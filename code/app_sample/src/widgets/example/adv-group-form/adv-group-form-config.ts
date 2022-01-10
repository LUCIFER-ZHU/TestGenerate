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
export const CtrlConfig = {
  controlCodeName: 'AdvGroup',
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
        details: [
        { caption: '', disabled: false, visible: true, uIActionTag: 'CalcPF', showCaption: true, showIcon: true,  },
        { caption: '', disabled: false, visible: true, uIActionTag: 'CallUISimple', showCaption: true, showIcon: true,  },
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
        details: [
        { caption: '', disabled: false, visible: true, uIActionTag: 'Edit', showCaption: true, showIcon: true,  },
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
      dataType: '6',
      required: false,
      enableCond: 3,
      groupLogics: [
        {
          name: '表单成员[fieldx][面板显示]逻辑',
          groupOP: 'AND',
          relatedDetailNames: '[fieldx]',
          logicCat: 'PANELVISIBLE',
          logicType: 'GROUP',
          notMode: 'false',
          Logics: [
          {condOP: 'ISNOTNULL',dEFDName: 'fieldx',logicType: 'SINGLE',name: ''},
          {condOP: 'NOTEQ',dEFDName: 'fieldx',logicType: 'SINGLE',name: ''},
          ],
        }
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
      dataType: '6',
      required: false,
      enableCond: 3,
      groupLogics: [
        {
          name: '表单成员[fieldy][面板显示]逻辑',
          groupOP: 'AND',
          relatedDetailNames: '[fieldy]',
          logicCat: 'PANELVISIBLE',
          logicType: 'GROUP',
          notMode: 'false',
          Logics: [
          {condOP: 'ISNOTNULL',dEFDName: 'fieldy',logicType: 'SINGLE',name: ''},
          {condOP: 'NOTEQ',dEFDName: 'fieldy',logicType: 'SINGLE',name: ''},
          ],
        }
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
      dataType: '6',
      required: false,
      enableCond: 3,
      groupLogics: [
        {
          name: '表单成员[fieldz][面板显示]逻辑',
          groupOP: 'AND',
          relatedDetailNames: '[fieldz]',
          logicCat: 'PANELVISIBLE',
          logicType: 'GROUP',
          notMode: 'false',
          Logics: [
          {condOP: 'ISNOTNULL',dEFDName: 'fieldz',logicType: 'SINGLE',name: ''},
          {condOP: 'NOTEQ',dEFDName: 'fieldz',logicType: 'SINGLE',name: ''},
          ],
        }
      ],
    },
  },
  actionModel: {
  },
  rules: {
  },
};