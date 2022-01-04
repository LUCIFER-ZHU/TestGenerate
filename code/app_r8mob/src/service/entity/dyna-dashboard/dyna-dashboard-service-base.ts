import { Http, EntityService } from '@ibiz-core';

/**
 * 动态数据看板服务对象基类
 *
 * @export
 * @class DynaDashboard
 * @extends {EntityBaseService}
 */
export class DynaDashboardServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"dynadashboards","parameterName":"dynadashboard"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'DynaDashboard';
  protected APPDENAMEPLURAL = "DynaDashboard";



}