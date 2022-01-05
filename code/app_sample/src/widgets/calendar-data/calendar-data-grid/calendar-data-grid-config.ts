import { ControlVOBase, IParam, GridService } from '@core';
import { CalendarDataService } from '@api/calendar-data/calendar-data-service';

export class ControlVO extends ControlVOBase {
  
  constructor(data: any){
    super(data);
  }

  get endtime() {
    return this.$DO.endtime;
  }
  set endtime(value: any) {
    this.$DO.endtime = value;
  }

  get memo() {
    return this.$DO.memo;
  }
  set memo(value: any) {
    this.$DO.memo = value;
  }

  get begintime() {
    return this.$DO.begintime;
  }
  set begintime(value: any) {
    this.$DO.begintime = value;
  }

  get calendardataname() {
    return this.$DO.calendardataname;
  }
  set calendardataname(value: any) {
    this.$DO.calendardataname = value;
  }

  get srfmajortext() {
    return this.$DO.calendardataname;
  }
  set srfmajortext(value: any) {
    this.$DO.calendardataname = value;
  }

  get srfdataaccaction() {
    return this.$DO.calendardataid;
  }
  set srfdataaccaction(value: any) {
    this.$DO.calendardataid = value;
  }

  get srfkey() {
    return this.$DO.calendardataid;
  }
  set srfkey(value: any) {
    this.$DO.calendardataid = value;
  }

}

export const CtrlConfig = {
  controlCodeName: "CalendarData",
  controlName: "grid",
  controlService: new GridService<ControlVO>(ControlVO, new CalendarDataService() ),
  data: [],
  selectedRowKeys: [],
  gridAgg: {
    aggMode: "NONE",
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
  uAColumnModel:[
  ],
  columnsModel: [
    {
      title: "事项",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 1,
      resizable: true,
      dataIndex: "calendardataname",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "开始时间",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 180,
      resizable: true,
      dataIndex: "begintime",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "结束时间",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 180,
      resizable: true,
      dataIndex: "endtime",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "备注",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 200,
      resizable: true,
      dataIndex: "memo",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
  ],
};