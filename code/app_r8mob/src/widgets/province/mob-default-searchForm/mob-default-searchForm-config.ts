import { ControlVOBase, EditFormService } from '@core';
import { ProvinceService } from '@api/province/province-service';

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
    this.$ownKeys =['n_provincename_like','formitem'];  
  }

  // 表单里映射了属性的字段
  get n_provincename_like() {
    return this.$DO.provincename;
  }
  set n_provincename_like(value: any) {
    this.$DO.provincename = value;
  }


  // 表单里没有映射实体属性的字段(srfuf除外)
  formitem: any;
}

// 部件配置对象
export const CtrlConfig = {
  controlCodeName: 'MobDefault',
  controlName: 'searchform',
  controlService: new EditFormService<ControlVO>(ControlVO, new ProvinceService() ),
  data: new ControlVO({}),
  detailsModel: {
    n_provincename_like: {
      caption: '省份名称(%)',
      name: 'n_provincename_like',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
      resetItemName: 'N_PROVINCENAME_LIKE',
    },
    formitem: {
      caption: '',
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
  },
  rules: {
  },
};