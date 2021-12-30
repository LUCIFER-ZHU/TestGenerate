import { ControlVOBase, verifyRules } from '@ibiz-core';
import { ControlService } from './info-form-service';

export const CtrlConfig = {
  controlCodeName: 'Info',
  controlName: 'form',
  controlService: new ControlService(),
  data: {},
  itemsModel: [
{
  caption: '示例版本基本信息',
  codeName: 'group1',
  name: 'group1',
},
{
  caption: '标题',
  codeName: 'samplevername',
  name: 'samplevername',
  dataType: '25',
  detailStyle: 'DEFAULT',
  resetItemName: '',
  valueItemName: '',
},
{
  caption: '内容',
  codeName: 'content',
  name: 'content',
  dataType: '21',
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
    return this.$DO.sampleverid;
  }
  set srfkey(value: any) {
    this.$DO.sampleverid = value;
  }

  get srfmajortext() {
    return this.$DO.samplevername;
  }
  set srfmajortext(value: any) {
    this.$DO.samplevername = value;
  }

  get samplevername() {
    return this.$DO.samplevername;
  }
  set samplevername(value: any) {
    this.$DO.samplevername = value;
  }

  get content() {
    return this.$DO.content;
  }
  set content(value: any) {
    this.$DO.content = value;
  }

  get sampleverid() {
    return this.$DO.sampleverid;
  }
  set sampleverid(value: any) {
    this.$DO.sampleverid = value;
  }


  // 表单里没有映射实体属性的字段
  srforikey: any;
  srftempmode: any;
  srfuf: any;
  srfdeid: any;
  srfsourcekey: any;
}