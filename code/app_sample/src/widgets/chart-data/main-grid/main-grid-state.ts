import { ControlVOBase, IParam, GridService, isEmpty, Verify } from '@core';
import { ChartDataService } from '@api/chart-data/chart-data-service';

export class ControlVO extends ControlVOBase {
  
  constructor(data: any){
    super(data);
  }
  get chartdataname() {
    return this.$DO.chartdataname;
  }
  set chartdataname(value: any) {
    this.$DO.chartdataname = value;
  }
  get data() {
    return this.$DO.data;
  }
  set data(value: any) {
    this.$DO.data = value;
  }
  get updateman() {
    return this.$DO.updateman;
  }
  set updateman(value: any) {
    this.$DO.updateman = value;
  }
  get planincome() {
    return this.$DO.planincome;
  }
  set planincome(value: any) {
    this.$DO.planincome = value;
  }
  get srfmajortext() {
    return this.$DO.chartdataname;
  }
  set srfmajortext(value: any) {
    this.$DO.chartdataname = value;
  }
  get realincome() {
    return this.$DO.realincome;
  }
  set realincome(value: any) {
    this.$DO.realincome = value;
  }
  get srfkey() {
    return this.$DO.chartdataid;
  }
  set srfkey(value: any) {
    this.$DO.chartdataid = value;
  }
  get srfdataaccaction() {
    return this.$DO.chartdataid;
  }
  set srfdataaccaction(value: any) {
    this.$DO.chartdataid = value;
  }
  get chartdate() {
    return this.$DO.chartdate;
  }
  set chartdate(value: any) {
    this.$DO.chartdate = value;
  }
  get year() {
    return this.$DO.year;
  }
  set year(value: any) {
    this.$DO.year = value;
  }
  get datatype() {
    return this.$DO.datatype;
  }
  set datatype(value: any) {
    this.$DO.datatype = value;
  }
  get datetime() {
    return this.$DO.datetime;
  }
  set datetime(value: any) {
    this.$DO.datetime = value;
  }
  get updatedate() {
    return this.$DO.updatedate;
  }
  set updatedate(value: any) {
    this.$DO.updatedate = value;
  }

}

export const ctrlState = {
  controlCodeName: 'Main',
  controlName: 'gridexpbar_grid',
  totalColumnWidth: 1460,
  selectColumnWidth: 50,
  appEntityCodeName: 'ChartData',
  appDeCodeName:'ChartData',
  appDeLogicName: '??????',
  appDeKeyFieldName: 'ChartDataId',
  appDeMajorFieldName: 'ChartDataName',
  controlService: new GridService<ControlVO>(ControlVO, new ChartDataService() ),
  //  ???????????????
  createDefaultItems: [
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
    uagridcolumn1: [
      { name: "u953df17", caption: "???????????????", showIcon: true, showCaption: true, separator: false, uIActionTag: "MobEdit", noPrivDisplayMode: "", dataAccessAction: '', actionTarget: 'SINGLEKEY', uIActionMode: "FRONT", disabled: false, visible: true, },
      { name: "u0c7ccd3", caption: "??????", showIcon: true, showCaption: true, separator: true, uIActionTag: "Refresh", noPrivDisplayMode: "", dataAccessAction: '', actionTarget: '', uIActionMode: "SYS", disabled: false, visible: true, iconClass: "fa fa-refresh", },
    ],
  },
  gridEditState:{
    chartdate:{},
    data:{},
    year:{},
    datatype:{},
    datetime:{},
    srfkey:{},
  },
  columnsModel: [
    {
      title: "????????????",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "chartdataname",
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
      dataIndex: "chartdate",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "????????????",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "datatype",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "??????",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "year",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "??????",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "data",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "????????????",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "planincome",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "????????????",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "realincome",
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
      dataIndex: "datetime",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "?????????",
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
      title: "????????????",
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
    {
      title: "??????",
      columnType: "UAGRIDCOLUMN",
      align: "right",
      width: 100,
      resizable: true,
      fixed: "right",
      dataIndex: "uagridcolumn1",
      ellipsis: true,
      enableSort: false,
      aggMode: "NONE",
    },
  ],
  // ????????????
  isSingleSelect:false,
  //  ???????????????
  updateDefaultItems: [
  ],
  rules:{
    data: [
      {
        validator: async (rule: any, value: any, callback: any, source: any) => {
          if (!source || isEmpty(source['data'])) {
            return Promise.resolve();
          }
          const { isPast, infoMessage } = Verify.verifyDeRules(
            'data',
            source,
            {
              "condOp": "AND",
              "notMode": false,
              "condType": "GROUP",
              "ruleInfo": "??????????????????10?????????200???",
            	"keyCond": false,
              "conditions": [
                {
                  "notMode": false,
                  "condType": "VALUERANGE2",
                  "ruleInfo": "??????????????????10?????????200???",
                	"keyCond": false,
                	"includeMinValue": false,
                	"minValue": "10.0",
                	"includeMaxValue": false,
                	"maxValue": "200.0",
                }
            		
              ]
            }
          );
          if (!isPast) {
            return Promise.reject(infoMessage || '???????????????');
          }
          return Promise.resolve();
        }
      }
    ],
  }
};