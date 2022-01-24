import qs from "qs";
import { getCookie } from "qx-util";
import { Environment } from "@/environments/environment";
import { getSessionStorage, Http, IParam, setSessionStorage } from "@core";

/**
 * 应用相关处理逻辑工具类
 *
 * @export
 * @class AppUtil
 */
export class AppUtil {

    /**
     * 获取应用数据
     *
     * @static
     * @param {IParam} hooks 应用钩子
     * @param {IParam} [params={}] 应用参数
     * @return {*}  {Promise<boolean>}
     * @memberof AppUtil
     */
    public static async getAppData(hooks: IParam, params: IParam = {}): Promise<boolean> {
        try {
            const url = '/appdata';
            hooks.appBefore.callSync({ url: url, param: params });
            const response: any = await Http.getInstance().get(url);
            if (response && response.status === 200) {
                let { data }: { data: any } = response;
                hooks.appAfter.callSync({ data: data });
                if (!data) {
                    return false;
                }
                // token认证把用户信息放入应用级数据
                if (getCookie('ibzuaa-user')) {
                    let user: any = JSON.parse(getCookie('ibzuaa-user') as string);
                    let localAppData: any = {};
                    if (user.sessionParams) {
                        localAppData = { context: user.sessionParams };
                        Object.assign(localAppData, data);
                    }
                    data = JSON.parse(JSON.stringify(localAppData));
                }
                App.setAppData(data);
                return true;
            } else {
                return false;
            }
        } catch (error) {
            // App.gotoLoginPage();
            return false;
        }
    }

    /**
     * 通过租户获取组织数据
     *
     * @static
     * @param {IParam} hooks 应用钩子
     * @return {*}  {Promise<boolean>}
     * @memberof AppUtil
     */
    public static async getOrgsByDcsystem(hooks: IParam): Promise<boolean> {
        try {
            let tempViewParam = this.hanldeViewParam(window.location.href);
            if (!tempViewParam.srfdcsystem) {
                if (!tempViewParam.redirect) {
                    if (getSessionStorage('dcsystem')) {
                        tempViewParam = getSessionStorage('dcsystem');
                    }
                } else {
                    tempViewParam = this.hanldeViewParam(tempViewParam.redirect);
                }
            }
            if (!tempViewParam.srfdcsystem && Environment.mockDcSystemId) {
                Object.assign(tempViewParam, { srfdcsystem: Environment.mockDcSystemId });
            }
            if (tempViewParam.srfdcsystem) {
                hooks.dcSystemBefore.callSync({ dcsystem: tempViewParam.srfdcsystem });
                setSessionStorage('dcsystem', tempViewParam);
                let requestUrl: string = `/uaa/getbydcsystem/${tempViewParam.srfdcsystem}`;
                const response: any = await Http.getInstance().get(requestUrl);
                if (response && response.status === 200) {
                    let { data }: { data: any } = response;
                    hooks.dcSystemAfter.callSync({ dcsystem: tempViewParam.srfdcsystem, data: data });
                    if (data && data.length > 0) {
                        setSessionStorage('orgsData', data);
                        setSessionStorage('activeOrgData', data[0]);
                    }
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } catch (error) {
            // App.gotoLoginPage();
            return false;
        }
    }

    /**
     * 处理路径数据
     *
     * @static
     * @param {string} urlStr 路径
     * @return {*}  {*}
     * @memberof AppUtil
     */
    public static hanldeViewParam(urlStr: string): any {
        let tempViewParam: any = {};
        const tempViewparam: any = urlStr.slice(urlStr.indexOf('?') + 1);
        const viewparamArray: Array<string> = decodeURIComponent(tempViewparam).split(';');
        if (viewparamArray.length > 0) {
            viewparamArray.forEach((item: any) => {
                Object.assign(tempViewParam, qs.parse(item));
            });
        }
        return tempViewParam;
    }

}