import { ControlVOBase, IParam, GridService } from '@core';
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

export const CtrlConfig = {
  controlCodeName: "Roweditgrid",
  controlName: "grid",
  controlService: new GridService<ControlVO>(ControlVO, new ChartDataService() ),
  data: [],
  selectedRowKeys: [],
  gridAgg: {
    aggMode: "PAGE",
    aggData: [],
  },
  gridGroup: {
    enableGroup: false,
    groupMode: "NONE",
    groupField: "",
  },
  gridSort: {
    noSort: false,
    minorSortDir: "",
    minorSortPSDEF: "",
  },
  gridPaging: {
    enablePagingBar: false,
    current: 1,
    pageSize: 20,
    pagination: false,
  },
  uAColumnModel:[
  ],
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
  ],
};