import { ControlVOBase, IParam, GridService } from '@core';
import { EditorValueService } from '@api/editor-value/editor-value-service';

export class ControlVO extends ControlVOBase {
  
  constructor(data: any){
    super(data);
  }

  get customerid3() {
    return this.$DO.customerid3;
  }
  set customerid3(value: any) {
    this.$DO.customerid3 = value;
  }

  get customerid4() {
    return this.$DO.customerid4;
  }
  set customerid4(value: any) {
    this.$DO.customerid4 = value;
  }

  get customerid2() {
    return this.$DO.customerid2;
  }
  set customerid2(value: any) {
    this.$DO.customerid2 = value;
  }

  get customerid() {
    return this.$DO.customerid;
  }
  set customerid(value: any) {
    this.$DO.customerid = value;
  }

  get customerid5() {
    return this.$DO.customerid5;
  }
  set customerid5(value: any) {
    this.$DO.customerid5 = value;
  }

  get updateman() {
    return this.$DO.updateman;
  }
  set updateman(value: any) {
    this.$DO.updateman = value;
  }

  get editorvaluename() {
    return this.$DO.editorvaluename;
  }
  set editorvaluename(value: any) {
    this.$DO.editorvaluename = value;
  }

  get updatedate() {
    return this.$DO.updatedate;
  }
  set updatedate(value: any) {
    this.$DO.updatedate = value;
  }

  get srfmajortext() {
    return this.$DO.editorvaluename;
  }
  set srfmajortext(value: any) {
    this.$DO.editorvaluename = value;
  }

  get srfdataaccaction() {
    return this.$DO.editorvalueid;
  }
  set srfdataaccaction(value: any) {
    this.$DO.editorvalueid = value;
  }

  get srfkey() {
    return this.$DO.editorvalueid;
  }
  set srfkey(value: any) {
    this.$DO.editorvalueid = value;
  }

}

export const ctrlState = {
  controlCodeName: 'Main',
  controlName: 'grid',
  appEntityCodeName:'EditorValue',
  controlService: new GridService<ControlVO>(ControlVO, new EditorValueService() ),
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
      title: "编辑器值名称",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "editorvaluename",
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