import { ControlVOBase, IParam, GridService, isEmpty, Verify } from '@core';
import { DeptDataService } from '@api/dept-data/dept-data-service';

export class ControlVO extends ControlVOBase {
  
  constructor(data: any){
    super(data);
  }
  get deptdataname() {
    return this.$DO.deptdataname;
  }
  set deptdataname(value: any) {
    this.$DO.deptdataname = value;
  }
  get orgdataid() {
    return this.$DO.orgdataid;
  }
  set orgdataid(value: any) {
    this.$DO.orgdataid = value;
  }
  get orgdataname() {
    return this.$DO.orgdataname;
  }
  set orgdataname(value: any) {
    this.$DO.orgdataname = value;
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
  get srfmajortext() {
    return this.$DO.deptdataname;
  }
  set srfmajortext(value: any) {
    this.$DO.deptdataname = value;
  }
  get srfdataaccaction() {
    return this.$DO.deptdataid;
  }
  set srfdataaccaction(value: any) {
    this.$DO.deptdataid = value;
  }
  get srfkey() {
    return this.$DO.deptdataid;
  }
  set srfkey(value: any) {
    this.$DO.deptdataid = value;
  }

}

export const ctrlState = {
  controlCodeName: 'Main',
  controlName: 'grid',
  totalColumnWidth: 560,
  selectColumnWidth: 50,
  appEntityCodeName: 'DeptData',
  appDeCodeName:'DeptData',
  appDeLogicName: '部门数据',
  appDeKeyFieldName: 'DeptDataId',
  appDeMajorFieldName: 'DeptDataName',
  controlService: new GridService<ControlVO>(ControlVO, new DeptDataService() ),
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
      title: "部门名称",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "deptdataname",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "组织名称",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "orgdataname",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "更新人",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "updateman",
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