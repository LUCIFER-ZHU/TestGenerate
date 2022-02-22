import { ControlVOBase, IParam, GridService, isEmpty, Verify } from '@core';
import { ChartDataService } from '@api/chart-data/chart-data-service';

export class ControlVO extends ControlVOBase {
  
  constructor(data: any){
    super(data);
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
  controlCodeName: 'Main_2',
  controlName: 'grid',
  totalColumnWidth: 1260,
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
    uagridcolumn1: [
      { name: "u953df17", caption: "移动端编辑", showIcon: true, showCaption: true, separator: false, uIActionTag: "MobEdit", noPrivDisplayMode: "", dataAccessAction: '', actionTarget: 'SINGLEKEY', uIActionMode: "FRONT", disabled: false, visible: true, },
      { name: "u0c7ccd3", caption: "刷新", showIcon: true, showCaption: true, separator: true, uIActionTag: "Refresh", noPrivDisplayMode: "", dataAccessAction: '', actionTarget: '', uIActionMode: "SYS", disabled: false, visible: true, iconClass: "fa fa-refresh", },
    ],
  },
  gridEditState:{
    chartdate:{},
    data:{},
    chartdataname:{},
    year:{},
    datetime:{},
    srfkey:{},
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
      dataIndex: "nian",
      ellipsis: true,
      enableSort: true,
      aggMode: "AVG",
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
      width: 200,
      resizable: true,
      dataIndex: "time",
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
      dataIndex: "person",
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
    {
      title: "操作",
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
  // 是否单选
  isSingleSelect:false,
  //  更新默认值
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
              "ruleInfo": "数值范围小于10或大于200！",
            	"keyCond": false,
              "conditions": [
                {
                  "notMode": false,
                  "condType": "VALUERANGE2",
                  "ruleInfo": "数值范围小于10或大于200！",
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
            return Promise.reject(infoMessage || '数据为空！');
          }
          return Promise.resolve();
        }
      }
    ],
  }
};