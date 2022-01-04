import { ControlVOBase, verifyRules, EditFormService } from '@ibiz-core';
import { ExampleService } from '@service/entity/example/example-service';

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
  formDetails: [
    {
      caption: '',
      codeName: 'rawitem1',
      name: 'rawitem1',
    },
    {
      caption: '收缩分组（默认展开）',
      codeName: 'group1',
      name: 'group1',
    },
    {
      caption: '表单项（默认已展开）',
      codeName: 'formitem',
      name: 'formitem',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '',
      codeName: 'rawitem2',
      name: 'rawitem2',
    },
    {
      caption: '收缩分组（默认关闭）',
      codeName: 'grouppanel1',
      name: 'grouppanel1',
    },
    {
      caption: '表单项（打开才能看到）',
      codeName: 'formitem1',
      name: 'formitem1',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '',
      codeName: 'rawitem4',
      name: 'rawitem4',
    },
    {
      caption: '表单界面行为组',
      codeName: 'grouppanel2',
      name: 'grouppanel2',
    },
    {
      caption: '表单项',
      codeName: 'formitem2',
      name: 'formitem2',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '',
      codeName: 'rawitem3',
      name: 'rawitem3',
    },
    {
      caption: '更多分组成员',
      codeName: 'grouppanel3',
      name: 'grouppanel3',
    },
    {
      caption: '表单项',
      codeName: 'formitem3',
      name: 'formitem3',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '受控内容',
      codeName: 'grouppanel4',
      name: 'grouppanel4',
    },
    {
      caption: '更多表单项1',
      codeName: 'formitem4',
      name: 'formitem4',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '更多表单项2',
      codeName: 'formitem5',
      name: 'formitem5',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '',
      codeName: 'rawitem5',
      name: 'rawitem5',
    },
    {
      caption: '隐藏无值表单项',
      codeName: 'grouppanel5',
      name: 'grouppanel5',
    },
    {
      caption: 'X值',
      codeName: 'fieldx',
      name: 'fieldx',
      dataType: '6',
      detailStyle: 'DEFAULT',
      groupLogics: {
        name: '表单成员[fieldx][面板显示]逻辑',
        groupOP: 'AND',
        relatedDetailNames: '[fieldx]',
        logicCat: 'PANELVISIBLE',
        logicType: 'GROUP',
        notMode: 'false',
        Logics: [
        {condOP: 'ISNOTNULL',dEFDName: 'fieldx',logicType: 'SINGLE',name: '',}
        {condOP: 'NOTEQ',dEFDName: 'fieldx',logicType: 'SINGLE',name: '',}
        ],
      }
    },
    {
      caption: 'Y值',
      codeName: 'fieldy',
      name: 'fieldy',
      dataType: '6',
      detailStyle: 'DEFAULT',
      groupLogics: {
        name: '表单成员[fieldy][面板显示]逻辑',
        groupOP: 'AND',
        relatedDetailNames: '[fieldy]',
        logicCat: 'PANELVISIBLE',
        logicType: 'GROUP',
        notMode: 'false',
        Logics: [
        {condOP: 'ISNOTNULL',dEFDName: 'fieldy',logicType: 'SINGLE',name: '',}
        {condOP: 'NOTEQ',dEFDName: 'fieldy',logicType: 'SINGLE',name: '',}
        ],
      }
    },
    {
      caption: 'Z值',
      codeName: 'fieldz',
      name: 'fieldz',
      dataType: '6',
      detailStyle: 'DEFAULT',
      groupLogics: {
        name: '表单成员[fieldz][面板显示]逻辑',
        groupOP: 'AND',
        relatedDetailNames: '[fieldz]',
        logicCat: 'PANELVISIBLE',
        logicType: 'GROUP',
        notMode: 'false',
        Logics: [
        {condOP: 'ISNOTNULL',dEFDName: 'fieldz',logicType: 'SINGLE',name: '',}
        {condOP: 'NOTEQ',dEFDName: 'fieldz',logicType: 'SINGLE',name: '',}
        ],
      }
    },
  ],
  rules: {
  },
};