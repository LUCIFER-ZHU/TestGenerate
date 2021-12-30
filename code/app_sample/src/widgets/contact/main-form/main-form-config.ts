import { ControlVOBase, verifyRules } from '@ibiz-core';
import { ControlService } from './main-form-service';

export const CtrlConfig = {
  controlCodeName: 'Main',
  controlName: 'form',
  controlService: new ControlService(),
  data: {},
  itemsModel: [
{
  caption: '联系人基本信息',
  codeName: 'group1',
  name: 'group1',
},
{
  caption: '分组面板',
  codeName: 'grouppanel1',
  name: 'grouppanel1',
},
{
  caption: '头像',
  codeName: 'image',
  name: 'image',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '分组面板',
  codeName: 'grouppanel2',
  name: 'grouppanel2',
},
{
  caption: '联系人姓名',
  codeName: 'contactname',
  name: 'contactname',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '工作岗位',
  codeName: 'post',
  name: 'post',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '电话',
  codeName: 'phone',
  name: 'phone',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '手机',
  codeName: 'mobile',
  name: 'mobile',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '电子邮箱',
  codeName: 'email',
  name: 'email',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '客户标识',
  codeName: 'customerid',
  name: 'customerid',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
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
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '建立时间',
  codeName: 'createdate',
  name: 'createdate',
  dataType: '5',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '更新人',
  codeName: 'updateman',
  name: 'updateman',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '更新时间',
  codeName: 'updatedate',
  name: 'updatedate',
  dataType: '5',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
  ],
  rules: {
  },
};

/**
 * 部件展示数据对象
 * @export
 * @class ControlVO
 */
export class ControlVO extends ControlVOBase {
  // 表单里映射了属性的字段
  get srfupdatedate() {
    return this.$DO.updatedate;
  }
  set srfupdatedate(value: any) {
    this.$DO.updatedate = value;
  }

  get srfkey() {
    return this.$DO.contactid;
  }
  set srfkey(value: any) {
    this.$DO.contactid = value;
  }

  get srfmajortext() {
    return this.$DO.contactname;
  }
  set srfmajortext(value: any) {
    this.$DO.contactname = value;
  }

  get image() {
    return this.$DO.image;
  }
  set image(value: any) {
    this.$DO.image = value;
  }

  get contactname() {
    return this.$DO.contactname;
  }
  set contactname(value: any) {
    this.$DO.contactname = value;
  }

  get post() {
    return this.$DO.post;
  }
  set post(value: any) {
    this.$DO.post = value;
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

  get customerid() {
    return this.$DO.customerid;
  }
  set customerid(value: any) {
    this.$DO.customerid = value;
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

  get contactid() {
    return this.$DO.contactid;
  }
  set contactid(value: any) {
    this.$DO.contactid = value;
  }


  // 表单里没有映射实体属性的字段
  srforikey: any;
  srftempmode: any;
  srfuf: any;
  srfdeid: any;
  srfsourcekey: any;
}