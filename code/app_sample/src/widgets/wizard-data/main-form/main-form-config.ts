import { ControlVOBase, verifyRules, EditFormService } from '@core';
import { WizardDataService } from '@api/wizard-data/wizard-data-service';

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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','textfield','timefield','numfield','wizarddataid'];  
  }

  // 表单里映射了属性的字段
  get srfupdatedate() {
    return this.$DO.updatedate;
  }
  set srfupdatedate(value: any) {
    this.$DO.updatedate = value;
  }

  get srfkey() {
    return this.$DO.wizarddataid;
  }
  set srfkey(value: any) {
    this.$DO.wizarddataid = value;
  }

  get srfmajortext() {
    return this.$DO.wizarddataname;
  }
  set srfmajortext(value: any) {
    this.$DO.wizarddataname = value;
  }

  get textfield() {
    return this.$DO.textfield;
  }
  set textfield(value: any) {
    this.$DO.textfield = value;
  }

  get timefield() {
    return this.$DO.timefield;
  }
  set timefield(value: any) {
    this.$DO.timefield = value;
  }

  get numfield() {
    return this.$DO.numfield;
  }
  set numfield(value: any) {
    this.$DO.numfield = value;
  }

  get wizarddataid() {
    return this.$DO.wizarddataid;
  }
  set wizarddataid(value: any) {
    this.$DO.wizarddataid = value;
  }


  // 表单里没有映射实体属性的字段(srfuf除外)
  srforikey: any;
  srftempmode: any;
  srfdeid: any;
  srfsourcekey: any;
}

// 部件配置对象
export const CtrlConfig = {
  controlCodeName: 'Main',
  controlName: 'form',
  controlService: new EditFormService<ControlVO>(ControlVO, new WizardDataService() ),
  data: new ControlVO({}),
  formDetails: [
    {
      caption: '向导数据基本信息',
      codeName: 'group1',
      name: 'group1',
    },
    {
      caption: '文本属性',
      codeName: 'textfield',
      name: 'textfield',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '时间属性',
      codeName: 'timefield',
      name: 'timefield',
      dataType: '5',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '数值属性',
      codeName: 'numfield',
      name: 'numfield',
      dataType: '6',
      detailStyle: 'DEFAULT',
    },
  ],
  rules: {
  },
};