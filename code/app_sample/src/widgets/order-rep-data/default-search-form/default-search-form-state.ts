import { ControlVOBase, EditFormService } from '@core';
import { OrderRepDataService } from '@api/order-rep-data/order-rep-data-service';

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
    this.$ownKeys =['n_customername_like','n_monthval_eq','n_quarterval_eq','n_yearval_eq','n_totalval_gtandeq'];  
  }

  // 表单里映射了属性的字段
  get n_customername_like() {
    return this.$DO.customername;
  }
  set n_customername_like(value: any) {
    this.$DO.customername = value;
  }

  get n_monthval_eq() {
    return this.$DO.monthval;
  }
  set n_monthval_eq(value: any) {
    this.$DO.monthval = value;
  }

  get n_quarterval_eq() {
    return this.$DO.quarterval;
  }
  set n_quarterval_eq(value: any) {
    this.$DO.quarterval = value;
  }

  get n_yearval_eq() {
    return this.$DO.yearval;
  }
  set n_yearval_eq(value: any) {
    this.$DO.yearval = value;
  }

  get n_totalval_gtandeq() {
    return this.$DO.totalval;
  }
  set n_totalval_gtandeq(value: any) {
    this.$DO.totalval = value;
  }


  // 表单里没有映射实体属性的字段(srfuf除外)
}

// 部件配置对象
export const ctrlState = {
  controlCodeName: 'Default',
  controlName: 'searchform',
  controlService: new EditFormService<ControlVO>(ControlVO, new OrderRepDataService() ),
  data: new ControlVO({}),
  showPopover: false,
  selectHistoryItem: {},
  historyItems: [],
  detailsModel: {
    grouppanel1: {
      caption: '分组面板',
      name: 'grouppanel1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    n_customername_like: {
      caption: '客户名称(%)',
      name: 'n_customername_like',
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
    n_monthval_eq: {
      caption: '月份(等于(=))',
      name: 'n_monthval_eq',
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
    n_quarterval_eq: {
      caption: '季度(=)',
      name: 'n_quarterval_eq',
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
    n_yearval_eq: {
      caption: '年份(等于(=))',
      name: 'n_yearval_eq',
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
    n_totalval_gtandeq: {
      caption: '合计(大于等于(>=))',
      name: 'n_totalval_gtandeq',
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
  },
  rules: {
  },
};