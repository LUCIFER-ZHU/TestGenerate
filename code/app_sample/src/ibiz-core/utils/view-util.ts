import { IParam } from "@ibiz-core";

/**
 * @description 计算界面行为项权限状态
 * @export
 * @param {IParam} data 传入数据
 * @param {IParam} actionModel 界面行为模型
 * @param {*} UIService 界面行为服务
 * @return {*} 
 */
export function calcActionItemAuthState(data: IParam, actionModel: IParam, UIService: any) {
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
      if (item.getNoPrivDisplayMode === 1) {
        item.disabled = true;
      }
      if (item.getNoPrivDisplayMode === 2 || item.getNoPrivDisplayMode === 6) {
        item.visabled = false;
      } else {
        item.visabled = true;
      }
    }
    if (dataActionResult === 1) {
      item.visabled = true;
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
 * 先从当前数据目标计算，然后再从当前上下文计算，最后从当前视图参数计算，没有则为null
 * @export
 * @param {*} data 当前数据目标
 * @param {*} parentContext 当前上下文
 * @param {*} parentParam 当前视图参数
 * @param {*} params 导航参数
 * @return {*} 
 */
export function computedNavData(data: any, parentContext: any, parentParam: any, params: any): any {
  const _data: any = {};
  if (params && Object.keys(params).length > 0) {
    Object.keys(params).forEach((name: string) => {
      if (!name) {
        return;
      }
      let value: string | null = params[name];
      if (value && value.toString().startsWith('%') && value.toString().endsWith('%')) {
        const key = value.substring(1, value.length - 1).toLowerCase();
        if (data && data.hasOwnProperty(key)) {
          value = data[key];
        } else if (parentContext && parentContext[key]) {
          value = parentContext[key];
        } else if (parentParam && parentParam[key]) {
          value = parentParam[key];
        } else {
          value = null;
        }
      }
      Object.assign(_data, { [name.toLowerCase()]: value });
    });
  }
  return _data;
}