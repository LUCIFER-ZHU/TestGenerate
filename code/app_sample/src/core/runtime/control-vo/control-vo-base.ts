import { deepCopy, IParam } from '@core';

export class ControlVOBase {
  /**
   * @description 后台数据对象
   * @protected
   * @type {*}
   * @memberof ControlVOBase
   */
  protected $DO: any = {};

  /**
   * @description 自有属性名称集合
   * @type {string[]}
   * @memberof ControlVOBase
   */
  public $ownKeys: string[] = [];

  /**
   *  "0"是新建数据，"1"是已存在的数据
   */
  get srfuf(){
    if(this.$DO.srfuf){
      return this.$DO.srfuf
    }else{
      return this.srfkey ? "1" : "0"
    }
  }

  set srfuf(value: any){
    this.$DO.srfuf = value;
  }

  /**
   * 用后台数据对象创建部件数据对象
   * @param data 后台数据
   */
  constructor(data?: any) {
    this.setDo(data);
  }

  /**
   * 拷贝后台原始数据对象并保存在$DO里面
   * @param data 后台数据
   */
  public setDo(data: any) {
    if (data) {
      this.$DO = deepCopy(data);
    }
  }

  /**
   * 返回后台数据
   * 已经深拷贝可以修改赋值。
   */
  public getDo() {
    return deepCopy(this.$DO);
  }

  /**
   * 清空数据对象，会做以下操作：
   * - 后台数据$DO赋值{}
   * - 没有后台映射的自有属性赋值undefined
   * - delete其他非保留属性
   */
  public clear() {
    for (const key of Object.keys(this)) {
      if (key == '$DO') {
        // 后台数据$DO赋值{}
        this.$DO = {};
      } else if (this.$ownKeys.indexOf(key) != -1) {
        // 没有后台映射的自有属性赋值undefined
        this[key] = undefined;
      } else if (key != '$ownKeys') {
        // delete其他非保留属性
        delete this[key];
      }
    }
  }

  /**
   * 克隆方法(创建一个新的ControlVO对象)
   * 拥有ControlVO的功能，且与原对象的互不影响。
   *
   */
  public clone(){

  }

  /**
   * 转换成普通js对象，拷贝所有的数据
   *
   */
  public toObject(){
    return {};
  }

  /**
   * @description 是否含有属性
   * @param {string} key 属性名
   * @return {*}  {boolean}
   * @memberof ControlVOBase
   */
  public hasKey(key: string): boolean {
    if (this.hasOwnProperty(key) || key in this) {
      return true;
    }
    return false;
  }

  /**
   * 用后台数据重置数据对象
   * @param data 后台数据
   */
  public reSet(data: any){
    this.clear();
    this.setDo(data);
  }

  // 声明任意属性
  [propName: string]: any;
}
