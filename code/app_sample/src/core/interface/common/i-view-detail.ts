/**
 * 视图对象参数
 *
 * @export
 * @interface ViewDetail
 */
export interface ViewDetail {

    /**
     * 代码名称
     *
     * @type {string}
     * @memberof ViewDetail
     */
    codeName: string;

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof ViewDetail
     */
    name?: string;

    /**
     * 视图宽度
     *
     * @type {number}
     * @memberof ViewDetail
     */
    width?: number;

    /**
     * 视图高度
     *
     * @type {number}
     * @memberof ViewDetail
     */
    height?: number;

    /**
     * 视图标题
     *
     * @type {string}
     * @memberof ViewDetail
     */
    title?: string;

    /**
     * 打开方式
     *
     * @type {string}
     * @memberof ViewDetail
     */
    openMode?: 'INDEXViewDetailTAB' | 'POPUPAPP' | 'POPUPMODAL' | 'DRAWER' | 'POPOVER' | string;

    /**
     * 重定向视图
     *
     * @type {boolean}
     * @memberof ViewDetail
     */
    redirectView?: boolean;

    /**
     * 关系路径
     *
     * @type {[]}
     * @memberof ViewDetail
     */
    deResPaths?: [];

    /**
     * 标题
     *
     * @type {string}
     * @memberof ViewDetail
     */
    caption?: string;

    /**
     * 视图类型
     *
     * @type {string}
     * @memberof ViewDetail
     */
    ViewDetailType?: string;

    /**
     * 文件路径
     *
     * @type {string}
     * @memberof ViewDetail
     */
    fileDir?: string;

    /**
     * 打开视图的方向
     *
     * @type {string}
     * @memberof ViewDetail
     */
     placement?: string;

}