import { ControlVOBase, verifyRules, EditFormService } from '@ibiz-core';
import { LeaveApplicationService } from '@service/entity/leave-application/leave-application-service';

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
export const CtrlConfig = {
  controlCodeName: 'Main',
  controlName: 'form',
  controlService: new EditFormService<ControlVO>(ControlVO, new LeaveApplicationService() ),
  data: new ControlVO({}),
  formDetails: [
    {
      caption: '请假申请基本信息',
      codeName: 'group1',
      name: 'group1',
    },
    {
      caption: '请假申请名称',
      codeName: 'leaveapplicationname',
      name: 'leaveapplicationname',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '申请状态',
      codeName: 'state',
      name: 'state',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '审批步骤',
      codeName: 'step',
      name: 'step',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '客户名称',
      codeName: 'customername',
      name: 'customername',
      dataType: '25',
      detailStyle: 'DEFAULT',
      valueItemName: 'customerid',
    },
    {
      caption: '扩展数据',
      codeName: 'ext_data',
      name: 'ext_data',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '扩展参数',
      codeName: 'ext_param',
      name: 'ext_param',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '扩展参数2',
      codeName: 'ext_param2',
      name: 'ext_param2',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '组织部门标识',
      codeName: 'deptid',
      name: 'deptid',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '组织机构标识',
      codeName: 'orgid',
      name: 'orgid',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '操作信息',
      codeName: 'group2',
      name: 'group2',
    },
    {
      caption: '建立人',
      codeName: 'createman',
      name: 'createman',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '建立时间',
      codeName: 'createdate',
      name: 'createdate',
      dataType: '5',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '更新人',
      codeName: 'updateman',
      name: 'updateman',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '更新时间',
      codeName: 'updatedate',
      name: 'updatedate',
      dataType: '5',
      detailStyle: 'DEFAULT',
    },
  ],
  rules: {
  },
};