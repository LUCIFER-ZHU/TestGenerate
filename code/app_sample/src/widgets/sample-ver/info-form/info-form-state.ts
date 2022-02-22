import { ControlVOBase, EditFormService, Verify, isEmpty } from '@core';
import { SampleVerService } from '@api/sample-ver/sample-ver-service';

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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','samplevername','content','sampleverid'];  
  }

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


  // 表单里没有映射实体属性的字段(srfuf除外)
  srforikey: any;
  srftempmode: any;
  srfdeid: any;
  srfsourcekey: any;
}

// 部件配置对象
export const ctrlState = {
  controlCodeName: 'Info',
  controlName: 'form',
  controlService: new EditFormService<ControlVO>(ControlVO, new SampleVerService() ),
  data: new ControlVO({}),
  appEntityCodeName: 'SampleVer',
  appDeCodeName:'SampleVer',
  appDeLogicName: '示例版本',
  appDeKeyFieldName: 'SampleVerId',
  appDeMajorFieldName: 'SampleVerName',
  enableAutoSave: false,
  errorMessage: [],
  //  新建默认值
  createDefaultItems: [
  ],
  //  更新默认值
  updateDefaultItems: [
  ],
  detailsModel: {
    formpage1: {
      caption: '基本信息',
      name: 'formpage1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMPAGE',
      showCaption: false,
    },
    group1: {
      caption: '示例版本基本信息',
      name: 'group1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    samplevername: {
      caption: '标题',
      name: 'samplevername',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: false,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    content: {
      caption: '内容',
      name: 'content',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: false,
      valueFormat: '',
      dataType: '21',
      required: false,
      enableCond: 3,
    },
  },
  actionModel: {
  },
  rules: {
  },
};