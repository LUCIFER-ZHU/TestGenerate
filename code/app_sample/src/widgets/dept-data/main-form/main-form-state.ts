import { ControlVOBase, EditFormService, Verify, isEmpty } from '@core';
import { DeptDataService } from '@api/dept-data/dept-data-service';

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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','orgdataname','deptdataname','deptdataid','orgdataid'];  
  }

  // 表单里映射了属性的字段
  get srfupdatedate() {
    return this.$DO.updatedate;
  }
  set srfupdatedate(value: any) {
    this.$DO.updatedate = value;
  }

  get srfkey() {
    return this.$DO.deptdataid;
  }
  set srfkey(value: any) {
    this.$DO.deptdataid = value;
  }

  get srfmajortext() {
    return this.$DO.deptdataname;
  }
  set srfmajortext(value: any) {
    this.$DO.deptdataname = value;
  }

  get orgdataname() {
    return this.$DO.orgdataname;
  }
  set orgdataname(value: any) {
    this.$DO.orgdataname = value;
  }

  get deptdataname() {
    return this.$DO.deptdataname;
  }
  set deptdataname(value: any) {
    this.$DO.deptdataname = value;
  }

  get deptdataid() {
    return this.$DO.deptdataid;
  }
  set deptdataid(value: any) {
    this.$DO.deptdataid = value;
  }

  get orgdataid() {
    return this.$DO.orgdataid;
  }
  set orgdataid(value: any) {
    this.$DO.orgdataid = value;
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
  controlService: new EditFormService<ControlVO>(ControlVO, new DeptDataService() ),
  data: new ControlVO({}),
  appEntityCodeName: 'DeptData',
  appDeCodeName:'DeptData',
  appDeLogicName: '部门数据',
  appDeKeyFieldName: 'DeptDataId',
  appDeMajorFieldName: 'DeptDataName',
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
      caption: '部门数据基本信息',
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
      valueItemName: 'orgdataid',
    },
    deptdataname: {
      caption: '部门名称',
      name: 'deptdataname',
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
  },
  actionModel: {
  },
  rules: {
  },
};