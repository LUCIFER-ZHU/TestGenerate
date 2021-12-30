import { ControlVOBase, verifyRules } from '@ibiz-core';
import { ControlService } from './new-form-service';

export const CtrlConfig = {
  controlCodeName: 'New',
  controlName: 'form',
  controlService: new ControlService(),
  data: {},
  itemsModel: [
{
  caption: '日历示例数据基本信息',
  codeName: 'group1',
  name: 'group1',
},
{
  caption: '事项',
  codeName: 'calendardataname',
  name: 'calendardataname',
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
    return this.$DO.calendardataid;
  }
  set srfkey(value: any) {
    this.$DO.calendardataid = value;
  }

  get srfmajortext() {
    return this.$DO.calendardataname;
  }
  set srfmajortext(value: any) {
    this.$DO.calendardataname = value;
  }

  get calendardataname() {
    return this.$DO.calendardataname;
  }
  set calendardataname(value: any) {
    this.$DO.calendardataname = value;
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

  get calendardataid() {
    return this.$DO.calendardataid;
  }
  set calendardataid(value: any) {
    this.$DO.calendardataid = value;
  }


  // 表单里没有映射实体属性的字段
  srforikey: any;
  srftempmode: any;
  srfuf: any;
  srfdeid: any;
  srfsourcekey: any;
}