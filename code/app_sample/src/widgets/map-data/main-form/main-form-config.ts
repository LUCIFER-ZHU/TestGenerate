import { ControlVOBase, verifyRules, EditFormService } from '@ibiz-core';
import { MapDataService } from '@service/entity/map-data/map-data-service';

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
    this.$ownKeys =['srfupdatedate','srforikey','srfkey','srfmajortext','srftempmode','srfuf','srfdeid','srfsourcekey','mapdataname','mapdatacode','longitude','latitude','sortvalue','grouping','type','mapdataid'];  
  }

  // 表单里映射了属性的字段
  get srfupdatedate() {
    return this.$DO.updatedate;
  }
  set srfupdatedate(value: any) {
    this.$DO.updatedate = value;
  }

  get srfkey() {
    return this.$DO.mapdataid;
  }
  set srfkey(value: any) {
    this.$DO.mapdataid = value;
  }

  get srfmajortext() {
    return this.$DO.mapdataname;
  }
  set srfmajortext(value: any) {
    this.$DO.mapdataname = value;
  }

  get mapdataname() {
    return this.$DO.mapdataname;
  }
  set mapdataname(value: any) {
    this.$DO.mapdataname = value;
  }

  get mapdatacode() {
    return this.$DO.mapdatacode;
  }
  set mapdatacode(value: any) {
    this.$DO.mapdatacode = value;
  }

  get longitude() {
    return this.$DO.longitude;
  }
  set longitude(value: any) {
    this.$DO.longitude = value;
  }

  get latitude() {
    return this.$DO.latitude;
  }
  set latitude(value: any) {
    this.$DO.latitude = value;
  }

  get sortvalue() {
    return this.$DO.sortvalue;
  }
  set sortvalue(value: any) {
    this.$DO.sortvalue = value;
  }

  get grouping() {
    return this.$DO.grouping;
  }
  set grouping(value: any) {
    this.$DO.grouping = value;
  }

  get type() {
    return this.$DO.type;
  }
  set type(value: any) {
    this.$DO.type = value;
  }

  get mapdataid() {
    return this.$DO.mapdataid;
  }
  set mapdataid(value: any) {
    this.$DO.mapdataid = value;
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
  controlService: new EditFormService<ControlVO>(ControlVO, new MapDataService() ),
  data: new ControlVO({}),
  formDetails: [
    {
      caption: '地图示例数据基本信息',
      codeName: 'group1',
      name: 'group1',
    },
    {
      caption: '名称',
      codeName: 'mapdataname',
      name: 'mapdataname',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '编码',
      codeName: 'mapdatacode',
      name: 'mapdatacode',
      dataType: '9',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '经度',
      codeName: 'longitude',
      name: 'longitude',
      dataType: '6',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '纬度',
      codeName: 'latitude',
      name: 'latitude',
      dataType: '6',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '排序值',
      codeName: 'sortvalue',
      name: 'sortvalue',
      dataType: '9',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '分组',
      codeName: 'grouping',
      name: 'grouping',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
    {
      caption: '类型',
      codeName: 'type',
      name: 'type',
      dataType: '25',
      detailStyle: 'DEFAULT',
    },
  ],
  rules: {
  },
};