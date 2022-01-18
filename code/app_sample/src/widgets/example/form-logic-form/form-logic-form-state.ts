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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','formitem','formitem1','formitem2','formitem3','formitem4','formitem5','formitem6','formitem7','formitem11','formitem12','formitem13','formitem14','formitem15','formitem16','provincename','cityname','districtname','cityid','provinceid','districtid','fieldx1','fieldy1','fieldz1','formitem18','fieldx','fieldy','fieldz','formitem17','formitem8','formitem10','formitem9','exampleid'];  
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

// 部件配置对象
export const ctrlState = {
  controlCodeName: 'FormLogic',
  controlName: 'form',
  controlService: new EditFormService<ControlVO>(ControlVO, new ExampleService() ),
  data: new ControlVO({}),
  appDeKeyFieldName: 'ExampleId',
  appDeMajorFieldName: 'ExampleName',
  enableAutoSave: false,
  detailsModel: {
    group2: {
      caption: '基础控制逻辑',
      name: 'group2',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
    },
    grouppanel1_1: {
      caption: '分组面板',
      name: 'grouppanel1_1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    formitem: {
      caption: '是否显示',
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
    formitem1: {
      caption: '显示项',
      name: 'formitem1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
      groupLogics: [
        {
          name: '表单成员[formitem1][面板显示]逻辑',
          groupOP: 'AND',
          relatedDetailNames: '[formitem]',
          logicCat: 'PANELVISIBLE',
          logicType: 'GROUP',
          notMode: 'false',
          Logics: [
          {condOP: 'EQ',dEFDName: 'formitem',logicType: 'SINGLE',name: 'formitem 等于(=) (1)'},
          ],
        }
      ],
    },
    grouppanel2_1: {
      caption: '分组面板',
      name: 'grouppanel2_1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    formitem2: {
      caption: '是否启用',
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
    formitem3: {
      caption: '启用项',
      name: 'formitem3',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
      groupLogics: [
        {
          name: '表单成员[formitem3][表单项启用]逻辑',
          groupOP: 'AND',
          relatedDetailNames: '[formitem2]',
          logicCat: 'ITEMENABLE',
          logicType: 'GROUP',
          notMode: 'false',
          Logics: [
          {condOP: 'EQ',dEFDName: 'formitem2',logicType: 'SINGLE',name: 'formitem2 等于(=) (1)'},
          ],
        }
      ],
    },
    grouppanel3_1: {
      caption: '分组面板',
      name: 'grouppanel3_1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    formitem4: {
      caption: '是否空输入',
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
      caption: '空输入项',
      name: 'formitem5',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: true,
      enableCond: 3,
      groupLogics: [
        {
          name: '表单成员[formitem5][表单项空输入]逻辑',
          groupOP: 'AND',
          relatedDetailNames: '[formitem4]',
          logicCat: 'ITEMBLANK',
          logicType: 'GROUP',
          notMode: 'false',
          Logics: [
          {condOP: 'EQ',dEFDName: 'formitem4',logicType: 'SINGLE',name: 'formitem4 等于(=) (1)'},
          ],
        }
      ],
    },
    grouppanel4_1: {
      caption: '分组面板',
      name: 'grouppanel4_1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    formitem6: {
      caption: '值变化置空',
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
    formitem7: {
      caption: '置空项',
      name: 'formitem7',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
      resetItemName: 'formitem6',
    },
    grouppanel8: {
      caption: '组合逻辑控制',
      name: 'grouppanel8',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
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
    formitem11: {
      caption: '值1',
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
      caption: '值2',
      name: 'formitem12',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem13: {
      caption: '表单项',
      name: 'formitem13',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
      groupLogics: [
        {
          name: '表单成员[formitem13][表单项启用]逻辑',
          groupOP: 'AND',
          relatedDetailNames: '[formitem12, formitem11]',
          logicCat: 'ITEMENABLE',
          logicType: 'GROUP',
          notMode: 'false',
          Logics: [
          {condOP: 'ISNOTNULL',dEFDName: 'formitem11',logicType: 'SINGLE',name: 'formitem11 值不为空(NotNil)'},
          {condOP: 'ISNOTNULL',dEFDName: 'formitem12',logicType: 'SINGLE',name: 'formitem12 值不为空(NotNil)'},
          ],
        }
      ],
    },
    grouppanel7: {
      caption: '分组面板',
      name: 'grouppanel7',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    formitem14: {
      caption: '值3',
      name: 'formitem14',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem15: {
      caption: '值4',
      name: 'formitem15',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem16: {
      caption: '表单项',
      name: 'formitem16',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
      groupLogics: [
        {
          name: '表单成员[formitem16][表单项启用]逻辑',
          groupOP: 'AND',
          relatedDetailNames: '[formitem15, formitem14]',
          logicCat: 'ITEMENABLE',
          logicType: 'GROUP',
          notMode: 'false',
          Logics: [
          {condOP: '',dEFDName: '',logicType: 'GROUP',name: 'OR'},
          ],
        }
      ],
    },
    group1: {
      caption: '层级选择',
      name: 'group1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
    },
    grouppanel1: {
      caption: '省市区',
      name: 'grouppanel1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    provincename: {
      caption: '省份',
      name: 'provincename',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
      valueItemName: 'provinceid',
    },
    cityname: {
      caption: '市',
      name: 'cityname',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
      resetItemName: 'provinceid',
      valueItemName: 'cityid',
      groupLogics: [
        {
          name: '表单成员[cityname][表单项启用]逻辑',
          groupOP: 'AND',
          relatedDetailNames: '[provinceid]',
          logicCat: 'ITEMENABLE',
          logicType: 'GROUP',
          notMode: 'false',
          Logics: [
          {condOP: 'ISNOTNULL',dEFDName: 'provinceid',logicType: 'SINGLE',name: 'provinceid 值不为空(NotNil)'},
          ],
        }
      ],
    },
    districtname: {
      caption: '区/县',
      name: 'districtname',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
      resetItemName: 'cityid',
      valueItemName: 'districtid',
      groupLogics: [
        {
          name: '表单成员[districtname][表单项启用]逻辑',
          groupOP: 'AND',
          relatedDetailNames: '[cityid]',
          logicCat: 'ITEMENABLE',
          logicType: 'GROUP',
          notMode: 'false',
          Logics: [
          {condOP: 'ISNOTNULL',dEFDName: 'cityid',logicType: 'SINGLE',name: 'cityid 值不为空(NotNil)'},
          ],
        }
      ],
    },
    cityid: {
      caption: '市标识',
      name: 'cityid',
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
    provinceid: {
      caption: '省份标识',
      name: 'provinceid',
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
    districtid: {
      caption: '区标识',
      name: 'districtid',
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
    grouppanel9: {
      caption: '表单项更新（直接代码）',
      name: 'grouppanel9',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
    },
    grouppanel10: {
      caption: '分组面板',
      name: 'grouppanel10',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    fieldx1: {
      caption: '(x值',
      name: 'fieldx1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
      formItemUpdate: {
        customCode: true,
        scriptCode: `if((data.fieldx1 || data.fieldx1 == 0) && (data.fieldy1 || data.fieldy1 == 0)) {
    data.fieldz1 = (parseFloat(data.fieldx1) + parseFloat(data.fieldy1))*2;
    data.formitem18 = 'X值'+data.fieldx1 +'加Y值'+data.fieldy1+'再乘以2等于Z值'+data.fieldz1;
}`,
      },
    },
    fieldy1: {
      caption: '+Y值',
      name: 'fieldy1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
      formItemUpdate: {
        customCode: true,
        scriptCode: `if((data.fieldx1 || data.fieldx1 == 0) && (data.fieldy1 || data.fieldy1 == 0)) {
    data.fieldz1 = (parseFloat(data.fieldx1) + parseFloat(data.fieldy1))*2;
    data.formitem18 = 'X值'+data.fieldx1 +'加Y值'+data.fieldy1+'再乘以2等于Z值'+data.fieldz1;
}`,
      },
    },
    fieldz1: {
      caption: ')*2=Z值',
      name: 'fieldz1',
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
      caption: '',
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
    grouppanel2: {
      caption: '表单项更新（调用行为）',
      name: 'grouppanel2',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
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
    fieldx: {
      caption: '(x值',
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
      formItemUpdate: {
        showBusyIndicator: "true",
        appDEMethod: "net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@38eb2fb0",
        updateDetails: [
        "",
        "",
        ],
      },
    },
    fieldy: {
      caption: '+Y值',
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
      formItemUpdate: {
        showBusyIndicator: "true",
        appDEMethod: "net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@38eb2fb0",
        updateDetails: [
        "",
        "",
        ],
      },
    },
    fieldz: {
      caption: ')*2=Z值',
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
    },
    formitem17: {
      caption: '',
      name: 'formitem17',
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
      caption: '动态分组标题',
      name: 'grouppanel3',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
    },
    formitem8: {
      caption: '',
      name: 'formitem8',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: false,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    grouppanel4: {
      caption: '动态表单项标签标题',
      name: 'grouppanel4',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
    },
    formitem10: {
      caption: '',
      name: 'formitem10',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: false,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem9: {
      caption: '',
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
  },
  actionModel: {
  },
  rules: {
  },
};