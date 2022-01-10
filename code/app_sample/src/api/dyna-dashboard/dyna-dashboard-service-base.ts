import { IContext, IParam, EntityService } from '@core';

/**
 * 动态数据看板服务对象基类
 *
 * @export
 * @class DynaDashboard
 * @extends {EntityBaseService}
 */
export class DynaDashboardServiceBase extends EntityService {
  
  /**
  * Creates an instance of DynaDashboardServiceBase.
  *
  * @param {*} [opts={}]
  * @memberof DynaDashboardServiceBase
  */
  constructor(opts: IParam = {}) {
      super(opts,'DynaDashboard');
  }

  /**
   * 初始化基础数据
   *
   * @protected
   * @memberof ChartDataServiceBase
   */
  protected initBasicData() {
    this.appEntityCodeName = 'dynadashboard';
    this.appEntityCodeNames = 'dynadashboards';
    // 初始化关系实体路径集合
    this.deResPaths = [
        [{"pathName":"dynadashboards","parameterName":"dynadashboard"}]
    ]
  }

}