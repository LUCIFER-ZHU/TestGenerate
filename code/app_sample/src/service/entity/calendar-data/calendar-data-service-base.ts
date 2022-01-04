import { Http, EntityService } from '@ibiz-core';

/**
 * 日历示例数据服务对象基类
 *
 * @export
 * @class CalendarData
 * @extends {EntityBaseService}
 */
export class CalendarDataServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"calendardatas","parameterName":"calendardata"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'CalendarData';
  protected APPDENAMEPLURAL = "CalendarData";



}