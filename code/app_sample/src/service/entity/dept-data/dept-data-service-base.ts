import { Http, EntityService } from '@ibiz-core';

/**
 * 部门数据服务对象基类
 *
 * @export
 * @class DeptData
 * @extends {EntityBaseService}
 */
export class DeptDataServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"deptdatas","parameterName":"deptdata"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'DeptData';
  protected APPDENAMEPLURAL = "DeptData";



}