import { ControlVOBase, EditFormService } from '@core';
import { CustomerService } from '@api/customer/customer-service';

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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','customername','pcustomername','type','memo','customerid','pcustomerid'];  
  }

  // 表单里映射了属性的字段
  get srfupdatedate() {
    return this.$DO.updatedate;
  }
  set srfupdatedate(value: any) {
    this.$DO.updatedate = value;
  }

  get srfkey() {
    return this.$DO.customerid;
  }
  set srfkey(value: any) {
    this.$DO.customerid = value;
  }

  get srfmajortext() {
    return this.$DO.customername;
  }
  set srfmajortext(value: any) {
    this.$DO.customername = value;
  }

  get customername() {
    return this.$DO.customername;
  }
  set customername(value: any) {
    this.$DO.customername = value;
  }

  get pcustomername() {
    return this.$DO.pcustomername;
  }
  set pcustomername(value: any) {
    this.$DO.pcustomername = value;
  }

  get type() {
    return this.$DO.type;
  }
  set type(value: any) {
    this.$DO.type = value;
  }

  get memo() {
    return this.$DO.memo;
  }
  set memo(value: any) {
    this.$DO.memo = value;
  }

  get customerid() {
    return this.$DO.customerid;
  }
  set customerid(value: any) {
    this.$DO.customerid = value;
  }

  get pcustomerid() {
    return this.$DO.pcustomerid;
  }
  set pcustomerid(value: any) {
    this.$DO.pcustomerid = value;
  }


  // 表单里没有映射实体属性的字段(srfuf除外)
  srforikey: any;
  srftempmode: any;
  srfdeid: any;
  srfsourcekey: any;
}

// 部件配置对象
export const ctrlState = {
  controlCodeName: 'Quick',
  controlName: 'form',
  controlService: new EditFormService<ControlVO>(ControlVO, new CustomerService() ),
  data: new ControlVO({}),
  appDeKeyFieldName: 'CustomerId',
  appDeMajorFieldName: 'CustomerName',
  enableAutoSave: false,
  detailsModel: {
    formpage1: {
      caption: '基本信息',
      name: 'formpage1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMPAGE',
      showCaption: false,
    },
    group1: {
      caption: '快速新建',
      name: 'group1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    customername: {
      caption: '客户名称',
      name: 'customername',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: true,
      enableCond: 3,
    },
    pcustomername: {
      caption: '上级客户',
      name: 'pcustomername',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
      valueItemName: 'pcustomerid',
    },
    type: {
      caption: '类型',
      name: 'type',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: true,
      enableCond: 3,
    },
    memo: {
      caption: '备注',
      name: 'memo',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
    },
  },
  actionModel: {
  },
  rules: {
  },
};