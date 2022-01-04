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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','customername','type','image','pcustomername','provincename','cityname','districtname','street','taxno','phone','mobile','email','website','cityid','provinceid','districtid','memo','customerid'];  
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

  get type() {
    return this.$DO.type;
  }
  set type(value: any) {
    this.$DO.type = value;
  }

  get image() {
    return this.$DO.image;
  }
  set image(value: any) {
    this.$DO.image = value;
  }

  get pcustomername() {
    return this.$DO.pcustomername;
  }
  set pcustomername(value: any) {
    this.$DO.pcustomername = value;
  }

  get provincename() {
    return this.$DO.provincename;
  }
  set provincename(value: any) {
    this.$DO.provincename = value;
  }

  get cityname() {
    return this.$DO.cityname;
  }
  set cityname(value: any) {
    this.$DO.cityname = value;
  }

  get districtname() {
    return this.$DO.districtname;
  }
  set districtname(value: any) {
    this.$DO.districtname = value;
  }

  get street() {
    return this.$DO.street;
  }
  set street(value: any) {
    this.$DO.street = value;
  }

  get taxno() {
    return this.$DO.taxno;
  }
  set taxno(value: any) {
    this.$DO.taxno = value;
  }

  get phone() {
    return this.$DO.phone;
  }
  set phone(value: any) {
    this.$DO.phone = value;
  }

  get mobile() {
    return this.$DO.mobile;
  }
  set mobile(value: any) {
    this.$DO.mobile = value;
  }

  get email() {
    return this.$DO.email;
  }
  set email(value: any) {
    this.$DO.email = value;
  }

  get website() {
    return this.$DO.website;
  }
  set website(value: any) {
    this.$DO.website = value;
  }

  get cityid() {
    return this.$DO.cityid;
  }
  set cityid(value: any) {
    this.$DO.cityid = value;
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


  // 表单里没有映射实体属性的字段(srfuf除外)
  srforikey: any;
  srftempmode: any;
  srfdeid: any;
  srfsourcekey: any;
}

// 部件配置对象
export const CtrlConfig = {
  controlCodeName: 'BaseInfo',
  controlName: 'form',
  controlService: new EditFormService<ControlVO>(ControlVO, new CustomerService() ),
  data: new ControlVO({}),
  formDetails: [
    {
      caption: '客户基本信息',
      codeName: 'group1',
      name: 'group1',
    },
    {
      caption: '头部',
      codeName: 'grouppanel2',
      name: 'grouppanel2',
    },
    {
      caption: '头部左边',
      codeName: 'grouppanel7',
      name: 'grouppanel7',
    },
    {
      caption: '',
      codeName: 'customername',
      name: 'customername',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '',
      codeName: 'type',
      name: 'type',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '头部右边',
      codeName: 'grouppanel8',
      name: 'grouppanel8',
    },
    {
      caption: '图像',
      codeName: 'image',
      name: 'image',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '中间',
      codeName: 'grouppanel3',
      name: 'grouppanel3',
    },
    {
      caption: '地址',
      codeName: 'grouppanel6',
      name: 'grouppanel6',
    },
    {
      caption: '上级客户',
      codeName: 'pcustomername',
      name: 'pcustomername',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '省市区',
      codeName: 'grouppanel1',
      name: 'grouppanel1',
    },
    {
      caption: '公司地址',
      codeName: 'provincename',
      name: 'provincename',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '市',
      codeName: 'cityname',
      name: 'cityname',
      dataType: '25',
      detailStyle: 'DEFAULT',
      resetItemName: 'provinceid',
      groupLogics: {
        name: '表单成员[cityname][表单项启用]逻辑',
        groupOP: 'AND',
        relatedDetailNames: '[provinceid]',
        logicCat: 'ITEMENABLE',
        logicType: 'GROUP',
        notMode: 'false',
        Logics: [
        {condOP: 'ISNOTNULL',dEFDName: 'provinceid',logicType: 'SINGLE',name: 'provinceid 值不为空(NotNil)',}
        ],
      }
    },
    {
      caption: '区/县',
      codeName: 'districtname',
      name: 'districtname',
      dataType: '25',
      detailStyle: 'DEFAULT',
      resetItemName: 'cityid',
      groupLogics: {
        name: '表单成员[districtname][表单项启用]逻辑',
        groupOP: 'AND',
        relatedDetailNames: '[cityid]',
        logicCat: 'ITEMENABLE',
        logicType: 'GROUP',
        notMode: 'false',
        Logics: [
        {condOP: 'ISNOTNULL',dEFDName: 'cityid',logicType: 'SINGLE',name: 'cityid 值不为空(NotNil)',}
        ],
      }
    },
    {
      caption: '',
      codeName: 'street',
      name: 'street',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '税号',
      codeName: 'taxno',
      name: 'taxno',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '联系方式',
      codeName: 'grouppanel4',
      name: 'grouppanel4',
    },
    {
      caption: '电话',
      codeName: 'phone',
      name: 'phone',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '手机',
      codeName: 'mobile',
      name: 'mobile',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '电子邮箱',
      codeName: 'email',
      name: 'email',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '网站地址',
      codeName: 'website',
      name: 'website',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '市标识',
      codeName: 'cityid',
      name: 'cityid',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '省份标识',
      codeName: 'provinceid',
      name: 'provinceid',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '区标识',
      codeName: 'districtid',
      name: 'districtid',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '',
      codeName: 'tabpanel1',
      name: 'tabpanel1',
    },
  ],
  rules: {
  },
};