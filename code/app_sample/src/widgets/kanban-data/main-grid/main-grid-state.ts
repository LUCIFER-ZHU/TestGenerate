import { ControlVOBase, IParam, GridService } from '@core';
import { KanbanDataService } from '@api/kanban-data/kanban-data-service';

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

  get taskstatus() {
    return this.$DO.taskstatus;
  }
  set taskstatus(value: any) {
    this.$DO.taskstatus = value;
  }

  get kanbandataname() {
    return this.$DO.kanbandataname;
  }
  set kanbandataname(value: any) {
    this.$DO.kanbandataname = value;
  }

  get srfmajortext() {
    return this.$DO.kanbandataname;
  }
  set srfmajortext(value: any) {
    this.$DO.kanbandataname = value;
  }

  get srfdataaccaction() {
    return this.$DO.kanbandataid;
  }
  set srfdataaccaction(value: any) {
    this.$DO.kanbandataid = value;
  }

  get srfkey() {
    return this.$DO.kanbandataid;
  }
  set srfkey(value: any) {
    this.$DO.kanbandataid = value;
  }

}

export const ctrlState = {
  controlCodeName: 'Main',
  controlName: 'grid',
  appEntityCodeName:'KanbanData',
  controlService: new GridService<ControlVO>(ControlVO, new KanbanDataService() ),
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
      title: "任务名称",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 1,
      resizable: true,
      dataIndex: "kanbandataname",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "任务状态",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "taskstatus",
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