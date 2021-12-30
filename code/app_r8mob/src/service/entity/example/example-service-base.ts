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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@64a4dd8d
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@2dddc1b9
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@65a5d4f9
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@40298285
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@22367b8
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@41b0ae4c
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@af9a89f
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@6482eef
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@1fcf9739
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@5b498842
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@1cb37ee4
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@5bcb04cb
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@385e36d4
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@2fc2a205
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@2881ad47
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@2bef09c0
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@62ce72ff
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@58a63629
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@7de843ef
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@2e1af49b
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@3fd2322d
      //
      //
        const res = await this.http.post(`/examples/${encodeURIComponent(_context.example)}`, _data);
        return res;
    }


}