import { ControlVOBase, EditFormService } from '@core';
import { OrgDataService } from '@api/org-data/org-data-service';

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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','orgdataname','orgdatacode','porgdataname','orgdataid','porgdataid'];  
  }

  // 表单里映射了属性的字段
  get srfupdatedate() {
    return this.$DO.updatedate;
  }
  set srfupdatedate(value: any) {
    this.$DO.updatedate = value;
  }

  get srfkey() {
    return this.$DO.orgdataid;
  }
  set srfkey(value: any) {
    this.$DO.orgdataid = value;
  }

  get srfmajortext() {
    return this.$DO.orgdataname;
  }
  set srfmajortext(value: any) {
    this.$DO.orgdataname = value;
  }

  get orgdataname() {
    return this.$DO.orgdataname;
  }
  set orgdataname(value: any) {
    this.$DO.orgdataname = value;
  }

  get orgdatacode() {
    return this.$DO.orgdatacode;
  }
  set orgdatacode(value: any) {
    this.$DO.orgdatacode = value;
  }

  get porgdataname() {
    return this.$DO.porgdataname;
  }
  set porgdataname(value: any) {
    this.$DO.porgdataname = value;
  }

  get orgdataid() {
    return this.$DO.orgdataid;
  }
  set orgdataid(value: any) {
    this.$DO.orgdataid = value;
  }

  get porgdataid() {
    return this.$DO.porgdataid;
  }
  set porgdataid(value: any) {
    this.$DO.porgdataid = value;
  }


  // 表单里没有映射实体属性的字段(srfuf除外)
  srforikey: any;
  srftempmode: any;
  srfdeid: any;
  srfsourcekey: any;
}

// 部件配置对象
export const ctrlState = {
  controlCodeName: 'Main',
  controlName: 'form',
  controlService: new EditFormService<ControlVO>(ControlVO, new OrgDataService() ),
  data: new ControlVO({}),
  appDeKeyFieldName: 'OrgDataId',
  appDeMajorFieldName: 'OrgDataName',
  enableAutoSave: false,
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
      caption: '组织数据基本信息',
      name: 'group1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    orgdataname: {
      caption: '组织名称',
      name: 'orgdataname',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: true,
      enableCond: 3,
    },
    orgdatacode: {
      caption: '组织编码',
      name: 'orgdatacode',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
    },
    porgdataname: {
      caption: '父级组织',
      name: 'porgdataname',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
      valueItemName: 'porgdataid',
    },
  },
  actionModel: {
  },
  rules: {
  },
};