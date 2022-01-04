import { Http, EntityService } from '@ibiz-core';

/**
 * 市服务对象基类
 *
 * @export
 * @class City
 * @extends {EntityBaseService}
 */
export class CityServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"cities","parameterName":"city"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'City';
  protected APPDENAMEPLURAL = "City";



}