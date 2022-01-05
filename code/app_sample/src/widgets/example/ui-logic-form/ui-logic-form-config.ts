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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','inputtext','exampleid','fieldx','formitem','fieldz','currentdate','fieldupdate'];  
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

  get currentdate() {
    return this.$DO.currentdate;
  }
  set currentdate(value: any) {
    this.$DO.currentdate = value;
  }


  // 表单里没有映射实体属性的字段(srfuf除外)
  srforikey: any;
  srftempmode: any;
  srfdeid: any;
  srfsourcekey: any;
  inputtext: any;
  exampleid: any;
  fieldx: any;
  formitem: any;
  fieldz: any;
  fieldupdate: any;
}

// 部件配置对象
export const CtrlConfig = {
  controlCodeName: 'UILogic',
  controlName: 'form',
  controlService: new EditFormService<ControlVO>(ControlVO, new ExampleService() ),
  data: new ControlVO({}),
  formDetails: [
    {
      caption: '',
      codeName: 'rawitem1',
      name: 'rawitem1',
    },
    {
      caption: '分组面板',
      codeName: 'grouppanel1',
      name: 'grouppanel1',
    },
    {
      caption: '输入提示',
      codeName: 'inputtext',
      name: 'inputtext',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '显示对话框',
      codeName: 'button1',
      name: 'button1',
    },
    {
      caption: '',
      codeName: 'rawitem2',
      name: 'rawitem2',
    },
    {
      caption: '分组面板',
      codeName: 'grouppanel2',
      name: 'grouppanel2',
    },
    {
      caption: '分组面板',
      codeName: 'grouppanel5',
      name: 'grouppanel5',
    },
    {
      caption: '数据主键',
      codeName: 'exampleid',
      name: 'exampleid',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '调用界面行为打开视图',
      codeName: 'button2',
      name: 'button2',
    },
    {
      caption: 'X值回显',
      codeName: 'fieldx',
      name: 'fieldx',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '分组面板',
      codeName: 'grouppanel6',
      name: 'grouppanel6',
    },
    {
      caption: '',
      codeName: 'formitem',
      name: 'formitem',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '动态设置上下文并获取数据',
      codeName: 'button4',
      name: 'button4',
    },
    {
      caption: 'Z值回显',
      codeName: 'fieldz',
      name: 'fieldz',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '当前日期',
      codeName: 'currentdate',
      name: 'currentdate',
      dataType: '5',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '',
      codeName: 'rawitem3',
      name: 'rawitem3',
    },
    {
      caption: '分组面板',
      codeName: 'grouppanel3',
      name: 'grouppanel3',
    },
    {
      caption: '更新值回显',
      codeName: 'fieldupdate',
      name: 'fieldupdate',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '调用后台更新值',
      codeName: 'button3',
      name: 'button3',
    },
  ],
  rules: {
  },
};