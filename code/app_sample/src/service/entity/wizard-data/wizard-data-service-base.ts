import { Http, EntityService } from '@ibiz-core';

/**
 * 向导数据服务对象基类
 *
 * @export
 * @class WizardData
 * @extends {EntityBaseService}
 */
export class WizardDataServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"wizarddatas","parameterName":"wizarddata"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'WizardData';
  protected APPDENAMEPLURAL = "WizardData";



}