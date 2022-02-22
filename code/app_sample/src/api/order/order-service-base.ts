import { IContext, IParam, EntityService } from '@core';

/**
 * 订单服务对象基类
 *
 * @export
 * @class Order
 * @extends {EntityBaseService}
 */
export class OrderServiceBase extends EntityService {
  
  /**
  * Creates an instance of OrderServiceBase.
  *
  * @param {*} [opts={}]
  * @memberof OrderServiceBase
  */
  constructor(opts: IParam = {}) {
      super(opts,'Order');
  }

  /**
   * 初始化基础数据
   *
   * @protected
   * @memberof ChartDataServiceBase
   */
  protected initBasicData() {
    this.appEntityCodeName = 'order';
    this.appEntityCodeNames = 'orders';
    this.appEntityKeyCodeName = 'orderid';
      this.appEntityTextCodeName = 'ordername';
    // 初始化关系实体路径集合
    this.deResPaths = [
        [{"pathName":"customers","parameterName":"customer"},{"pathName":"orders","parameterName":"order"}]
    ]
  }

  /**
   * CheckKey
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof OrderServiceBase
   */
  public async CheckKey(context: IContext = {}, data: IParam = {}): Promise<any> {
    const deResPath = this.buildDeResPath(context, false);
    this.beforeExecuteAction(context,data,'CheckKey');
    const res = await this.http.post(`${deResPath}/checkkey`,data);
    this.afterExecuteAction(context,data,'CheckKey');
    return res;
  }

  /**
   * Create
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof OrderServiceBase
   */
  public async Create(context: IContext = {}, data: IParam = {}): Promise<any> {
    const deResPath = this.buildDeResPath(context, false);
    this.beforeExecuteAction(context,data,'Create');
    const res = await this.http.post(`${deResPath}`,data);
    this.afterExecuteAction(context,data,'Create');
    return res;
  }

  /**
   * Get
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof OrderServiceBase
   */
  public async Get(context: IContext = {}, data: IParam = {}): Promise<any> {
    const deResPath = this.buildDeResPath(context, true);
    this.beforeExecuteAction(context,data,'Get');
    const res = await this.http.get(`${deResPath}`);
    this.afterExecuteAction(context,data,'Get');
    return res;
  }

  /**
   * GetDraft
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof OrderServiceBase
   */
  public async GetDraft(context: IContext = {}, data: IParam = {}): Promise<any> {
    const deResPath = this.buildDeResPath(context, false);
    this.beforeExecuteAction(context,data,'GetDraft');
    const res = await this.http.get(`${deResPath}/getdraft`,data);
    this.afterExecuteAction(context,data,'GetDraft');
    return res;
  }

  /**
   * Remove
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof OrderServiceBase
   */
  public async Remove(context: IContext = {}, data: IParam = {}): Promise<any> {
    const deResPath = this.buildDeResPath(context, true);
    this.beforeExecuteAction(context,data,'Remove');
    const res = await this.http.delete(`${deResPath}`);
    this.afterExecuteAction(context,data,'Remove');
    return res;
  }

  /**
   * Update
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof OrderServiceBase
   */
  public async Update(context: IContext = {}, data: IParam = {}): Promise<any> {
    const deResPath = this.buildDeResPath(context, true);
    this.beforeExecuteAction(context,data,'Update');
    const res = await this.http.put(`${deResPath}`,data);
    this.afterExecuteAction(context,data,'Update');
    return res;
  }

  /**
   * FetchDefault
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof OrderServiceBase
   */
  public async FetchDefault(context: IContext = {}, data: IParam = {}): Promise<any> {
    const deResPath = this.buildDeResPath(context, false);
    const res = await this.http.post(`${deResPath}/fetchdefault`,data);
    return res;
  }

  /**
   * FetchGroup
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof OrderServiceBase
   */
  public async FetchGroup(context: IContext = {}, data: IParam = {}): Promise<any> {
    const deResPath = this.buildDeResPath(context, false);
    const res = await this.http.post(`${deResPath}/fetchgroup`,data);
    return res;
  }

  /**
   * FetchPaying
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof OrderServiceBase
   */
  public async FetchPaying(context: IContext = {}, data: IParam = {}): Promise<any> {
    const deResPath = this.buildDeResPath(context, false);
    const res = await this.http.post(`${deResPath}/fetchpaying`,data);
    return res;
  }

  /**
   * FetchProcessing
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof OrderServiceBase
   */
  public async FetchProcessing(context: IContext = {}, data: IParam = {}): Promise<any> {
    const deResPath = this.buildDeResPath(context, false);
    const res = await this.http.post(`${deResPath}/fetchprocessing`,data);
    return res;
  }

  /**
   * Select
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof OrderServiceBase
   */
  public async Select(context: IContext = {}, data: IParam = {}): Promise<any> {
    const deResPath = this.buildDeResPath(context, false);
    const res = await this.http.post(`${deResPath}/select`,data);
    return res;
  }

}