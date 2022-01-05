import { ControlVOBase, IParam, GridService } from '@core';
import { ExampleService } from '@api/example/example-service';

export class ControlVO extends ControlVOBase {
  
  constructor(data: any){
    super(data);
  }

  get fieldz() {
    return this.$DO.fieldz;
  }
  set fieldz(value: any) {
    this.$DO.fieldz = value;
  }

  get fieldx() {
    return this.$DO.fieldx;
  }
  set fieldx(value: any) {
    this.$DO.fieldx = value;
  }

  get fieldy() {
    return this.$DO.fieldy;
  }
  set fieldy(value: any) {
    this.$DO.fieldy = value;
  }

  get provinceid() {
    return this.$DO.provinceid;
  }
  set provinceid(value: any) {
    this.$DO.provinceid = value;
  }

  get districtid() {
    return this.$DO.districtid;
  }
  set districtid(value: any) {
    this.$DO.districtid = value;
  }

  get srfmajortext() {
    return this.$DO.examplename;
  }
  set srfmajortext(value: any) {
    this.$DO.examplename = value;
  }

  get srfdataaccaction() {
    return this.$DO.exampleid;
  }
  set srfdataaccaction(value: any) {
    this.$DO.exampleid = value;
  }

  get srfkey() {
    return this.$DO.exampleid;
  }
  set srfkey(value: any) {
    this.$DO.exampleid = value;
  }

  get cityid() {
    return this.$DO.cityid;
  }
  set cityid(value: any) {
    this.$DO.cityid = value;
  }

}

export const CtrlConfig = {
  controlCodeName: "GirdLogic",
  controlName: "grid",
  controlService: new GridService<ControlVO>(ControlVO, new ExampleService() ),
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
      title: "X值",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "fieldx",
      ellipsis: true,
      enableSort: true,
      aggMode: "SUM",
    },
    {
      title: "Y值",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "fieldy",
      ellipsis: true,
      enableSort: true,
      aggMode: "AVG",
    },
    {
      title: "Z值",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "fieldz",
      ellipsis: true,
      enableSort: true,
      aggMode: "MAX",
    },
  ],
};