import { IContext, IParam, EntityService } from '@core';

/**
 * 示例版本服务对象基类
 *
 * @export
 * @class SampleVer
 * @extends {EntityBaseService}
 */
export class SampleVerServiceBase extends EntityService {
  
  /**
  * Creates an instance of SampleVerServiceBase.
  *
  * @param {*} [opts={}]
  * @memberof SampleVerServiceBase
  */
  constructor(opts: IParam = {}) {
      super(opts,'SampleVer');
  }

  /**
   * 初始化基础数据
   *
   * @protected
   * @memberof ChartDataServiceBase
   */
  protected initBasicData() {
    this.appEntityCodeName = 'samplever';
    this.appEntityCodeNames = 'samplevers';
    this.appEntityKeyCodeName = 'sampleverid';
      this.appEntityTextCodeName = 'samplevername';
    // 初始化关系实体路径集合
    this.deResPaths = [
        [{"pathName":"samplevers","parameterName":"samplever"}]
    ]
  }


    /**
      * CheckKey
      *
      * @param {IContext} [context={}]
      * @param {IParam} [data = {}]
      * @returns {Promise<any>}
      * @memberof SampleVerServiceBase
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
      * @memberof SampleVerServiceBase
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
      * @memberof SampleVerServiceBase
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
      * @memberof SampleVerServiceBase
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
      * @memberof SampleVerServiceBase
      */
    public async Remove(context: IContext = {}, data: IParam = {}): Promise<any> {
      const deResPath = this.buildDeResPath(context, true);
      this.beforeExecuteAction(context,data,'Remove');
      const res = await this.http.delete(`${deResPath}`);
      this.afterExecuteAction(context,data,'Remove');
      return res;
    }
    /**
      * Save
      *
      * @param {IContext} [context={}]
      * @param {IParam} [data = {}]
      * @returns {Promise<any>}
      * @memberof SampleVerServiceBase
      */
    public async Save(context: IContext = {}, data: IParam = {}): Promise<any> {
      const deResPath = this.buildDeResPath(context, true);
      this.beforeExecuteAction(context,data,'Save');
      const res = await this.http.post(`${deResPath}/save`,data);
      this.afterExecuteAction(context,data,'Save');
      return res;
    }
    /**
      * Update
      *
      * @param {IContext} [context={}]
      * @param {IParam} [data = {}]
      * @returns {Promise<any>}
      * @memberof SampleVerServiceBase
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
      * @memberof SampleVerServiceBase
      */
    public async FetchDefault(context: IContext = {}, data: IParam = {}): Promise<any> {
      const deResPath = this.buildDeResPath(context, false);
      const res = await this.http.post(`${deResPath}/fetchdefault`);
      return res;
    }
    /**
      * FetchJAVAR7D
      *
      * @param {IContext} [context={}]
      * @param {IParam} [data = {}]
      * @returns {Promise<any>}
      * @memberof SampleVerServiceBase
      */
    public async FetchJAVAR7D(context: IContext = {}, data: IParam = {}): Promise<any> {
      const deResPath = this.buildDeResPath(context, false);
      const res = await this.http.post(`${deResPath}/fetchjavar7d`);
      return res;
    }
    /**
      * FetchMOBR7D
      *
      * @param {IContext} [context={}]
      * @param {IParam} [data = {}]
      * @returns {Promise<any>}
      * @memberof SampleVerServiceBase
      */
    public async FetchMOBR7D(context: IContext = {}, data: IParam = {}): Promise<any> {
      const deResPath = this.buildDeResPath(context, false);
      const res = await this.http.post(`${deResPath}/fetchmobr7d`);
      return res;
    }
    /**
      * FetchWEBR7D
      *
      * @param {IContext} [context={}]
      * @param {IParam} [data = {}]
      * @returns {Promise<any>}
      * @memberof SampleVerServiceBase
      */
    public async FetchWEBR7D(context: IContext = {}, data: IParam = {}): Promise<any> {
      const deResPath = this.buildDeResPath(context, false);
      const res = await this.http.post(`${deResPath}/fetchwebr7d`);
      return res;
    }
    /**
      * Select
      *
      * @param {IContext} [context={}]
      * @param {IParam} [data = {}]
      * @returns {Promise<any>}
      * @memberof SampleVerServiceBase
      */
    public async Select(context: IContext = {}, data: IParam = {}): Promise<any> {
      const deResPath = this.buildDeResPath(context, false);
      const res = await this.http.post(`${deResPath}/select`,data);
      return res;
    }}