import { IContext, IParam, EntityService } from '@core';

/**
 * 向导数据服务对象基类
 *
 * @export
 * @class WizardData
 * @extends {EntityBaseService}
 */
export class WizardDataServiceBase extends EntityService {
  
  /**
  * Creates an instance of WizardDataServiceBase.
  *
  * @param {*} [opts={}]
  * @memberof WizardDataServiceBase
  */
  constructor(opts: IParam = {}) {
      super(opts,'WizardData');
  }

  /**
   * 初始化基础数据
   *
   * @protected
   * @memberof ChartDataServiceBase
   */
  protected initBasicData() {
    this.appEntityCodeName = 'wizarddata';
    this.appEntityCodeNames = 'wizarddatas';
    // 初始化关系实体路径集合
    this.deResPaths = [
        [{"pathName":"wizarddatas","parameterName":"wizarddata"}]
    ]
  }

}