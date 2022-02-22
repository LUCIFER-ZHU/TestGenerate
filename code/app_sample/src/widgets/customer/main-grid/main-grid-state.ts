import { ControlVOBase, IParam, GridService, isEmpty, Verify } from '@core';
import { CustomerService } from '@api/customer/customer-service';

export class ControlVO extends ControlVOBase {
  
  constructor(data: any){
    super(data);
  }
  get phone() {
    return this.$DO.phone;
  }
  set phone(value: any) {
    this.$DO.phone = value;
  }
  get provinceid() {
    return this.$DO.provinceid;
  }
  set provinceid(value: any) {
    this.$DO.provinceid = value;
  }
  get type() {
    return this.$DO.type;
  }
  set type(value: any) {
    this.$DO.type = value;
  }
  get srfmajortext() {
    return this.$DO.customername;
  }
  set srfmajortext(value: any) {
    this.$DO.customername = value;
  }
  get srfkey() {
    return this.$DO.customerid;
  }
  set srfkey(value: any) {
    this.$DO.customerid = value;
  }
  get srfdataaccaction() {
    return this.$DO.customerid;
  }
  set srfdataaccaction(value: any) {
    this.$DO.customerid = value;
  }
  get pcustomername() {
    return this.$DO.pcustomername;
  }
  set pcustomername(value: any) {
    this.$DO.pcustomername = value;
  }
  get cityid() {
    return this.$DO.cityid;
  }
  set cityid(value: any) {
    this.$DO.cityid = value;
  }
  get email() {
    return this.$DO.email;
  }
  set email(value: any) {
    this.$DO.email = value;
  }
  get pcustomerid() {
    return this.$DO.pcustomerid;
  }
  set pcustomerid(value: any) {
    this.$DO.pcustomerid = value;
  }
  get districtid() {
    return this.$DO.districtid;
  }
  set districtid(value: any) {
    this.$DO.districtid = value;
  }
  get customername() {
    return this.$DO.customername;
  }
  set customername(value: any) {
    this.$DO.customername = value;
  }
  get mobile() {
    return this.$DO.mobile;
  }
  set mobile(value: any) {
    this.$DO.mobile = value;
  }

}

export const ctrlState = {
  controlCodeName: 'Main',
  controlName: 'grid',
  totalColumnWidth: 880,
  selectColumnWidth: 50,
  appEntityCodeName: 'Customer',
  appDeCodeName:'Customer',
  appDeLogicName: '客户',
  appDeKeyFieldName: 'CustomerId',
  appDeMajorFieldName: 'CustomerName',
  controlService: new GridService<ControlVO>(ControlVO, new CustomerService() ),
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
    uagridcolumn1: [
      { name: "uc7c82c1", caption: "编辑", showIcon: true, showCaption: false, separator: false, uIActionTag: "Edit", noPrivDisplayMode: "", dataAccessAction: '', actionTarget: 'SINGLEKEY', uIActionMode: "SYS", disabled: false, visible: true, iconClass: "fa fa-edit", },
      { name: "ue9dd53b", caption: "拷贝", showIcon: true, showCaption: false, separator: false, uIActionTag: "Copy", noPrivDisplayMode: "", dataAccessAction: '', actionTarget: 'SINGLEKEY', uIActionMode: "SYS", disabled: false, visible: true, iconClass: "fa fa-copy", },
      { name: "u46863bf", caption: "删除", showIcon: true, showCaption: false, separator: false, uIActionTag: "Remove", noPrivDisplayMode: "", dataAccessAction: '', actionTarget: 'MULTIKEY', uIActionMode: "SYS", disabled: false, visible: true, iconClass: "fa fa-remove", },
    ],
  },
  gridEditState:{
    srfkey:{},
  },
  columnsModel: [
    {
      title: "客户名称",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      minWidth: 100,
      resizable: true,
      dataIndex: "customername",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "类型",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "type",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "上级客户",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 120,
      resizable: true,
      dataIndex: "pcustomername",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "电话",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "phone",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "手机",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "mobile",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "电子邮箱",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "email",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "操作",
      columnType: "UAGRIDCOLUMN",
      align: "right",
      width: 100,
      resizable: true,
      fixed: "right",
      dataIndex: "uagridcolumn1",
      ellipsis: true,
      enableSort: false,
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