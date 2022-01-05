import { ControlVOBase, verifyRules, EditFormService } from '@core';
import { ExampleService } from '@api/example/example-service';

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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','formitem','formitem1','formitem2','exampleid'];  
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
  formitem2: any;
}

// 部件配置对象
export const CtrlConfig = {
  controlCodeName: 'NavParam',
  controlName: 'form',
  controlService: new EditFormService<ControlVO>(ControlVO, new ExampleService() ),
  data: new ControlVO({}),
  formDetails: [
    {
      caption: '树导航传参',
      codeName: 'group1',
      name: 'group1',
    },
    {
      caption: '静态参数',
      codeName: 'formitem',
      name: 'formitem',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '当前树节点id',
      codeName: 'formitem1',
      name: 'formitem1',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '当前树节点父id',
      codeName: 'formitem2',
      name: 'formitem2',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
  ],
  rules: {
  },
};