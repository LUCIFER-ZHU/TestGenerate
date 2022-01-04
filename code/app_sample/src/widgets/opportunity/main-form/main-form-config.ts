import { ControlVOBase, verifyRules, EditFormService } from '@ibiz-core';
import { OpportunityService } from '@service/entity/opportunity/opportunity-service';

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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','opportunityname','customername','exprevenue','expendtime','priority','state','persondataname','phone','email','createman','createdate','updateman','updatedate','persondataid','customerid','opportunityid'];  
  }

  // 表单里映射了属性的字段
  get srfupdatedate() {
    return this.$DO.updatedate;
  }
  set srfupdatedate(value: any) {
    this.$DO.updatedate = value;
  }

  get srfkey() {
    return this.$DO.opportunityid;
  }
  set srfkey(value: any) {
    this.$DO.opportunityid = value;
  }

  get srfmajortext() {
    return this.$DO.opportunityname;
  }
  set srfmajortext(value: any) {
    this.$DO.opportunityname = value;
  }

  get opportunityname() {
    return this.$DO.opportunityname;
  }
  set opportunityname(value: any) {
    this.$DO.opportunityname = value;
  }

  get customername() {
    return this.$DO.customername;
  }
  set customername(value: any) {
    this.$DO.customername = value;
  }

  get exprevenue() {
    return this.$DO.exprevenue;
  }
  set exprevenue(value: any) {
    this.$DO.exprevenue = value;
  }

  get expendtime() {
    return this.$DO.expendtime;
  }
  set expendtime(value: any) {
    this.$DO.expendtime = value;
  }

  get priority() {
    return this.$DO.priority;
  }
  set priority(value: any) {
    this.$DO.priority = value;
  }

  get state() {
    return this.$DO.state;
  }
  set state(value: any) {
    this.$DO.state = value;
  }

  get persondataname() {
    return this.$DO.persondataname;
  }
  set persondataname(value: any) {
    this.$DO.persondataname = value;
  }

  get phone() {
    return this.$DO.phone;
  }
  set phone(value: any) {
    this.$DO.phone = value;
  }

  get email() {
    return this.$DO.email;
  }
  set email(value: any) {
    this.$DO.email = value;
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

  get persondataid() {
    return this.$DO.persondataid;
  }
  set persondataid(value: any) {
    this.$DO.persondataid = value;
  }

  get customerid() {
    return this.$DO.customerid;
  }
  set customerid(value: any) {
    this.$DO.customerid = value;
  }

  get opportunityid() {
    return this.$DO.opportunityid;
  }
  set opportunityid(value: any) {
    this.$DO.opportunityid = value;
  }


  // 表单里没有映射实体属性的字段(srfuf除外)
  srforikey: any;
  srftempmode: any;
  srfdeid: any;
  srfsourcekey: any;
}

// 部件配置对象
export const CtrlConfig = {
  controlCodeName: 'Main',
  controlName: 'form',
  controlService: new EditFormService<ControlVO>(ControlVO, new OpportunityService() ),
  data: new ControlVO({}),
  formDetails: [
    {
      caption: '商机基本信息',
      codeName: 'group1',
      name: 'group1',
    },
    {
      caption: '商机名称',
      codeName: 'opportunityname',
      name: 'opportunityname',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '客户名称',
      codeName: 'customername',
      name: 'customername',
      dataType: '25',
      detailStyle: 'DEFAULT',
      valueItemName: 'customerid',
    },
    {
      caption: '预期收益',
      codeName: 'exprevenue',
      name: 'exprevenue',
      dataType: '7',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '预计结束时间',
      codeName: 'expendtime',
      name: 'expendtime',
      dataType: '5',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '优先级',
      codeName: 'priority',
      name: 'priority',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '商机状态',
      codeName: 'state',
      name: 'state',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '销售员',
      codeName: 'persondataname',
      name: 'persondataname',
      dataType: '25',
      detailStyle: 'DEFAULT',
      valueItemName: 'persondataid',
    },
    {
      caption: '电话',
      codeName: 'phone',
      name: 'phone',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '电子邮件',
      codeName: 'email',
      name: 'email',
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