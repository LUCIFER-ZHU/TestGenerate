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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','examplename','createman','createdate','updateman','updatedate','exampleid'];  
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

  get examplename() {
    return this.$DO.examplename;
  }
  set examplename(value: any) {
    this.$DO.examplename = value;
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
}

// 部件配置对象
export const CtrlConfig = {
  controlCodeName: 'Simple',
  controlName: 'form',
  controlService: new EditFormService<ControlVO>(ControlVO, new ExampleService() ),
  data: new ControlVO({}),
  formDetails: [
    {
      caption: '示例基本信息',
      codeName: 'group1',
      name: 'group1',
    },
    {
      caption: '名称',
      codeName: 'examplename',
      name: 'examplename',
      dataType: '25',
      detailStyle: 'DEFAULT',
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
    },
    {
      caption: '建立时间',
      codeName: 'createdate',
      name: 'createdate',
      dataType: '5',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '更新人',
      codeName: 'updateman',
      name: 'updateman',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '更新时间',
      codeName: 'updatedate',
      name: 'updatedate',
      dataType: '5',
      detailStyle: 'DEFAULT',
    },
  ],
  rules: {
  },
};