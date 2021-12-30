import { createVNode, render as vueRender } from 'vue'
import { Subject } from 'rxjs';
import Antd from 'ant-design-vue';
// import { AppServiceBase, LogUtil } from 'ibiz-core';
import AppModalComponent from "./app-modal.vue";
import IbizLoading from '@components/render/IbizLoading.vue';
import './app-modal.scss';

export class AppModal {

  /**
   * 实例对象
   *
   * @private
   * @static
   * @memberof AppModal
   */
  private static modal = new AppModal();

  /**
   * vue 实例
   *
   * @private
   * @type {Vue}
   * @memberof AppModal
   */
  private vueExample!: any;

  /**
   * store对象
   *
   * @private
   * @memberof AppModal
   */
  private store: any;

  /**
   * i18n对象
   *
   * @private
   * @memberof AppModal
   */
  private i18n: any;

  /**
   * router对象
   *
   * @private
   * @memberof AppModal
   */
  private router: any;

  /**
   * Creates an instance of AppModal.
   * 
   * @memberof AppModal
   */
  private constructor() {
    this.initBasicData();
    if (AppModal.modal) {
      return AppModal.modal;
    }
  }

  /**
   * 获取单例对象
   *
   * @static
   * @returns {AppModal}
   * @memberof AppModal
   */
  public static getInstance(): AppModal {
    if (!AppModal.modal) {
      AppModal.modal = new AppModal();
    }
    return AppModal.modal;
  }

  /**
   * 初始化基础数据
   * 
   * @memberof AppModal
   */
  private initBasicData() {
    // const appService = AppServiceBase.getInstance();
    // this.store = appService.getAppStore();
    // this.i18n = appService.getI18n();
    // this.router = appService.getRouter();
  }

  /**
   * 创建 Vue 实例对象
   *
   * @private
   * @param {{ name: string, title: string, fileDir: string, width?: number, height?: number,isfullscreen?:boolean }} view 视图数据
   * @param {*} [context={}] 应用上下文参数
   * @param {*} [viewparams={}] 视图参数
   * @param {*} [navdatas=[]] 导航数据
   * @param {string} uuid 标识
   * @returns {Subject<any>}
   * @memberof AppModal
   */
  private createVueExample(view: { name: string, title: string, fileDir:string, width?: number, height?: number, isfullscreen?: boolean, customClass?: string }, context: any = {}, viewparams: any = {}, navdatas: Array<any> = [], uuid: string): Subject<any> {
    const self: any = this;
    if (!self.store || !self.i18n) {
      self.initBasicData();
    }
    try {
      let subject: null | Subject<any> = new Subject<any>();
      let props = { view: view, viewdata: context, viewparams: viewparams, navdatas: navdatas, uuid: uuid, subject: subject };
      let dir = view.fileDir.replace(/@/, '../../')
      const AsyncComp = defineAsyncComponent({
        // 工厂函数
        loader: () => import(dir),
        // 加载异步组件时要使用的组件
        loadingComponent: IbizLoading,        
        // 在显示 loadingComponent 之前的延迟 | 默认值：200（单位 ms）
        delay: 0,
      });
      if (AsyncComp) {
        const component = AppModalComponent;
        const div = document.createElement('div');
        document.body.appendChild(div);
        const app = createApp(component,
          {
            close: () => { document.body.removeChild(div); app.unmount(); },
            ...props
          }
        );
        app.component(view.name, AsyncComp);
        const vm = app.use(Antd).mount(div);
        this.vueExample = vm;
      }
      return subject;
    } catch (error) {
      console.error(error);
      return new Subject<any>();
    }
  }

  /**
   * 打开模态视图
   *
   * @param {{ name: string, title: string, fileDir:string, width?: number, height?: number }} view 视图
   * @param {*} [viewParam={}] 应用上下文参数
   * @param {any[]} deResParameters 关系实体参数对象
   * @param {any[]} parameters 当前应用视图参数对象
   * @param {any[]} args 多项数据
   * @param {*} [data={}] 行为参数
   * @param {any[]} navdatas 导航数据
   * @returns {Subject<any>}
   * @memberof AppModal
   */
  public openModal(view: { name: string, title: string, fileDir:string, width?: number, height?: number, isfullscreen?: boolean, customClass?: string }, context: any = {}, data: any = {}, navdatas: Array<any> = []): Subject<any> {
    try {
      let viewdata: any = {};
      Object.assign(viewdata, JSON.parse(JSON.stringify(context)));
      const uuid = this.getUUID();
      const subject = this.createVueExample(view, viewdata, data, navdatas, uuid);
      return subject;
    } catch (error) {
      console.log(error);
      return new Subject<any>();
    }
  }

  /**
   * 获取节点标识
   *
   * @private
   * @returns {string}
   * @memberof AppModal
   */
  private getUUID(): string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

}