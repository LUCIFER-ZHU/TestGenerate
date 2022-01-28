
/**
 * 数据类型
 *
 */
export class DataTypes {
  static readonly DataTypes: any = {
    UNKNOWN : 0, //
    BIGINT : 1,
    BINARY : 2,
    BIT : 3,
    CHAR : 4,
    DATETIME : 5,
    DECIMAL : 6,
    FLOAT : 7,
    IMAGE : 8,
    INT : 9,
    MONEY : 10,
    NCHAR : 11,
    NTEXT : 12,
    NVARCHAR : 13,
    NUMERIC : 14,
    REAL : 15,
    SMALLDATETIME : 16,
    SMALLINT : 17,
    SMALLMONEY : 18,
    SQL_VARIANT : 19,
    SYSNAME : 20,
    TEXT : 21,
    TIMESTAMP : 22,
    TINYINT : 23,
    VARBINARY : 24,
    VARCHAR : 25,
    UNIQUEIDENTIFIER : 26,
    DATE : 27, // 纯日期型
    TIME : 28, // 纯时间
    BIGDECIMAL : 29, // 大数值
  }

  /**
   * @description 是否忽略大小写
   * @protected
   * @static
   * @param {string} value
   * @param {string} value2
   * @return {*} 
   * @memberof DataTypes
   */
  protected static equalsIgnoreCase(value:string, value2: string){
      return value.toLocaleLowerCase() == value2.toLocaleLowerCase();
  }

	/**
   * @description 字符串转数值
   * @static
   * @param {string} strValue
   * @return {*}  {number}
   * @memberof DataTypes
   */
  public static fromString(strValue: string): number {
		let result = this.DataTypes[strValue.toUpperCase()];
		return result || this.DataTypes.VARCHAR;
	}

	/**
   * @description 是否为number类型
   * @static
   * @param {string} strValue
   * @return {*}  {boolean}
   * @memberof DataTypes
   */
  public static isNumber(strValue: string): boolean {
    const numberTypes: any[] = ['BIGINT','BINARY','DECIMAL','FLOAT','INT','MONEY','NUMERIC','REAL','SMALLINT','SMALLMONEY','TINYINT','VARBINARY'];
		if(numberTypes.indexOf(strValue) !== -1){
        return true;
    }else{
        return false
    }
	}

	/**
   * @description 获取字符串名称
   * @static
   * @param {number} nDataType
   * @return {*} 
   * @memberof DataTypes
   */
  public static toString(nDataType: number) {
    let result = 'VARCHAR';
		for(let key in this.DataTypes){
      if(nDataType == this.DataTypes[key]){
        result = key;
        break;
      }
    }
		return result;
	}

}
