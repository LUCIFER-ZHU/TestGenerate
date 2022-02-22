import { ControlVOBase, IParam, GridService, isEmpty, Verify } from '@core';
import { LogicValidDataService } from '@api/logic-valid-data/logic-valid-data-service';

export class ControlVO extends ControlVOBase {
  
  constructor(data: any){
    super(data);
  }
  get region() {
    return this.$DO.region;
  }
  set region(value: any) {
    this.$DO.region = value;
  }
  get updateman() {
    return this.$DO.updateman;
  }
  set updateman(value: any) {
    this.$DO.updateman = value;
  }
  get code() {
    return this.$DO.code;
  }
  set code(value: any) {
    this.$DO.code = value;
  }
  get updatedate() {
    return this.$DO.updatedate;
  }
  set updatedate(value: any) {
    this.$DO.updatedate = value;
  }
  get logicvaliddataname() {
    return this.$DO.logicvaliddataname;
  }
  set logicvaliddataname(value: any) {
    this.$DO.logicvaliddataname = value;
  }
  get srfmajortext() {
    return this.$DO.logicvaliddataname;
  }
  set srfmajortext(value: any) {
    this.$DO.logicvaliddataname = value;
  }
  get srfdataaccaction() {
    return this.$DO.logicvaliddataid;
  }
  set srfdataaccaction(value: any) {
    this.$DO.logicvaliddataid = value;
  }
  get srfkey() {
    return this.$DO.logicvaliddataid;
  }
  set srfkey(value: any) {
    this.$DO.logicvaliddataid = value;
  }

}

export const ctrlState = {
  controlCodeName: 'Main',
  controlName: 'grid',
  totalColumnWidth: 660,
  selectColumnWidth: 50,
  appEntityCodeName: 'LogicValidData',
  appDeCodeName:'LogicValidData',
  appDeLogicName: '示例数据（启用逻辑删除）',
  appDeKeyFieldName: 'LogicValidDataId',
  appDeMajorFieldName: 'LogicValidDataName',
  controlService: new GridService<ControlVO>(ControlVO, new LogicValidDataService() ),
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
      title: "区域",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "region",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "标识",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "code",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "名称",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "logicvaliddataname",
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