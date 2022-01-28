import { ControlVOBase, IParam, GridService } from '@core';
import { WizardDataService } from '@api/wizard-data/wizard-data-service';

export class ControlVO extends ControlVOBase {
  
  constructor(data: any){
    super(data);
  }

  get timefield() {
    return this.$DO.timefield;
  }
  set timefield(value: any) {
    this.$DO.timefield = value;
  }

  get textfield() {
    return this.$DO.textfield;
  }
  set textfield(value: any) {
    this.$DO.textfield = value;
  }

  get numfield() {
    return this.$DO.numfield;
  }
  set numfield(value: any) {
    this.$DO.numfield = value;
  }

  get srfnextform() {
    return this.$DO.srfnextform;
  }
  set srfnextform(value: any) {
    this.$DO.srfnextform = value;
  }

  get srfmajortext() {
    return this.$DO.wizarddataname;
  }
  set srfmajortext(value: any) {
    this.$DO.wizarddataname = value;
  }

  get srfdataaccaction() {
    return this.$DO.wizarddataid;
  }
  set srfdataaccaction(value: any) {
    this.$DO.wizarddataid = value;
  }

  get srfkey() {
    return this.$DO.wizarddataid;
  }
  set srfkey(value: any) {
    this.$DO.wizarddataid = value;
  }

}

export const ctrlState = {
  controlCodeName: 'Main',
  controlName: 'grid',
  appEntityCodeName:'WizardData',
  controlService: new GridService<ControlVO>(ControlVO, new WizardDataService() ),
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
  uAColumnModel:[
  ],
  gridEditState:{
    srfkey:{},
  },
  columnsModel: [
    {
      title: "文本属性",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 200,
      resizable: true,
      dataIndex: "textfield",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "时间属性",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 200,
      resizable: true,
      dataIndex: "timefield",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "数值属性",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 200,
      resizable: true,
      dataIndex: "numfield",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "下一步表单",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 1,
      resizable: true,
      dataIndex: "srfnextform",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
  ],
  // 是否单选
  isSingleSelect:false,
  rules:{
  }
};