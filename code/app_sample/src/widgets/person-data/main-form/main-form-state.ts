import { ControlVOBase, EditFormService } from '@core';
import { PersonDataService } from '@api/person-data/person-data-service';

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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','persondataname','orgdataname','deptdataname','idcard','gender','age','orgdataid','deptdataid','avatar','persondataid'];  
  }

  // 表单里映射了属性的字段
  get srfupdatedate() {
    return this.$DO.updatedate;
  }
  set srfupdatedate(value: any) {
    this.$DO.updatedate = value;
  }

  get srfkey() {
    return this.$DO.persondataid;
  }
  set srfkey(value: any) {
    this.$DO.persondataid = value;
  }

  get srfmajortext() {
    return this.$DO.persondataname;
  }
  set srfmajortext(value: any) {
    this.$DO.persondataname = value;
  }

  get persondataname() {
    return this.$DO.persondataname;
  }
  set persondataname(value: any) {
    this.$DO.persondataname = value;
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

  get idcard() {
    return this.$DO.idcard;
  }
  set idcard(value: any) {
    this.$DO.idcard = value;
  }

  get gender() {
    return this.$DO.gender;
  }
  set gender(value: any) {
    this.$DO.gender = value;
  }

  get age() {
    return this.$DO.age;
  }
  set age(value: any) {
    this.$DO.age = value;
  }

  get orgdataid() {
    return this.$DO.orgdataid;
  }
  set orgdataid(value: any) {
    this.$DO.orgdataid = value;
  }

  get deptdataid() {
    return this.$DO.deptdataid;
  }
  set deptdataid(value: any) {
    this.$DO.deptdataid = value;
  }

  get avatar() {
    return this.$DO.avatar;
  }
  set avatar(value: any) {
    this.$DO.avatar = value;
  }

  get persondataid() {
    return this.$DO.persondataid;
  }
  set persondataid(value: any) {
    this.$DO.persondataid = value;
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
  controlService: new EditFormService<ControlVO>(ControlVO, new PersonDataService() ),
  data: new ControlVO({}),
  appDeKeyFieldName: 'PersonDataId',
  appDeMajorFieldName: 'PersonDataName',
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
      caption: '人员数据基本信息',
      name: 'group1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    grouppanel1: {
      caption: '分组面板',
      name: 'grouppanel1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: false,
    },
    persondataname: {
      caption: '姓名',
      name: 'persondataname',
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
      required: false,
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
      required: false,
      enableCond: 3,
      valueItemName: 'deptdataid',
    },
    idcard: {
      caption: '身份证',
      name: 'idcard',
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
    gender: {
      caption: '性别',
      name: 'gender',
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
    age: {
      caption: '年龄',
      name: 'age',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '9',
      required: false,
      enableCond: 3,
    },
    orgdataid: {
      caption: '组织数据标识',
      name: 'orgdataid',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
      createDVT: "CONTEXT",
      createDV: "orgdataid",
    },
    deptdataid: {
      caption: '部门数据标识',
      name: 'deptdataid',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: '',
      dataType: '25',
      required: false,
      enableCond: 3,
      createDVT: "CONTEXT",
      createDV: "deptdataid",
    },
    avatar: {
      caption: '头像',
      name: 'avatar',
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
  },
  actionModel: {
  },
  rules: {
  },
};