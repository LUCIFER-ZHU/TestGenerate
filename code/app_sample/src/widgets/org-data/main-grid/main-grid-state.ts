import { ControlVOBase, IParam, GridService, isEmpty, Verify } from '@core';
import { OrgDataService } from '@api/org-data/org-data-service';

export class ControlVO extends ControlVOBase {
  
  constructor(data: any){
    super(data);
  }
  get porgdataname() {
    return this.$DO.porgdataname;
  }
  set porgdataname(value: any) {
    this.$DO.porgdataname = value;
  }
  get orgdataname() {
    return this.$DO.orgdataname;
  }
  set orgdataname(value: any) {
    this.$DO.orgdataname = value;
  }
  get porgdataid() {
    return this.$DO.porgdataid;
  }
  set porgdataid(value: any) {
    this.$DO.porgdataid = value;
  }
  get orgdatacode() {
    return this.$DO.orgdatacode;
  }
  set orgdatacode(value: any) {
    this.$DO.orgdatacode = value;
  }
  get srfmajortext() {
    return this.$DO.orgdataname;
  }
  set srfmajortext(value: any) {
    this.$DO.orgdataname = value;
  }
  get srfdataaccaction() {
    return this.$DO.orgdataid;
  }
  set srfdataaccaction(value: any) {
    this.$DO.orgdataid = value;
  }
  get srfkey() {
    return this.$DO.orgdataid;
  }
  set srfkey(value: any) {
    this.$DO.orgdataid = value;
  }

}

export const ctrlState = {
  controlCodeName: 'Main',
  controlName: 'grid',
  totalColumnWidth: 610,
  selectColumnWidth: 50,
  appEntityCodeName: 'OrgData',
  appDeCodeName:'OrgData',
  appDeLogicName: '组织数据',
  appDeKeyFieldName: 'OrgDataId',
  appDeMajorFieldName: 'OrgDataName',
  controlService: new GridService<ControlVO>(ControlVO, new OrgDataService() ),
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
      title: "组织名称",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 200,
      resizable: true,
      dataIndex: "orgdataname",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "组织编码",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 200,
      resizable: true,
      dataIndex: "orgdatacode",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "父级组织",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 200,
      resizable: true,
      dataIndex: "porgdataname",
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