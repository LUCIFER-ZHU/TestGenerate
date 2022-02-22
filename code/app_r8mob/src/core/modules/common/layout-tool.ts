import { ILayoutOpts, notEmpty } from '@core';
import { isNumber } from 'qx-util';
import { Ref } from 'vue';

/**
 * 布局逻辑工具类
 *
 * @export
 * @class LayoutTool
 */
export class LayoutTool {
  /**
   * 获取flex布局样式（父容器）
   *
   * @static
   * @param {*} layoutOpts 布局设置
   * @returns {string}
   * @memberof LayoutTool
   */
  public static getRowFlexStyle(layoutOpts: ILayoutOpts): string {
    if (layoutOpts?.selfLayout == 'FLEX') {
      const { dir, align, vAlign } = layoutOpts;
      let cssStyle: string = 'width: 100%; height: 100%; overflow: auto; display: flex;';
      cssStyle += dir ? `flex-direction: ${dir};` : '';
      cssStyle += align ? `justify-content: ${align};` : '';
      cssStyle += vAlign ? `align-items: ${vAlign};` : '';
      return cssStyle;
    } else {
      return '';
    }
  }

  /**
   * 获取flex布局样式2(子)
   *
   * @static
   * @param {*} layoutOpts 布局位置
   * @returns {string}
   * @memberof LayoutTool
   */
  public static getColFlexStyle(layoutOpts: ILayoutOpts): string {
    if (layoutOpts?.parentLayout == 'FLEX' && notEmpty(layoutOpts.grow)) {
      let grow = layoutOpts.grow! < 0 ? 0 : layoutOpts.grow;
      return `flex-grow: ${grow};`;
    }
    return '';
  }

  /**
   * 获取栅格布局参数
   *
   * @static
   * @param {*} layoutOpts
   * @memberof LayoutTool
   */
  public static getGridOptions(layoutOpts: ILayoutOpts, isTurn24: boolean = true) {
    if (layoutOpts.parentLayout != 'TABLE_24COL' && layoutOpts.parentLayout != 'TABLE_12COL') {
      return;
    }
    let colLG = this.formatColSpan(layoutOpts.colLG, layoutOpts.parentLayout);
    let colMD = this.formatColSpan(layoutOpts.colMD, layoutOpts.parentLayout);
    let colSM = this.formatColSpan(layoutOpts.colSM, layoutOpts.parentLayout);
    let colXS = this.formatColSpan(layoutOpts.colXS, layoutOpts.parentLayout);
    let colLGOffset = isNumber(layoutOpts.colLGOffset) ? layoutOpts.colLGOffset : 0;
    let colMDOffset = isNumber(layoutOpts.colMDOffset) ? layoutOpts.colMDOffset : 0;
    let colSMOffset = isNumber(layoutOpts.colSMOffset) ? layoutOpts.colSMOffset : 0;
    let colXSOffset = isNumber(layoutOpts.colXSOffset) ? layoutOpts.colXSOffset : 0;
    let multiplier = 1;
    if (isTurn24) {
      multiplier = layoutOpts.parentLayout == 'TABLE_24COL' ? 1 : 2;
    }
    return {
      xs: { span: colXS * multiplier, offset: colXSOffset! * multiplier },
      sm: { span: colSM * multiplier, offset: colSMOffset! * multiplier },
      md: { span: colMD * multiplier, offset: colMDOffset! * multiplier },
      lg: { span: colLG * multiplier, offset: colLGOffset! * multiplier },
    };
  }

  /**
   * 格式化栅格的列宽,对超出范围值的作出修改或设置默认值
   *
   * @static
   * @param {*} span 栅格列宽
   * @param {string} layoutMode 栅格类型(TABLE_24COL,TABLE_12COL)
   * @returns
   * @memberof LayoutTool
   */
  public static formatColSpan(span: any, layoutMode: string) {
    let colDefault = layoutMode == 'TABLE_24COL' ? 24 : 12;
    // 空值传默认值
    if (!isNumber(span)) {
      return colDefault;
    }
    // 小于0传默认值，大于默认值传默认值，其他传原值
    if (span < 0 || span > colDefault) {
      return colDefault;
    } else {
      return span;
    }
  }

  /**
   * 使用容器布局逻辑,获得如下返回值
   * rowStyle flex布局时作为父容器的样式
   * colStyle flex布局时作为子元素的样式
   * colGridOpts 栅格布局时作为子元素的占位和偏移
   *
   * @static
   * @param layoutOpts
   * @return {*}
   */
  public static useLayout(layoutOpts: Ref<ILayoutOpts>) {
    // 创建新的ref对象
    const layoutResult: Ref<{ rowStyle: string; colStyle: string; colGridOpts: any }> = ref({
      rowStyle: '',
      colStyle: '',
      colGridOpts: {},
    });
    watch(
      layoutOpts,
      (newVal, oldVal) => {
        layoutResult.value.rowStyle = this.getRowFlexStyle(newVal);
        layoutResult.value.colStyle = this.getColFlexStyle(newVal);
        layoutResult.value.colGridOpts = this.getGridOptions(newVal);
      },
      {
        immediate: true,
        deep: true,
      },
    );
    return layoutResult;
  }
}
