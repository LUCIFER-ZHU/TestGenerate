import { Http, EntityService } from '@ibiz-core';

/**
 * 编辑器值服务对象基类
 *
 * @export
 * @class EditorValue
 * @extends {EntityBaseService}
 */
export class EditorValueServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"customers","parameterName":"customer"},{"pathName":"editorvalues","parameterName":"editorvalue"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'EditorValue';
  protected APPDENAMEPLURAL = "EditorValue";



}