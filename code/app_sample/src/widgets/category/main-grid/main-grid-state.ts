import { ControlVOBase, IParam, GridService, isEmpty, Verify } from '@core';
import { CategoryService } from '@api/category/category-service';

export class ControlVO extends ControlVOBase {
  
  constructor(data: any){
    super(data);
  }
  get categoryname() {
    return this.$DO.categoryname;
  }
  set categoryname(value: any) {
    this.$DO.categoryname = value;
  }
  get pcategoryid() {
    return this.$DO.pcategoryid;
  }
  set pcategoryid(value: any) {
    this.$DO.pcategoryid = value;
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
    return this.$DO.categoryname;
  }
  set srfmajortext(value: any) {
    this.$DO.categoryname = value;
  }
  get srfdataaccaction() {
    return this.$DO.categoryid;
  }
  set srfdataaccaction(value: any) {
    this.$DO.categoryid = value;
  }
  get srfkey() {
    return this.$DO.categoryid;
  }
  set srfkey(value: any) {
    this.$DO.categoryid = value;
  }

}

export const ctrlState = {
  controlCodeName: 'Main',
  controlName: 'grid',
  totalColumnWidth: 460,
  selectColumnWidth: 50,
  appEntityCodeName: 'Category',
  appDeCodeName:'Category',
  appDeLogicName: '类别',
  appDeKeyFieldName: 'CategoryId',
  appDeMajorFieldName: 'CategoryName',
  controlService: new GridService<ControlVO>(ControlVO, new CategoryService() ),
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
      title: "类别名称",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "categoryname",
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
  isSingleSelect:true,
  //  更新默认值
  updateDefaultItems: [
  ],
  rules:{
  }
};