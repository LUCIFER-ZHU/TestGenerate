import { ControlVOBase, verifyRules, EditFormService } from '@ibiz-core';
import { ChartDataService } from '@service/entity/chart-data/chart-data-service';

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
  formDetails: [
    {
      caption: '图表基本信息',
      codeName: 'group1',
      name: 'group1',
    },
    {
      caption: '图表名称',
      codeName: 'chartdataname',
      name: 'chartdataname',
      dataType: '25',
      detailStyle: 'DEFAULT',
      resetItemName: 'totalprice',
    },
    {
      caption: '数据',
      codeName: 'data',
      name: 'data',
      dataType: '6',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '季度',
      codeName: 'season',
      name: 'season',
      dataType: '9',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '总计价格',
      codeName: 'totalprice',
      name: 'totalprice',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '数据分类',
      codeName: 'datatype',
      name: 'datatype',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '评分器',
      codeName: 'formitem1',
      name: 'formitem1',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '步进器',
      codeName: 'data1',
      name: 'data1',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '数据选择',
      codeName: 'formitem',
      name: 'formitem',
      dataType: '25',
      detailStyle: 'DEFAULT',
      valueItemName: 'formitem2',
    },
    {
      caption: '值项',
      codeName: 'formitem2',
      name: 'formitem2',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '标签',
      codeName: 'formitem3',
      name: 'formitem3',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '滑动输入条',
      codeName: 'formitem4',
      name: 'formitem4',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '开关',
      codeName: 'formitem5',
      name: 'formitem5',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '下拉列表框',
      codeName: 'formitem6',
      name: 'formitem6',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '时间选择',
      codeName: 'formitem7',
      name: 'formitem7',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '保存',
      codeName: 'button1',
      name: 'button1',
    },
    {
      caption: '数据选择测试',
      codeName: 'grouppanel1',
      name: 'grouppanel1',
    },
    {
      caption: '多数据单选',
      codeName: 'formitem8',
      name: 'formitem8',
      dataType: '25',
      detailStyle: 'DEFAULT',
      valueItemName: 'formitem9',
    },
    {
      caption: '值项',
      codeName: 'formitem9',
      name: 'formitem9',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '多数据多选',
      codeName: 'formitem10',
      name: 'formitem10',
      dataType: '25',
      detailStyle: 'DEFAULT',
      valueItemName: 'formitem11',
    },
    {
      caption: '值项',
      codeName: 'formitem11',
      name: 'formitem11',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '树单选',
      codeName: 'formitem12',
      name: 'formitem12',
      dataType: '25',
      detailStyle: 'DEFAULT',
      valueItemName: 'formitem13',
    },
    {
      caption: '值项',
      codeName: 'formitem13',
      name: 'formitem13',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '树多选',
      codeName: 'formitem14',
      name: 'formitem14',
      dataType: '25',
      detailStyle: 'DEFAULT',
      valueItemName: 'formitem15',
    },
    {
      caption: '值项',
      codeName: 'formitem15',
      name: 'formitem15',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '年份',
      codeName: 'year',
      name: 'year',
      dataType: '9',
      detailStyle: 'DEFAULT',
    },
  ],
  rules: {
  },
};