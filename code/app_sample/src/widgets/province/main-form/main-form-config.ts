import { ControlVOBase, verifyRules, EditFormService } from '@core';
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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','provincename','createman','createdate','updateman','updatedate','provinceid'];  
  }

  // 表单里映射了属性的字段
  get srfupdatedate() {
    return this.$DO.updatedate;
  }
  set srfupdatedate(value: any) {
    this.$DO.updatedate = value;
  }

  get srfkey() {
    return this.$DO.provinceid;
  }
  set srfkey(value: any) {
    this.$DO.provinceid = value;
  }

  get srfmajortext() {
    return this.$DO.provincename;
  }
  set srfmajortext(value: any) {
    this.$DO.provincename = value;
  }

  get provincename() {
    return this.$DO.provincename;
  }
  set provincename(value: any) {
    this.$DO.provincename = value;
  }

  get createman() {
    return this.$DO.createman;
  }
  set createman(value: any) {
    this.$DO.createman = value;
  }

  get createdate() {
    return this.$DO.createdate;
  }
  set createdate(value: any) {
    this.$DO.createdate = value;
  }

  get updateman() {
    return this.$DO.updateman;
  }
  set updateman(value: any) {
    this.$DO.updateman = value;
  }

  get updatedate() {
    return this.$DO.updatedate;
  }
  set updatedate(value: any) {
    this.$DO.updatedate = value;
  }

  get provinceid() {
    return this.$DO.provinceid;
  }
  set provinceid(value: any) {
    this.$DO.provinceid = value;
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
  controlService: new EditFormService<ControlVO>(ControlVO, new ProvinceService() ),
  data: new ControlVO({}),
  detailsModel: {
    group1: {
      caption: '省份基本信息',
      name: 'group1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
    },
    provincename: {
      caption: '省份名称',
      name: 'provincename',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    group2: {
      caption: '操作信息',
      name: 'group2',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
    },
    createman: {
      caption: '建立人',
      name: 'createman',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    createdate: {
      caption: '建立时间',
      name: 'createdate',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '5',
      required: false,
      enableCond: 3,
    },
    updateman: {
      caption: '更新人',
      name: 'updateman',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    updatedate: {
      caption: '更新时间',
      name: 'updatedate',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      dataType: '5',
      required: false,
      enableCond: 3,
    },
  },
  actionModel: {
  },
  rules: {
  },
};