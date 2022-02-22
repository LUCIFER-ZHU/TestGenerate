import { ControlVOBase, IParam, GridService, isEmpty, Verify } from '@core';
import { ExampleService } from '@api/example/example-service';

export class ControlVO extends ControlVOBase {
  
  constructor(data: any){
    super(data);
  }
  get fieldz() {
    return this.$DO.fieldz;
  }
  set fieldz(value: any) {
    this.$DO.fieldz = value;
  }
  get begintime() {
    return this.$DO.begintime;
  }
  set begintime(value: any) {
    this.$DO.begintime = value;
  }
  get fieldx() {
    return this.$DO.fieldx;
  }
  set fieldx(value: any) {
    this.$DO.fieldx = value;
  }
  get fieldy() {
    return this.$DO.fieldy;
  }
  set fieldy(value: any) {
    this.$DO.fieldy = value;
  }
  get provinceid() {
    return this.$DO.provinceid;
  }
  set provinceid(value: any) {
    this.$DO.provinceid = value;
  }
  get updatedate() {
    return this.$DO.updatedate;
  }
  set updatedate(value: any) {
    this.$DO.updatedate = value;
  }
  get districtid() {
    return this.$DO.districtid;
  }
  set districtid(value: any) {
    this.$DO.districtid = value;
  }
  get srfmajortext() {
    return this.$DO.examplename;
  }
  set srfmajortext(value: any) {
    this.$DO.examplename = value;
  }
  get srfdataaccaction() {
    return this.$DO.exampleid;
  }
  set srfdataaccaction(value: any) {
    this.$DO.exampleid = value;
  }
  get srfkey() {
    return this.$DO.exampleid;
  }
  set srfkey(value: any) {
    this.$DO.exampleid = value;
  }
  get cityid() {
    return this.$DO.cityid;
  }
  set cityid(value: any) {
    this.$DO.cityid = value;
  }
  get examplename() {
    return this.$DO.examplename;
  }
  set examplename(value: any) {
    this.$DO.examplename = value;
  }

}

export const ctrlState = {
  controlCodeName: 'Layout',
  controlName: 'grid',
  totalColumnWidth: 1011,
  selectColumnWidth: 50,
  appEntityCodeName: 'Example',
  appDeCodeName:'Example',
  appDeLogicName: '示例',
  appDeKeyFieldName: 'ExampleId',
  appDeMajorFieldName: 'ExampleName',
  controlService: new GridService<ControlVO>(ControlVO, new ExampleService() ),
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
      title: "1*",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      resizable: true,
      dataIndex: "examplename",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "100宽",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "fieldx",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "200宽",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 200,
      resizable: true,
      dataIndex: "fieldy",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "300宽",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 300,
      resizable: true,
      dataIndex: "fieldz",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "标题居中",
      columnType: "DEFGRIDCOLUMN",
      align: "center",
      width: 200,
      resizable: true,
      dataIndex: "begintime",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "标题右对齐",
      columnType: "DEFGRIDCOLUMN",
      align: "right",
      width: 200,
      resizable: true,
      dataIndex: "updatedate",
      ellipsis: true,
      enableSort: true,
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