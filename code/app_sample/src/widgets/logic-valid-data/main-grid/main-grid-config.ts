import { ControlVOBase, IParam, GridService } from '@ibiz-core';
import { LogicValidDataService } from '@service/entity/logic-valid-data/logic-valid-data-service';

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

export const CtrlConfig = {
  controlCodeName: "Main",
  controlName: "grid",
  controlService: new GridService<ControlVO>(ControlVO, new LogicValidDataService() ),
  items: [],
  dataAgg: [],
  selectedRowKeys: [],
  aggMode: "NONE",
  noSort: false,
  minorSortDir: "",
  minorSortPSDEF: "",
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
  ],
};