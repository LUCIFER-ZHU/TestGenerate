import { ControlVOBase, IParam, GridService } from '@core';
import { MapDataService } from '@api/map-data/map-data-service';

export class ControlVO extends ControlVOBase {
  
  constructor(data: any){
    super(data);
  }

  get grouping() {
    return this.$DO.grouping;
  }
  set grouping(value: any) {
    this.$DO.grouping = value;
  }

  get longitude() {
    return this.$DO.longitude;
  }
  set longitude(value: any) {
    this.$DO.longitude = value;
  }

  get latitude() {
    return this.$DO.latitude;
  }
  set latitude(value: any) {
    this.$DO.latitude = value;
  }

  get mapdataname() {
    return this.$DO.mapdataname;
  }
  set mapdataname(value: any) {
    this.$DO.mapdataname = value;
  }

  get type() {
    return this.$DO.type;
  }
  set type(value: any) {
    this.$DO.type = value;
  }

  get sortvalue() {
    return this.$DO.sortvalue;
  }
  set sortvalue(value: any) {
    this.$DO.sortvalue = value;
  }

  get srfmajortext() {
    return this.$DO.mapdataname;
  }
  set srfmajortext(value: any) {
    this.$DO.mapdataname = value;
  }

  get srfdataaccaction() {
    return this.$DO.mapdataid;
  }
  set srfdataaccaction(value: any) {
    this.$DO.mapdataid = value;
  }

  get srfkey() {
    return this.$DO.mapdataid;
  }
  set srfkey(value: any) {
    this.$DO.mapdataid = value;
  }

}

export const ctrlState = {
  controlCodeName: 'Main',
  controlName: 'grid',
  appEntityCodeName:'MapData',
  controlService: new GridService<ControlVO>(ControlVO, new MapDataService() ),
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
      title: "名称",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 1,
      resizable: true,
      dataIndex: "mapdataname",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "排序值",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "sortvalue",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "分组",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "grouping",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "类型",
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
      title: "经度",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "longitude",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "纬度",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "latitude",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
  ],
};