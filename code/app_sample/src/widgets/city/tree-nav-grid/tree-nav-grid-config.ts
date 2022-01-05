import { ControlVOBase, IParam, GridService } from '@core';
import { CityService } from '@api/city/city-service';

export class ControlVO extends ControlVOBase {
  
  constructor(data: any){
    super(data);
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

export const CtrlConfig = {
  controlCodeName: "TreeNav",
  controlName: "grid",
  controlService: new GridService<ControlVO>(ControlVO, new CityService() ),
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
};