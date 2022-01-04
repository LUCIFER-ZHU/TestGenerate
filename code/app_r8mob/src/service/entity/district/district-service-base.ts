import { Http, EntityService } from '@ibiz-core';

/**
 * 区服务对象基类
 *
 * @export
 * @class District
 * @extends {EntityBaseService}
 */
export class DistrictServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"districts","parameterName":"district"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'District';
  protected APPDENAMEPLURAL = "District";



}