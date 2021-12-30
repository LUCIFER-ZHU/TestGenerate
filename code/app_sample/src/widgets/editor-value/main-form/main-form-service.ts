import { ControlServiceBase, hasFunction } from '@ibiz-core';
import { createUUID } from 'qx-util';
import { EditorValueService } from '@service/entity/editor-value/editor-value-service';
import { ControlVO } from './main-form-config';

export class ControlService extends ControlServiceBase {

  /**
   * 实体服务对象
   */
  public entityService: EditorValueService = new EditorValueService();

  /**
   * 加载草稿数据
   *
   * @param [context={}] 上下文参数
   * @param [data={}] 视图参数
   * @param opts
   * @return {*}
   */
  public async loadDraft(context: any, data: any, opts: { action: string; isLoading?: boolean }): Promise<any> {
      const { context: Context, data: Data } = this.handleRequestData(context, data, opts);
      // todo主键
      const action = hasFunction(this.entityService, opts.action) ? opts.action : 'GetDraft';
      const response = await this.entityService[action](Context, Data, opts.isLoading);
      // this.setRemoteCopyData(response);
      response.data = new ControlVO(response.data);
      response.data.srfuf = "0";
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
      const { context: Context, data: Data } = this.handleRequestData(context, data, opts);
      const action = hasFunction(this.entityService, opts.action) ? opts.action : 'GET';
      const response = await this.entityService[action](Context, Data, opts.isLoading);
      // this.setRemoteCopyData(response);
      response.data = new ControlVO(response.data);
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
      const { context: Context, data: Data } = this.handleRequestData(context, data, opts);
      const action = hasFunction(this.entityService, opts.action) ? opts.action : 'Create';
      const response = await this.entityService[action](Context, Data, opts.isLoading);
      response.data = new ControlVO(response.data);
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
      const { context: Context, data: Data } = this.handleRequestData(context, data, opts);
      const action = hasFunction(this.entityService, opts.action) ? opts.action : 'Remove';
      const response = await this.entityService[action](Context, Data, opts.isLoading);
      response.data = new ControlVO(response.data);
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
      const { context: Context, data: Data } = this.handleRequestData(context, data, opts);
      const action = hasFunction(this.entityService, opts.action) ? opts.action : 'Update';
      const response = await this.entityService[action](Context, Data, opts.isLoading);
      response.data = new ControlVO(response.data);
      return this.handleResponse(response, opts);
  }
    
  }
