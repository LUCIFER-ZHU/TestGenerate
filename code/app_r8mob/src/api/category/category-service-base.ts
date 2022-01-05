import { Http, EntityService } from '@core';

/**
 * 类别服务对象基类
 *
 * @export
 * @class Category
 * @extends {EntityBaseService}
 */
export class CategoryServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
      // 初始化关系实体路径集合
      this.deResPaths = [
          [{"pathName":"categories","parameterName":"category"}]
      ]
  }

  protected SYSTEMNAME = '';
  protected APPNAME = '';
  protected APPDENAME = 'Category';
  protected APPDENAMEPLURAL = "Category";


  /**
    * CheckKey
    *
    * @param {*} [context={}]
    * @param {*} [viewParams = {}]
    * @returns {Promise<any>}
    * @memberof CategoryServiceBase
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
    * @memberof CategoryServiceBase
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
    * @memberof CategoryServiceBase
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
    * @memberof CategoryServiceBase
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
    * @memberof CategoryServiceBase
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
    * @memberof CategoryServiceBase
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
    * @memberof CategoryServiceBase
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
    * @memberof CategoryServiceBase
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
    * FetchRoot
    *
    * @param {*} [context={}]
    * @param {*} [viewParams = {}]
    * @returns {Promise<any>}
    * @memberof CategoryServiceBase
    */
  async FetchRoot(context: any = {}, viewParams: any = {}): Promise<any> {
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
    * @memberof CategoryServiceBase
    */
  async Select(context: any = {}, viewParams: any = {}): Promise<any> {
    let deResPath = this.buildDeResPath(context, true);
    const res = await this.http.post(deResPath+'/', viewParams);
    return res;
    //
    //
  }


}