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
    this.appEntityKeyCodeName = 'wizarddataid';
      this.appEntityTextCodeName = 'wizarddataname';
    // 初始化关系实体路径集合
    this.deResPaths = [
        [{"pathName":"wizarddatas","parameterName":"wizarddata"}]
    ]
  }

  /**
   * GotoFinishForm
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof WizardDataServiceBase
   */
  public async GotoFinishForm(context: IContext = {}, data: IParam = {}): Promise<any> {
  	eval(`data.srfnextform='FinishForm';`);
  	const res = {
  		ok: true,
  		status: 200,
  		data: data
  	}
    return res;
  }

}