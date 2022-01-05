import { deepCopy, FormControlProps, FormControlState, IActionParam, MainControl } from '@core';

/**
 * @description 表单部件
 * @export
 * @class FormControl
 * @extends {MainControl}
 * @todo 部件加载loading，能否不写在行为方法里。
 */
export class FormControl extends MainControl {
  /**
   * @description 部件状态
   * @type {FormControlState}
   * @memberof FormControl
   */
  public declare controlState: FormControlState;

  /**
   * 在表单数据改变（单一属性变化）时被调用。会依次执行以下逻辑：
   * 1. 重置项逻辑
   * 2. 表单项更新
   * 3. 动态控制逻辑
   * 4. 自动保存逻辑
   *
   * @param {string} name 属性名称
   * @param {*} value 属性值
   * @memberof FormControl
   */
  public formDataChange(name: string, value: any) {
    this.controlState.data[name] = value;
    this.resetFormData(name);
    // TODO 表单项更新
    // TODO 动态控制逻辑
    // TODO 自动保存（可以单独做一个逻辑块，监听data的变化）
  }

  /**
   * @description 表单项重置
   * @param {string} name
   * @memberof FormControl
   */
  public resetFormData(name: string) {
    const formItems: any[] = this.controlState.formDetails;
    if (formItems && formItems.length > 0) {
      for (const item of formItems) {
          if (item.resetItemName && item.resetItemName == name) {
              this.formDataChange( item.name, null);
              if (item.valueItemName) {
                  this.formDataChange(item.valueItemName, null);
              }
          }
      }
    }
  }

  /**
   * @description 动态显示逻辑
   * @memberof FormControl
   */
  public displayLogic(name: string) {
    const formItems: any[] = this.controlState.formDetails;
    // 表单动态逻辑
  //   allFormDetails?.forEach((detail: IPSDEFormDetail) => {
  //     detail.getPSDEFDGroupLogics()?.forEach((logic: IPSDEFDCatGroupLogic) => {
  //         // todo lxm 缺少getRelatedDetailNames
  //         let relatedNames = logic.getRelatedDetailNames() || [];
  //         if (Object.is(name, '') || relatedNames.indexOf(name) != -1) {
  //             let ret = this.verifyGroupLogic(this.data, logic);
  //             switch (logic.logicCat) {
  //                 // 动态空输入，不满足则必填
  //                 case 'ITEMBLANK':
  //                     this.detailsModel[detail.name].required = !ret;
  //                     break;
  //                 // 动态启用，满足则启用
  //                 case 'ITEMENABLE':
  //                     this.detailsModel[detail.name].setDisabled(!ret);
  //                     break;
  //                 // 动态显示，满足则显示
  //                 case 'PANELVISIBLE':
  //                     this.detailsModel[detail.name].setVisible(ret);
  //                     break;
  //             }
  //         }
  //     })
  // })
  }

  /**
   * 在表单执行某些行为能力后，表单整体数据发生改变后被调用。会依次执行以下逻辑：
   * 1.
   *
   * @param {string} action 调用的表单行为方法
   */
  public afterFormLoad(action: string) {
    // 改变context当前实体主键，并抛出抽屉脏值的事件
    // TODO 设置表单项启用（如果可以响应式变化则不用处理）
    // 新建默认值和更新默认值
    // TODO 动态控制逻辑
  }

  /**
   * @description 使用加载功能模块
   * @param {FormControlProps} props 传入的props
   * @return {*}
   * @memberof FormControl
   */
  public useLoad(props: FormControlProps) {
    const { viewSubject, controlName } = this.controlState;

    /**
     * 加载行为
     *
     * @param [opt={}]
     * @return {*}
     */
    const load = async (opt: any = {}) => {
      try {
        // 获取需要的状态变量
        const { controlService, context, viewParams, showBusyIndicator } = this.controlState;

        // 判断实体行为
        const loadAction = this.controlState.controlAction.loadAction;
        if (!loadAction) {
          return;
        }

        // 处理请求参数
        let _context = deepCopy(context);
        let _viewParams = deepCopy(viewParams);

        // 发起请求处理与解析请求
        const response = await controlService.get(
          _context,
          { viewParams: _viewParams },
          {
            action: loadAction,
            isLoading: showBusyIndicator,
          },
        );
        if (!response.status || response.status !== 200) {
          return;
        }

        // 请求后处理
        this.controlState.data = response.data;
      } catch (error) {
        // TODO 错误异常处理
        console.log(error);
      }
    };

    // 订阅viewSubject,监听load行为
    if (viewSubject) {
      let subscription = viewSubject.subscribe(({ tag, action, data }: IActionParam) => {
        if (Object.is(controlName, tag) && Object.is('load', action)) {
          load(data);
        }
      });

      // 部件卸载时退订viewSubject
      onUnmounted(() => {
        subscription.unsubscribe();
      });
    }

    return {
      load: load,
    };
  }

  /**
   * @description 使用加载功能模块
   * @param {FormControlProps} props 传入的props
   * @return {*}
   * @memberof FormControl
   */
  public useSave(props: FormControlProps) {
    const { viewSubject, controlName } = this.controlState;

    /**
     * 保存行为
     *
     * @param [opt={}]
     * @return {*}
     */
    const save = async (opt: any = {}) => {
      try {
        // 获取需要的状态变量
        const { controlService, context, viewParams, showBusyIndicator, data } = this.controlState;

        // TODO 值规则校验处理

        // 判断实体行为
        const { updateAction, createAction } = this.controlState.controlAction;
        const saveAction: any = data.srfuf == '1' ? updateAction : createAction;
        const saveFunName = data.srfuf == '1' ? 'update' : 'create';
        if (!saveAction) {
          return;
        }

        // 处理请求参数
        let _context = deepCopy(context);
        let _viewParams = deepCopy(viewParams);
        const arg: any = { ...opt };
        Object.assign(arg, data.getDo());
        Object.assign(arg, { viewParams: _viewParams });


        // TODO 关系界面保存通知处理，做成异步。
        // TODO 拷贝相关。

        // 发起请求处理与解析请求
        const response = await controlService[saveFunName](
          _context,
          arg,
          {
            action: saveAction,
            isLoading: showBusyIndicator,
          },
        );
        if (!response.status || response.status !== 200) {
          // TODO 统一Error格式
          return;
        }

        // 请求后处理
        this.controlState.data = response.data;

        // TODO 表单onFormLoad
      } catch (error) {
        // TODO 错误异常处理
        console.log(error);
      }
    };

    // 订阅viewSubject,监听load行为
    if (viewSubject) {
      let subscription = viewSubject.subscribe(({ tag, action, data }: IActionParam) => {
        if (Object.is(controlName, tag) && Object.is('save', action)) {
          save(data);
        }
      });
      // 部件卸载时退订viewSubject
      onUnmounted(() => {
        subscription.unsubscribe();
      });
    }

    return {
      save: save,
    };
  }

  /**
   * @description 使用加载功能模块
   * @param {FormControlProps} props 传入的props
   * @return {*}
   * @memberof FormControl
   */
  public useRemove(props: FormControlProps) {
    const { viewSubject, controlName } = this.controlState;

    /**
     * 删除行为
     *
     * @param [opt={}]
     * @return {*}
     */
    const remove = async (opt: any = {}) => {
      try {
        // 获取需要的状态变量
        const { controlService, context, viewParams, showBusyIndicator } = this.controlState;

        // 判断实体行为
        const removeAction = this.controlState.controlAction.removeAction;
        if (!removeAction) {
          return;
        }

        // 处理请求参数
        let _context = deepCopy(context);
        let _viewParams = deepCopy(viewParams);
        const arg: any = opt[0];
        Object.assign(arg, { viewParams: _viewParams },);

        // 发起请求处理与解析请求
        const response = await controlService.remove(
          _context,
          arg,
          {
            action: removeAction,
            isLoading:showBusyIndicator
          },
        );
        if (!response.status || response.status !== 200) {
          return;
        }

        // 请求后处理
        this.controlState.data = response.data;
      } catch (error) {
        // TODO 错误异常处理
        console.log(error);
      }
    };

    // 订阅viewSubject,监听load行为
    if (viewSubject) {
      let subscription = viewSubject.subscribe(({ tag, action, data }: IActionParam) => {
        if (Object.is(controlName, tag) && Object.is('load', action)) {
          remove(data);
        }
      });

      // 部件卸载时退订viewSubject
      onUnmounted(() => {
        subscription.unsubscribe();
      });
    }

    return {
      remove: remove,
    };
  }

  /**
   * @description 处理编辑器事件
   * @param {IActionParam} actionParam 行为参数
   * @memberof FormControl
   */
  public handleEditorEvent(actionParam: IActionParam) {
    const { tag, action, data } = actionParam;
    switch (action) {
      case 'valueChange':
        this.formDataChange(tag, data);
        break;
      default:
        break;
    }
  }

  /**
   * @description 安装部件所有功能模块的方法
   * @param {FormControlProps} props 传入的Props
   * @param {Function} [emit]
   * @return {*}
   * @memberof FormControl [emit] 事件
   */
  public moduleInstall(props: FormControlProps, emit?: Function) {
    const superParams = super.moduleInstall(props, emit);
    // 表单行为能力启用
    const { load } = this.useLoad(props);
    const { save } = this.useSave(props);

    return {
      ...superParams,
      state: this.controlState,
      load,
      save,
      handleEditorEvent: this.handleEditorEvent.bind(this),
    };
  }
}
