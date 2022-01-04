import { Http, EntityService } from '@ibiz-core';

/**
 * 事件服务对象基类
 *
 * @export
 * @class Event
 * @extends {EntityBaseService}
 */
export class EventServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"events","parameterName":"event"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'Event';
  protected APPDENAMEPLURAL = "Event";



}