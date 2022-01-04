import { Http, EntityService } from '@ibiz-core';

/**
 * 示例数据（启用逻辑删除）（主键数值）服务对象基类
 *
 * @export
 * @class LogicValidData2
 * @extends {EntityBaseService}
 */
export class LogicValidData2ServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"logicvaliddata2s","parameterName":"logicvaliddata2"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'LogicValidData2';
  protected APPDENAMEPLURAL = "LogicValidData2";



}