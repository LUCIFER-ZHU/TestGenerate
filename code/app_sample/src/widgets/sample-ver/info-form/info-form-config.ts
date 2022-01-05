import { ControlVOBase, verifyRules, EditFormService } from '@core';
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
export const CtrlConfig = {
  controlCodeName: 'Info',
  controlName: 'form',
  controlService: new EditFormService<ControlVO>(ControlVO, new SampleVerService() ),
  data: new ControlVO({}),
  formDetails: [
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
    },
    {
      caption: '内容',
      codeName: 'content',
      name: 'content',
      dataType: '21',
      detailStyle: 'DEFAULT',
    },
  ],
  rules: {
  },
};