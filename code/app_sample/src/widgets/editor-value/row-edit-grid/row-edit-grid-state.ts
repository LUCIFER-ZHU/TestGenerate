import { ControlVOBase, IParam, GridService, isEmpty, Verify } from '@core';
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
  get slider() {
    return this.$DO.slider;
  }
  set slider(value: any) {
    this.$DO.slider = value;
  }
  get customerid4() {
    return this.$DO.customerid4;
  }
  set customerid4(value: any) {
    this.$DO.customerid4 = value;
  }
  get datepickerex_minute() {
    return this.$DO.datepickerex_minute;
  }
  set datepickerex_minute(value: any) {
    this.$DO.datepickerex_minute = value;
  }
  get datepickerex_hour() {
    return this.$DO.datepickerex_hour;
  }
  set datepickerex_hour(value: any) {
    this.$DO.datepickerex_hour = value;
  }
  get datepicker() {
    return this.$DO.datepicker;
  }
  set datepicker(value: any) {
    this.$DO.datepicker = value;
  }
  get dropdownlist() {
    return this.$DO.dropdownlist;
  }
  set dropdownlist(value: any) {
    this.$DO.dropdownlist = value;
  }
  get customerid2() {
    return this.$DO.customerid2;
  }
  set customerid2(value: any) {
    this.$DO.customerid2 = value;
  }
  get mdropdownlist() {
    return this.$DO.mdropdownlist;
  }
  set mdropdownlist(value: any) {
    this.$DO.mdropdownlist = value;
  }
  get customerid5() {
    return this.$DO.customerid5;
  }
  set customerid5(value: any) {
    this.$DO.customerid5 = value;
  }
  get datepickerex_noday_nosecond() {
    return this.$DO.datepickerex_noday_nosecond;
  }
  set datepickerex_noday_nosecond(value: any) {
    this.$DO.datepickerex_noday_nosecond = value;
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
  get datepickerex_second() {
    return this.$DO.datepickerex_second;
  }
  set datepickerex_second(value: any) {
    this.$DO.datepickerex_second = value;
  }
  get customername() {
    return this.$DO.customername;
  }
  set customername(value: any) {
    this.$DO.customername = value;
  }
  get datepickerex_noday() {
    return this.$DO.datepickerex_noday;
  }
  set datepickerex_noday(value: any) {
    this.$DO.datepickerex_noday = value;
  }
  get numberval() {
    return this.$DO.numberval;
  }
  set numberval(value: any) {
    this.$DO.numberval = value;
  }
  get customername2() {
    return this.$DO.customername2;
  }
  set customername2(value: any) {
    this.$DO.customername2 = value;
  }
  get customername3() {
    return this.$DO.customername3;
  }
  set customername3(value: any) {
    this.$DO.customername3 = value;
  }
  get customername4() {
    return this.$DO.customername4;
  }
  set customername4(value: any) {
    this.$DO.customername4 = value;
  }
  get datepickerex_notime() {
    return this.$DO.datepickerex_notime;
  }
  set datepickerex_notime(value: any) {
    this.$DO.datepickerex_notime = value;
  }
  get customername5() {
    return this.$DO.customername5;
  }
  set customername5(value: any) {
    this.$DO.customername5 = value;
  }
  get textbox() {
    return this.$DO.textbox;
  }
  set textbox(value: any) {
    this.$DO.textbox = value;
  }
  get stepper() {
    return this.$DO.stepper;
  }
  set stepper(value: any) {
    this.$DO.stepper = value;
  }
  get switchval() {
    return this.$DO.switchval;
  }
  set switchval(value: any) {
    this.$DO.switchval = value;
  }
  get customerid() {
    return this.$DO.customerid;
  }
  set customerid(value: any) {
    this.$DO.customerid = value;
  }
  get ac() {
    return this.$DO.ac;
  }
  set ac(value: any) {
    this.$DO.ac = value;
  }
  get checkbox() {
    return this.$DO.checkbox;
  }
  set checkbox(value: any) {
    this.$DO.checkbox = value;
  }
  get rating() {
    return this.$DO.rating;
  }
  set rating(value: any) {
    this.$DO.rating = value;
  }

}

export const ctrlState = {
  controlCodeName: 'RowEdit',
  controlName: 'grid',
  totalColumnWidth: 5010,
  selectColumnWidth: 50,
  appEntityCodeName: 'EditorValue',
  appDeCodeName:'EditorValue',
  appDeLogicName: '????????????',
  appDeKeyFieldName: 'EditorValueId',
  appDeMajorFieldName: 'EditorValueName',
  controlService: new GridService<ControlVO>(ControlVO, new EditorValueService() ),
  //  ???????????????
  createDefaultItems: [
    {
      createDV: "",
      createDVT: "CURTIME",
      property: "datepicker",
      valueFormat: "YYYY-MM-DD HH:mm:ss",
      dataType: "0"
    },
    {
      createDV: "srfkey",
      createDVT: "SESSION",
      property: "textbox",
      valueFormat: "",
      dataType: "0"
    },
  ],
  items: [],
  selectedRowKeys: [],
  // ?????????????????????
  mdCtrlGroup: {
    enableGroup: false,
    groupMode: "NONE",
    groupField: "",
  },
  // ?????????????????????
  mdCtrlSort: {
    noSort: false,
    minorSortDir: "",
    minorSortPSDEF: "",
  },
  // ?????????????????????
  mdCtrlPaging: {
    enablePagingBar: true,
    current: 1,
    pageSize: 20,
    pagination: {
      position: ['bottomRight'],
      defaultPageSize: 20,
      showQuickJumper: true,
      showTotal: (total: number, range: IParam[]) => `?????? ${range[0]} - ${range[1]} ??????????????? ${total} ?????????`,
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
    slider:{},
    datepickerex_minute:{},
    datepickerex_hour:{},
    datepicker:{},
    dropdownlist:{},
    mdropdownlist:{},
    datepickerex_noday_nosecond:{},
    srfkey:{},
    datepickerex_second:{},
    customername:{},
    datepickerex_noday:{},
    numberval:{},
    customername2:{},
    customername3:{},
    customername4:{},
    datepickerex_notime:{},
    customername5:{},
    textbox:{},
    stepper:{},
    switchval:{},
    ac:{},
    checkbox:{},
    rating:{},
  },
  columnsModel: [
    {
      title: "???????????????",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 200,
      resizable: true,
      dataIndex: "dropdownlist",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "???????????????????????????",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 200,
      resizable: true,
      dataIndex: "mdropdownlist",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "????????????",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 200,
      resizable: true,
      dataIndex: "switchval",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "?????????",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 200,
      resizable: true,
      dataIndex: "numberval",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "????????????",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 200,
      resizable: true,
      dataIndex: "customername",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
      valueItemName: "customerid",
    },
    {
      title: "??????????????????????????????",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 200,
      resizable: true,
      dataIndex: "customername2",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
      valueItemName: "customerid2",
    },
    {
      title: "????????????????????????",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 200,
      resizable: true,
      dataIndex: "customername3",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
      valueItemName: "customerid3",
    },
    {
      title: "??????????????????AC???",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 200,
      resizable: true,
      dataIndex: "customername4",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
      valueItemName: "customerid4",
    },
    {
      title: "???????????????????????????",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 200,
      resizable: true,
      dataIndex: "customername5",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
      valueItemName: "customerid5",
    },
    {
      title: "?????????",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 200,
      resizable: true,
      dataIndex: "textbox",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "???????????????",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 200,
      resizable: true,
      dataIndex: "datepicker",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "??????????????????YYYY-MM-DD HH???",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 300,
      resizable: true,
      dataIndex: "datepickerex_hour",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "??????????????????YYYY-MM-DD HH:mm???",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 300,
      resizable: true,
      dataIndex: "datepickerex_minute",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "??????????????????HH:mm:ss???",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 300,
      resizable: true,
      dataIndex: "datepickerex_noday",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "??????????????????HH:mm???",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 300,
      resizable: true,
      dataIndex: "datepickerex_noday_nosecond",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "??????????????????YYYY-MM-DD???",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 300,
      resizable: true,
      dataIndex: "datepickerex_notime",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "??????????????????YYYY-MM-DD HH:mm:ss???",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 300,
      resizable: true,
      dataIndex: "datepickerex_second",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "?????????",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 200,
      resizable: true,
      dataIndex: "stepper",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "???????????????",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 200,
      resizable: true,
      dataIndex: "slider",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "????????????",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 200,
      resizable: true,
      dataIndex: "ac",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "?????????",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 200,
      resizable: true,
      dataIndex: "rating",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "?????????",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 200,
      resizable: true,
      dataIndex: "checkbox",
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
  // ????????????
  isSingleSelect:false,
  //  ???????????????
  updateDefaultItems: [
    {
      updateDV: "10",
      updateDVT: "PARAM",
      property: "dropdownlist",
      valueFormat: "",
      dataType: "0"
    },
  ],
  rules:{
  }
};