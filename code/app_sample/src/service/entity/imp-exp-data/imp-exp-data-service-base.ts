import { Http, EntityService } from '@ibiz-core';

/**
 * 导入导出数据服务对象基类
 *
 * @export
 * @class ImpExpData
 * @extends {EntityBaseService}
 */
export class ImpExpDataServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"customers","parameterName":"customer"},{"pathName":"impexpdatas","parameterName":"impexpdata"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'ImpExpData';
  protected APPDENAMEPLURAL = "ImpExpData";



}