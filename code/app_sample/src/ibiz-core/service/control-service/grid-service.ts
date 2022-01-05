import { ControlServiceBase, ControlVOBase, hasFunction, IParam } from '@ibiz-core';

/**
 * @description 表格部件服务
 * @export
 * @class GridService
 * @extends {ControlServiceBase<T>}
 * @template T 部件数据对象类型
 */
export class GridService<T extends ControlVOBase> extends ControlServiceBase<T> {

  /**
   * @description 加载草稿
   * @param {IParam} context 上下文
   * @param {IParam} data 行为数据
   * @param {{ action: string; isLoading?: boolean }} opts 行为参数
   * @return {*}  {Promise<any>}
   * @memberof GridService
   */
  public async loadDraft(context: IParam, data: IParam, opts: { action: string; isLoading?: boolean }): Promise<any> {
    let _entityService: any = this.entityService;
    const { context: Context, data: Data } = this.handleRequestData(context, data, opts);
    // todo主键
    const action = hasFunction(_entityService, opts.action) ? opts.action : 'GetDraft';
    const response = await _entityService[action](Context, Data, opts.isLoading);
    // this.setRemoteCopyData(response);
    response.data = this.newControlVO(response.data);
    response.data.srfuf = '0';
    return this.handleResponse(response, opts);
  }

  /**
   * @description 加载数据
   * @param {IParam} context 上下文
   * @param {IParam} data 行为数据
   * @param {{ action: string; isLoading?: boolean }} opts 行为参数
   * @return {*}  {Promise<any>}
   * @memberof GridService
   */
  public async get(context: IParam, data: IParam, opts: { action: string; isLoading?: boolean }): Promise<any> {
    let _entityService: any = this.entityService;
    const { context: Context, data: Data } = this.handleRequestData(context, data, opts);
    const action = hasFunction(_entityService, opts.action) ? opts.action : 'FetchDefault';
    const response = await _entityService[action](Context, Data, opts.isLoading);
    //this.setCopynativeData(response.data);
    response.data?.forEach((item: IParam) =>{
      item = this.newControlVO(item);
    })
    return this.handleResponse(response, opts);
  }

  /**
   * @description 新建数据
   * @param {IParam} context 上下文
   * @param {IParam} data 行为数据
   * @param {{ action: string; isLoading?: boolean }} opts 行为参数
   * @return {*}  {Promise<any>}
   * @memberof GridService
   */
  public async create(context: IParam, data: IParam, opts: { action: string; isLoading?: boolean }): Promise<any> {
    let _entityService: any = this.entityService;
    const { context: Context, data: Data } = this.handleRequestData(context, data, opts);
    const action = hasFunction(_entityService, opts.action) ? opts.action : 'Create';
    const response = await _entityService[action](Context, Data, opts.isLoading);
    response.data = this.newControlVO(response.data);
    return this.handleResponse(response, opts);
  }

  /**
   * @description 删除数据
   * @param {IParam} context 上下文
   * @param {IParam} data 行为数据
   * @param {{ action: string; isLoading?: boolean }} opts 行为参数
   * @return {*}  {Promise<any>}
   * @memberof GridService
   */
  public async remove(context: IParam, data: IParam, opts: { action: string; isLoading?: boolean }): Promise<any> {
    let _entityService: any = this.entityService;
    const { context: Context, data: Data } = this.handleRequestData(context, data, opts);
    const action = hasFunction(_entityService, opts.action) ? opts.action : 'Remove';
    const response = await _entityService[action](Context, Data, opts.isLoading);
    response.data = this.newControlVO(response.data);
    return this.handleResponse(response, opts);
  }

  /**
   * @description 更新
   * @param {*} context 上下文
   * @param {*} data 行为数据
   * @param {{ action: string; isLoading?: boolean }} opts 行为参数
   * @return {*}  {Promise<any>}
   * @memberof GridService
   */
  public async update(context: any, data: any, opts: { action: string; isLoading?: boolean }): Promise<any> {
    let _entityService: any = this.entityService;
    const { context: Context, data: Data } = this.handleRequestData(context, data, opts);
    const action = hasFunction(_entityService, opts.action) ? opts.action : 'Update';
    const response = await _entityService[action](Context, Data, opts.isLoading);
    response.data = this.newControlVO(response.data);
    return this.handleResponse(response, opts);
  }
}
