import { ControlVOBase, IParam, GridService } from '@core';
import { ExampleService } from '@api/example/example-service';

export class ControlVO extends ControlVOBase {
  
  constructor(data: any){
    super(data);
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

  get defgridcolumn() {
    return this.$DO.format10;
  }
  set defgridcolumn(value: any) {
    this.$DO.format10 = value;
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

export const ctrlState = {
  controlCodeName: 'DataItem',
  controlName: 'grid',
  appEntityCodeName:'Example',
  controlService: new GridService<ControlVO>(ControlVO, new ExampleService() ),
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
      width: 200,
      resizable: true,
      dataIndex: "defgridcolumn",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
  ],
  // 是否单选
  isSingleSelect:false,
};