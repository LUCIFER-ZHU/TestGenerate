import { ControlVOBase, verifyRules, EditFormService } from '@ibiz-core';
import { ProductService } from '@service/entity/product/product-service';

/**
 * 部件展示数据对象
 * @export
 * @class ControlVO
 */
export class ControlVO extends ControlVOBase {
  /**
   * 用后台数据对象创建部件数据对象
   * @param data 后台数据
   */
  constructor(data: any){
    super(data);
    // 记录没有映射的属性
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','productname','createman','createdate','updateman','updatedate','productid'];  
  }

  // 表单里映射了属性的字段
  get srfupdatedate() {
    return this.$DO.updatedate;
  }
  set srfupdatedate(value: any) {
    this.$DO.updatedate = value;
  }

  get srfkey() {
    return this.$DO.productid;
  }
  set srfkey(value: any) {
    this.$DO.productid = value;
  }

  get srfmajortext() {
    return this.$DO.productname;
  }
  set srfmajortext(value: any) {
    this.$DO.productname = value;
  }

  get productname() {
    return this.$DO.productname;
  }
  set productname(value: any) {
    this.$DO.productname = value;
  }

  get createman() {
    return this.$DO.createman;
  }
  set createman(value: any) {
    this.$DO.createman = value;
  }

  get createdate() {
    return this.$DO.createdate;
  }
  set createdate(value: any) {
    this.$DO.createdate = value;
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

  get productid() {
    return this.$DO.productid;
  }
  set productid(value: any) {
    this.$DO.productid = value;
  }


  // 表单里没有映射实体属性的字段(srfuf除外)
  srforikey: any;
  srftempmode: any;
  srfdeid: any;
  srfsourcekey: any;
}

// 部件配置对象
export const CtrlConfig = {
  controlCodeName: 'Main',
  controlName: 'form',
  controlService: new EditFormService<ControlVO>(ControlVO, new ProductService() ),
  data: new ControlVO({}),
  formDetails: [
    {
      caption: '产品基本信息',
      codeName: 'group1',
      name: 'group1',
    },
    {
      caption: '产品名称',
      codeName: 'productname',
      name: 'productname',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '操作信息',
      codeName: 'group2',
      name: 'group2',
    },
    {
      caption: '建立人',
      codeName: 'createman',
      name: 'createman',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '建立时间',
      codeName: 'createdate',
      name: 'createdate',
      dataType: '5',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '更新人',
      codeName: 'updateman',
      name: 'updateman',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '更新时间',
      codeName: 'updatedate',
      name: 'updatedate',
      dataType: '5',
      detailStyle: 'DEFAULT',
    },
  ],
  rules: {
  },
};