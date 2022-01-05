import { Http, EntityService } from '@core';

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


  /**
    * CheckKey
    *
    * @param {*} [context={}]
    * @param {*} [viewParams = {}]
    * @returns {Promise<any>}
    * @memberof WizardDataServiceBase
    */
  async CheckKey(context: any = {}, viewParams: any = {}): Promise<any> {
    // TODO 设置本地缓存 @setStore
    // @executebeforeaction
    let deResPath = this.buildDeResPath(context, true);
    const res = await this.http.post(deResPath+'/', viewParams);
    return res;
    //
    //
  }

  /**
    * Create
    *
    * @param {*} [context={}]
    * @param {*} [viewParams = {}]
    * @returns {Promise<any>}
    * @memberof WizardDataServiceBase
    */
  async Create(context: any = {}, viewParams: any = {}): Promise<any> {
    // TODO 设置本地缓存 @setStore
    // @executebeforeaction
    let deResPath = this.buildDeResPath(context, true);
    const res = await this.http.post(deResPath+'/', viewParams);
    return res;
    //
    //
  }

  /**
    * Get
    *
    * @param {*} [context={}]
    * @param {*} [viewParams = {}]
    * @returns {Promise<any>}
    * @memberof WizardDataServiceBase
    */
  async Get(context: any = {}, viewParams: any = {}): Promise<any> {
    // TODO 设置本地缓存 @setStore
    // @executebeforeaction
    let deResPath = this.buildDeResPath(context, true);
    const res = await this.http.get(deResPath+'/', viewParams);
    return res;
    //
    //
  }

  /**
    * GetDraft
    *
    * @param {*} [context={}]
    * @param {*} [viewParams = {}]
    * @returns {Promise<any>}
    * @memberof WizardDataServiceBase
    */
  async GetDraft(context: any = {}, viewParams: any = {}): Promise<any> {
    viewParams[this.APPDENAME?.toLowerCase()] = undefined;
    viewParams[this.APPDEKEY] = undefined;
    let deResPath = this.buildDeResPath(context, false);
    const res = await this.http.get(deResPath+'/', viewParams);
    // TODO appentityexecuteafteractionlogic
    // TODO @appentityexecuteafteractionlogic
    // TODO 设置本地缓存 @setStore
    return res;
    //
    //
  }

  /**
    * Remove
    *
    * @param {*} [context={}]
    * @param {*} [viewParams = {}]
    * @returns {Promise<any>}
    * @memberof WizardDataServiceBase
    */
  async Remove(context: any = {}, viewParams: any = {}): Promise<any> {
    // TODO 设置本地缓存 @setStore
    // @executebeforeaction
    let deResPath = this.buildDeResPath(context, true);
    const res = await this.http.delete(deResPath+'/', viewParams);
    return res;
    //
    //
  }

  /**
    * Save
    *
    * @param {*} [context={}]
    * @param {*} [viewParams = {}]
    * @returns {Promise<any>}
    * @memberof WizardDataServiceBase
    */
  async Save(context: any = {}, viewParams: any = {}): Promise<any> {
    // TODO 设置本地缓存 @setStore
    // @executebeforeaction
    let deResPath = this.buildDeResPath(context, true);
    const res = await this.http.post(deResPath+'/', viewParams);
    return res;
    //
    //
  }

  /**
    * Update
    *
    * @param {*} [context={}]
    * @param {*} [viewParams = {}]
    * @returns {Promise<any>}
    * @memberof WizardDataServiceBase
    */
  async Update(context: any = {}, viewParams: any = {}): Promise<any> {
    // TODO 设置本地缓存 @setStore
    // @executebeforeaction
    let deResPath = this.buildDeResPath(context, true);
    const res = await this.http.put(deResPath+'/', viewParams);
    return res;
    //
    //
  }

  /**
    * FetchDefault
    *
    * @param {*} [context={}]
    * @param {*} [viewParams = {}]
    * @returns {Promise<any>}
    * @memberof WizardDataServiceBase
    */
  async FetchDefault(context: any = {}, viewParams: any = {}): Promise<any> {
    let deResPath = this.buildDeResPath(context, false);
    const res = await this.http.post(deResPath+'/', viewParams);
    // TODO @executeafterbatchaction
    return res;
    //
    //
  }

  /**
    * Select
    *
    * @param {*} [context={}]
    * @param {*} [viewParams = {}]
    * @returns {Promise<any>}
    * @memberof WizardDataServiceBase
    */
  async Select(context: any = {}, viewParams: any = {}): Promise<any> {
    let deResPath = this.buildDeResPath(context, true);
    const res = await this.http.post(deResPath+'/', viewParams);
    return res;
    //
    //
  }


}