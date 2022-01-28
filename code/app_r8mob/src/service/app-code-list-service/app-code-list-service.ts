import { AppCodeListConfig } from "@/app/config";
import { AppCodeListServiceBase, IAppCodeListService, IContext, IParam } from "@core";

/**
 * 应用代码表服务基类
 *
 * @export
 * @abstract
 * @class AppCodeListService
 * @extends AppCodeListServiceBase
 * @implements {IAppCodeListService}
 */
export class AppCodeListService extends AppCodeListServiceBase implements IAppCodeListService {

    /**
     * 唯一实例
     *
     * @private
     * @static
     * @memberof AppCodeListService
     */
    private static readonly instance = new AppCodeListService();

    /**
     * 获取唯一实例
     *
     * @static
     * @return {*}  {AppCodeListService}
     * @memberof AppCodeListService
     */
    public static getInstance(): AppCodeListService {
        return AppCodeListService.instance;
    }

    /**
     * 获取代码表项
     *
     * @param { tag, context, viewParams }: { tag: string, context: IContext | undefined, viewParams: IParam | undefined }
     * @return {*}  {Promise<any>}
     * @memberof AppCodeListService
     */
    public async getCodeListItems({ tag, context, viewParams }: { tag: string, context: IContext | undefined, viewParams: IParam | undefined }): Promise<any> {
        const codeList = AppCodeListConfig[tag];
        if (!codeList) return;
        let items: any;
        if (Object.is(codeList.codeListType, 'STATIC')) {
            items = await this.getItemsWithStatic(codeList);
        } else {
            if (codeList.predefinedType) {
                items = await this.getItemsWithPredefined(codeList);
            } else {
                items = await this.getItemsWithDynamic(codeList);
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
     * @memberof AppCodeListService
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
     * @param {IParam} codeList
     * @return {*} 
     * @memberof AppCodeListService
     */
    public async getItemsWithDynamic(codeList: IParam): Promise<IParam[]> {
        return [];
    }

    /**
     * 获取预定义代码表
     *
     * @param {IParam} codeList
     * @return {*} 
     * @memberof AppCodeListService
     */
    public async getItemsWithPredefined(codeList: IParam): Promise<IParam[]> {
        return [];
    }

    /**
     * 处理成UI相关结构
     * 1.将{value: 'val',text: 'label'}处理成{value: 'val',label: 'label'}
     * 2.处理代码表层级问题  
     *
     * @param {IParam[]} items
     * @memberof AppCodeListService
     */
    public handleItemData(items: IParam[]) {
        // 将{value: 'val',text: 'label'}处理成{value: 'val',label: 'label'}
        if (items && (items.length > 0)) {
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
     * @memberof AppCodeListService
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