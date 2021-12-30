import { Http, EntityService } from '@ibiz-core';

/**
 * 活动服务对象基类
 *
 * @export
 * @class Activity
 * @extends {EntityBaseService}
 */
export class ActivityServiceBase extends EntityService {
  
  constructor(opts?: any) {
      super(opts);
  }

  protected APPDENAME = "Activity";



    /**
     * CheckKey
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ActivityServiceBase
     */
    async CheckKey(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@76954a33
      //
      //
    }


    /**
     * Create
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ActivityServiceBase
     */
    async Create(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@24a298a6
      //
      //
    }


    /**
     * Get
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ActivityServiceBase
     */
    async Get(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@982bb90
      //
      //
        const res = await this.http.get(`/activities/${encodeURIComponent(_context.activity)}`, _data);
        return res;
    }


    /**
     * GetDraft
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ActivityServiceBase
     */
    async GetDraft(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@27f74733
      //
      //
        _data[this.APPDENAME?.toLowerCase()] = undefined;
        _data[this.APPDEKEY] = undefined;
        const res = await this.http.post(`/activities/${encodeURIComponent(_context.activity)}`, _data);
        return res;
    }


    /**
     * Remove
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ActivityServiceBase
     */
    async Remove(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@7bef452c
      //
      //
    }


    /**
     * Save
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ActivityServiceBase
     */
    async Save(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@4bb8855f
      //
      //
    }


    /**
     * Update
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ActivityServiceBase
     */
    async Update(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@57fae983
      //
      //
        const res = await this.http.post(`/activities/${encodeURIComponent(_context.activity)}`, _data);
        return res;
    }


    /**
     * FetchDefault
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ActivityServiceBase
     */
    async FetchDefault(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@4a29f290
      //
      //
        const res = await this.http.post(`/activities/${encodeURIComponent(_context.activity)}`, _data);
        return res;
    }


    /**
     * FetchEmail
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ActivityServiceBase
     */
    async FetchEmail(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@4bee18dc
      //
      //
        const res = await this.http.post(`/activities/${encodeURIComponent(_context.activity)}`, _data);
        return res;
    }


    /**
     * FetchMeeting
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ActivityServiceBase
     */
    async FetchMeeting(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@44f3fe83
      //
      //
        const res = await this.http.post(`/activities/${encodeURIComponent(_context.activity)}`, _data);
        return res;
    }


    /**
     * FetchOther
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ActivityServiceBase
     */
    async FetchOther(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@44c5a16f
      //
      //
        const res = await this.http.post(`/activities/${encodeURIComponent(_context.activity)}`, _data);
        return res;
    }


    /**
     * FetchPhone
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ActivityServiceBase
     */
    async FetchPhone(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@417d6615
      //
      //
        const res = await this.http.post(`/activities/${encodeURIComponent(_context.activity)}`, _data);
        return res;
    }


    /**
     * FilterCreate
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ActivityServiceBase
     */
    async FilterCreate(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@7a6ebe1e
      //
      //
    }


    /**
     * FilterFetch
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ActivityServiceBase
     */
    async FilterFetch(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@21325036
      //
      //
    }


    /**
     * FilterGet
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ActivityServiceBase
     */
    async FilterGet(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@489543a6
      //
      //
    }


    /**
     * FilterGetDraft
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ActivityServiceBase
     */
    async FilterGetDraft(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@6272c96f
      //
      //
    }


    /**
     * FilterRemove
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ActivityServiceBase
     */
    async FilterRemove(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@6de30571
      //
      //
    }


    /**
     * FilterSearch
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ActivityServiceBase
     */
    async FilterSearch(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@5ee34b1b
      //
      //
    }


    /**
     * FilterUpdate
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ActivityServiceBase
     */
    async FilterUpdate(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@3c89bb12
      //
      //
    }


    /**
     * Select
     *
     * @param {*} [_context={}]
     * @param {*} [_data = {}]
     * @returns {Promise<any>}
     * @memberof ActivityServiceBase
     */
    async Select(_context: any = {}, _data: any = {}): Promise<any> {
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@48c4245d
      //
      //
        const res = await this.http.post(`/activities/${encodeURIComponent(_context.activity)}`, _data);
        return res;
    }


}