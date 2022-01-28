import { IOpenViewService, IParam, ViewDetail } from "@core";
import { Subject } from "rxjs";

/**
 * 打开视图服务
 * 
 * @export
 * @class OpenViewService
 */
export abstract class OpenViewServiceBase implements IOpenViewService {

    /**
     * @description 打开视图
     * @param {ViewDetail} view 视图对象参数
     * @param {IParam} params 打开视图参数
     * @return {*}  {*}
     * @memberof OpenViewServiceBase
     */
    public openView(view: ViewDetail, params: IParam): Subject<any> | undefined {
        // 获取详细视图信息
        let _view: ViewDetail | undefined = App.getViewInfo(view.codeName);
        if (!_view) {
            console.error(`应用中不存在${view.codeName}视图`);
            return;
        }
        // view的openMode覆盖配置的
        if (view.openMode) {
            _view.openMode = view.openMode;
        }
        // 重定向视图走重定向逻辑，其他根据openMode打开
        if (_view.redirectView) {
            this.openRedirectView(_view, params);
        } else {
            return this.openByOpenMode(_view, params);
        }
    }

    /**
     * 根据打开方式打开视图
     *
     * @param view 视图信息
     * @param params 相关参数
     * @memberof OpenViewServiceBase
     */
    public openByOpenMode(_view: ViewDetail, params: IParam): Subject<any> | undefined {
        throw new Error("Method not implemented.");
    }

    /**
     * 打开重定向视图
     *
     * @param {ViewDetail} _view
     * @param {IParam} params
     * @memberof OpenViewServiceBase
     */
    public openRedirectView(_view: ViewDetail, params: IParam) {
        throw new Error("Method not implemented.");
    }

}