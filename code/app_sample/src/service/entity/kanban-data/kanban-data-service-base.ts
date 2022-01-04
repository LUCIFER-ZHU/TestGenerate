import { Http, EntityService } from '@ibiz-core';

/**
 * 看板数据服务对象基类
 *
 * @export
 * @class KanbanData
 * @extends {EntityBaseService}
 */
export class KanbanDataServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"kanbandatas","parameterName":"kanbandata"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'KanbanData';
  protected APPDENAMEPLURAL = "KanbanData";



}