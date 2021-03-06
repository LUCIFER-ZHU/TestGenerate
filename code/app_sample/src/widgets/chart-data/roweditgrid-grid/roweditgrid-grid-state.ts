import { ControlVOBase, IParam, GridService, isEmpty, Verify } from '@core';
import { ChartDataService } from '@api/chart-data/chart-data-service';

export class ControlVO extends ControlVOBase {
  
  constructor(data: any){
    super(data);
  }
  get chartdate() {
    return this.$DO.chartdate;
  }
  set chartdate(value: any) {
    this.$DO.chartdate = value;
  }
  get data() {
    return this.$DO.data;
  }
  set data(value: any) {
    this.$DO.data = value;
  }
  get chartdataname() {
    return this.$DO.chartdataname;
  }
  set chartdataname(value: any) {
    this.$DO.chartdataname = value;
  }
  get updateman() {
    return this.$DO.updateman;
  }
  set updateman(value: any) {
    this.$DO.updateman = value;
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
  get updatedate() {
    return this.$DO.updatedate;
  }
  set updatedate(value: any) {
    this.$DO.updatedate = value;
  }
  get datetime() {
    return this.$DO.datetime;
  }
  set datetime(value: any) {
    this.$DO.datetime = value;
  }
  get srfmajortext() {
    return this.$DO.chartdataname;
  }
  set srfmajortext(value: any) {
    this.$DO.chartdataname = value;
  }
  get srfdataaccaction() {
    return this.$DO.chartdataid;
  }
  set srfdataaccaction(value: any) {
    this.$DO.chartdataid = value;
  }
  get srfkey() {
    return this.$DO.chartdataid;
  }
  set srfkey(value: any) {
    this.$DO.chartdataid = value;
  }

}

export const ctrlState = {
  controlCodeName: 'Roweditgrid',
  controlName: 'grid',
  totalColumnWidth: 960,
  selectColumnWidth: 100,
  appEntityCodeName: 'ChartData',
  appDeCodeName:'ChartData',
  appDeLogicName: '图表',
  appDeKeyFieldName: 'ChartDataId',
  appDeMajorFieldName: 'ChartDataName',
  controlService: new GridService<ControlVO>(ControlVO, new ChartDataService() ),
  //  新建默认值
  createDefaultItems: [
  ],
  //  数据导出
  exportItems: [
    {
      field: 'chartdataname',
      label: '图表名称',
      lanResTag: '',
      show: true
    },
    {
      field: 'chartdate',
      label: '图表时间',
      lanResTag: '',
      show: true
    },
    {
      field: 'datatype',
      codeListTag: 'Sample__DataType',
      label: '数据分类',
      lanResTag: '',
      show: true
    },
    {
      field: 'year',
      label: '年份',
      lanResTag: '',
      show: true
    },
    {
      field: 'data',
      label: '数据',
      lanResTag: '',
      show: true
    },
    {
      field: 'datetime',
      label: '数据时间',
      lanResTag: '',
      show: true
    },
    {
      field: 'updateman',
      codeListTag: 'SysOperator',
      label: '更新人',
      lanResTag: '',
      show: true
    },
    {
      field: 'updatedate',
      label: '更新时间',
      lanResTag: '',
      show: true
    }
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
    enablePagingBar: false,
    current: 1,
    pageSize: 20,
    pagination: false,
  },
  gridAgg: {
    aggMode: "PAGE",
    aggData: [],
  },
  uAColumnModel: {
  },
  gridEditState:{
    chartdate:{},
    name:{},
    year:{},
    datatype:{},
    datetime:{},
    srfkey:{},
    testData:{},
  },
  columnsModel: [
    {
      title: "图表名称",
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
      title: "图表时间",
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
      title: "数据分类",
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
      title: "年份",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "year",
      ellipsis: true,
      enableSort: true,
      aggMode: "SUM",
    },
    {
      title: "数据",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "data",
      ellipsis: true,
      enableSort: true,
      aggMode: "SUM",
    },
    {
      title: "数据时间",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "datetime",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "更新人",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
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
      width: 100,
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
    {
      updateDV: "",
      updateDVT: "CURTIME",
      property: "chartdate",
      valueFormat: "YYYY-MM-DD HH:mm:ss",
      dataType: "0"
    },
    {
      updateDV: "测试更新值",
      updateDVT: "",
      property: "name",
      valueFormat: "",
      dataType: "0"
    },
  ],
  rules:{
    testData: [
      {
        trigger: ['change', 'blur'],
        pattern: /-?\d+/,
        message:'内容必须为整数'
      },
    ],
    chartdate: [
      {
        validator: async (rule: any, value: any, callback: any, source: any) => {
          if (!source || isEmpty(source['chartdate'])) {
            return Promise.resolve();
          }
          const { isPast, infoMessage } = Verify.verifyDeRules(
            'chartdate',
            source,
            {
              "condOp": "AND",
              "notMode": false,
              "condType": "GROUP",
              "ruleInfo": "",
            	"keyCond": false,
              "conditions": [
                {
                  "condOp": "GT",
                  "notMode": false,
                  "condType": "SIMPLE",
                  "ruleInfo": "",
                	"keyCond": false,
                	"paramType": "CURTIME",
                	"paramValue": "",
                }
            		
              ]
            }
          );
          if (!isPast) {
            return Promise.reject(infoMessage || '必须大于当前时间');
          }
          return Promise.resolve();
        }
      }
    ],
  }
};