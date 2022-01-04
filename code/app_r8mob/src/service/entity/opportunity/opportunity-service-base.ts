import { Http, EntityService } from '@ibiz-core';

/**
 * 商机服务对象基类
 *
 * @export
 * @class Opportunity
 * @extends {EntityBaseService}
 */
export class OpportunityServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"customers","parameterName":"customer"},{"pathName":"opportunities","parameterName":"opportunity"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'Opportunity';
  protected APPDENAMEPLURAL = "Opportunity";



}