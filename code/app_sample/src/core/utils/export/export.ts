/**
 * ExportExcel 对象
 * 调用 getInstance() 获取实例
 *
 * @class ExportExcel
 */
export class ExportExcel {

    /**
     * 获取 ExportExcel 单例对象
     *
     * @static
     * @returns {ExportExcel}
     * @memberof ExportExcel
     */
    public static getInstance(): ExportExcel {
        if (!ExportExcel.ExportExcel) {
          ExportExcel.ExportExcel = new ExportExcel();
        }
        return this.ExportExcel;
    }

    /**
     * 私有化构造器，只能通过getInstance获取
     * @memberof ExportExcel
     */
    private constructor() { }

    /**
     * 单例变量声明
     *
     * @private
     * @static
     * @type {ExportExcel}
     * @memberof ExportExcel
     */
    private static ExportExcel: ExportExcel;

    /**
     * 获取导出excel核心包
     * 
     * @memberof ExportExcel
     */
    public async exportExcel(){
        const excel: any = await import("./export2Excel/Export2Excel" as any);
        return excel;
    }

}