import { Http, EntityService } from '@ibiz-core';

/**
 * 人员数据服务对象基类
 *
 * @export
 * @class PersonData
 * @extends {EntityBaseService}
 */
export class PersonDataServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"orgdatas","parameterName":"orgdata"},{"pathName":"peopledata","parameterName":"persondata"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'PersonData';
  protected APPDENAMEPLURAL = "PersonData";



}