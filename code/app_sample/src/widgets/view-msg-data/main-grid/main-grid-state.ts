import { ControlVOBase, IParam, GridService, isEmpty, Verify } from '@core';
import { ViewMsgDataService } from '@api/view-msg-data/view-msg-data-service';

export class ControlVO extends ControlVOBase {
  
  constructor(data: any){
    super(data);
  }
  get content() {
    return this.$DO.content;
  }
  set content(value: any) {
    this.$DO.content = value;
  }
  get location() {
    return this.$DO.location;
  }
  set location(value: any) {
    this.$DO.location = value;
  }
  get viewmsgdataname() {
    return this.$DO.viewmsgdataname;
  }
  set viewmsgdataname(value: any) {
    this.$DO.viewmsgdataname = value;
  }
  get type() {
    return this.$DO.type;
  }
  set type(value: any) {
    this.$DO.type = value;
  }
  get srfmajortext() {
    return this.$DO.viewmsgdataname;
  }
  set srfmajortext(value: any) {
    this.$DO.viewmsgdataname = value;
  }
  get srfdataaccaction() {
    return this.$DO.viewmsgdataid;
  }
  set srfdataaccaction(value: any) {
    this.$DO.viewmsgdataid = value;
  }
  get srfkey() {
    return this.$DO.viewmsgdataid;
  }
  set srfkey(value: any) {
    this.$DO.viewmsgdataid = value;
  }

}

export const ctrlState = {
  controlCodeName: 'Main',
  controlName: 'grid',
  totalColumnWidth: 461,
  selectColumnWidth: 50,
  appEntityCodeName: 'ViewMsgData',
  appDeCodeName:'ViewMsgData',
  appDeLogicName: '视图消息数据',
  appDeKeyFieldName: 'ViewMsgDataId',
  appDeMajorFieldName: 'ViewMsgDataName',
  controlService: new GridService<ControlVO>(ControlVO, new ViewMsgDataService() ),
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
      title: "视图消息标题",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "viewmsgdataname",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "视图消息内容",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      resizable: true,
      dataIndex: "content",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "视图消息类型",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "type",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "视图消息位置",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "location",
      ellipsis: true,
      enableSort: true,
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