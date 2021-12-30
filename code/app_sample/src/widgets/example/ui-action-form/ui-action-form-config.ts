import { ControlVOBase, verifyRules } from '@ibiz-core';
import { ControlService } from './ui-action-form-service';

export const CtrlConfig = {
  controlCodeName: 'UIAction',
  controlName: 'form',
  controlService: new ControlService(),
  data: {},
  itemsModel: [
{
  caption: '',
  codeName: 'rawitem1',
  name: 'rawitem1',
},
{
  caption: '打开模态',
  codeName: 'group1',
  name: 'group1',
},
{
  caption: '前台界面行为（打开模态）',
  codeName: 'button1',
  name: 'button1',
},
{
  caption: '',
  codeName: 'rawitem2',
  name: 'rawitem2',
},
{
  caption: '打开顶级视图',
  codeName: 'grouppanel1',
  name: 'grouppanel1',
},
{
  caption: '前台界面行为（打开顶级视图）',
  codeName: 'button2',
  name: 'button2',
},
{
  caption: '',
  codeName: 'rawitem3',
  name: 'rawitem3',
},
{
  caption: '打开HTML页面',
  codeName: 'grouppanel2',
  name: 'grouppanel2',
},
{
  caption: '搜索',
  codeName: 'wd',
  name: 'wd',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '前台界面行为（打开HTML页面）（百度一下）',
  codeName: 'button3',
  name: 'button3',
},
{
  caption: '界面行为（后续界面行为）',
  codeName: 'grouppanel3',
  name: 'grouppanel3',
},
{
  caption: '',
  codeName: 'rawitem4',
  name: 'rawitem4',
},
{
  caption: '界面行为（后续界面行为）',
  codeName: 'button4',
  name: 'button4',
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
    return this.$DO.exampleid;
  }
  set srfkey(value: any) {
    this.$DO.exampleid = value;
  }

  get srfmajortext() {
    return this.$DO.examplename;
  }
  set srfmajortext(value: any) {
    this.$DO.examplename = value;
  }

  get exampleid() {
    return this.$DO.exampleid;
  }
  set exampleid(value: any) {
    this.$DO.exampleid = value;
  }


  // 表单里没有映射实体属性的字段
  srforikey: any;
  srftempmode: any;
  srfuf: any;
  srfdeid: any;
  srfsourcekey: any;
  wd: any;
}