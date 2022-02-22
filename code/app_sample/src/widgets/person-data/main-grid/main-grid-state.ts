import { ControlVOBase, IParam, GridService, isEmpty, Verify } from '@core';
import { PersonDataService } from '@api/person-data/person-data-service';

export class ControlVO extends ControlVOBase {
  
  constructor(data: any){
    super(data);
  }
  get persondataname() {
    return this.$DO.persondataname;
  }
  set persondataname(value: any) {
    this.$DO.persondataname = value;
  }
  get deptdataid() {
    return this.$DO.deptdataid;
  }
  set deptdataid(value: any) {
    this.$DO.deptdataid = value;
  }
  get orgdataid() {
    return this.$DO.orgdataid;
  }
  set orgdataid(value: any) {
    this.$DO.orgdataid = value;
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
    return this.$DO.persondataname;
  }
  set srfmajortext(value: any) {
    this.$DO.persondataname = value;
  }
  get srfdataaccaction() {
    return this.$DO.persondataid;
  }
  set srfdataaccaction(value: any) {
    this.$DO.persondataid = value;
  }
  get srfkey() {
    return this.$DO.persondataid;
  }
  set srfkey(value: any) {
    this.$DO.persondataid = value;
  }

}

export const ctrlState = {
  controlCodeName: 'Main',
  controlName: 'grid',
  totalColumnWidth: 460,
  selectColumnWidth: 50,
  appEntityCodeName: 'PersonData',
  appDeCodeName:'PersonData',
  appDeLogicName: '人员数据',
  appDeKeyFieldName: 'PersonDataId',
  appDeMajorFieldName: 'PersonDataName',
  controlService: new GridService<ControlVO>(ControlVO, new PersonDataService() ),
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
      title: "姓名",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "persondataname",
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