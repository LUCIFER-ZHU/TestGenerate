import { ControlVOBase, IParam, GridService } from '@ibiz-core';
import { ViewMsgDataService } from '@service/entity/view-msg-data/view-msg-data-service';

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

export const CtrlConfig = {
  controlCodeName: "Main",
  controlName: "grid",
  controlService: new GridService<ControlVO>(ControlVO, new ViewMsgDataService() ),
  items: [],
  dataAgg: [],
  selectedRowKeys: [],
  aggMode: "NONE",
  noSort: false,
  minorSortDir: "",
  minorSortPSDEF: "",
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
  uAColumnModel:[
  ],
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
      width: 1,
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
};