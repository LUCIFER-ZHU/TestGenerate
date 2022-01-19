import { IParam } from "@core";

/**
 * 视图相关处理逻辑工具类
 *
 * @export
 * @class UIUtil
 */
export class UIUtil {
  /**
   * @description 计算界面行为项权限状态
   * @export
   * @param {IParam} data 传入数据
   * @param {IParam} actionModel 界面行为模型
   * @param {*} UIService 界面行为服务
   * @return {*} 
   */
  public static calcActionItemAuthState(data: IParam, actionModel: IParam, UIService: any) {
    const result: any[] = [];
    if (!UIService) return;
    for (const key in actionModel) {
      if (!actionModel.hasOwnProperty(key)) {
        return result;
      }
      const item = actionModel[key];
      let dataActionResult: any;
      if (item && item['dataAccessAction']) {
        if (Object.is(item['actionTarget'], 'NONE') || Object.is(item['actionTarget'], '')) {
          dataActionResult = UIService.getAllOPPrivs({}, item['dataAccessAction']);
        } else {
          if (data && Object.keys(data).length > 0) {
            dataActionResult = UIService.getAllOPPrivs(data, item['dataAccessAction']);
          }
        }
      } else {
        dataActionResult = 1;
      }
      // 无权限:0;有权限:1
      if (dataActionResult === 0) {
        // 禁用:1;隐藏:2;隐藏且默认隐藏:6
        if (item.noPrivDisplayMode === 1) {
          item.disabled = true;
        }
        if (item.noPrivDisplayMode === 2 || item.noPrivDisplayMode === 6) {
          item.visible = false;
        } else {
          item.visible = true;
        }
      }
      if (dataActionResult === 1) {
        item.visible = true;
        item.disabled = false;
      }
      // 返回权限验证的结果
      item.dataActionResult = dataActionResult;
      result.push(dataActionResult);
    }
    return result;
  }

  /**
   * @description 计算导航数据
   * 先从当前激活数据计算，然后再从当前上下文计算，最后从当前视图参数计算，没有则为null
   * @export
   * @param {*} activedata 当前激活数据
   * @param {*} context 当前上下文
   * @param {*} viewParam 当前视图参数
   * @param {*} params 导航参数
   * @return {*} 
   */
  public static computedNavData(activedata: any, context: any, viewParam: any, params: any): any {
    const _data: any = {};
    if (params && Object.keys(params).length > 0) {
      Object.keys(params).forEach((name: string) => {
        if (!name) {
          return;
        }
        let value: string | null = params[name];
        if (value && value.toString().startsWith('%') && value.toString().endsWith('%')) {
          const key = value.substring(1, value.length - 1).toLowerCase();
          if (activedata && activedata.hasOwnProperty(key)) {
            value = activedata[key];
          } else if (context && context[key]) {
            value = context[key];
          } else if (viewParam && viewParam[key]) {
            value = viewParam[key];
          } else {
            value = null;
          }
        }
        Object.assign(_data, { [name.toLowerCase()]: value });
      });
    }
    return _data;
  }

  /**
 * @description 值规则校验
 * @export
 * @param {Record<any, any>} props
 */
  public static async verifyRules(_rule: any, value: any, condition: any) {
    //常规规则
    if (Object.is(condition.Type, 'SIMPLE')) {
      //todo
      // 数值范围
    } else if (Object.is(condition.Type, 'VALUERANGE2')) {
      if (!value) {
        return;
      }
      if (!Number.isInteger(value)) {
        return Promise.reject('请输入数值！');
      } else {
        if (condition.includeMinValue && Object.is(value, condition.minValue)) {
          return Promise.resolve();
        } else if (condition.includeMaxValue && Object.is(value, condition.maxValue)) {
          return Promise.resolve();
        } else if (value > condition.minValue && value < condition.maxValue) {
          return Promise.resolve();
        }
      }
      // 正则式
    } else if (Object.is(condition.Type, 'REGEX')) {
      // 长度
    } else if (Object.is(condition.Type, 'STRINGLENGTH')) {
      // 系统值规则
    } else if (Object.is(condition.Type, 'SYSVALUERULE')) {
    }
  }
}
