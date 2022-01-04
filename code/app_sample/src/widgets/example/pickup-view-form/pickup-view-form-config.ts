import { ControlVOBase, verifyRules, EditFormService } from '@ibiz-core';
import { ExampleService } from '@service/entity/example/example-service';

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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','formitem','formitem1','exampleid'];  
  }

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


  // 表单里没有映射实体属性的字段(srfuf除外)
  srforikey: any;
  srftempmode: any;
  srfdeid: any;
  srfsourcekey: any;
  formitem: any;
  formitem1: any;
}

// 部件配置对象
export const CtrlConfig = {
  controlCodeName: 'PickupView',
  controlName: 'form',
  controlService: new EditFormService<ControlVO>(ControlVO, new ExampleService() ),
  data: new ControlVO({}),
  formDetails: [
    {
      caption: '单项选择',
      codeName: 'group1',
      name: 'group1',
    },
    {
      caption: '单项选择表格视图',
      codeName: 'formitem',
      name: 'formitem',
      dataType: '25',
      detailStyle: 'DEFAULT',
      valueItemName: 'formitem1',
    },
    {
      caption: '值项',
      codeName: 'formitem1',
      name: 'formitem1',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
  ],
  rules: {
  },
};