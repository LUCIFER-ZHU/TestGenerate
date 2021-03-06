import { ControlServiceBase, ControlVOBase, hasFunction } from '@ibiz-core';

/**
 * 表单部件服务
 *
 * @export
 * @class EditFormService
 * @template T 部件数据对象类型
 */
export class EditFormService<T extends ControlVOBase> extends ControlServiceBase<T> {
  /**
   * 加载草稿数据
   *
   * @param [context={}] 上下文参数
   * @param [data={}] 视图参数
   * @param opts
   * @return {*}
   */
  public async loadDraft(context: any, data: any, opts: { action: string; isLoading?: boolean }): Promise<any> {
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
   * 加载数据
   *
   * @param [context={}] 上下文参数
   * @param [data={}] 视图参数
   * @param opts
   * @return {*}
   */
  public async get(context: any, data: any, opts: { action: string; isLoading?: boolean }): Promise<any> {
    let _entityService: any = this.entityService;
    const { context: Context, data: Data } = this.handleRequestData(context, data, opts);
    const action = hasFunction(_entityService, opts.action) ? opts.action : 'GET';
    const response = await _entityService[action](Context, Data, opts.isLoading);
    // this.setRemoteCopyData(response);
    response.data = this.newControlVO(response.data);
    return this.handleResponse(response, opts);
  }

  /**
   * 创建数据
   *
   * @param [context={}] 上下文参数
   * @param [data={}] 视图参数
   * @param opts
   * @return {*}
   */
  public async create(context: any, data: any, opts: { action: string; isLoading?: boolean }): Promise<any> {
    let _entityService: any = this.entityService;
    const { context: Context, data: Data } = this.handleRequestData(context, data, opts);
    const action = hasFunction(_entityService, opts.action) ? opts.action : 'Create';
    const response = await _entityService[action](Context, Data, opts.isLoading);
    response.data = this.newControlVO(response.data);
    return this.handleResponse(response, opts);
  }

  /**
   * 删除数据
   *
   * @param [context={}] 上下文参数
   * @param [data={}] 视图参数
   * @param opts
   * @return {*}
   */
  public async remove(context: any, data: any, opts: { action: string; isLoading?: boolean }): Promise<any> {
    let _entityService: any = this.entityService;
    const { context: Context, data: Data } = this.handleRequestData(context, data, opts);
    const action = hasFunction(_entityService, opts.action) ? opts.action : 'Remove';
    const response = await _entityService[action](Context, Data, opts.isLoading);
    response.data = this.newControlVO(response.data);
    return this.handleResponse(response, opts);
  }

  /**
   * 更新数据
   *
   * @param [context={}] 上下文参数
   * @param [data={}] 视图参数
   * @param opts
   * @return {*}
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
