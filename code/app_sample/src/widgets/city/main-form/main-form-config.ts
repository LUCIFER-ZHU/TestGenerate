import { ControlVOBase, verifyRules } from '@ibiz-core';
import { ControlService } from './main-form-service';

export const CtrlConfig = {
  controlCodeName: 'Main',
  controlName: 'form',
  controlService: new ControlService(),
  data: {},
  itemsModel: [
{
  caption: '市基本信息',
  codeName: 'group1',
  name: 'group1',
},
{
  caption: '市名称',
  codeName: 'cityname',
  name: 'cityname',
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
    return this.$DO.cityid;
  }
  set srfkey(value: any) {
    this.$DO.cityid = value;
  }

  get srfmajortext() {
    return this.$DO.cityname;
  }
  set srfmajortext(value: any) {
    this.$DO.cityname = value;
  }

  get cityname() {
    return this.$DO.cityname;
  }
  set cityname(value: any) {
    this.$DO.cityname = value;
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

  get cityid() {
    return this.$DO.cityid;
  }
  set cityid(value: any) {
    this.$DO.cityid = value;
  }


  // 表单里没有映射实体属性的字段
  srforikey: any;
  srftempmode: any;
  srfuf: any;
  srfdeid: any;
  srfsourcekey: any;
}