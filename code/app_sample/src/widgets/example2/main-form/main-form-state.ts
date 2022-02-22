import { ControlVOBase, EditFormService, Verify, isEmpty } from '@core';
import { Example2Service } from '@api/example2/example2-service';

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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','example2name','createman','createdate','updateman','updatedate','example2id'];  
  }

  // 表单里映射了属性的字段
  get srfupdatedate() {
    return this.$DO.updatedate;
  }
  set srfupdatedate(value: any) {
    this.$DO.updatedate = value;
  }

  get srfkey() {
    return this.$DO.example2id;
  }
  set srfkey(value: any) {
    this.$DO.example2id = value;
  }

  get srfmajortext() {
    return this.$DO.example2name;
  }
  set srfmajortext(value: any) {
    this.$DO.example2name = value;
  }

  get example2name() {
    return this.$DO.example2name;
  }
  set example2name(value: any) {
    this.$DO.example2name = value;
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

  get example2id() {
    return this.$DO.example2id;
  }
  set example2id(value: any) {
    this.$DO.example2id = value;
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
  controlService: new EditFormService<ControlVO>(ControlVO, new Example2Service() ),
  data: new ControlVO({}),
  appEntityCodeName: 'Example2',
  appDeCodeName:'Example2',
  appDeLogicName: '示例明细',
  appDeKeyFieldName: 'Example2Id',
  appDeMajorFieldName: 'Example2Name',
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
      caption: '示例明细基本信息',
      name: 'group1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
    },
    example2name: {
      caption: '示例明细名称',
      name: 'example2name',
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
    formpage2: {
      caption: '其它',
      name: 'formpage2',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMPAGE',
      showCaption: false,
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
      valueFormat: '',
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
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
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
      valueFormat: '',
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
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
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