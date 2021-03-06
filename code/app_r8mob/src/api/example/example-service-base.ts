import { IContext, IParam, EntityService } from '@core';

/**
 * 示例服务对象基类
 *
 * @export
 * @class Example
 * @extends {EntityBaseService}
 */
export class ExampleServiceBase extends EntityService {
  
  /**
  * Creates an instance of ExampleServiceBase.
  *
  * @param {*} [opts={}]
  * @memberof ExampleServiceBase
  */
  constructor(opts: IParam = {}) {
      super(opts,'Example');
  }

  /**
   * 初始化基础数据
   *
   * @protected
   * @memberof ChartDataServiceBase
   */
  protected initBasicData() {
    this.appEntityCodeName = 'example';
    this.appEntityCodeNames = 'examples';
    this.appEntityKeyCodeName = 'exampleid';
      this.appEntityTextCodeName = 'examplename';
    // 初始化关系实体路径集合
    this.deResPaths = [
        [{"pathName":"examples","parameterName":"example"}]
    ]
  }

  /**
   * CalcPF
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof ExampleServiceBase
   */
  public async CalcPF(context: IContext = {}, data: IParam = {}): Promise<any> {
  	try {
  		//	data = await this.executeAppDELogic('CalcPF', context, data);
  		const res = {
  			ok: true,
  			status: 200,
  			data: data
  		};
  		return res;
  	} catch (error: any) {
  		const res = {
  			ok: false,
  			status: 500,
  			message: error?.message
  		}
  		return res;
  	}
  }

  /**
   * CalcPF2
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof ExampleServiceBase
   */
  public async CalcPF2(context: IContext = {}, data: IParam = {}): Promise<any> {
  	eval(`if((data.fieldx || data.fieldx == 0) && (data.fieldy || data.fieldy == 0)) {
    data.fieldz = (data.fieldx + data.fieldy)*2;
    data.formitem17 = 'X值'+data.fieldx +'加Y值'+data.fieldy+'再乘以2等于Z值'+data.fieldz;
}`);
  	const res = {
  		ok: true,
  		status: 200,
  		data: data
  	}
    return res;
  }

  /**
   * CheckKey
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof ExampleServiceBase
   */
  public async CheckKey(context: IContext = {}, data: IParam = {}): Promise<any> {
    const deResPath = this.buildDeResPath(context, false);
    this.beforeExecuteAction(context,data,'CheckKey');
    const res = await this.http.post(`${deResPath}/checkkey`,data);
    this.afterExecuteAction(context,data,'CheckKey');
    return res;
  }

  /**
   * ClearContent
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof ExampleServiceBase
   */
  public async ClearContent(context: IContext = {}, data: IParam = {}): Promise<any> {
  	eval(`data.content='';`);
  	const res = {
  		ok: true,
  		status: 200,
  		data: data
  	}
    return res;
  }

  /**
   * Create
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof ExampleServiceBase
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
   * @memberof ExampleServiceBase
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
   * @memberof ExampleServiceBase
   */
  public async GetDraft(context: IContext = {}, data: IParam = {}): Promise<any> {
    const deResPath = this.buildDeResPath(context, false);
    this.beforeExecuteAction(context,data,'GetDraft');
    const res = await this.http.get(`${deResPath}/getdraft`,data);
    this.afterExecuteAction(context,data,'GetDraft');
    return res;
  }

  /**
   * PrepareCtx
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof ExampleServiceBase
   */
  public async PrepareCtx(context: IContext = {}, data: IParam = {}): Promise<any> {
  	try {
  		//	data = await this.executeAppDELogic('PrepareCtx', context, data);
  		const res = {
  			ok: true,
  			status: 200,
  			data: data
  		};
  		return res;
  	} catch (error: any) {
  		const res = {
  			ok: false,
  			status: 500,
  			message: error?.message
  		}
  		return res;
  	}
  }

  /**
   * Remove
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof ExampleServiceBase
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
   * @memberof ExampleServiceBase
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
   * @memberof ExampleServiceBase
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
   * @memberof ExampleServiceBase
   */
  public async FetchDefault(context: IContext = {}, data: IParam = {}): Promise<any> {
    const deResPath = this.buildDeResPath(context, false);
    const res = await this.http.post(`${deResPath}/fetchdefault`,data);
    return res;
  }

  /**
   * FetchEmpty
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof ExampleServiceBase
   */
  public async FetchEmpty(context: IContext = {}, data: IParam = {}): Promise<any> {
    const deResPath = this.buildDeResPath(context, false);
    const res = await this.http.post(`${deResPath}/fetchempty`,data);
    return res;
  }

  /**
   * Select
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof ExampleServiceBase
   */
  public async Select(context: IContext = {}, data: IParam = {}): Promise<any> {
    const deResPath = this.buildDeResPath(context, false);
    const res = await this.http.post(`${deResPath}/select`,data);
    return res;
  }

}