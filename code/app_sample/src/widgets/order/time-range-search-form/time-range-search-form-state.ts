import { ControlVOBase, EditFormService } from '@core';
import { OrderService } from '@api/order/order-service';

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
    this.$ownKeys =['n_orderdate_gtandeq','n_orderdate_ltandeq'];  
  }

  // 表单里映射了属性的字段
  get n_orderdate_gtandeq() {
    return this.$DO.orderdate;
  }
  set n_orderdate_gtandeq(value: any) {
    this.$DO.orderdate = value;
  }

  get n_orderdate_ltandeq() {
    return this.$DO.orderdate;
  }
  set n_orderdate_ltandeq(value: any) {
    this.$DO.orderdate = value;
  }


  // 表单里没有映射实体属性的字段(srfuf除外)
}

// 部件配置对象
export const ctrlState = {
  controlCodeName: 'TimeRange',
  controlName: 'searchform',
  controlService: new EditFormService<ControlVO>(ControlVO, new OrderService() ),
  data: new ControlVO({}),
  showPopover: false,
  selectHistoryItem: {},
  historyItems: [],
  detailsModel: {
    n_orderdate_gtandeq: {
      caption: '订单时间(大于等于(>=))',
      name: 'n_orderdate_gtandeq',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: 'YYYY-MM-DD',
      dataType: '5',
      required: false,
      enableCond: 3,
    },
    n_orderdate_ltandeq: {
      caption: '订单时间(小于等于(<=))',
      name: 'n_orderdate_ltandeq',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: 'YYYY-MM-DD',
      dataType: '5',
      required: false,
      enableCond: 3,
    },
  },
  rules: {
  },
};