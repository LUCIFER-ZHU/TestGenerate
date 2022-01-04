import { Http, EntityService } from '@ibiz-core';

/**
 * 计数器数据2服务对象基类
 *
 * @export
 * @class CounterData2
 * @extends {EntityBaseService}
 */
export class CounterData2ServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"counterdata2s","parameterName":"counterdata2"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'CounterData2';
  protected APPDENAMEPLURAL = "CounterData2";



}