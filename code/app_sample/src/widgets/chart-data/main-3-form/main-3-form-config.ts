import { ControlVOBase, verifyRules } from '@ibiz-core';
import { ControlService } from './main-3-form-service';

export const CtrlConfig = {
  controlCodeName: 'Main_3',
  controlName: 'form',
  controlService: new ControlService(),
  data: {},
  itemsModel: [
{
  caption: '单项选择',
  codeName: 'grouppanel1',
  name: 'grouppanel1',
},
{
  caption: '单项选择表格',
  codeName: 'formitem',
  name: 'formitem',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: 'formitem1',
},
{
  caption: '值项',
  codeName: 'formitem1',
  name: 'formitem1',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '单选选择树',
  codeName: 'formitem2',
  name: 'formitem2',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: 'formitem3',
},
{
  caption: '值项',
  codeName: 'formitem3',
  name: 'formitem3',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '树导航（列表）',
  codeName: 'formitem4',
  name: 'formitem4',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: 'formitem5',
},
{
  caption: '值项',
  codeName: 'formitem5',
  name: 'formitem5',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '单项选择列表',
  codeName: 'formitem6',
  name: 'formitem6',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: 'formitem7',
},
{
  caption: '值项',
  codeName: 'formitem7',
  name: 'formitem7',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '单选卡片',
  codeName: 'formitem8',
  name: 'formitem8',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: 'formitem9',
},
{
  caption: '值项',
  codeName: 'formitem9',
  name: 'formitem9',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '树导航（卡片）',
  codeName: 'formitem10',
  name: 'formitem10',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: 'formitem11',
},
{
  caption: '值项',
  codeName: 'formitem11',
  name: 'formitem11',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '树导航（表格）',
  codeName: 'formitem12',
  name: 'formitem12',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: 'formitem13',
},
{
  caption: '值项',
  codeName: 'formitem13',
  name: 'formitem13',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '表单项a',
  codeName: 'formitem14',
  name: 'formitem14',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: 'formitem15',
  valueItemName: '',
},
{
  caption: '表单项b',
  codeName: 'formitem15',
  name: 'formitem15',
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
    return this.$DO.chartdataid;
  }
  set srfkey(value: any) {
    this.$DO.chartdataid = value;
  }

  get srfmajortext() {
    return this.$DO.chartdataname;
  }
  set srfmajortext(value: any) {
    this.$DO.chartdataname = value;
  }

  get chartdataid() {
    return this.$DO.chartdataid;
  }
  set chartdataid(value: any) {
    this.$DO.chartdataid = value;
  }


  // 表单里没有映射实体属性的字段
  srforikey: any;
  srftempmode: any;
  srfuf: any;
  srfdeid: any;
  srfsourcekey: any;
  formitem: any;
  formitem1: any;
  formitem2: any;
  formitem3: any;
  formitem4: any;
  formitem5: any;
  formitem6: any;
  formitem7: any;
  formitem8: any;
  formitem9: any;
  formitem10: any;
  formitem11: any;
  formitem12: any;
  formitem13: any;
  formitem14: any;
  formitem15: any;
}