import { ControlVOBase, IParam, GridService } from '@core';
import { ProductCategoryService } from '@api/product-category/product-category-service';

export class ControlVO extends ControlVOBase {
  
  constructor(data: any){
    super(data);
  }

  get categoryid() {
    return this.$DO.categoryid;
  }
  set categoryid(value: any) {
    this.$DO.categoryid = value;
  }

  get productid() {
    return this.$DO.productid;
  }
  set productid(value: any) {
    this.$DO.productid = value;
  }

  get categoryname() {
    return this.$DO.categoryname;
  }
  set categoryname(value: any) {
    this.$DO.categoryname = value;
  }

  get srfmajortext() {
    return this.$DO.productcategoryname;
  }
  set srfmajortext(value: any) {
    this.$DO.productcategoryname = value;
  }

  get srfdataaccaction() {
    return this.$DO.productcategoryid;
  }
  set srfdataaccaction(value: any) {
    this.$DO.productcategoryid = value;
  }

  get srfkey() {
    return this.$DO.productcategoryid;
  }
  set srfkey(value: any) {
    this.$DO.productcategoryid = value;
  }

  get productname() {
    return this.$DO.productname;
  }
  set productname(value: any) {
    this.$DO.productname = value;
  }

}

export const ctrlState = {
  controlCodeName: 'Main',
  controlName: 'grid',
  appEntityCodeName:'ProductCategory',
  controlService: new GridService<ControlVO>(ControlVO, new ProductCategoryService() ),
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
      title: "产品",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "productname",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
    {
      title: "类别",
      columnType: "DEFGRIDCOLUMN",
      align: "left",
      width: 100,
      resizable: true,
      dataIndex: "categoryname",
      ellipsis: true,
      enableSort: true,
      aggMode: "NONE",
    },
  ],
};