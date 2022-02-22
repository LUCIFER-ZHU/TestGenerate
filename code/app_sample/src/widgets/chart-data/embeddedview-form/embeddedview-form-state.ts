import { ControlVOBase, EditFormService, Verify, isEmpty } from '@core';
import { ChartDataService } from '@api/chart-data/chart-data-service';

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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','chartdataid'];  
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
}

// 部件配置对象
export const ctrlState = {
  controlCodeName: 'Embeddedview',
  controlName: 'form',
  controlService: new EditFormService<ControlVO>(ControlVO, new ChartDataService() ),
  data: new ControlVO({}),
  appEntityCodeName: 'ChartData',
  appDeCodeName:'ChartData',
  appDeLogicName: '图表',
  appDeKeyFieldName: 'ChartDataId',
  appDeMajorFieldName: 'ChartDataName',
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
      caption: '嵌入视图',
      name: 'formpage1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMPAGE',
      showCaption: false,
    },
    grouppanel2: {
      caption: '看板',
      name: 'grouppanel2',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
    },
    druipart5: {
      caption: '看板视图',
      name: 'druipart5',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'DRUIPART',
      showCaption: true,
    },
    grouppanel1: {
      caption: '树',
      name: 'grouppanel1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
    },
    druipart3: {
      caption: '树视图',
      name: 'druipart3',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'DRUIPART',
      showCaption: true,
    },
    druipart4: {
      caption: '树导航视图',
      name: 'druipart4',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'DRUIPART',
      showCaption: true,
    },
    group1: {
      caption: '列表',
      name: 'group1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
    },
    druipart1: {
      caption: '列表视图',
      name: 'druipart1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'DRUIPART',
      showCaption: true,
    },
    druipart2: {
      caption: '列表导航视图',
      name: 'druipart2',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'DRUIPART',
      showCaption: true,
    },
    grouppanel3: {
      caption: '数据视图',
      name: 'grouppanel3',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
    },
    druipart6: {
      caption: '数据视图',
      name: 'druipart6',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'DRUIPART',
      showCaption: true,
    },
    druipart7: {
      caption: '卡片导航',
      name: 'druipart7',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'DRUIPART',
      showCaption: true,
    },
    grouppanel4: {
      caption: '树表格',
      name: 'grouppanel4',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
    },
    druipart8: {
      caption: '树表格',
      name: 'druipart8',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'DRUIPART',
      showCaption: true,
    },
  },
  actionModel: {
  },
  rules: {
  },
};