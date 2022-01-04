import { ControlVOBase, verifyRules, EditFormService } from '@ibiz-core';
import { ChartDataService } from '@service/entity/chart-data/chart-data-service';

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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','formitem','formitem1','formitem2','formitem3','formitem4','formitem5','formitem6','formitem7','formitem8','formitem9','formitem10','formitem11','formitem12','formitem13','formitem14','formitem15','chartdataid'];  
  }

  // 表单里映射了属性的字段
  get srfupdatedate() {
    return this.$DO.updatedate;
  }
  set srfupdatedate(value: any) {
    this.$DO.updatedate = value;
  }

  get srfkey() {
    return this.$DO.chartdataid;
  }
  set srfkey(value: any) {
    this.$DO.chartdataid = value;
  }

  get srfmajortext() {
    return this.$DO.chartdataname;
  }
  set srfmajortext(value: any) {
    this.$DO.chartdataname = value;
  }

  get chartdataid() {
    return this.$DO.chartdataid;
  }
  set chartdataid(value: any) {
    this.$DO.chartdataid = value;
  }


  // 表单里没有映射实体属性的字段(srfuf除外)
  srforikey: any;
  srftempmode: any;
  srfdeid: any;
  srfsourcekey: any;
  formitem: any;
  formitem1: any;
  formitem2: any;
  formitem3: any;
  formitem4: any;
  formitem5: any;
  formitem6: any;
  formitem7: any;
  formitem8: any;
  formitem9: any;
  formitem10: any;
  formitem11: any;
  formitem12: any;
  formitem13: any;
  formitem14: any;
  formitem15: any;
}

// 部件配置对象
export const CtrlConfig = {
  controlCodeName: 'Main_3',
  controlName: 'form',
  controlService: new EditFormService<ControlVO>(ControlVO, new ChartDataService() ),
  data: new ControlVO({}),
  formDetails: [
    {
      caption: '单项选择',
      codeName: 'grouppanel1',
      name: 'grouppanel1',
    },
    {
      caption: '单项选择表格',
      codeName: 'formitem',
      name: 'formitem',
      dataType: '25',
      detailStyle: 'DEFAULT',
      valueItemName: 'formitem1',
    },
    {
      caption: '值项',
      codeName: 'formitem1',
      name: 'formitem1',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '单选选择树',
      codeName: 'formitem2',
      name: 'formitem2',
      dataType: '25',
      detailStyle: 'DEFAULT',
      valueItemName: 'formitem3',
    },
    {
      caption: '值项',
      codeName: 'formitem3',
      name: 'formitem3',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '树导航（列表）',
      codeName: 'formitem4',
      name: 'formitem4',
      dataType: '25',
      detailStyle: 'DEFAULT',
      valueItemName: 'formitem5',
    },
    {
      caption: '值项',
      codeName: 'formitem5',
      name: 'formitem5',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '单项选择列表',
      codeName: 'formitem6',
      name: 'formitem6',
      dataType: '25',
      detailStyle: 'DEFAULT',
      valueItemName: 'formitem7',
    },
    {
      caption: '值项',
      codeName: 'formitem7',
      name: 'formitem7',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '单选卡片',
      codeName: 'formitem8',
      name: 'formitem8',
      dataType: '25',
      detailStyle: 'DEFAULT',
      valueItemName: 'formitem9',
    },
    {
      caption: '值项',
      codeName: 'formitem9',
      name: 'formitem9',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '树导航（卡片）',
      codeName: 'formitem10',
      name: 'formitem10',
      dataType: '25',
      detailStyle: 'DEFAULT',
      valueItemName: 'formitem11',
    },
    {
      caption: '值项',
      codeName: 'formitem11',
      name: 'formitem11',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '树导航（表格）',
      codeName: 'formitem12',
      name: 'formitem12',
      dataType: '25',
      detailStyle: 'DEFAULT',
      valueItemName: 'formitem13',
    },
    {
      caption: '值项',
      codeName: 'formitem13',
      name: 'formitem13',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '表单项a',
      codeName: 'formitem14',
      name: 'formitem14',
      dataType: '25',
      detailStyle: 'DEFAULT',
      resetItemName: 'formitem15',
    },
    {
      caption: '表单项b',
      codeName: 'formitem15',
      name: 'formitem15',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
  ],
  rules: {
  },
};