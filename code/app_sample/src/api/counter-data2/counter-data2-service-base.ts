import { IContext, IParam, EntityService } from '@core';

/**
 * 计数器数据2服务对象基类
 *
 * @export
 * @class CounterData2
 * @extends {EntityBaseService}
 */
export class CounterData2ServiceBase extends EntityService {
  
  /**
  * Creates an instance of CounterData2ServiceBase.
  *
  * @param {*} [opts={}]
  * @memberof CounterData2ServiceBase
  */
  constructor(opts: IParam = {}) {
      super(opts,'CounterData2');
  }

  /**
   * 初始化基础数据
   *
   * @protected
   * @memberof ChartDataServiceBase
   */
  protected initBasicData() {
    this.appEntityCodeName = 'counterdata2';
    this.appEntityCodeNames = 'counterdata2s';
    // 初始化关系实体路径集合
    this.deResPaths = [
        [{"pathName":"counterdata2s","parameterName":"counterdata2"}]
    ]
  }


    /**
      * CheckKey
      *
      * @param {IContext} [context={}]
      * @param {IParam} [data = {}]
      * @returns {Promise<any>}
      * @memberof CounterData2ServiceBase
      */
    public async CheckKey(context: IContext = {}, data: IParam = {}): Promise<any> {
      const deResPath = this.buildDeResPath(context, false);
      this.beforeExecuteAction(context,data,'CheckKey');
      const res = await this.http.post(`${deResPath}`,data);
      this.afterExecuteAction(context,data,'CheckKey');
      return res;
    }
    /**
      * Create
      *
      * @param {IContext} [context={}]
      * @param {IParam} [data = {}]
      * @returns {Promise<any>}
      * @memberof CounterData2ServiceBase
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
      * @memberof CounterData2ServiceBase
      */
    public async Get(context: IContext = {}, data: IParam = {}): Promise<any> {
      const deResPath = this.buildDeResPath(context, true);
      this.beforeExecuteAction(context,data,'Get');
      const res = await this.http.get(`${deResPath}`,data);
      this.afterExecuteAction(context,data,'Get');
      return res;
    }
    /**
      * GetDraft
      *
      * @param {IContext} [context={}]
      * @param {IParam} [data = {}]
      * @returns {Promise<any>}
      * @memberof CounterData2ServiceBase
      */
    public async GetDraft(context: IContext = {}, data: IParam = {}): Promise<any> {
      const deResPath = this.buildDeResPath(context, false);
      this.beforeExecuteAction(context,data,'GetDraft');
      const res = await this.http.get(`${deResPath}`,data);
      this.afterExecuteAction(context,data,'GetDraft');
      return res;
    }
    /**
      * Remove
      *
      * @param {IContext} [context={}]
      * @param {IParam} [data = {}]
      * @returns {Promise<any>}
      * @memberof CounterData2ServiceBase
      */
    public async Remove(context: IContext = {}, data: IParam = {}): Promise<any> {
      const deResPath = this.buildDeResPath(context, true);
      this.beforeExecuteAction(context,data,'Remove');
      const res = await this.http.delete(`${deResPath}`,data);
      this.afterExecuteAction(context,data,'Remove');
      return res;
    }
    /**
      * Save
      *
      * @param {IContext} [context={}]
      * @param {IParam} [data = {}]
      * @returns {Promise<any>}
      * @memberof CounterData2ServiceBase
      */
    public async Save(context: IContext = {}, data: IParam = {}): Promise<any> {
      const deResPath = this.buildDeResPath(context, true);
      this.beforeExecuteAction(context,data,'Save');
      const res = await this.http.post(`${deResPath}`,data);
      this.afterExecuteAction(context,data,'Save');
      return res;
    }
    /**
      * Update
      *
      * @param {IContext} [context={}]
      * @param {IParam} [data = {}]
      * @returns {Promise<any>}
      * @memberof CounterData2ServiceBase
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
      * @memberof CounterData2ServiceBase
      */
    public async FetchDefault(context: IContext = {}, data: IParam = {}): Promise<any> {
      const deResPath = this.buildDeResPath(context, false);
      const res = await this.http.post(`${deResPath}`);
      return res;
    }
    /**
      * Select
      *
      * @param {IContext} [context={}]
      * @param {IParam} [data = {}]
      * @returns {Promise<any>}
      * @memberof CounterData2ServiceBase
      */
    public async Select(context: IContext = {}, data: IParam = {}): Promise<any> {
      const deResPath = this.buildDeResPath(context, false);
      const res = await this.http.post(`${deResPath}`,data);
      return res;
    }}