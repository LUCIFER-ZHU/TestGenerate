import { ControlVOBase, IParam, GridService } from '@core';
import { ActivityService } from '@api/activity/activity-service';

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

  get customerid() {
    return this.$DO.customerid;
  }
  set customerid(value: any) {
    this.$DO.customerid = value;
  }

  get begintime() {
    return this.$DO.begintime;
  }
  set begintime(value: any) {
    this.$DO.begintime = value;
  }

  get activitytype() {
    return this.$DO.activitytype;
  }
  set activitytype(value: any) {
    this.$DO.activitytype = value;
  }

  get activityname() {
    return this.$DO.activityname;
  }
  set activityname(value: any) {
    this.$DO.activityname = value;
  }

  get updatedate() {
    return this.$DO.updatedate;
  }
  set updatedate(value: any) {
    this.$DO.updatedate = value;
  }

  get srfmajortext() {
    return this.$DO.activityname;
  }
  set srfmajortext(value: any) {
    this.$DO.activityname = value;
  }

  get srfdataaccaction() {
    return this.$DO.activityid;
  }
  set srfdataaccaction(value: any) {
    this.$DO.activityid = value;
  }

  get srfkey() {
    return this.$DO.activityid;
  }
  set srfkey(value: any) {
    this.$DO.activityid = value;
  }

  get customername() {
    return this.$DO.customername;
  }
  set customername(value: any) {
    this.$DO.customername = value;
  }

}

export const ctrlState = {
  controlCodeName: 'Main',
  controlName: 'grid',
  appEntityCodeName:'Activity',
  controlService: new GridService<ControlVO>(ControlVO, new ActivityService() ),
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
      title: "活动名称",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "activityname",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "活动类型",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "activitytype",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "客户名称",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "customername",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "起始时间",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
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
      width: 100,
      resizable: true,
      dataIndex: "endtime",
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