import { ControlVOBase, IParam, GridService, isEmpty, Verify } from '@core';
import { LeaveApplicationService } from '@api/leave-application/leave-application-service';

export class ControlVO extends ControlVOBase {
  
  constructor(data: any){
    super(data);
  }
  get ext_param2() {
    return this.$DO.ext_param2;
  }
  set ext_param2(value: any) {
    this.$DO.ext_param2 = value;
  }
  get leaveapplicationname() {
    return this.$DO.leaveapplicationname;
  }
  set leaveapplicationname(value: any) {
    this.$DO.leaveapplicationname = value;
  }
  get ext_data() {
    return this.$DO.ext_data;
  }
  set ext_data(value: any) {
    this.$DO.ext_data = value;
  }
  get state() {
    return this.$DO.state;
  }
  set state(value: any) {
    this.$DO.state = value;
  }
  get srfkey() {
    return this.$DO.leaveapplicationid;
  }
  set srfkey(value: any) {
    this.$DO.leaveapplicationid = value;
  }
  get srfdataaccaction() {
    return this.$DO.leaveapplicationid;
  }
  set srfdataaccaction(value: any) {
    this.$DO.leaveapplicationid = value;
  }
  get srfmajortext() {
    return this.$DO.leaveapplicationname;
  }
  set srfmajortext(value: any) {
    this.$DO.leaveapplicationname = value;
  }
  get ext_param() {
    return this.$DO.extparam;
  }
  set ext_param(value: any) {
    this.$DO.extparam = value;
  }
  get customerid() {
    return this.$DO.customerid;
  }
  set customerid(value: any) {
    this.$DO.customerid = value;
  }
  get srfwfstep() {
    return this.$DO.step;
  }
  set srfwfstep(value: any) {
    this.$DO.step = value;
  }
  get updatedate() {
    return this.$DO.updatedate;
  }
  set updatedate(value: any) {
    this.$DO.updatedate = value;
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

}

export const ctrlState = {
  controlCodeName: 'Main',
  controlName: 'grid',
  totalColumnWidth: 910,
  selectColumnWidth: 50,
  appEntityCodeName: 'LeaveApplication',
  appDeCodeName:'LeaveApplication',
  appDeLogicName: '请假申请',
  appDeKeyFieldName: 'LeaveApplicationId',
  appDeMajorFieldName: 'LeaveApplicationName',
  controlService: new GridService<ControlVO>(ControlVO, new LeaveApplicationService() ),
  //  新建默认值
  createDefaultItems: [
  ],
  items: [],
  selectedRowKeys: [],
  // 多数据部件分组
  mdCtrlGroup: {
    enableGroup: false,
    groupMode: "NONE",
    groupField: "",
  },
  // 多数据部件排序
  mdCtrlSort: {
    noSort: false,
    minorSortDir: "",
    minorSortPSDEF: "",
  },
  // 多数据部件分页
  mdCtrlPaging: {
    enablePagingBar: true,
    current: 1,
    pageSize: 20,
    pagination: {
      position: ['bottomRight'],
      defaultPageSize: 20,
      showQuickJumper: true,
      showTotal: (total: number, range: IParam[]) => `显示 ${range[0]} - ${range[1]} 条数据，共 ${total} 条数据`,
      pageSizeOptions: ['10','20','50','100'],
    },
  },
  gridAgg: {
    aggMode: "NONE",
    aggData: [],
  },
  uAColumnModel: {
  },
  gridEditState:{
    srfkey:{},
  },
  columnsModel: [
    {
      title: "请假申请名称",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "leaveapplicationname",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "申请状态",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "state",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "审批步骤",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "step",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "客户名称",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "customername",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "扩展数据",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "ext_data",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "扩展参数",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "ext_param",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "扩展参数2",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "ext_param2",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "更新时间",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "updatedate",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "",
      columnType: "EMPTYCOLUMN",
      dataIndex: "autowidthcolumn",
      align: "center",
      resizable: true,
      ellipsis: true,
      aggMode: "NONE",
    },
  ],
  // 是否单选
  isSingleSelect:false,
  //  更新默认值
  updateDefaultItems: [
  ],
  rules:{
  }
};