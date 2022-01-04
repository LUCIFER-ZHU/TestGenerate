import { ControlVOBase, verifyRules, EditFormService } from '@ibiz-core';
import { DistrictService } from '@service/entity/district/district-service';

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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','districtname','districtid'];  
  }

  // 表单里映射了属性的字段
  get srfupdatedate() {
    return this.$DO.updatedate;
  }
  set srfupdatedate(value: any) {
    this.$DO.updatedate = value;
  }

  get srfkey() {
    return this.$DO.districtid;
  }
  set srfkey(value: any) {
    this.$DO.districtid = value;
  }

  get srfmajortext() {
    return this.$DO.districtname;
  }
  set srfmajortext(value: any) {
    this.$DO.districtname = value;
  }

  get districtname() {
    return this.$DO.districtname;
  }
  set districtname(value: any) {
    this.$DO.districtname = value;
  }

  get districtid() {
    return this.$DO.districtid;
  }
  set districtid(value: any) {
    this.$DO.districtid = value;
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
  controlService: new EditFormService<ControlVO>(ControlVO, new DistrictService() ),
  data: new ControlVO({}),
  formDetails: [
    {
      caption: '区基本信息',
      codeName: 'group1',
      name: 'group1',
    },
    {
      caption: '区名称',
      codeName: 'districtname',
      name: 'districtname',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
  ],
  rules: {
  },
};