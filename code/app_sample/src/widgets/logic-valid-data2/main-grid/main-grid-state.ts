import { ControlVOBase, IParam, GridService } from '@core';
import { LogicValidData2Service } from '@api/logic-valid-data2/logic-valid-data2-service';

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

  get srfmajortext() {
    return this.$DO.logicvaliddata2name;
  }
  set srfmajortext(value: any) {
    this.$DO.logicvaliddata2name = value;
  }

  get srfdataaccaction() {
    return this.$DO.logicvaliddata2id;
  }
  set srfdataaccaction(value: any) {
    this.$DO.logicvaliddata2id = value;
  }

  get srfkey() {
    return this.$DO.logicvaliddata2id;
  }
  set srfkey(value: any) {
    this.$DO.logicvaliddata2id = value;
  }

  get logicvaliddata2name() {
    return this.$DO.logicvaliddata2name;
  }
  set logicvaliddata2name(value: any) {
    this.$DO.logicvaliddata2name = value;
  }

}

export const ctrlState = {
  controlCodeName: 'Main',
  controlName: 'grid',
  appEntityCodeName:'LogicValidData2',
  controlService: new GridService<ControlVO>(ControlVO, new LogicValidData2Service() ),
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
      showTotal: (total: number, range: IParam[]) => `${range[0]}-${range[1]} of ${total} items`,
      pageSizeOptions: ['10','20','50','100'],
    },
  },
  gridAgg: {
    aggMode: "NONE",
    aggData: [],
  },
  uAColumnModel:[
  ],
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
      dataIndex: "logicvaliddata2name",
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
  ],
};