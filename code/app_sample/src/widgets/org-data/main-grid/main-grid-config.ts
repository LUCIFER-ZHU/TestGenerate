import { ControlVOBase, IParam, GridService } from '@ibiz-core';
import { OrgDataService } from '@service/entity/org-data/org-data-service';

export class ControlVO extends ControlVOBase {
  
  constructor(data: any){
    super(data);
  }

  get porgdataname() {
    return this.$DO.porgdataname;
  }
  set porgdataname(value: any) {
    this.$DO.porgdataname = value;
  }

  get orgdataname() {
    return this.$DO.orgdataname;
  }
  set orgdataname(value: any) {
    this.$DO.orgdataname = value;
  }

  get porgdataid() {
    return this.$DO.porgdataid;
  }
  set porgdataid(value: any) {
    this.$DO.porgdataid = value;
  }

  get orgdatacode() {
    return this.$DO.orgdatacode;
  }
  set orgdatacode(value: any) {
    this.$DO.orgdatacode = value;
  }

  get srfmajortext() {
    return this.$DO.orgdataname;
  }
  set srfmajortext(value: any) {
    this.$DO.orgdataname = value;
  }

  get srfdataaccaction() {
    return this.$DO.orgdataid;
  }
  set srfdataaccaction(value: any) {
    this.$DO.orgdataid = value;
  }

  get srfkey() {
    return this.$DO.orgdataid;
  }
  set srfkey(value: any) {
    this.$DO.orgdataid = value;
  }

}

export const CtrlConfig = {
  controlCodeName: "Main",
  controlName: "grid",
  controlService: new GridService<ControlVO>(ControlVO, new OrgDataService() ),
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
      title: "组织名称",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 200,
      resizable: true,
      dataIndex: "orgdataname",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "组织编码",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 200,
      resizable: true,
      dataIndex: "orgdatacode",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "父级组织",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 200,
      resizable: true,
      dataIndex: "porgdataname",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
  ],
};