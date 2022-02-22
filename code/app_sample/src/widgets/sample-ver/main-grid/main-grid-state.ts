import { ControlVOBase, IParam, GridService, isEmpty, Verify } from '@core';
import { SampleVerService } from '@api/sample-ver/sample-ver-service';

export class ControlVO extends ControlVOBase {
  
  constructor(data: any){
    super(data);
  }
  get verstr() {
    return this.$DO.verstr;
  }
  set verstr(value: any) {
    this.$DO.verstr = value;
  }
  get samplevername() {
    return this.$DO.samplevername;
  }
  set samplevername(value: any) {
    this.$DO.samplevername = value;
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
  get type() {
    return this.$DO.type;
  }
  set type(value: any) {
    this.$DO.type = value;
  }
  get srfmajortext() {
    return this.$DO.samplevername;
  }
  set srfmajortext(value: any) {
    this.$DO.samplevername = value;
  }
  get srfdataaccaction() {
    return this.$DO.sampleverid;
  }
  set srfdataaccaction(value: any) {
    this.$DO.sampleverid = value;
  }
  get srfkey() {
    return this.$DO.sampleverid;
  }
  set srfkey(value: any) {
    this.$DO.sampleverid = value;
  }

}

export const ctrlState = {
  controlCodeName: 'Main',
  controlName: 'grid',
  totalColumnWidth: 790,
  selectColumnWidth: 50,
  appEntityCodeName: 'SampleVer',
  appDeCodeName:'SampleVer',
  appDeLogicName: '示例版本',
  appDeKeyFieldName: 'SampleVerId',
  appDeMajorFieldName: 'SampleVerName',
  controlService: new GridService<ControlVO>(ControlVO, new SampleVerService() ),
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
    minorSortDir: "DESC",
    minorSortPSDEF: "Verstr",
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
      title: "标题",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "samplevername",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "版本号",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "verstr",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "分类",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "type",
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
      width: 180,
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