import { ControlVOBase, IParam, GridService } from '@ibiz-core';
import { PersonDataService } from '@service/entity/person-data/person-data-service';

export class ControlVO extends ControlVOBase {
  
  constructor(data: any){
    super(data);
  }

  get persondataname() {
    return this.$DO.persondataname;
  }
  set persondataname(value: any) {
    this.$DO.persondataname = value;
  }

  get deptdataid() {
    return this.$DO.deptdataid;
  }
  set deptdataid(value: any) {
    this.$DO.deptdataid = value;
  }

  get orgdataid() {
    return this.$DO.orgdataid;
  }
  set orgdataid(value: any) {
    this.$DO.orgdataid = value;
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
    return this.$DO.persondataname;
  }
  set srfmajortext(value: any) {
    this.$DO.persondataname = value;
  }

  get srfdataaccaction() {
    return this.$DO.persondataid;
  }
  set srfdataaccaction(value: any) {
    this.$DO.persondataid = value;
  }

  get srfkey() {
    return this.$DO.persondataid;
  }
  set srfkey(value: any) {
    this.$DO.persondataid = value;
  }

}

export const CtrlConfig = {
  controlCodeName: "Main",
  controlName: "grid",
  controlService: new GridService<ControlVO>(ControlVO, new PersonDataService() ),
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
      title: "姓名",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 150,
      resizable: true,
      dataIndex: "persondataname",
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