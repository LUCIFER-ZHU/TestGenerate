import { ControlVOBase, EditFormService } from '@core';
import { CustomerService } from '@api/customer/customer-service';

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
    this.$ownKeys =['n_customername_like','n_type_eq'];  
  }

  // 表单里映射了属性的字段
  get n_customername_like() {
    return this.$DO.customername;
  }
  set n_customername_like(value: any) {
    this.$DO.customername = value;
  }

  get n_type_eq() {
    return this.$DO.type;
  }
  set n_type_eq(value: any) {
    this.$DO.type = value;
  }


  // 表单里没有映射实体属性的字段(srfuf除外)
}

// 部件配置对象
export const ctrlState = {
  controlCodeName: 'ButtonStyle2',
  controlName: 'searchform2',
  controlService: new EditFormService<ControlVO>(ControlVO, new CustomerService() ),
  data: new ControlVO({}),
  showPopover: false,
  selectHistoryItem: {},
  historyItems: [],
  detailsModel: {
    n_customername_like: {
      caption: '客户名称(文本包含(%))',
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
    n_type_eq: {
      caption: '类型(等于(=))',
      name: 'n_type_eq',
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