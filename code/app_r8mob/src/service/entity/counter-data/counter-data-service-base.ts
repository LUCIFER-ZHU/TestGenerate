import { Http, EntityService } from '@ibiz-core';

/**
 * 计数器数据服务对象基类
 *
 * @export
 * @class CounterData
 * @extends {EntityBaseService}
 */
export class CounterDataServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"counterdatas","parameterName":"counterdata"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'CounterData';
  protected APPDENAMEPLURAL = "CounterData";



}