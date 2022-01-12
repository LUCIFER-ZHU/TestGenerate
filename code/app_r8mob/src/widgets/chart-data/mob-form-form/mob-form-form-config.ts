import { ControlVOBase, verifyRules, EditFormService } from '@core';
import { ChartDataService } from '@api/chart-data/chart-data-service';

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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','chartdataname','data','season','totalprice','datatype','formitem1','data1','formitem','formitem2','formitem3','formitem4','formitem5','formitem6','formitem7','formitem8','formitem9','formitem10','formitem11','formitem12','formitem13','formitem14','formitem15','year','chartdataid'];  
  }

  // 表单里映射了属性的字段
  get srfupdatedate() {
    return this.$DO.updatedate;
  }
  set srfupdatedate(value: any) {
    this.$DO.updatedate = value;
  }

  get srfkey() {
    return this.$DO.chartdataid;
  }
  set srfkey(value: any) {
    this.$DO.chartdataid = value;
  }

  get srfmajortext() {
    return this.$DO.chartdataname;
  }
  set srfmajortext(value: any) {
    this.$DO.chartdataname = value;
  }

  get chartdataname() {
    return this.$DO.chartdataname;
  }
  set chartdataname(value: any) {
    this.$DO.chartdataname = value;
  }

  get data() {
    return this.$DO.data;
  }
  set data(value: any) {
    this.$DO.data = value;
  }

  get season() {
    return this.$DO.season;
  }
  set season(value: any) {
    this.$DO.season = value;
  }

  get totalprice() {
    return this.$DO.totalprice;
  }
  set totalprice(value: any) {
    this.$DO.totalprice = value;
  }

  get datatype() {
    return this.$DO.datatype;
  }
  set datatype(value: any) {
    this.$DO.datatype = value;
  }

  get formitem6() {
    return this.$DO.datatype;
  }
  set formitem6(value: any) {
    this.$DO.datatype = value;
  }

  get year() {
    return this.$DO.year;
  }
  set year(value: any) {
    this.$DO.year = value;
  }

  get chartdataid() {
    return this.$DO.chartdataid;
  }
  set chartdataid(value: any) {
    this.$DO.chartdataid = value;
  }


  // 表单里没有映射实体属性的字段(srfuf除外)
  srforikey: any;
  srftempmode: any;
  srfdeid: any;
  srfsourcekey: any;
  formitem1: any;
  data1: any;
  formitem: any;
  formitem2: any;
  formitem3: any;
  formitem4: any;
  formitem5: any;
  formitem7: any;
  formitem8: any;
  formitem9: any;
  formitem10: any;
  formitem11: any;
  formitem12: any;
  formitem13: any;
  formitem14: any;
  formitem15: any;
}

// 部件配置对象
export const CtrlConfig = {
  controlCodeName: 'MobForm',
  controlName: 'form',
  controlService: new EditFormService<ControlVO>(ControlVO, new ChartDataService() ),
  data: new ControlVO({}),
  appDeKeyFieldName: 'ChartDataId',
  appDeMajorFieldName: 'ChartDataName',
  enableAutoSave: true,
  detailsModel: {
    group1: {
      caption: '图表基本信息',
      name: 'group1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
      uIActionGroup: {
        extractMode: '',
        caption: '界面行为组测试',
        details: [
        { caption: '界面行为测试1', disabled: false, visible: true, uIActionTag: 'custom1', showCaption: true, showIcon: true,  },
        ],
      },
    },
    chartdataname: {
      caption: '图表名称',
      name: 'chartdataname',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
      resetItemName: 'totalprice',
    },
    data: {
      caption: '数据',
      name: 'data',
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
    season: {
      caption: '季度',
      name: 'season',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '9',
      required: false,
      enableCond: 3,
    },
    totalprice: {
      caption: '总计价格',
      name: 'totalprice',
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
    datatype: {
      caption: '数据分类',
      name: 'datatype',
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
    formitem1: {
      caption: '评分器',
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
    data1: {
      caption: '步进器',
      name: 'data1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    formitem: {
      caption: '数据选择',
      name: 'formitem',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
      valueItemName: 'formitem2',
    },
    formitem2: {
      caption: '值项',
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
      caption: '标签',
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
    formitem4: {
      caption: '滑动输入条',
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
      caption: '开关',
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
      caption: '下拉列表框',
      name: 'formitem6',
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
    formitem7: {
      caption: '时间选择',
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
    button1: {
      caption: '保存',
      name: 'button1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'BUTTON',
      showCaption: true,
      uIActionTag: 'Save',
    },
    grouppanel1: {
      caption: '数据选择测试',
      name: 'grouppanel1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
    },
    formitem8: {
      caption: '多数据单选',
      name: 'formitem8',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
      valueItemName: 'formitem9',
    },
    formitem9: {
      caption: '值项',
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
    formitem10: {
      caption: '多数据多选',
      name: 'formitem10',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
      valueItemName: 'formitem11',
    },
    formitem11: {
      caption: '值项',
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
      caption: '树单选',
      name: 'formitem12',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
      valueItemName: 'formitem13',
    },
    formitem13: {
      caption: '值项',
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
    formitem14: {
      caption: '树多选',
      name: 'formitem14',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
      valueItemName: 'formitem15',
    },
    formitem15: {
      caption: '值项',
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
    year: {
      caption: '年份',
      name: 'year',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '9',
      required: false,
      enableCond: 3,
    },
  },
  actionModel: {
    'Save': { disabled: false, visible: true, noPrivDisplayMode: "", dataAccessAction: '', actionTarget: '' },
  },
  rules: {
  },
};