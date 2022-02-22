import { ControlVOBase, IParam, GridService, isEmpty, Verify } from '@core';
import { CityService } from '@api/city/city-service';

export class ControlVO extends ControlVOBase {
  
  constructor(data: any){
    super(data);
  }
  get provincename() {
    return this.$DO.provincename;
  }
  set provincename(value: any) {
    this.$DO.provincename = value;
  }
  get updateman() {
    return this.$DO.updateman;
  }
  set updateman(value: any) {
    this.$DO.updateman = value;
  }
  get provinceid() {
    return this.$DO.provinceid;
  }
  set provinceid(value: any) {
    this.$DO.provinceid = value;
  }
  get local() {
    return this.$DO.local;
  }
  set local(value: any) {
    this.$DO.local = value;
  }
  get cityname() {
    return this.$DO.cityname;
  }
  set cityname(value: any) {
    this.$DO.cityname = value;
  }
  get updatedate() {
    return this.$DO.updatedate;
  }
  set updatedate(value: any) {
    this.$DO.updatedate = value;
  }
  get srfmajortext() {
    return this.$DO.cityname;
  }
  set srfmajortext(value: any) {
    this.$DO.cityname = value;
  }
  get srfdataaccaction() {
    return this.$DO.cityid;
  }
  set srfdataaccaction(value: any) {
    this.$DO.cityid = value;
  }
  get srfkey() {
    return this.$DO.cityid;
  }
  set srfkey(value: any) {
    this.$DO.cityid = value;
  }

}

export const ctrlState = {
  controlCodeName: 'Main_2',
  controlName: 'grid',
  totalColumnWidth: 760,
  selectColumnWidth: 50,
  appEntityCodeName: 'City',
  appDeCodeName:'City',
  appDeLogicName: '市',
  appDeKeyFieldName: 'CityId',
  appDeMajorFieldName: 'CityName',
  controlService: new GridService<ControlVO>(ControlVO, new CityService() ),
  //  新建默认值
  createDefaultItems: [
  ],
  items: [],
  selectedRowKeys: [],
  // 多数据部件分组
  mdCtrlGroup: {
    enableGroup: true,
    groupMode: "AUTO",
    groupField: "provinceid",
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
      title: "分组",
      align: "left",
      columnType: "GROUP",
      width: 100,
      resizable: true,
      ellipsis: true,
      dataIndex: "grid_group",
    },
    {
      title: "市名称",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "cityname",
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
      dataIndex: "updateman",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "本地标识",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "local",
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
      title: "省份标识",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "provinceid",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "省份名称",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "provincename",
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
  ],
  rules:{
  }
};