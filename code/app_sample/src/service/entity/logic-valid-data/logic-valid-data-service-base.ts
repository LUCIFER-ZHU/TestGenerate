import { Http, EntityService } from '@ibiz-core';

/**
 * 示例数据（启用逻辑删除）服务对象基类
 *
 * @export
 * @class LogicValidData
 * @extends {EntityBaseService}
 */
export class LogicValidDataServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"logicvaliddatas","parameterName":"logicvaliddata"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'LogicValidData';
  protected APPDENAMEPLURAL = "LogicValidData";



}