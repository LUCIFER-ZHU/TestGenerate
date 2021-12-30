import { Http, EntityService } from '@ibiz-core';

/**
 * 示例版本服务对象基类
 *
 * @export
 * @class SampleVer
 * @extends {EntityBaseService}
 */
export class SampleVerServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
  }

  protected APPDENAME = "SampleVer";



    /**
     * CheckKey
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof SampleVerServiceBase
     */
    async CheckKey(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@4930539b
      //
      //
    }


    /**
     * Create
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof SampleVerServiceBase
     */
    async Create(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@6d171ce0
      //
      //
    }


    /**
     * Get
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof SampleVerServiceBase
     */
    async Get(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@22bd2039
      //
      //
        const res = await this.http.get(`/sampleVers/${encodeURIComponent(_context.samplever)}`, _data);
        return res;
    }


    /**
     * GetDraft
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof SampleVerServiceBase
     */
    async GetDraft(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@705f83a7
      //
      //
        _data[this.APPDENAME?.toLowerCase()] = undefined;
        _data[this.APPDEKEY] = undefined;
        const res = await this.http.post(`/sampleVers/${encodeURIComponent(_context.samplever)}`, _data);
        return res;
    }


    /**
     * Remove
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof SampleVerServiceBase
     */
    async Remove(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@3bb8aabc
      //
      //
    }


    /**
     * Save
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof SampleVerServiceBase
     */
    async Save(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@6e1d4137
      //
      //
    }


    /**
     * Update
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof SampleVerServiceBase
     */
    async Update(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@256a1825
      //
      //
        const res = await this.http.post(`/sampleVers/${encodeURIComponent(_context.samplever)}`, _data);
        return res;
    }


    /**
     * FetchDefault
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof SampleVerServiceBase
     */
    async FetchDefault(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@29a4f594
      //
      //
        const res = await this.http.post(`/sampleVers/${encodeURIComponent(_context.samplever)}`, _data);
        return res;
    }


    /**
     * FetchJAVAR7D
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof SampleVerServiceBase
     */
    async FetchJAVAR7D(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@57b75756
      //
      //
        const res = await this.http.post(`/sampleVers/${encodeURIComponent(_context.samplever)}`, _data);
        return res;
    }


    /**
     * FetchMOBR7D
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof SampleVerServiceBase
     */
    async FetchMOBR7D(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@5327a06e
      //
      //
        const res = await this.http.post(`/sampleVers/${encodeURIComponent(_context.samplever)}`, _data);
        return res;
    }


    /**
     * FetchWEBR7D
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof SampleVerServiceBase
     */
    async FetchWEBR7D(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@2679311f
      //
      //
        const res = await this.http.post(`/sampleVers/${encodeURIComponent(_context.samplever)}`, _data);
        return res;
    }


    /**
     * FilterCreate
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof SampleVerServiceBase
     */
    async FilterCreate(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@287f7811
      //
      //
    }


    /**
     * FilterFetch
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof SampleVerServiceBase
     */
    async FilterFetch(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@451f87af
      //
      //
    }


    /**
     * FilterGet
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof SampleVerServiceBase
     */
    async FilterGet(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@2b556bb2
      //
      //
    }


    /**
     * FilterGetDraft
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof SampleVerServiceBase
     */
    async FilterGetDraft(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@44cb460e
      //
      //
    }


    /**
     * FilterRemove
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof SampleVerServiceBase
     */
    async FilterRemove(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@17271176
      //
      //
    }


    /**
     * FilterSearch
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof SampleVerServiceBase
     */
    async FilterSearch(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@2e3cdec2
      //
      //
    }


    /**
     * FilterUpdate
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof SampleVerServiceBase
     */
    async FilterUpdate(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@2e34384c
      //
      //
    }


    /**
     * Select
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof SampleVerServiceBase
     */
    async Select(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@3051e0b2
      //
      //
        const res = await this.http.post(`/sampleVers/${encodeURIComponent(_context.samplever)}`, _data);
        return res;
    }


}