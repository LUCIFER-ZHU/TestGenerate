import { VNode } from 'vue';
import moment from 'moment';

/**
 * 格式化指令
 *
 */
export const Format: any = {
  /**
   * @description 指令初始化
   * @param {HTMLDivElement} el 元素
   * @param {*} binding 指令
   * @param {VNode} vNode 节点
   * @param {VNode} oldVNode 旧节点
   */
  beforeMount(el: HTMLDivElement, binding: any, vNode: VNode, oldVNode: VNode) {
    format.init(el, binding, vNode);
  },

  /**
   * @description 指令更新
   * @param {HTMLDivElement} el
   * @param {*} binding
   * @param {VNode} vNode
   * @param {VNode} oldVNode
   */
  updated(el: HTMLDivElement, binding: any, vNode: VNode, oldVNode: VNode) {
    format.init(el, binding, vNode);
  },
};

/**
 * @description 格式化控制器
 * @export
 * @class FormatController
 */
export class FormatController {
  /**
   * @description 唯一实例
   * @private
   * @static
   * @memberof FormatController
   */
  private static readonly instance = new FormatController();

  /**
   * @description 容器
   * @protected
   * @type {HTMLElement}
   * @memberof FormatController
   */
  protected el!: HTMLElement;

  /**
   * Creates an instance of FormatController.
   * @memberof FormatController
   */
  private constructor() {
    if (FormatController.instance) {
      return FormatController.instance;
    }
  }

  /**
   * @description 获取唯一实例
   * @static
   * @return {*}  {FormatController}
   * @memberof FormatController
   */
  public static getInstance(): FormatController {
    return FormatController.instance;
  }

  /**
   * @description 初始化
   * @param {HTMLDivElement} el 元素
   * @param {*} binding 绑定值
   * @param {*} vnode 节点
   * @memberof FormatController
   */
  public init(el: HTMLDivElement, binding: any, vNode: any) {
    const value = el.innerText;
    const formatRule = binding.value;
    if (value && formatRule) {
      const returnValue = this.formatData(value, formatRule);
      el.innerHTML = this.encodeHtml(returnValue);
    }
  }

  /**
   * @description 格式化时间
   * @private
   * @param {*} newValue 新值
   * @param {*} oldValue 原始值
   * @param {string} dateFormat 日期格式化
   * @return {*}
   * @memberof FormatController
   */
  private formatDate(newValue: any, oldValue: any, dateFormat: string) {
    if (isNaN(oldValue) && !isNaN(Date.parse(oldValue))) {
      return moment(oldValue).format(dateFormat);
    } else {
      return newValue;
    }
  }

  /**
   * @description 格式化数据
   * @private
   * @param {string} value 值
   * @param {string} formatRule 格式化规则
   * @return {*}
   * @memberof FormatController
   */
  private formatData(value: any, formatRule: string) {
    const oldValue = value;
    let usedCalc: boolean = false;
    const formatRules = formatRule.split(';');
    if (formatRules.length < 4 && formatRules[0].match(/^\[(>|<|=|>=|<=|<>)\d+\]/)) {
      usedCalc = true;
    }
    let newFormatRule = this.handleFormatRules(value, formatRules);
    // 遇到 % 乘以 100
    if (newFormatRule.match(/[^*|\\|_]%/) !== null && value.toString().match(/^-?\d+(\.\d+)?$/)) {
      value = value * 100;
    }
    let codeZhengshuNumCount = 0;
    let codeXiaoshuNumCount = 0;
    let allEffectivePlaceholder = true;
    let isQianfenwei = false;
    let isFenShuwei = false;
    // 处理自定义格式中整数部分数字占位符个数
    if (newFormatRule.match(/(([#|0|\?](\\\.|[^#|0|\.])*)+)\.?/) !== null) {
      const temp = newFormatRule
        .replace(/[*|\\|_]{2}/g, '')
        .replace(/[*|\\|_]([#|0|\?])/g, '')
        .match(/(([#|0|\?](\\\.|[^#|0|\.])*)+)\.?/);
      if (temp) {
        codeZhengshuNumCount = temp[1].match(/([#|0|\?])/g)?.length || 0;
      }
    }
    // 处理千分位
    if (newFormatRule.match(/[^*|\\|_],/) !== null) {
      isQianfenwei = true;
      const endQianfenwei = (newFormatRule + ' ').match(/[^*|\\|_](,+)[^#|0|\?]/);
      if (endQianfenwei !== null) {
        // 是否有末尾千分位
        value = value / Math.pow(1000, endQianfenwei[1].length);
      }
    }
    // 处理小数
    if (newFormatRule.match(/\.(([#|0|\?]?(\\\.|[^#|0|\.])*)+)/) !== null) {
      const xiaoshuCode = (
        newFormatRule
          .replace(/[*|\\|_]{2}/g, '')
          ?.replace(/[*|\\|_]([#|0|\?])/g, '')
          ?.match(/\.(([#|0|\?]?(\\\.|[^#|0|\.])*)+)/) as any
      )[1];
      const xiaoshuNumSlot = xiaoshuCode?.match(/([#|0|\?])/g);
      if (xiaoshuCode.match(/^#+%?$/) === null) {
        allEffectivePlaceholder = false;
      }
      if (xiaoshuNumSlot === null) {
        codeXiaoshuNumCount = 0;
      } else {
        codeXiaoshuNumCount = xiaoshuNumSlot.length;
      }
    } else {
      // rule没有小数部分，直接四舍五入
      if (typeof value === 'number') {
        value = Math.round(value);
      }
    }
    // 处理分数
    const tempFenshuMatch = newFormatRule
      .replace(/[*|\\|_]{2}/g, '')
      .replace(/[*|\\|_]([#|0|\?])/g, '')
      .match(/(.*[^*|\\|_])\/[^\d|#|0|\?]*?([\d|#|0|\?]+)/);
    let fenmu: any;
    if (tempFenshuMatch) {
      //如果是分数表达式
      value = oldValue;
      const isHasZhengshu: any = tempFenshuMatch[1].match(/([#|0\?]+[^#|0\?]*)/g);
      fenmu = tempFenshuMatch[2];
      if (tempFenshuMatch.length >= 2) {
        isFenShuwei = true;
      }
      if (fenmu === '?') {
        const temp = this.parseNumber(parseFloat(value), 1);
        fenmu = temp[1];
      } else if (fenmu === '??') {
        const temp = this.parseNumber(parseFloat(value), 2);
        fenmu = temp[1];
      } else if (fenmu === '???') {
        const temp = this.parseNumber(parseFloat(value), 3);
        fenmu = temp[1];
      }
      const runValue = parseInt(((parseInt((value * fenmu * 2).toString()) + 1) / 2).toString());
      if (isHasZhengshu.length >= 2) {
        value = [parseInt((runValue / fenmu).toString()), runValue % fenmu];
      }
      if (isHasZhengshu.length >= 2) {
        codeZhengshuNumCount = isHasZhengshu[0].match(/([#|0\?])[^#|0\?]*/g).length;
        codeXiaoshuNumCount = isHasZhengshu[1].match(/([#|0\?])[^#|0\?]*/g).length;
      } else {
        codeZhengshuNumCount = 0;
        codeXiaoshuNumCount = isHasZhengshu[0].length;
        value = [0, runValue];
      }
    } else {
      // 如果是一个极小的数字，例如9.568181142949328e-7
      const e = value.toString().match(/e([+|-])(\d+)$/);
      value = value.toString().split('.');
      if (e) {
        if (e[1] === '-') {
          if (e[2] > 0) {
            value = [
              0,
              Array(e[2] - 1)
                .fill(0)
                .join('') +
                value[0] +
                value[1].replace(/e-(\d+)$/, ''),
            ];
          }
        }
      }
    }
    value[0] = Math.abs(value[0]).toString();
    let temp = '';
    const returnValue = ['', '', ''];
    let returnHtml = '';
    // 已经跑完的数字位置
    let finishedNumCount = 0;
    let styleColor = '';
    while (newFormatRule.length > 0) {
      temp = newFormatRule[0];
      if (temp === '_') {
        returnHtml += '<span style="opacity: 0">' + newFormatRule[1] + '</span>';
        newFormatRule = newFormatRule.slice(2);
      } else if (temp === '*') {
        returnValue[0] = returnHtml;
        if (newFormatRule[1] !== '=') {
          returnValue[1] += newFormatRule[1];
        }
        returnHtml = '';
        newFormatRule = newFormatRule.slice(2);
      } else if (temp === '[') {
        newFormatRule = newFormatRule.slice(1);
        const type: any = newFormatRule.match(/^([^\]]+)\]/);
        const styleColorList: any = {
          红色: 'red',
          黑色: 'black',
          黄色: 'yellow',
          绿色: 'green',
          白色: 'white',
          蓝色: 'blue',
          青色: 'cyan',
          洋红: 'magenta',
        };
        const findStr = newFormatRule.match(/^\[\$(\S)-804\]/);
        if (Object.keys(styleColorList).includes(type[1])) {
          styleColor = styleColorList[type[1]];
          returnHtml += '';
        } else if (findStr) {
          newFormatRule = newFormatRule.replace(/^\[\$(\S)-804\]/, '');
          returnHtml += findStr[1];
        }
        newFormatRule = newFormatRule.slice(type.length + 1);
      } else if (temp === '#' || temp === '0' || temp === '?') {
        const match = newFormatRule.match(/^([#|0]+)\.([#|0]+)E\+([#|0]+)/);
        if (match) {
          // 科学计数法
          let match1Length = match[1].length;
          const match2Length = match[2].length;
          const match3Length = match[3].length;
          let firstWeishu = value[0].length; //整数位数
          let chengshu = 0;
          if (value.length > 1) {
            //有小数部分
            if (value[0] === 0) {
              //数字是小于1的
              value[0] = '';
              let ppp = 0;
              while (ppp++ < 100) {
                if (value[1][0] !== '0') {
                  value[0] += value[1][0];
                }
                value[1] = value[1].slice(1);
                chengshu--;
                if (value[1].length === 0) {
                  //if(value[0]=='0'){
                  value = [value[0]];
                  firstWeishu = value[0].length;
                  break;
                }
              }
              //小于1的,表达式整数无论多少位,只进步到一位有效数字,在excel尝试得到,不知道原因
              if (match1Length > 1) {
                for (let i = 0; i < match1Length - 1; i++) {
                  returnHtml += '0';
                }
              }
              match1Length = 1;
            } else {
              value = [value[0] + value[1]];
            }
          }
          returnHtml += value[0].toString().slice(0, match1Length) + '.'; //整数位
          //小数部分
          let xiaoshuValue = '';
          for (let i = match2Length + match1Length; i >= match1Length + 1; i--) {
            if (newFormatRule[i] === '#' && xiaoshuValue === '' && value[0][i - 1] === '0') {
              return;
            } else if (value[0][i - 1] !== undefined) {
              xiaoshuValue = value[0][i - 1] + xiaoshuValue;
            } else if (newFormatRule[i] === '0') {
              xiaoshuValue = '0' + xiaoshuValue;
            }
          }
          returnHtml += xiaoshuValue + 'E';
          returnHtml += firstWeishu > match1Length - chengshu ? '+' : '-';
          //指数部分
          const valueTemp = Math.abs(firstWeishu - match1Length + chengshu);
          if (valueTemp.toString().length < match3Length) {
            for (let i = 0; i < match3Length - valueTemp.toString().length; i++) {
              returnHtml += '0';
            }
          }
          returnHtml += valueTemp;
          newFormatRule = newFormatRule.replace(/^([#|0]+)\.([#|0]+)E\+([#|0]+)/, '');
        } else {
          if (finishedNumCount >= codeZhengshuNumCount) {
            //进入小数区间,或者分数区间
            if (isFenShuwei === true) {
              if (finishedNumCount > codeZhengshuNumCount + codeXiaoshuNumCount - 1) {
                //进入分母区间了
                const oldReturnHtml = returnHtml;
                if (fenmu.toString()[finishedNumCount - codeZhengshuNumCount - codeXiaoshuNumCount]) {
                  returnHtml += fenmu.toString(); //[finishedNumCount - codeZhengshuNumCount - codeXiaoshuNumCount];
                } else if (temp === '0') {
                  returnHtml += '0';
                } else if (temp === '?') {
                  returnHtml += ' ';
                }
                newFormatRule = newFormatRule.slice(returnHtml.length - oldReturnHtml.length);
              } else {
                if (value.length === 2 && value[1].length > codeXiaoshuNumCount) {
                  returnHtml += value[1];
                  newFormatRule = newFormatRule.slice(codeXiaoshuNumCount);
                } else {
                  if (
                    value.length === 2 &&
                    finishedNumCount - codeZhengshuNumCount > codeXiaoshuNumCount - value[1].length - 1
                  ) {
                    returnHtml +=
                      value[1][value[1].length - codeXiaoshuNumCount + finishedNumCount - codeZhengshuNumCount];
                  } else if (temp === '0') {
                    returnHtml += '0';
                  } else if (temp === '?') {
                    returnHtml += ' ';
                  }
                  newFormatRule = newFormatRule.slice(1);
                }
              }
            } else {
              if (value.length === 2 && value[1].length > finishedNumCount - codeZhengshuNumCount) {
                returnHtml += value[1][finishedNumCount - codeZhengshuNumCount];
              } else if (temp === '0') {
                returnHtml += '0';
              } else if (temp === '?') {
                returnHtml += ' ';
              }
              newFormatRule = newFormatRule.slice(1);
            }
          } else if (codeZhengshuNumCount - finishedNumCount <= value[0].length) {
            // 整数部分   code 3个   value 2个， finishedNumCount应该1就进入
            if (finishedNumCount === 0) {
              // 整数之前的部分(code位少)
              // 整数部分 虽然code的位数不够,则都显示
              for (let i = 0; i < value[0].length - codeZhengshuNumCount; i++) {
                returnHtml += value[0][i];
                if (isQianfenwei && (value[0].length - i) % 3 === 1) {
                  returnHtml += ',';
                }
              }
            }
            if (value[0] === '0') {
              if (temp === '0') {
                returnHtml += '0';
              } else if (temp === '?') {
                returnHtml += ' ';
              }
            } else {
              returnHtml += value[0][value[0].length + finishedNumCount - codeZhengshuNumCount];
            }
            if (!(isFenShuwei && value[0] === '0')) {
              if (
                isQianfenwei &&
                (codeZhengshuNumCount - finishedNumCount) % 3 === 1 &&
                codeZhengshuNumCount - finishedNumCount !== 1
              ) {
                returnHtml += ',';
              }
            }
            newFormatRule = newFormatRule.slice(1);
          } else {
            if (temp === '0') {
              returnHtml += '0';
            } else if (temp === '?') {
              returnHtml += ' ';
            }
            if (
              isQianfenwei &&
              (codeZhengshuNumCount - finishedNumCount) % 3 === 1 &&
              codeZhengshuNumCount - finishedNumCount !== 1
            ) {
              returnHtml += ',';
            }
            newFormatRule = newFormatRule.slice(1);
          }
          finishedNumCount++;
        }
      } else if (temp === '@') {
        returnHtml += oldValue;
        newFormatRule = newFormatRule.slice(1);
      } else if (temp === '"') {
        const findStr: any = newFormatRule.match(/^"([^"]*)"/);
        returnHtml += findStr[1];
        newFormatRule = newFormatRule.replace(/^"([^"]*)"/, '');
      } else if (temp === '\\' || temp === '!') {
        returnHtml += newFormatRule[1];
        newFormatRule = newFormatRule.slice(2);
      } else if (temp === ',') {
        newFormatRule = newFormatRule.slice(1);
      } else if (temp === '.') {
        //真实数字精度大于格式小数精度,则进行四舍五入
        if (finishedNumCount === codeZhengshuNumCount && value.length === 2 && value[1].length > codeXiaoshuNumCount) {
          // 前面添加一个1，后面再删除，是为了防止第一位是0，造成的省略
          const fixed = Math.round(
            parseFloat('1' + value[1].slice(0, codeXiaoshuNumCount) + '.' + value[1].slice(codeXiaoshuNumCount)),
          )
            .toString()
            .slice(1);
          value[1] = parseFloat('0.' + fixed)
            .toFixed(codeXiaoshuNumCount)
            .split('.')[1]
            .replace(/0+$/, '');
          if (value[1].match(/^0+$/) !== null) {
            value = [value[0]];
          }
        }
        if (allEffectivePlaceholder) {
          // 如果小数点后面都是#，而且遇到了整数，则判断小数点是无效的
          // ##.## 遇到【3】，最终显示【 3 】，而不是【 3. 】
          if (value[1]) {
            returnHtml += temp;
          }
        } else {
          returnHtml += temp;
        }
        newFormatRule = newFormatRule.slice(1);
      } else {
        returnHtml += temp;
        newFormatRule = newFormatRule.slice(1);
      }
    }
    returnHtml = this.formatDate(returnHtml, oldValue, formatRule);
    returnValue[2] = returnHtml;
    // 如果只配置了规则或者颜色，等于默认填充了值
    if ((usedCalc || styleColor) && returnHtml === '') {
      returnValue[2] = oldValue;
    }
    if (styleColor !== '') {
      returnValue[3] = styleColor;
    }
    return returnValue;
  }

  /**
   * @description 处理格式化规则
   * 根据格式化规则对 正 负 零 区分显示规则处理
   * @private
   * @param {*} value 值
   * @param {string} formatRule 格式化规则
   * @return {*}  {string}
   * @memberof FormatController
   */
  private handleFormatRules(value: any, formatRules: string[]): string {
    let matchFunc = [
      // 正数
      function (value: any) {
        return parseFloat(value).toString() === value.toString() && parseFloat(value) > 0;
      },
      // 负数
      function (value: any) {
        return parseFloat(value).toString() === value.toString() && parseFloat(value) < 0;
      },
      // 0
      function (value: any) {
        return value === 0 || value === '0' || value === '-0';
      },
      // 文本
      function () {
        return true;
      },
    ];
    // 是否匹配
    const isMatch = function (value: any, temp1: any, temp2: any) {
      if (temp1 === '=') {
        temp1 = '==';
      }
      switch (temp1) {
        case '>':
          return parseFloat(value) > parseFloat(temp2);
        case '<':
          return parseFloat(value) < parseFloat(temp2);
        case '>=':
          return parseFloat(value) >= parseFloat(temp2);
        case '<=':
          return parseFloat(value) <= parseFloat(temp2);
        case '<>':
          return parseFloat(value) !== parseFloat(temp2);
        case '==':
          return parseFloat(value) === parseFloat(temp2);
      }
    };

    if (formatRules.length < 4 && formatRules[0].match(/^\[(>|<|=|>=|<=|<>)\d+\]/)) {
      // 使用了条件表达式
      matchFunc = [
        function (value: any) {
          const temp: any = formatRules[0].match(/^\[(>|<|=|>=|<=|<>)(\d+)\]/);
          return isMatch(value, temp[1], temp[2]) || true;
        },
        function (value: any) {
          const temp: any = formatRules[1].match(/^\[(>|<|=|>=|<=|<>)(\d+)\]/);
          return isMatch(value, temp[1], temp[2]) || true;
        },
        function () {
          return true;
        },
      ];
    }
    if (formatRules.length === 3) {
      formatRules[3] = '@';
    } else if (formatRules.length === 2) {
      formatRules[3] = '@';
      formatRules[2] = formatRules[0];
    } else if (formatRules.length === 1) {
      if (formatRules[0].includes('@')) {
        formatRules[3] = formatRules[0];
      } else {
        formatRules[3] = '@';
      }
      formatRules[2] = formatRules[0];
      formatRules[1] = '-' + formatRules[0];
    }
    let newFormatRule: string = '';
    for (const i in matchFunc) {
      if (matchFunc[i](value)) {
        newFormatRule = formatRules[i];
        break;
      }
    }
    return newFormatRule;
  }

  /**
   * @description 解析数字
   * @param {number} num 值
   * @param {number} placeholder 占位数
   * @return {*}
   * @memberof FormatController
   */
  private parseNumber(num: number, placeholder: number) {
    const numList = num.toString().split('.');
    num = parseFloat('0.' + numList[1]);
    let nearHalf = [0, 1];
    for (let fenmu = 1; fenmu < Math.pow(10, placeholder); fenmu++) {
      let begin = 1;
      let end = fenmu - 1;
      let half = 0;
      let tag: boolean = true;
      while (tag) {
        half = begin + parseInt(((end - begin) / 2).toString());
        if (half / fenmu === num) {
          begin = half;
          end = half;
          tag = false;
        }
        if (half / fenmu > num) {
          end = half;
        } else {
          begin = half;
        }
        if (end - begin <= 1) {
          tag = false;
        }
      }
      if (half / fenmu === num) {
        nearHalf = [half, fenmu];
        tag = false;
      }
      if (begin / fenmu === num) {
        nearHalf = [begin, fenmu];
        tag = false;
      }
      if (end / fenmu === num) {
        nearHalf = [end, fenmu];
        tag = false;
      }
      if (placeholder === 1 || (placeholder === 2 && fenmu >= 10) || (placeholder === 3 && fenmu >= 100)) {
        if (Math.abs(end / fenmu - num) < Math.abs(nearHalf[0] / nearHalf[1] - num)) {
          nearHalf = [end, fenmu];
        }
      }
    }
    nearHalf[0] = parseInt(nearHalf[0].toString()) + parseFloat(numList[0]) * nearHalf[1];
    return nearHalf;
  }

  /**
   * @description Html
   * @param {*} [value0, value1, value2, style]
   * @return {*}
   * @memberof FormatController
   */
  private encodeHtml([value0, value1, value2, style]: any) {
    if (value1) {
      const fillValue = value1.repeat(1000);
      return (
        '<span class="vue-format-single' +
        (style ? ' vue-format-single-color-' + style : '') +
        '">' +
        (value0 ? '<span>' + value0 + '</span>' : '') +
        ('<span class="vue-format-single-fill">' + fillValue + '</span>') +
        (value2 ? '<span>' + value2 + '</span>' : '') +
        '</span>'
      );
    } else {
      if (style) {
        return (
          '<span class="vue-format-single' +
          (' vue-format-single-color-' + style) +
          '">' +
          [value0, value1, value2].join('') +
          '</span>'
        );
      } else {
        return [value0, value1, value2].join('');
      }
    }
  }
}

// 导出服务
export const format: FormatController = FormatController.getInstance();
