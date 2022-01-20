import { ControlVOBase, IParam, GridService } from '@core';
import { Example2Service } from '@api/example2/example2-service';

export class ControlVO extends ControlVOBase {
  
  constructor(data: any){
    super(data);
  }

  get exampleid() {
    return this.$DO.exampleid;
  }
  set exampleid(value: any) {
    this.$DO.exampleid = value;
  }

  get updateman() {
    return this.$DO.updateman;
  }
  set updateman(value: any) {
    this.$DO.updateman = value;
  }

  get example2name() {
    return this.$DO.example2name;
  }
  set example2name(value: any) {
    this.$DO.example2name = value;
  }

  get updatedate() {
    return this.$DO.updatedate;
  }
  set updatedate(value: any) {
    this.$DO.updatedate = value;
  }

  get srfmajortext() {
    return this.$DO.example2name;
  }
  set srfmajortext(value: any) {
    this.$DO.example2name = value;
  }

  get srfdataaccaction() {
    return this.$DO.example2id;
  }
  set srfdataaccaction(value: any) {
    this.$DO.example2id = value;
  }

  get srfkey() {
    return this.$DO.example2id;
  }
  set srfkey(value: any) {
    this.$DO.example2id = value;
  }

}

export const ctrlState = {
  controlCodeName: 'Main',
  controlName: 'grid',
  appEntityCodeName:'Example2',
  controlService: new GridService<ControlVO>(ControlVO, new Example2Service() ),
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
      title: "示例明细名称",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "example2name",
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
  // 是否单选
  isSingleSelect:false,
};