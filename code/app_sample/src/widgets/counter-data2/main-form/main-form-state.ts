import { ControlVOBase, EditFormService, Verify, isEmpty } from '@core';
import { CounterData2Service } from '@api/counter-data2/counter-data2-service';

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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','countertag','countertag2','countertag3','countertag4','countertag5','countertag6','countertag7','countertag8','countertag9','counterdata2id'];  
  }

  // 表单里映射了属性的字段
  get srfupdatedate() {
    return this.$DO.updatedate;
  }
  set srfupdatedate(value: any) {
    this.$DO.updatedate = value;
  }

  get srfkey() {
    return this.$DO.counterdata2id;
  }
  set srfkey(value: any) {
    this.$DO.counterdata2id = value;
  }

  get srfmajortext() {
    return this.$DO.counterdata2name;
  }
  set srfmajortext(value: any) {
    this.$DO.counterdata2name = value;
  }

  get countertag() {
    return this.$DO.countertag;
  }
  set countertag(value: any) {
    this.$DO.countertag = value;
  }

  get countertag2() {
    return this.$DO.countertag2;
  }
  set countertag2(value: any) {
    this.$DO.countertag2 = value;
  }

  get countertag3() {
    return this.$DO.countertag3;
  }
  set countertag3(value: any) {
    this.$DO.countertag3 = value;
  }

  get countertag4() {
    return this.$DO.countertag4;
  }
  set countertag4(value: any) {
    this.$DO.countertag4 = value;
  }

  get countertag5() {
    return this.$DO.countertag5;
  }
  set countertag5(value: any) {
    this.$DO.countertag5 = value;
  }

  get countertag6() {
    return this.$DO.countertag6;
  }
  set countertag6(value: any) {
    this.$DO.countertag6 = value;
  }

  get countertag7() {
    return this.$DO.countertag7;
  }
  set countertag7(value: any) {
    this.$DO.countertag7 = value;
  }

  get countertag8() {
    return this.$DO.countertag8;
  }
  set countertag8(value: any) {
    this.$DO.countertag8 = value;
  }

  get countertag9() {
    return this.$DO.countertag9;
  }
  set countertag9(value: any) {
    this.$DO.countertag9 = value;
  }

  get counterdata2id() {
    return this.$DO.counterdata2id;
  }
  set counterdata2id(value: any) {
    this.$DO.counterdata2id = value;
  }


  // 表单里没有映射实体属性的字段(srfuf除外)
  srforikey: any;
  srftempmode: any;
  srfdeid: any;
  srfsourcekey: any;
}

// 部件配置对象
export const ctrlState = {
  controlCodeName: 'Main',
  controlName: 'form',
  controlService: new EditFormService<ControlVO>(ControlVO, new CounterData2Service() ),
  data: new ControlVO({}),
  appEntityCodeName: 'CounterData2',
  appDeCodeName:'CounterData2',
  appDeLogicName: '计数器数据2',
  appDeKeyFieldName: 'CounterData2Id',
  appDeMajorFieldName: 'CounterData2Name',
  enableAutoSave: false,
  errorMessage: [],
  //  新建默认值
  createDefaultItems: [
  ],
  //  更新默认值
  updateDefaultItems: [
  ],
  detailsModel: {
    formpage1: {
      caption: '基本信息',
      name: 'formpage1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMPAGE',
      showCaption: false,
    },
    group1: {
      caption: '计算器数据2基本信息',
      name: 'group1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    countertag: {
      caption: '计数1',
      name: 'countertag',
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
    countertag2: {
      caption: '计数2',
      name: 'countertag2',
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
    countertag3: {
      caption: '计数3',
      name: 'countertag3',
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
    countertag4: {
      caption: '计数4',
      name: 'countertag4',
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
    countertag5: {
      caption: '计数5',
      name: 'countertag5',
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
    countertag6: {
      caption: '计数6',
      name: 'countertag6',
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
    countertag7: {
      caption: '计数7',
      name: 'countertag7',
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
    countertag8: {
      caption: '计数8',
      name: 'countertag8',
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
    countertag9: {
      caption: '计数9',
      name: 'countertag9',
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
  },
  rules: {
  },
};