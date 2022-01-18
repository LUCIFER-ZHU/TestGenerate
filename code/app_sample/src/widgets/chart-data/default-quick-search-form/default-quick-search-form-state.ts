import { ControlVOBase, EditFormService } from '@core';
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
    this.$ownKeys =['n_chartdataname_like','n_datatype_eq'];  
  }

  // 表单里映射了属性的字段
  get n_chartdataname_like() {
    return this.$DO.chartdataname;
  }
  set n_chartdataname_like(value: any) {
    this.$DO.chartdataname = value;
  }

  get n_datatype_eq() {
    return this.$DO.datatype;
  }
  set n_datatype_eq(value: any) {
    this.$DO.datatype = value;
  }


  // 表单里没有映射实体属性的字段(srfuf除外)
}

// 部件配置对象
export const ctrlState = {
  controlCodeName: 'Default',
  controlName: 'quicksearchform',
  controlService: new EditFormService<ControlVO>(ControlVO, new ChartDataService() ),
  data: new ControlVO({}),
  showPopover: false,
  selectHistoryItem: {},
  historyItems: [],
  detailsModel: {
    n_chartdataname_like: {
      caption: '图表名称(%)',
      name: 'n_chartdataname_like',
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
    n_datatype_eq: {
      caption: '数据分类(等于(=))',
      name: 'n_datatype_eq',
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
  },
  rules: {
  },
};