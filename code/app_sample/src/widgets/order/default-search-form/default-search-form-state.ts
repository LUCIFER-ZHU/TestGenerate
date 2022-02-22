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
    this.$ownKeys =['n_state_eq','n_ordername_like'];  
  }

  // 表单里映射了属性的字段
  get n_state_eq() {
    return this.$DO.state;
  }
  set n_state_eq(value: any) {
    this.$DO.state = value;
  }

  get n_ordername_like() {
    return this.$DO.ordername;
  }
  set n_ordername_like(value: any) {
    this.$DO.ordername = value;
  }


  // 表单里没有映射实体属性的字段(srfuf除外)
}

// 部件配置对象
export const ctrlState = {
  controlCodeName: 'Default',
  controlName: 'searchform',
  controlService: new EditFormService<ControlVO>(ControlVO, new OrderService() ),
  data: new ControlVO({}),
  showPopover: false,
  selectHistoryItem: {},
  historyItems: [],
  detailsModel: {
      formpage1: {
        caption: '常规条件',
        name: 'formpage1',
        disabled: false, 
        visible: true,
        detailStyle: 'DEFAULT',
        detailType: 'FORMPAGE',
        showCaption: false,
      },
      n_state_eq: {
        caption: '订单状态(等于(=))',
        name: 'n_state_eq',
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
      n_ordername_like: {
        caption: '订单名称(文本包含(%))',
        name: 'n_ordername_like',
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