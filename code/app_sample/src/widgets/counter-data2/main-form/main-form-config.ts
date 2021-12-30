import { ControlVOBase, verifyRules } from '@ibiz-core';
import { ControlService } from './main-form-service';

export const CtrlConfig = {
  controlCodeName: 'Main',
  controlName: 'form',
  controlService: new ControlService(),
  data: {},
  itemsModel: [
{
  caption: '计算器数据2基本信息',
  codeName: 'group1',
  name: 'group1',
},
{
  caption: '计数1',
  codeName: 'countertag',
  name: 'countertag',
  dataType: '9',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '计数2',
  codeName: 'countertag2',
  name: 'countertag2',
  dataType: '9',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '计数3',
  codeName: 'countertag3',
  name: 'countertag3',
  dataType: '9',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '计数4',
  codeName: 'countertag4',
  name: 'countertag4',
  dataType: '9',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '计数5',
  codeName: 'countertag5',
  name: 'countertag5',
  dataType: '9',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '计数6',
  codeName: 'countertag6',
  name: 'countertag6',
  dataType: '9',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '计数7',
  codeName: 'countertag7',
  name: 'countertag7',
  dataType: '9',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '计数8',
  codeName: 'countertag8',
  name: 'countertag8',
  dataType: '9',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '计数9',
  codeName: 'countertag9',
  name: 'countertag9',
  dataType: '9',
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
    return this.$DO.counterdata2id;
  }
  set srfkey(value: any) {
    this.$DO.counterdata2id = value;
  }

  get srfmajortext() {
    return this.$DO.counterdata2name;
  }
  set srfmajortext(value: any) {
    this.$DO.counterdata2name = value;
  }

  get countertag() {
    return this.$DO.countertag;
  }
  set countertag(value: any) {
    this.$DO.countertag = value;
  }

  get countertag2() {
    return this.$DO.countertag2;
  }
  set countertag2(value: any) {
    this.$DO.countertag2 = value;
  }

  get countertag3() {
    return this.$DO.countertag3;
  }
  set countertag3(value: any) {
    this.$DO.countertag3 = value;
  }

  get countertag4() {
    return this.$DO.countertag4;
  }
  set countertag4(value: any) {
    this.$DO.countertag4 = value;
  }

  get countertag5() {
    return this.$DO.countertag5;
  }
  set countertag5(value: any) {
    this.$DO.countertag5 = value;
  }

  get countertag6() {
    return this.$DO.countertag6;
  }
  set countertag6(value: any) {
    this.$DO.countertag6 = value;
  }

  get countertag7() {
    return this.$DO.countertag7;
  }
  set countertag7(value: any) {
    this.$DO.countertag7 = value;
  }

  get countertag8() {
    return this.$DO.countertag8;
  }
  set countertag8(value: any) {
    this.$DO.countertag8 = value;
  }

  get countertag9() {
    return this.$DO.countertag9;
  }
  set countertag9(value: any) {
    this.$DO.countertag9 = value;
  }

  get counterdata2id() {
    return this.$DO.counterdata2id;
  }
  set counterdata2id(value: any) {
    this.$DO.counterdata2id = value;
  }


  // 表单里没有映射实体属性的字段
  srforikey: any;
  srftempmode: any;
  srfuf: any;
  srfdeid: any;
  srfsourcekey: any;
}