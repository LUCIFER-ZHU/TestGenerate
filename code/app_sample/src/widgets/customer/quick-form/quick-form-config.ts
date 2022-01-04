import { ControlVOBase, verifyRules, EditFormService } from '@ibiz-core';
import { CustomerService } from '@service/entity/customer/customer-service';

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
export const CtrlConfig = {
  controlCodeName: 'Quick',
  controlName: 'form',
  controlService: new EditFormService<ControlVO>(ControlVO, new CustomerService() ),
  data: new ControlVO({}),
  formDetails: [
    {
      caption: '快速新建',
      codeName: 'group1',
      name: 'group1',
    },
    {
      caption: '客户名称',
      codeName: 'customername',
      name: 'customername',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '上级客户',
      codeName: 'pcustomername',
      name: 'pcustomername',
      dataType: '25',
      detailStyle: 'DEFAULT',
      valueItemName: 'pcustomerid',
    },
    {
      caption: '类型',
      codeName: 'type',
      name: 'type',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '备注',
      codeName: 'memo',
      name: 'memo',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
  ],
  rules: {
  },
};