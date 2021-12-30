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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@2c708440
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@3047254d
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@6cf31447
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@4e92466a
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@66e8997c
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@6f0cb5a1
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@1b29d52b
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@47547132
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@655523dd
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@6f7e336b
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@3a2b2322
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@5e1218b4
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@12958360
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@c6e0f32
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@6f3f0fae
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@21a66d45
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@1f966492
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@63fdffcd
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@7428de63
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
      //net.ibizsys.model.app.dataentity.PSAppDEMethodImpl@66f659e6
      //
      //
        const res = await this.http.post(`/activities/${encodeURIComponent(_context.activity)}`, _data);
        return res;
    }


}