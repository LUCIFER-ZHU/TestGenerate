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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','wd','exampleid'];  
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
  wd: any;
}

// 部件配置对象
export const CtrlConfig = {
  controlCodeName: 'UIAction',
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