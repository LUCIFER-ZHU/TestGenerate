
export class UIActionUtil {

  /**
   * 格式化数据
   *
   * @private
   * @static
   * @param {*} actionTarget
   * @param {*} args
   * @param parentContext
   * @param parentParams
   * @param {*} _params
   * @returns {*}
   * @memberof UIActionUtil
   */
  public static formatDataActionData(actionTarget: any, args: any, parentContext: any, parentParams: any, _params: any): any {
    const _data: any = {};
    if (
        Object.is(actionTarget, 'SINGLEKEY') ||
        Object.is(actionTarget, 'NONE') ||
        Object.is(actionTarget, 'SINGLEDATA')
    ) {
      let arg:any = {};
      if(args){
        [arg] = args;
      }
      Object.keys(_params).forEach((name: string) => {
        let hasProperty = true;
        if (!name) {
          return;
        }
        let value: string | null = _params[name];
        if (value && typeof value === 'string' && value.startsWith('%') && value.endsWith('%')) {
          const key = value.substring(1, value.length - 1);
          if (
              arg &&
              arg.hasOwnProperty(key) &&
              (Object.is(actionTarget, 'SINGLEKEY') ||
                  Object.is(actionTarget, 'SINGLEDATA') ||
                  Object.is(actionTarget, 'NONE'))
          ) {
            value = arg[key] !== null && arg[key] !== undefined ? arg[key] : null;
          } else if (parentContext && parentContext.hasOwnProperty(key)) {
            value = parentContext[key] !== null && parentContext[key] !== undefined ? parentContext[key] : null;
          } else if (parentParams && parentParams.hasOwnProperty(key)) {
            value = parentParams[key] !== null && parentParams[key] !== undefined ? parentParams[key] : null;
          } else {
            hasProperty = false;
          }
        }
        if (hasProperty) {
          Object.assign(_data, { [name.toLowerCase()]: value });
        }
      });
    } else if (Object.is(actionTarget, 'MULTIKEY')) {
      Object.keys(_params).forEach((name: string) => {
        let noPropertyNum = 0;
        if (!name) {
          return;
        }
        let value: string | null = _params[name];
        const values: any[] = [];
        if (value && typeof value === 'string' && value.startsWith('%') && value.endsWith('%')) {
          const key = value.substring(1, value.length - 1);
          args.forEach((arg: any) => {
            if (arg && arg.hasOwnProperty(key)) {
              value = arg[key] !== null && arg[key] !== undefined ? arg[key] : null;
            } else if (parentContext && parentContext.hasOwnProperty(key)) {
              value = parentContext[key] !== null && parentContext[key] !== undefined ? parentContext[key] : null;
            } else if (parentParams && parentParams.hasOwnProperty(key)) {
              value = parentParams[key] !== null && parentParams[key] !== undefined ? parentParams[key] : null;
            } else {
              value = null;
              noPropertyNum++;
            }
            values.push(value);
          });
        }
        if (values.length !== noPropertyNum) {
          Object.assign(_data, { [name.toLowerCase()]: values.length > 0 ? values.join(',') : value });
        }
      });
    }
    return _data;
  }

}
