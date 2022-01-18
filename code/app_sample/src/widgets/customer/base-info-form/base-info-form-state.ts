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
export const ctrlState = {
  controlCodeName: 'BaseInfo',
  controlName: 'form',
  controlService: new EditFormService<ControlVO>(ControlVO, new CustomerService() ),
  data: new ControlVO({}),
  appDeKeyFieldName: 'CustomerId',
  appDeMajorFieldName: 'CustomerName',
  enableAutoSave: true,
  detailsModel: {
    group1: {
      caption: '客户基本信息',
      name: 'group1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    grouppanel2: {
      caption: '头部',
      name: 'grouppanel2',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    grouppanel7: {
      caption: '头部左边',
      name: 'grouppanel7',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    customername: {
      caption: '',
      name: 'customername',
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
    type: {
      caption: '',
      name: 'type',
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
    grouppanel8: {
      caption: '头部右边',
      name: 'grouppanel8',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    image: {
      caption: '图像',
      name: 'image',
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
    grouppanel3: {
      caption: '中间',
      name: 'grouppanel3',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    grouppanel6: {
      caption: '地址',
      name: 'grouppanel6',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
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
    },
    grouppanel1: {
      caption: '省市区',
      name: 'grouppanel1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    provincename: {
      caption: '公司地址',
      name: 'provincename',
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
    cityname: {
      caption: '市',
      name: 'cityname',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: false,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
      resetItemName: 'provinceid',
      groupLogics: [
        {
          name: '表单成员[cityname][表单项启用]逻辑',
          groupOP: 'AND',
          relatedDetailNames: '[provinceid]',
          logicCat: 'ITEMENABLE',
          logicType: 'GROUP',
          notMode: 'false',
          Logics: [
          {condOP: 'ISNOTNULL',dEFDName: 'provinceid',logicType: 'SINGLE',name: 'provinceid 值不为空(NotNil)'},
          ],
        }
      ],
    },
    districtname: {
      caption: '区/县',
      name: 'districtname',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: false,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
      resetItemName: 'cityid',
      groupLogics: [
        {
          name: '表单成员[districtname][表单项启用]逻辑',
          groupOP: 'AND',
          relatedDetailNames: '[cityid]',
          logicCat: 'ITEMENABLE',
          logicType: 'GROUP',
          notMode: 'false',
          Logics: [
          {condOP: 'ISNOTNULL',dEFDName: 'cityid',logicType: 'SINGLE',name: 'cityid 值不为空(NotNil)'},
          ],
        }
      ],
    },
    street: {
      caption: '',
      name: 'street',
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
    taxno: {
      caption: '税号',
      name: 'taxno',
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
    grouppanel4: {
      caption: '联系方式',
      name: 'grouppanel4',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    phone: {
      caption: '电话',
      name: 'phone',
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
    mobile: {
      caption: '手机',
      name: 'mobile',
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
    email: {
      caption: '电子邮箱',
      name: 'email',
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
    website: {
      caption: '网站地址',
      name: 'website',
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
    cityid: {
      caption: '市标识',
      name: 'cityid',
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
    provinceid: {
      caption: '省份标识',
      name: 'provinceid',
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
    districtid: {
      caption: '区标识',
      name: 'districtid',
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
    tabpanel1: {
      caption: '',
      name: 'tabpanel1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'TABPANEL',
      showCaption: false,
    },
  },
  actionModel: {
  },
  rules: {
  },
};