import { IContext, IParam } from "../common";


/**
 * @description 应用代码表服务
 * @export
 * @interface IAppCodeListService
 */
export interface IAppCodeListService {

    /**
     * 获取代码项
     *
     * @param { tag, context, viewParams }: { tag: string, context: IContext | undefined, viewParams: IParam | undefined }
     * @return {*}  {Promise<any>}
     * @memberof IAppCodeListService
     */
    getCodeListItems({ tag, context, viewParams }: { tag: string, context: IContext | undefined, viewParams: IParam | undefined }): Promise<any>;

}