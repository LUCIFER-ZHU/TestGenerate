import { ControlVOBase, verifyRules } from '@ibiz-core';
import { ControlService } from './main-form-service';

export const CtrlConfig = {
  controlCodeName: 'Main',
  controlName: 'form',
  controlService: new ControlService(),
  data: {},
  itemsModel: [
{
  caption: '看板数据基本信息',
  codeName: 'group1',
  name: 'group1',
},
{
  caption: '任务名称',
  codeName: 'kanbandataname',
  name: 'kanbandataname',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '任务状态',
  codeName: 'taskstatus',
  name: 'taskstatus',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '开始时间',
  codeName: 'begintime',
  name: 'begintime',
  dataType: '5',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '结束时间',
  codeName: 'endtime',
  name: 'endtime',
  dataType: '5',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '备注',
  codeName: 'memo',
  name: 'memo',
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
    return this.$DO.kanbandataid;
  }
  set srfkey(value: any) {
    this.$DO.kanbandataid = value;
  }

  get srfmajortext() {
    return this.$DO.kanbandataname;
  }
  set srfmajortext(value: any) {
    this.$DO.kanbandataname = value;
  }

  get kanbandataname() {
    return this.$DO.kanbandataname;
  }
  set kanbandataname(value: any) {
    this.$DO.kanbandataname = value;
  }

  get taskstatus() {
    return this.$DO.taskstatus;
  }
  set taskstatus(value: any) {
    this.$DO.taskstatus = value;
  }

  get begintime() {
    return this.$DO.begintime;
  }
  set begintime(value: any) {
    this.$DO.begintime = value;
  }

  get endtime() {
    return this.$DO.endtime;
  }
  set endtime(value: any) {
    this.$DO.endtime = value;
  }

  get memo() {
    return this.$DO.memo;
  }
  set memo(value: any) {
    this.$DO.memo = value;
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

  get kanbandataid() {
    return this.$DO.kanbandataid;
  }
  set kanbandataid(value: any) {
    this.$DO.kanbandataid = value;
  }


  // 表单里没有映射实体属性的字段
  srforikey: any;
  srftempmode: any;
  srfuf: any;
  srfdeid: any;
  srfsourcekey: any;
}