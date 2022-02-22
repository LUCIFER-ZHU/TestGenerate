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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','begintime','year','datatype','chartdataid'];  
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

  get begintime() {
    return this.$DO.begintime;
  }
  set begintime(value: any) {
    this.$DO.begintime = value;
  }

  get year() {
    return this.$DO.year;
  }
  set year(value: any) {
    this.$DO.year = value;
  }

  get datatype() {
    return this.$DO.datatype;
  }
  set datatype(value: any) {
    this.$DO.datatype = value;
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
  controlCodeName: 'Main_2',
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
      caption: '值规则',
      name: 'formpage1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMPAGE',
      showCaption: false,
    },
    begintime: {
      caption: '必须大于当前时间',
      name: 'begintime',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'FORMITEM',
      showCaption: true,
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
      dataType: '5',
      required: false,
      enableCond: 3,
    },
    year: {
      caption: '系统值规则',
      name: 'year',
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
    grouppanel1: {
      caption: '关系界面',
      name: 'grouppanel1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'GROUPPANEL',
      showCaption: true,
    },
    druipart1: {
      caption: '',
      name: 'druipart1',
      disabled: false, 
      visible: true,
      detailStyle: 'DEFAULT',
      detailType: 'DRUIPART',
      showCaption: true,
    },
    datatype: {
      caption: '数据分类',
      name: 'datatype',
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
    year: [
      {
        trigger: ['change', 'blur'],
        pattern: /[0-9]*[1-9][0-9]*/,
        message:'内容必须为正整数'
      },
    ],
    begintime: [
      {
        validator: async (rule: any, value: any, callback: any) => {
          if (isEmpty(value)) {
            return Promise.resolve();
          }
          let source: any = { 'begintime': value };
          const { isPast, infoMessage } = Verify.verifyDeRules(
            'begintime',
            source,
            {
              "condOp": "AND",
              "notMode": false,
              "condType": "GROUP",
              "ruleInfo": "",
            	"keyCond": false,
              "conditions": [
                {
                  "condOp": "GT",
                  "notMode": false,
                  "condType": "SIMPLE",
                  "ruleInfo": "",
                	"keyCond": false,
                	"paramType": "CURTIME",
                	"paramValue": "",
                }
            		
              ]
            }
          );
          if (!isPast) {
            return Promise.reject(infoMessage || '必须大于当前时间');
          }
          return Promise.resolve();
        }
      }
    ],
  },
};