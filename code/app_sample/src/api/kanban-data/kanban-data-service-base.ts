import { IContext, IParam, EntityService } from '@core';

/**
 * 看板数据服务对象基类
 *
 * @export
 * @class KanbanData
 * @extends {EntityBaseService}
 */
export class KanbanDataServiceBase extends EntityService {
  
  /**
  * Creates an instance of KanbanDataServiceBase.
  *
  * @param {*} [opts={}]
  * @memberof KanbanDataServiceBase
  */
  constructor(opts: IParam = {}) {
      super(opts,'KanbanData');
  }

  /**
   * 初始化基础数据
   *
   * @protected
   * @memberof ChartDataServiceBase
   */
  protected initBasicData() {
    this.appEntityCodeName = 'kanbandata';
    this.appEntityCodeNames = 'kanbandatas';
    this.appEntityKeyCodeName = 'kanbandataid';
      this.appEntityTextCodeName = 'kanbandataname';
    // 初始化关系实体路径集合
    this.deResPaths = [
        [{"pathName":"kanbandatas","parameterName":"kanbandata"}]
    ]
  }


    /**
      * CheckKey
      *
      * @param {IContext} [context={}]
      * @param {IParam} [data = {}]
      * @returns {Promise<any>}
      * @memberof KanbanDataServiceBase
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
      * @memberof KanbanDataServiceBase
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
      * @memberof KanbanDataServiceBase
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
      * @memberof KanbanDataServiceBase
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
      * @memberof KanbanDataServiceBase
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
      * @memberof KanbanDataServiceBase
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
      * @memberof KanbanDataServiceBase
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
      * @memberof KanbanDataServiceBase
      */
    public async FetchDefault(context: IContext = {}, data: IParam = {}): Promise<any> {
      const deResPath = this.buildDeResPath(context, false);
      const res = await this.http.post(`${deResPath}/fetchdefault`,data);
      return res;
    }
    /**
      * Select
      *
      * @param {IContext} [context={}]
      * @param {IParam} [data = {}]
      * @returns {Promise<any>}
      * @memberof KanbanDataServiceBase
      */
    public async Select(context: IContext = {}, data: IParam = {}): Promise<any> {
      const deResPath = this.buildDeResPath(context, false);
      const res = await this.http.post(`${deResPath}/select`,data);
      return res;
    }}