type LayoutMode = 'FLEX' | 'TABLE_24COL' | 'TABLE_12COL';

/**
 * 布局配置
 *
 * @export
 * @interface ILayoutOpts
 */
export interface ILayoutOpts {
  /**
   * 自身的容器布局模式(容器才有)
   */
  selfLayout?: LayoutMode;

  /**
   * 父容器的布局模式（作为子才有）
   */
  parentLayout?: LayoutMode;

  /**
   * Flex横轴对齐方向
   */
  align?: string | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';

  /**
   * Flex布局方向
   */
  dir?: string | 'row' | 'row-reverse' | 'column' | 'column-reverse';

  /**
   * Flex纵轴对齐方向
   */
  vAlign?: string | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

  /**
   * Flex延伸
   * @type {number}
   */
  grow?: number;

  /**
   * 大型列宽
   * @type {number}
   * @default -1
   */
  colLG?: number;

  /**
   * 大型偏移
   * @type {number}
   * @default -1
   */
  colLGOffset?: number;

  /**
   * 中型列宽
   * @type {number}
   * @default -1
   */
  colMD?: number;

  /**
   * 中型偏移
   * @type {number}
   * @default -1
   */
  colMDOffset?: number;

  /**
   * 小型列宽
   * @type {number}
   * @default -1
   */
  colSM?: number;

  /**
   * 小型偏移
   * @type {number}
   * @default -1
   */
  colSMOffset?: number;

  /**
   * 固定列宽
   * @type {number}
   * @default -1
   */
  colWidth?: number;

  /**
   * 超小列宽
   * @type {number}
   * @default -1
   */
  colXS?: number;

  /**
   * 超小偏移
   * @type {number}
   * @default -1
   */
  colXSOffset?: number;
}
