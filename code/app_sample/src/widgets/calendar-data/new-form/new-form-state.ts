import { ControlVOBase, EditFormService, Verify, isEmpty } from '@core';
import { CalendarDataService } from '@api/calendar-data/calendar-data-service';

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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','calendardataname','begintime','endtime','memo','calendardataid'];  
  }

  // 表单里映射了属性的字段
  get srfupdatedate() {
    return this.$DO.updatedate;
  }
  set srfupdatedate(value: any) {
    this.$DO.updatedate = value;
  }

  get srfkey() {
    return this.$DO.calendardataid;
  }
  set srfkey(value: any) {
    this.$DO.calendardataid = value;
  }

  get srfmajortext() {
    return this.$DO.calendardataname;
  }
  set srfmajortext(value: any) {
    this.$DO.calendardataname = value;
  }

  get calendardataname() {
    return this.$DO.calendardataname;
  }
  set calendardataname(value: any) {
    this.$DO.calendardataname = value;
  }

  get begintime() {
    return this.$DO.begintime;
  }
  set begintime(value: any) {
    this.$DO.begintime = value;
  }

  get endtime() {
    return this.$DO.endtime;
  }
  set endtime(value: any) {
    this.$DO.endtime = value;
  }

  get memo() {
    return this.$DO.memo;
  }
  set memo(value: any) {
    this.$DO.memo = value;
  }

  get calendardataid() {
    return this.$DO.calendardataid;
  }
  set calendardataid(value: any) {
    this.$DO.calendardataid = value;
  }


  // 表单里没有映射实体属性的字段(srfuf除外)
  srforikey: any;
  srftempmode: any;
  srfdeid: any;
  srfsourcekey: any;
}

// 部件配置对象
export const ctrlState = {
  controlCodeName: 'New',
  controlName: 'form',
  controlService: new EditFormService<ControlVO>(ControlVO, new CalendarDataService() ),
  data: new ControlVO({}),
  appEntityCodeName: 'CalendarData',
  appDeCodeName:'CalendarData',
  appDeLogicName: '日历示例数据',
  appDeKeyFieldName: 'CalendarDataId',
  appDeMajorFieldName: 'CalendarDataName',
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
      caption: '日历示例数据基本信息',
      name: 'group1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    calendardataname: {
      caption: '事项',
      name: 'calendardataname',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: true,
      enableCond: 3,
    },
    begintime: {
      caption: '开始时间',
      name: 'begintime',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
      dataType: '5',
      required: true,
      enableCond: 3,
    },
    endtime: {
      caption: '结束时间',
      name: 'endtime',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
      dataType: '5',
      required: false,
      enableCond: 3,
    },
    memo: {
      caption: '备注',
      name: 'memo',
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
  actionModel: {
  },
  rules: {
  },
};