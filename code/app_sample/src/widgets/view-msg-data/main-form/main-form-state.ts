import { ControlVOBase, EditFormService, Verify, isEmpty } from '@core';
import { ViewMsgDataService } from '@api/view-msg-data/view-msg-data-service';

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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','viewmsgdataname','type','location','content','viewmsgdataid'];  
  }

  // 表单里映射了属性的字段
  get srfupdatedate() {
    return this.$DO.updatedate;
  }
  set srfupdatedate(value: any) {
    this.$DO.updatedate = value;
  }

  get srfkey() {
    return this.$DO.viewmsgdataid;
  }
  set srfkey(value: any) {
    this.$DO.viewmsgdataid = value;
  }

  get srfmajortext() {
    return this.$DO.viewmsgdataname;
  }
  set srfmajortext(value: any) {
    this.$DO.viewmsgdataname = value;
  }

  get viewmsgdataname() {
    return this.$DO.viewmsgdataname;
  }
  set viewmsgdataname(value: any) {
    this.$DO.viewmsgdataname = value;
  }

  get type() {
    return this.$DO.type;
  }
  set type(value: any) {
    this.$DO.type = value;
  }

  get location() {
    return this.$DO.location;
  }
  set location(value: any) {
    this.$DO.location = value;
  }

  get content() {
    return this.$DO.content;
  }
  set content(value: any) {
    this.$DO.content = value;
  }

  get viewmsgdataid() {
    return this.$DO.viewmsgdataid;
  }
  set viewmsgdataid(value: any) {
    this.$DO.viewmsgdataid = value;
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
  controlService: new EditFormService<ControlVO>(ControlVO, new ViewMsgDataService() ),
  data: new ControlVO({}),
  appEntityCodeName: 'ViewMsgData',
  appDeCodeName:'ViewMsgData',
  appDeLogicName: '视图消息数据',
  appDeKeyFieldName: 'ViewMsgDataId',
  appDeMajorFieldName: 'ViewMsgDataName',
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
      caption: '视图消息数据基本信息',
      name: 'group1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    viewmsgdataname: {
      caption: '视图消息标题',
      name: 'viewmsgdataname',
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
    type: {
      caption: '视图消息类型',
      name: 'type',
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
    location: {
      caption: '视图消息位置',
      name: 'location',
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
    content: {
      caption: '视图消息内容',
      name: 'content',
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
  },
  actionModel: {
  },
  rules: {
  },
};