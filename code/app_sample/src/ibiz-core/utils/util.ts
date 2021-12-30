import { clone } from "ramda";

/**
 * @description 克隆方法
 * @export
 * @param {Record<any, any>} data
 * @return {*}  {Record<any, any>}
 */
export function deepCopy(data: Record<any, any>): Record<any, any>{
  return clone(data)
}

/**
 * @description 除undefined，null,NaN以外都为true
 * @export
 * @param {*} arg
 * @return {*}  {boolean}
 */
export function isExist(arg: any): boolean{
  return arg !== undefined && arg !== null && arg === arg;
}

/**
 * @description 是否拥有某个方法
 * @param {*} arg 校验对象
 * @param fnName 方法名
 * @return {*} 
 */
export function hasFunction(arg: any, fnName: string): boolean{
  return arg[fnName] && arg[fnName] instanceof Function;
}

/**
 * @description 获取当前数据值类型
 * @export
 * @param {*} obj 当前数据
 * @return {*}  {string}
 */
export function typeOf(obj: any): string {
  const toString = Object.prototype.toString;
  const map: any = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object',
  };
  return map[toString.call(obj)];
}

/**
 * @description 校验值
 * @param {*} value 值
 * @param {*} op 校验条件
 * @param {*} value2 对比值
 * @return {*}  {boolean}
 */
 export function verifyValue(value: any, op: any, value2: any): boolean {
  // 等于操作
  if (Object.is(op, 'EQ')) {
    const _value = `${value}`;
    return _value === value2;
  }
  // 大于操作
  if (Object.is(op, 'GT')) {
    const result: number = compare(value, value2);
    if (result !== undefined && result > 0) {
      return true;
    } else {
      return false;
    }
  }
  // 大于等于操作
  if (Object.is(op, 'GTANDEQ')) {
    const result: number = compare(value, value2);
    if (result !== undefined && result >= 0) {
      return true;
    } else {
      return false;
    }
  }
  // 值包含在给定的范围中
  if (Object.is(op, 'IN')) {
    return contains(value, value2);
  }
  // 不为空判断操作
  if (Object.is(op, 'ISNOTNULL')) {
    return value != null && value !== '';
  }
  // 为空判断操作
  if (Object.is(op, 'ISNULL')) {
    return value == null || value === '';
  }
  // 文本左包含
  if (Object.is(op, 'LEFTLIKE')) {
    return value && value2 && value.toUpperCase().indexOf(value2.toUpperCase()) === 0;
  }
  // 文本包含
  if (Object.is(op, 'LIKE')) {
    return value && value2 && value.toUpperCase().indexOf(value2.toUpperCase()) !== -1;
  }
  // 小于操作
  if (Object.is(op, 'LT')) {
    const result: number = compare(value, value2);
    if (result !== undefined && result < 0) {
      return true;
    } else {
      return false;
    }
  }
  // 小于等于操作
  if (Object.is(op, 'LTANDEQ')) {
    const result: number = compare(value, value2);
    if (result !== undefined && result <= 0) {
      return true;
    } else {
      return false;
    }
  }
  // 不等于操作
  if (Object.is(op, 'NOTEQ')) {
    const _value = `${value}`;
    return _value !== value2;
  }
  // 值不包含在给定的范围中
  if (Object.is(op, 'NOTIN')) {
    return !contains(value, value2);
  }
  // 文本右包含
  if (Object.is(op, 'RIGHTLIKE')) {
    if (!(value && value2)) {
      return false;
    }
    const nPos = value.toUpperCase().indexOf(value2.toUpperCase());
    if (nPos === -1) {
      return false;
    }
    return nPos + value2.length === value.length;
  }
  return false;
}

/**
 * @description 比较值
 * @param {*} value 值1
 * @param {*} value2 值2
 * @return {*}  {number}
 */
function compare(value: any, value2: any): number {
  let result: any;
  if (!Object.is(value, '') && !Object.is(value2, '') && !isNaN(value) && !isNaN(value2)) {
    result = compareNumber(parseFloat(value), parseFloat(value2));
  } else if (isParseDate(value) && isParseDate(value2)) {
    result = compareDate(new Date(value).getTime(), new Date(value2).getTime());
  } else if (value && (typeof value === 'boolean' || value instanceof Boolean)) {
    result = compareBoolean(value, value2);
  } else if (value && (typeof value === 'string' || value instanceof String)) {
    result = compareString(value, value2);
  }
  return result;
}

/**
 * @description 比较数值
 * @param {number} value 值1
 * @param {number} value2 值2
 * @return {*}  {number}
 */
function compareNumber(value: number, value2: number): number {
  if (isNaN(value)) {
    value = 0;
  }
  if (isNaN(value2)) {
    value2 = 0;
  }
  if (value > value2) {
    return 1;
  } else if (value < value2) {
    return -1;
  } else {
    return 0;
  }
}

/**
 * @description 判断值是否是时间
 * @param {string} value 值
 * @return {*}  {boolean}
 */
function isParseDate(value: string): boolean {
  const time = new Date(value);
  if (isNaN(time.getTime())) {
    return false;
  }
  return true;
}

/**
 * @description 比较时间
 * @param {number} value 值1
 * @param {number} value2 值2
 * @return {*}  {number}
 */
function compareDate(value: number, value2: number): number {
  if (value > value2) {
    return 1;
  } else if (value < value2) {
    return -1;
  } else {
    return 0;
  }
}

/**
 * @description 比较布尔值
 * @param {*} value 值1
 * @param {*} value2 值2
 * @return {*}  {number}
 */
function compareBoolean(value: any, value2: any): number {
  if (value === value2) {
    return 0;
  } else {
    return -1;
  }
}

/**
 * @description 比较字符串
 * @param {*} value 值1
 * @param {*} value2 值2
 * @return {*}  {number}
 */
function compareString(value: any, value2: any): number {
  return value.localeCompare(value2);
}

/**
 * @description 文本包含
 * @param {*} value 值1
 * @param {*} value2 值2
 * @return {*}  {boolean}
 */
function contains(value: any, value2: any): boolean {
  if (value && value2) {
    let arr = [];
    arr = value2.split(',');
    const S = String.fromCharCode(2);
    const reg = new RegExp(S + value + S);
    return reg.test(S + arr.join(S) + S);
  }
  return false;
}
