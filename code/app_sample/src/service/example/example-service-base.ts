import { Http, EntityService } from '@ibiz-core';

/**
 * 示例服务对象基类
 *
 * @export
 * @class Example
 * @extends {EntityBaseService}
 */
export class ExampleServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
  }

  protected APPDENAME = "Example";



    /**
     * CalcPF
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ExampleServiceBase
     */
    async CalcPF(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@7808fb9
      //
      //
    }


    /**
     * CalcPF2
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ExampleServiceBase
     */
    async CalcPF2(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@773bd77b
      //
      //
    }


    /**
     * CheckKey
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ExampleServiceBase
     */
    async CheckKey(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@6b580b88
      //
      //
    }


    /**
     * ClearContent
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ExampleServiceBase
     */
    async ClearContent(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@6d91790b
      //
      //
    }


    /**
     * Create
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ExampleServiceBase
     */
    async Create(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@6e6fce47
      //
      //
    }


    /**
     * Get
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ExampleServiceBase
     */
    async Get(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@47c64cfe
      //
      //
        const res = await this.http.get(`/examples/${encodeURIComponent(_context.example)}`, _data);
        return res;
    }


    /**
     * GetDraft
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ExampleServiceBase
     */
    async GetDraft(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@6ce90bc5
      //
      //
        _data[this.APPDENAME?.toLowerCase()] = undefined;
        _data[this.APPDEKEY] = undefined;
        const res = await this.http.post(`/examples/${encodeURIComponent(_context.example)}`, _data);
        return res;
    }


    /**
     * PrepareCtx
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ExampleServiceBase
     */
    async PrepareCtx(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@a567e72
      //
      //
    }


    /**
     * Remove
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ExampleServiceBase
     */
    async Remove(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@1a5b8489
      //
      //
    }


    /**
     * Save
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ExampleServiceBase
     */
    async Save(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@6f8f8a80
      //
      //
    }


    /**
     * Update
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ExampleServiceBase
     */
    async Update(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@4b1c0397
      //
      //
        const res = await this.http.post(`/examples/${encodeURIComponent(_context.example)}`, _data);
        return res;
    }


    /**
     * FetchDefault
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ExampleServiceBase
     */
    async FetchDefault(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@72805168
      //
      //
        const res = await this.http.post(`/examples/${encodeURIComponent(_context.example)}`, _data);
        return res;
    }


    /**
     * FetchEmpty
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ExampleServiceBase
     */
    async FetchEmpty(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@34b9fc7d
      //
      //
        const res = await this.http.post(`/examples/${encodeURIComponent(_context.example)}`, _data);
        return res;
    }


    /**
     * FilterCreate
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ExampleServiceBase
     */
    async FilterCreate(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@27f1bbe0
      //
      //
    }


    /**
     * FilterFetch
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ExampleServiceBase
     */
    async FilterFetch(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@cda0432
      //
      //
    }


    /**
     * FilterGet
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ExampleServiceBase
     */
    async FilterGet(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@7c211fd0
      //
      //
    }


    /**
     * FilterGetDraft
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ExampleServiceBase
     */
    async FilterGetDraft(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@7004e3d
      //
      //
    }


    /**
     * FilterRemove
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ExampleServiceBase
     */
    async FilterRemove(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@2d84cb86
      //
      //
    }


    /**
     * FilterSearch
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ExampleServiceBase
     */
    async FilterSearch(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@71a3a190
      //
      //
    }


    /**
     * FilterUpdate
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ExampleServiceBase
     */
    async FilterUpdate(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@588ffeb
      //
      //
    }


    /**
     * Select
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ExampleServiceBase
     */
    async Select(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@7c28c1
      //
      //
        const res = await this.http.post(`/examples/${encodeURIComponent(_context.example)}`, _data);
        return res;
    }


}