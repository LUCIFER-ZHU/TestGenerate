import { Http, EntityService } from '@ibiz-core';

/**
 * 活动服务对象基类
 *
 * @export
 * @class Activity
 * @extends {EntityBaseService}
 */
export class ActivityServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"customers","parameterName":"customer"},{"pathName":"activities","parameterName":"activity"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'Activity';
  protected APPDENAMEPLURAL = "Activity";



}