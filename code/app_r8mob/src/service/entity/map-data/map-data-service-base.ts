import { Http, EntityService } from '@ibiz-core';

/**
 * 地图示例数据服务对象基类
 *
 * @export
 * @class MapData
 * @extends {EntityBaseService}
 */
export class MapDataServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"mapdatas","parameterName":"mapdata"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'MapData';
  protected APPDENAMEPLURAL = "MapData";



}