import { ControlVOBase, IParam, GridService } from '@core';
import { ProvinceService } from '@api/province/province-service';

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

  get updatedate() {
    return this.$DO.updatedate;
  }
  set updatedate(value: any) {
    this.$DO.updatedate = value;
  }

  get srfmajortext() {
    return this.$DO.provincename;
  }
  set srfmajortext(value: any) {
    this.$DO.provincename = value;
  }

  get srfdataaccaction() {
    return this.$DO.provinceid;
  }
  set srfdataaccaction(value: any) {
    this.$DO.provinceid = value;
  }

  get srfkey() {
    return this.$DO.provinceid;
  }
  set srfkey(value: any) {
    this.$DO.provinceid = value;
  }

}

export const ctrlState = {
  controlCodeName: 'Main',
  controlName: 'grid',
  appEntityCodeName:'Province',
  controlService: new GridService<ControlVO>(ControlVO, new ProvinceService() ),
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
    noSort: true,
    minorSortDir: "DESC",
    minorSortPSDEF: "CreateDate",
  },
  // 多数据部件分页
  mdCtrlPaging: {
    enablePagingBar: false,
    current: 1,
    pageSize: 60,
    pagination: false,
  },
  gridAgg: {
    aggMode: "NONE",
    aggData: [],
  },
  uAColumnModel:[
  ],
  gridEditState:{
    srfkey:{},
  },
  columnsModel: [
    {
      title: "省份名称",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "provincename",
      ellipsis: true,
      enableSort: false,
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
      enableSort: false,
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
      enableSort: false,
      aggMode: "NONE",
    },
  ],
  // 是否单选
  isSingleSelect:false,
  rules:{
  }
};