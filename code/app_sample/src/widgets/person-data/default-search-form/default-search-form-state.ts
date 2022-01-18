import { ControlVOBase, EditFormService } from '@core';
import { PersonDataService } from '@api/person-data/person-data-service';

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
  
  }

  // 表单里映射了属性的字段

  // 表单里没有映射实体属性的字段(srfuf除外)
}

// 部件配置对象
export const ctrlState = {
  controlCodeName: 'Default',
  controlName: 'searchform',
  controlService: new EditFormService<ControlVO>(ControlVO, new PersonDataService() ),
  data: new ControlVO({}),
  showPopover: false,
  selectHistoryItem: {},
  historyItems: [],
  detailsModel: {
  },
  rules: {
  },
};