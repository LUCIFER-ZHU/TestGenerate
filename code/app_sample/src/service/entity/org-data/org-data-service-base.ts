import { Http, EntityService } from '@ibiz-core';

/**
 * 组织数据服务对象基类
 *
 * @export
 * @class OrgData
 * @extends {EntityBaseService}
 */
export class OrgDataServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"orgdatas","parameterName":"orgdata"},{"pathName":"orgdatas","parameterName":"orgdata"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'OrgData';
  protected APPDENAMEPLURAL = "OrgData";



}