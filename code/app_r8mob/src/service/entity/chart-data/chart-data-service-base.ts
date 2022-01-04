import { Http, EntityService } from '@ibiz-core';

/**
 * 图表服务对象基类
 *
 * @export
 * @class ChartData
 * @extends {EntityBaseService}
 */
export class ChartDataServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"chartdatas","parameterName":"chartdata"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'ChartData';
  protected APPDENAMEPLURAL = "ChartData";



}