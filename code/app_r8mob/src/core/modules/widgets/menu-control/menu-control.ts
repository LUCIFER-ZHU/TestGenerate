import { Ref } from 'vue';
import { MenuControlProps, MenuControlState, IActionParam, ControlBase, IParam, AppFuncService, deepCopy } from '@core';

/**
 * @description 菜单部件
 * @export
 * @class MenuControl
 * @extends {ControlBase}
 */
export class MenuControl extends ControlBase {
  
  /**
   * @description 部件状态
   * @type {MenuControlState}
   * @memberof MenuControl
   */
  public declare controlState: MenuControlState;

  /**
   * @description 根据props调整设置部分部件基类
   * @param {MenuControlProps} props 菜单输入属性
   * @memberof MenuControl
   */
  public setState(props: MenuControlProps) {
    super.setState(props);
    this.controlState.defaultView = toRef(props, 'defaultView') as any;
    this.controlState.menuAlign = toRef(props, 'menuAlign') as any;
  }

  /**
   * @description 计算有效菜单项
   * @param {IParam[]} items 菜单项集合
   * @memberof MenuControl
   */
  public computedEffectiveMenus(items: IParam[]) {
    items.forEach((item: IParam) => {
      const { authService } = this.controlState;
      // TODO 获取菜单权限
      // if (!authService?.getMenusPermission?.(item)) {
      //   item.hidden = true;
      // }
      if (item.items?.length > 0) {
        this.computedEffectiveMenus(item.items);
      }
    })
  }

  /**
   * @description 处理默认展开项
   * @param {IParam[]} items 菜单集合
   * @memberof MenuControl
   */
  public handleDefaultOpens(items: IParam[], defaultOpens: Ref<string[]>) {
    items.forEach((item: any) => {
      if (item.expanded) {
        defaultOpens.value = [... defaultOpens.value, item.name];
      }
      if (item.items?.length > 0) {
        this.handleDefaultOpens(item.items, defaultOpens);
      }
    });
  }

  /**
   * @description 处理菜单默认选中
   * @memberof MenuControl
   */
  public handleDefaultSelect() {
    const { funcs, defaultView, menuAlign } = this.controlState;
    const defaultSelectRef = toRef(this.controlState, 'defaultSelect');
    const dataRef = toRef(this.controlState, 'menus');
    if (this.route.matched?.length == 2) {
      const [{ }, matched] = this.route.matched;
      const appFunc: any = funcs.find((func: any) => Object.is(func.routePath, matched.path) && Object.is(func.funcType, 'APPVIEW'));
      if (appFunc) {
        this.computeMenuSelect(dataRef.value, appFunc.funcTag);
      }
      return;
    } else if (defaultView) {
      const appFunc: any = funcs.find((func: any) => Object.is(func.appView, defaultView) && Object.is(func.funcType, 'APPVIEW'));
      if (appFunc) {
        this.computeMenuSelect(dataRef.value, appFunc.funcTag);
      } 
      if (!defaultSelectRef.value[0] && Object.is(menuAlign, "NONE")) {
        // TODO
        return;
      } 
    } else {
      this.computeMenuSelect(dataRef.value, '');
    }
    let item = this.compute(dataRef.value, defaultSelectRef.value[0]);
    if (Object.keys(item).length > 0 && !item.hidden) {
      this.menuClick(item);
    }
  }

  /**
   * @description 计算菜单选中项
   * @param {IParam[]} menus 菜单及he
   * @param {string} funcTag 应用标识
   * @return {boolean} 
   * @memberof MenuControl
   */
  public computeMenuSelect(menus: IParam[], funcTag: string): boolean {
    const { funcs } = this.controlState;
    const defaultSelectRef = toRef(this.controlState, 'defaultSelect');
    const defaultOpensRef = toRef(this.controlState, 'defaultOpens');
    return menus.some((item: any) => {
      if (Object.is(funcTag, '') && item.funcTag && item.openDefault && !item.hidden) {
          const appFunc = funcs?.find((func: any) => Object.is(func.funcTag, item.funcTag));
          if (appFunc) {
            defaultSelectRef.value = [item.id];
              return true;
          }
      }
      if (item.funcTag && Object.is(item.funcTag, funcTag)) {
          defaultSelectRef.value = [item.id];
          return true;
      }
      if (item.items?.length > 0) {
          const state = this.computeMenuSelect(item.items, funcTag);
          if (state) {
              const defaultOpen = defaultOpensRef.value?.find((open: string) => Object.is(item.id, open));
              if (!defaultOpen) {
                defaultOpensRef.value = [...defaultOpensRef.value, item.id];
              }
              return true;
          }
      }
      return false;
    });
  }

  /**
   * @description 获取指定菜单项数据
   * @param {IParam[]} menus 菜单集合
   * @param {string} name 指定菜单标识
   * @return {*} 
   * @memberof MenuControl
   */
  public compute(menus: IParam[], name: string): IParam {
    const item: IParam = {};
    menus.some((_item: any) => {
      if (Object.is(_item.name, name)) {
        Object.assign(item, _item);
        return true;
      }
      if (_item.items?.length > 0) {
        const subItem = this.compute(_item.items, name);
        if (Object.keys(subItem).length > 0) {
          Object.assign(item, subItem);
          return true;
        }
      }
      return false;
    });
    return item;
  }

  /**
   * @description 菜单项点击
   * @param {IParam} item 菜单项数据
   * @memberof MenuControl
   */
  public menuClick(item: IParam) {
    const { context, viewParams } = this.controlState;
    App.getAppFuncService().executeAppFunc(item, deepCopy(context), deepCopy(viewParams));
  }

  /**
   * @description 使用加载功能模块
   * @param {MenuControlProps} props 传入的props
   * @return {*} 
   * @memberof MenuControl
   */
  public useLoad(props: MenuControlProps){
    const { viewSubject, controlName } = this.controlState;
    const load = async (opt: any = {})=>{
      const dataRef = toRef(this.controlState, 'menus');
      const defaultOpensRef = toRef(this.controlState, 'defaultOpens');
      this.computedEffectiveMenus(dataRef.value);
      this.handleDefaultOpens(dataRef.value, defaultOpensRef);
      this.handleDefaultSelect();
    }
    // 订阅viewSubject,监听load行为
    if(viewSubject){
      let subscription = viewSubject.subscribe(({ tag, action, data }: IActionParam)=>{
        if(Object.is(controlName, tag) && Object.is("load", action) ){
          load(data);
        }
      })
      // 部件卸载时退订viewSubject
      onUnmounted(()=>{
        subscription.unsubscribe();
      })
    }
    return {
      load: load
    }
  }

  /**
   * @description 菜单项选中
   * @param {IParam} $event 选中项数据
   * @memberof MenuControl
   */
  public menuSelect($event: IParam) {
    const { key } = $event;
    const dataRef = toRef(this.controlState, 'menus');
    let item = this.compute(dataRef.value, key);
    if (Object.keys(item).length > 0) {
      this.menuClick(item);
    }
  }

  /**
   * @description 安装部件所有功能模块的方法
   * @param {MenuControlProps} props 传入的Props
   * @param {Function} [emit] [emit] 事件
   * @return {*} 
   * @memberof MenuControl
   */
  public moduleInstall(props: MenuControlProps, emit?: Function) {
    const superParams = super.moduleInstall(props, emit);
    const { load } = this.useLoad(props)

    const menuSelect = this.menuSelect.bind(this);
    this.menuSelect =($event: IParam) => {
      menuSelect($event);
    }

    return {
      ...superParams,
      state: this.controlState,
      load,
      menuSelect: this.menuSelect,
    };
  }
}
