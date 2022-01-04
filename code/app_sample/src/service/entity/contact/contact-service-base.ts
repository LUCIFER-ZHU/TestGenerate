import { Http, EntityService } from '@ibiz-core';

/**
 * 联系人服务对象基类
 *
 * @export
 * @class Contact
 * @extends {EntityBaseService}
 */
export class ContactServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"customers","parameterName":"customer"},{"pathName":"contacts","parameterName":"contact"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'Contact';
  protected APPDENAMEPLURAL = "Contact";



}