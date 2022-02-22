import { ControlVOBase, EditFormService, Verify, isEmpty } from '@core';
import { LeaveApplicationService } from '@api/leave-application/leave-application-service';

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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','leaveapplicationname','state','step','customername','ext_data','ext_param','ext_param2','deptid','orgid','createman','createdate','updateman','updatedate','customerid','leaveapplicationid'];  
  }

  // 表单里映射了属性的字段
  get srfupdatedate() {
    return this.$DO.updatedate;
  }
  set srfupdatedate(value: any) {
    this.$DO.updatedate = value;
  }

  get srfkey() {
    return this.$DO.leaveapplicationid;
  }
  set srfkey(value: any) {
    this.$DO.leaveapplicationid = value;
  }

  get srfmajortext() {
    return this.$DO.leaveapplicationname;
  }
  set srfmajortext(value: any) {
    this.$DO.leaveapplicationname = value;
  }

  get leaveapplicationname() {
    return this.$DO.leaveapplicationname;
  }
  set leaveapplicationname(value: any) {
    this.$DO.leaveapplicationname = value;
  }

  get state() {
    return this.$DO.state;
  }
  set state(value: any) {
    this.$DO.state = value;
  }

  get step() {
    return this.$DO.step;
  }
  set step(value: any) {
    this.$DO.step = value;
  }

  get customername() {
    return this.$DO.customername;
  }
  set customername(value: any) {
    this.$DO.customername = value;
  }

  get ext_data() {
    return this.$DO.ext_data;
  }
  set ext_data(value: any) {
    this.$DO.ext_data = value;
  }

  get ext_param() {
    return this.$DO.extparam;
  }
  set ext_param(value: any) {
    this.$DO.extparam = value;
  }

  get ext_param2() {
    return this.$DO.ext_param2;
  }
  set ext_param2(value: any) {
    this.$DO.ext_param2 = value;
  }

  get deptid() {
    return this.$DO.deptid;
  }
  set deptid(value: any) {
    this.$DO.deptid = value;
  }

  get orgid() {
    return this.$DO.orgid;
  }
  set orgid(value: any) {
    this.$DO.orgid = value;
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

  get customerid() {
    return this.$DO.customerid;
  }
  set customerid(value: any) {
    this.$DO.customerid = value;
  }

  get leaveapplicationid() {
    return this.$DO.leaveapplicationid;
  }
  set leaveapplicationid(value: any) {
    this.$DO.leaveapplicationid = value;
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
  controlService: new EditFormService<ControlVO>(ControlVO, new LeaveApplicationService() ),
  data: new ControlVO({}),
  appEntityCodeName: 'LeaveApplication',
  appDeCodeName:'LeaveApplication',
  appDeLogicName: '请假申请',
  appDeKeyFieldName: 'LeaveApplicationId',
  appDeMajorFieldName: 'LeaveApplicationName',
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
      caption: '请假申请基本信息',
      name: 'group1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
    },
    leaveapplicationname: {
      caption: '请假申请名称',
      name: 'leaveapplicationname',
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
    state: {
      caption: '申请状态',
      name: 'state',
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
    step: {
      caption: '审批步骤',
      name: 'step',
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
    customername: {
      caption: '客户名称',
      name: 'customername',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
      valueItemName: 'customerid',
    },
    ext_data: {
      caption: '扩展数据',
      name: 'ext_data',
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
    ext_param: {
      caption: '扩展参数',
      name: 'ext_param',
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
    ext_param2: {
      caption: '扩展参数2',
      name: 'ext_param2',
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
    deptid: {
      caption: '组织部门标识',
      name: 'deptid',
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
    orgid: {
      caption: '组织机构标识',
      name: 'orgid',
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