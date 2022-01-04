/**
 * @description 界面行为对象
 * @export
 * @interface IUIAction
 */
 export interface IUIAction {

  /**
   * 界面行为模式
   * @description 值模式 [云实体界面行为类型] {SYS：系统预定义、 FRONT：前台调用、 BACKEND：后台调用、 WFFRONT：工作流前台调用、 WFBACKEND：工作流后台调用 }
   * @type {( string | 'SYS' | 'FRONT' | 'BACKEND' | 'WFFRONT' | 'WFBACKEND')}
   */
   uIActionMode: string | 'SYS' | 'FRONT' | 'BACKEND' | 'WFFRONT' | 'WFBACKEND';

  /**
   * 界面行为标记
   * @type {string}
   */
   uIActionTag: string;

}