import { Http, EntityService } from '@ibiz-core';

/**
 * 示例明细服务对象基类
 *
 * @export
 * @class Example2
 * @extends {EntityBaseService}
 */
export class Example2ServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"examples","parameterName":"example"},{"pathName":"example2s","parameterName":"example2"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'Example2';
  protected APPDENAMEPLURAL = "Example2";



}