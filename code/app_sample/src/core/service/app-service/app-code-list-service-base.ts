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
     * 动态代码表缓存(加载中)
     *
     * @type {Map<string,any>}
     * @memberof AppCodeListServiceBase
     */
    private static codelistCache: Map<string, any> = new Map();

    /**
     * 动态代码表缓存(已完成)
     *
     * @type {Map<string,any>}
     * @memberof AppCodeListServiceBase
     */
    private static codelistCached: Map<string, any> = new Map();

    /**
     * 通过代码表标识获取代码表
     *
     * @param {string} tag
     * @memberof AppCodeListServiceBase
     */
    public getCodeListByTag(tag: string): any {
        return undefined;
    }

    /**
     * 获取代码表项
     *
     * @param { tag, context, viewParams }: { tag: string, context: IContext | undefined, viewParams: IParam | undefined }
     * @return {*}  {Promise<any>}
     * @memberof AppCodeListServiceBase
     */
    public async getCodeListItems({ tag, context, viewParams }: { tag: string, context: IContext | undefined, viewParams: IParam | undefined }): Promise<any> {
        const codeList = this.getCodeListByTag(tag);
        if (!codeList) return;
        let items: any;
        if (Object.is(codeList.codeListType, 'STATIC')) {
            items = await this.getItemsWithStatic(codeList);
        } else {
            if (codeList.predefinedType) {
                items = await this.getItemsWithPredefined(codeList, context, viewParams);
            } else {
                items = await this.getItemsWithDynamic(codeList, context, viewParams);
            }
        }
        // 处理成UI相关结构
        this.handleItemData(items);
        return items;
    }

    /**
     * 获取静态代码表
     *
     * @param {IParam} codeList
     * @return {*} 
     * @memberof AppCodeListServiceBase
     */
    public async getItemsWithStatic(codeList: IParam): Promise<IParam[]> {
        const { items } = codeList;
        if (items && items.length > 0) {
            return items;
        } else {
            return [];
        }
    }

    /**
     * 获取动态代码表（非预置）
     *
     * @param {IParam} codeList 代码表
     * @param {IContext} [context={}] 应用上下文
     * @param {IParam} [viewParams={}] 视图参数
     * @return {*} 
     * @memberof AppCodeListServiceBase
     */
    public getItemsWithDynamic(codeList: IParam, context: IContext = {}, viewParams: IParam = {}) {
        return new Promise((resolve, reject) => {
            const { isEnableCache, cacheTimeout } = codeList;
            // 启用缓存并且缓存时间不等于-1
            if (isEnableCache && (cacheTimeout !== -1)) {
                const tag: string = codeList.codeName;
                // 加载完成执行回调
                const callback: Function = (tag: string, promise: Promise<IParam[]>) => {
                    promise.then((data: IParam[]) => {
                        if (data.length > 0) {
                            AppCodeListServiceBase.codelistCached.set(tag, { data, expirationTime: new Date().getTime() + cacheTimeout });
                            AppCodeListServiceBase.codelistCache.delete(tag);
                            return resolve(data);
                        } else {
                            return resolve([]);
                        }
                    })
                }
                // 先从已缓存完成的代码表Map中获取
                if (AppCodeListServiceBase.codelistCached.get(tag)) {
                    let activeCodeList = AppCodeListServiceBase.codelistCached.get(tag);
                    if (new Date().getTime() <= activeCodeList.expirationTime) {
                        return resolve(activeCodeList.data);
                    }
                }
                // 加载中，UI又需要数据，解决连续加载同一代码表问题
                if (AppCodeListServiceBase.codelistCache.get(tag)) {
                    callback(tag, AppCodeListServiceBase.codelistCache.get(tag));
                } else {
                    let result = this.getCodeListData(codeList, context, viewParams);
                    AppCodeListServiceBase.codelistCache.set(tag, result);
                    callback(tag, result);
                }
            } else {
                this.getCodeListData(codeList, context, viewParams).then((result: any) => {
                    resolve(result);
                })
            }
        })
    }

    /**
     * 获取代码表数据（动态代码表）
     *
     * @param {IParam} codeList 代码表
     * @param {IContext} [context={}] 应用上下文
     * @param {IParam} [viewParams={}] 视图参数
     * @memberof AppCodeListServiceBase
     */
    public async getCodeListData(codeList: IParam, context: IContext, viewParams: IParam) {
        try {
            const { appDataEntity, appDEDataSet, textPSAppDEField, valuePSAppDEField } = codeList;
            if (!appDataEntity || !appDEDataSet || !textPSAppDEField || !valuePSAppDEField) {
                console.error("动态代码表获取数据异常[查询参数不足]");
            }
            const dataService = await App.getDataService(appDataEntity.toLowerCase());
            const response = await dataService[appDEDataSet](context, viewParams, false);
            const { status, data } = response;
            if (status == 200) {
                const items: IParam[] = [];
                if (data && data.length > 0) {
                    data.forEach((element: IParam) => {
                        items.push({ value: element[valuePSAppDEField], text: element[textPSAppDEField] });
                    });
                }
                return items;
            } else {
                console.error("动态代码表获取数据异常[网络请求异常]")
                return [];
            }
        } catch (error: any) {
            console.error(`动态代码表获取数据异常[${JSON.stringify(error)}]`);
            return [];
        }
    }

    /**
     * 获取预定义代码表
     *
     * @param {IParam} codeList 代码表
     * @param {IContext} [context={}] 应用上下文
     * @param {IParam} [viewParams={}] 视图参数
     * @return {*}  {Promise<IParam[]>}
     * @memberof AppCodeListServiceBase
     */
    public getItemsWithPredefined(codeList: IParam, context: IContext = {}, viewParams: IParam = {}): Promise<IParam[]> {
        console.warn("获取预定义代码表暂未实现");
        return Promise.resolve([]);
    }

    /**
     * 处理成UI相关结构
     * 1.将{value: 'val',text: 'label'}处理成{value: 'val',label: 'label'}
     * 2.处理代码表层级问题  
     *
     * @param {IParam[]} items
     * @memberof AppCodeListServiceBase
     */
    public handleItemData(items: IParam[]) {
        if (!items) {
            items = [];
        }
        // 将{value: 'val',text: 'label'}处理成{value: 'val',label: 'label'}
        if (items.length > 0) {
            items.forEach((element: IParam) => {
                Object.assign(element, { label: element.text });
            });
        }
        // 处理代码表层级问题  
        const hasChildren: boolean = items.some((item: any) => {
            return item.pvalue;
        })
        if (hasChildren) {
            let list: IParam[] = [];
            items.forEach((codeItem: IParam) => {
                if (!codeItem.pvalue) {
                    this.setChildCodeItems(codeItem.value, items, codeItem);
                    list.push(codeItem);
                }
            })
            items = list;
        }
    }

    /**
     * 设置子项数据
     *
     * @param {string} pValue 父代码项值
     * @param {IParam[]} items 代码表集合
     * @param {IParam} codeItem 代码项
     * @memberof AppCodeListServiceBase
     */
    public setChildCodeItems(pValue: string, items: IParam[], codeItem: IParam) {
        items.forEach((item: IParam) => {
            if (item.pvalue == pValue) {
                this.setChildCodeItems(item.value, items, item);
                if (!codeItem.children) {
                    codeItem.children = [];
                }
                codeItem.children.push(item);
            }
        })
    }

}