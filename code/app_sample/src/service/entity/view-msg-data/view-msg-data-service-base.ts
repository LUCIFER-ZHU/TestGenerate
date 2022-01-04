import { Http, EntityService } from '@ibiz-core';

/**
 * 视图消息数据服务对象基类
 *
 * @export
 * @class ViewMsgData
 * @extends {EntityBaseService}
 */
export class ViewMsgDataServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"viewmsgdatas","parameterName":"viewmsgdata"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'ViewMsgData';
  protected APPDENAMEPLURAL = "ViewMsgData";



}