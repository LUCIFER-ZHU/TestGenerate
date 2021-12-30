import { ControlVOBase, verifyRules } from '@ibiz-core';
import { ControlService } from './info-form-service';

export const CtrlConfig = {
  controlCodeName: 'Info',
  controlName: 'form',
  controlService: new ControlService(),
  data: {},
  itemsModel: [
{
  caption: '地图示例数据基本信息',
  codeName: 'group1',
  name: 'group1',
},
{
  caption: '名称',
  codeName: 'mapdataname',
  name: 'mapdataname',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '编码',
  codeName: 'mapdatacode',
  name: 'mapdatacode',
  dataType: '9',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '经度',
  codeName: 'longitude',
  name: 'longitude',
  dataType: '6',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '纬度',
  codeName: 'latitude',
  name: 'latitude',
  dataType: '6',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '排序值',
  codeName: 'sortvalue',
  name: 'sortvalue',
  dataType: '9',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '分组',
  codeName: 'grouping',
  name: 'grouping',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '类型',
  codeName: 'type',
  name: 'type',
  dataType: '25',
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
    return this.$DO.mapdataid;
  }
  set srfkey(value: any) {
    this.$DO.mapdataid = value;
  }

  get srfmajortext() {
    return this.$DO.mapdataname;
  }
  set srfmajortext(value: any) {
    this.$DO.mapdataname = value;
  }

  get mapdataname() {
    return this.$DO.mapdataname;
  }
  set mapdataname(value: any) {
    this.$DO.mapdataname = value;
  }

  get mapdatacode() {
    return this.$DO.mapdatacode;
  }
  set mapdatacode(value: any) {
    this.$DO.mapdatacode = value;
  }

  get longitude() {
    return this.$DO.longitude;
  }
  set longitude(value: any) {
    this.$DO.longitude = value;
  }

  get latitude() {
    return this.$DO.latitude;
  }
  set latitude(value: any) {
    this.$DO.latitude = value;
  }

  get sortvalue() {
    return this.$DO.sortvalue;
  }
  set sortvalue(value: any) {
    this.$DO.sortvalue = value;
  }

  get grouping() {
    return this.$DO.grouping;
  }
  set grouping(value: any) {
    this.$DO.grouping = value;
  }

  get type() {
    return this.$DO.type;
  }
  set type(value: any) {
    this.$DO.type = value;
  }

  get mapdataid() {
    return this.$DO.mapdataid;
  }
  set mapdataid(value: any) {
    this.$DO.mapdataid = value;
  }


  // 表单里没有映射实体属性的字段
  srforikey: any;
  srftempmode: any;
  srfuf: any;
  srfdeid: any;
  srfsourcekey: any;
}