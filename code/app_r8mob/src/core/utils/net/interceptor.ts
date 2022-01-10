import { Environment } from '@/environments/environment';
import { IParam } from '@core';
import { clearCookie, getCookie, SyncSeriesHook } from 'qx-util';
import { getSessionStorage } from '../util';
import { Http } from './http';

/**
 * 拦截器
 *
 * @export
 * @class Interceptors
 */
export class Interceptors {

    /**
     *  单列对象
     *
     * @private
     * @static
     * @type { Interceptors }
     * @memberof Interceptors
     */
    private static readonly instance: Interceptors = new Interceptors();

    /**
     * Creates an instance of Interceptors.
     * 私有构造，拒绝通过 new 创建对象
     * 
     * @memberof Interceptors
     */
    private constructor() {
        if (Interceptors.instance) {
            return Interceptors.instance;
        } else {
            this.intercept();
        }
    }

    /**
     * 获取 Interceptors 单例对象
     *
     * @static
     * @returns {Interceptors}
     * @memberof Interceptors
     */
    public static getInstance(): Interceptors {
        return this.instance;
    }

    /**
     * 执行钩子(请求、响应)
     *
     * @memberof Interceptors
     */
    public static hooks = {
        request: new SyncSeriesHook<[], { config: any }>(),
        response: new SyncSeriesHook<[], { response: any }>()
    };

    /**
     * 拦截器实现接口
     *
     * @private
     * @memberof Interceptors
     */
    private intercept(): void {
        Http.getHttp().interceptors.request.use((config: any) => {
            Interceptors.hooks.request.callSync({ config: config });
            if (Environment.SaaSMode && (!config.url.startsWith("/uaa/getbydcsystem/"))) {
                let activeOrgData = getSessionStorage('activeOrgData');
                config.headers['srforgid'] = activeOrgData?.orgid;
                config.headers['srfsystemid'] = activeOrgData?.systemid;
            }
            if (getCookie('ibzuaa-token')) {
                config.headers['Authorization'] = `Bearer ${getCookie('ibzuaa-token')}`;
            }
            if (!Object.is(Environment.BaseUrl, "") && !config.url.startsWith('https://') && !config.url.startsWith('http://') && !config.url.startsWith('./assets')) {
                config.url = Environment.BaseUrl + config.url;
            }
            return config;
        }, (error: any) => {
            return Promise.reject(error);
        });

        Http.getHttp().interceptors.response.use((response: any) => {
            Interceptors.hooks.response.callSync({ response: response });
            return response;
        }, (error: any) => {
            error = error ? error : { response: {} };
            let { response: res } = error;
            let { data: _data } = res;
            // 处理异常
            if (res.headers && res.headers['x-ibz-error']) {
                res.data.errorKey = res.headers['x-ibz-error'];
            }
            if (res.headers && res.headers['x-ibz-params']) {
                res.data.entityName = res.headers['x-ibz-params'];
            }
            if (res.status === 401) {
                this.doNoLogin(res, _data.data);
            }
            if (res.status === 403) {
                if (res.data && res.data.status && Object.is(res.data.status, "FORBIDDEN")) {
                    let alertMessage: string = "非常抱歉，您无权操作此数据，如需操作请联系管理员！";
                    Object.assign(res.data, { localizedMessage: alertMessage, message: alertMessage });
                }
            }
            // if (res.status === 404) {
            //     this.router.push({ path: '/404' });
            // } else if (res.status === 500) {
            //     this.router.push({ path: '/500' });
            // }
            return Promise.reject(res);
        });
    }

    /**
     * 处理未登录异常情况
     *
     * @private
     * @param {*} [data={}]
     * @memberof Interceptors
     */
    private doNoLogin(response: any, data: any = {}): void {
        // todo
    }


}