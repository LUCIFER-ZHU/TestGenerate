import { ControlVOBase, verifyRules, EditFormService } from '@core';
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
export const CtrlConfig = {
  controlCodeName: 'Embeddedview',
  controlName: 'form',
  controlService: new EditFormService<ControlVO>(ControlVO, new ChartDataService() ),
  data: new ControlVO({}),
  formDetails: [
    {
      caption: '看板',
      codeName: 'grouppanel2',
      name: 'grouppanel2',
    },
    {
      caption: '看板视图',
      codeName: 'druipart5',
      name: 'druipart5',
    },
    {
      caption: '树',
      codeName: 'grouppanel1',
      name: 'grouppanel1',
    },
    {
      caption: '树视图',
      codeName: 'druipart3',
      name: 'druipart3',
    },
    {
      caption: '树导航视图',
      codeName: 'druipart4',
      name: 'druipart4',
    },
    {
      caption: '列表',
      codeName: 'group1',
      name: 'group1',
    },
    {
      caption: '列表视图',
      codeName: 'druipart1',
      name: 'druipart1',
    },
    {
      caption: '列表导航视图',
      codeName: 'druipart2',
      name: 'druipart2',
    },
    {
      caption: '数据视图',
      codeName: 'grouppanel3',
      name: 'grouppanel3',
    },
    {
      caption: '数据视图',
      codeName: 'druipart6',
      name: 'druipart6',
    },
    {
      caption: '卡片导航',
      codeName: 'druipart7',
      name: 'druipart7',
    },
    {
      caption: '树表格',
      codeName: 'grouppanel4',
      name: 'grouppanel4',
    },
    {
      caption: '树表格',
      codeName: 'druipart8',
      name: 'druipart8',
    },
  ],
  rules: {
  },
};