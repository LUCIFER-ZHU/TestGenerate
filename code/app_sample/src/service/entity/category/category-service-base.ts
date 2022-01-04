import { Http, EntityService } from '@ibiz-core';

/**
 * 类别服务对象基类
 *
 * @export
 * @class Category
 * @extends {EntityBaseService}
 */
export class CategoryServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"categories","parameterName":"category"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'Category';
  protected APPDENAMEPLURAL = "Category";



}