import { IAppCodeListService, IContext, IParam } from "@core";

/**
 * 应用代码表服务基类
 *
 * @export
 * @abstract
 * @class AppCodeListServiceBase
 * @implements {IAppCodeListService}
 */
export abstract class AppCodeListServiceBase implements IAppCodeListService {

    /**
     * 获取代码表项
     *
     * @param { tag, context, viewParams }: { tag: string, context: IContext | undefined, viewParams: IParam | undefined }
     * @return {*}  {Promise<any>}
     * @memberof AppCodeListServiceBase
     */
    public async getCodeListItems({ tag, context, viewParams }: { tag: string, context: IContext | undefined, viewParams: IParam | undefined }): Promise<any> {
        throw new Error("Method not implemented.");
    }

}