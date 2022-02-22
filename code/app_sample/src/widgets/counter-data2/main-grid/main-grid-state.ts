import { ControlVOBase, IParam, GridService, isEmpty, Verify } from '@core';
import { CounterData2Service } from '@api/counter-data2/counter-data2-service';

export class ControlVO extends ControlVOBase {
  
  constructor(data: any){
    super(data);
  }
  get countertag7() {
    return this.$DO.countertag7;
  }
  set countertag7(value: any) {
    this.$DO.countertag7 = value;
  }
  get countertag6() {
    return this.$DO.countertag6;
  }
  set countertag6(value: any) {
    this.$DO.countertag6 = value;
  }
  get countertag9() {
    return this.$DO.countertag9;
  }
  set countertag9(value: any) {
    this.$DO.countertag9 = value;
  }
  get countertag8() {
    return this.$DO.countertag8;
  }
  set countertag8(value: any) {
    this.$DO.countertag8 = value;
  }
  get countertag() {
    return this.$DO.countertag;
  }
  set countertag(value: any) {
    this.$DO.countertag = value;
  }
  get countertag3() {
    return this.$DO.countertag3;
  }
  set countertag3(value: any) {
    this.$DO.countertag3 = value;
  }
  get countertag2() {
    return this.$DO.countertag2;
  }
  set countertag2(value: any) {
    this.$DO.countertag2 = value;
  }
  get srfmajortext() {
    return this.$DO.counterdata2name;
  }
  set srfmajortext(value: any) {
    this.$DO.counterdata2name = value;
  }
  get srfdataaccaction() {
    return this.$DO.counterdata2id;
  }
  set srfdataaccaction(value: any) {
    this.$DO.counterdata2id = value;
  }
  get srfkey() {
    return this.$DO.counterdata2id;
  }
  set srfkey(value: any) {
    this.$DO.counterdata2id = value;
  }
  get countertag5() {
    return this.$DO.countertag5;
  }
  set countertag5(value: any) {
    this.$DO.countertag5 = value;
  }
  get countertag4() {
    return this.$DO.countertag4;
  }
  set countertag4(value: any) {
    this.$DO.countertag4 = value;
  }

}

export const ctrlState = {
  controlCodeName: 'Main',
  controlName: 'grid',
  totalColumnWidth: 910,
  selectColumnWidth: 50,
  appEntityCodeName: 'CounterData2',
  appDeCodeName:'CounterData2',
  appDeLogicName: '计数器数据2',
  appDeKeyFieldName: 'CounterData2Id',
  appDeMajorFieldName: 'CounterData2Name',
  controlService: new GridService<ControlVO>(ControlVO, new CounterData2Service() ),
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
      title: "计数1",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "countertag",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "计数2",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "countertag2",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "计数3",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "countertag3",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "计数4",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "countertag4",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "计数5",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "countertag5",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "计数6",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "countertag6",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "计数7",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "countertag7",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "计数8",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "countertag8",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "计数9",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "countertag9",
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