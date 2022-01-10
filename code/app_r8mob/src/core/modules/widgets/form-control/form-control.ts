import { deepCopy, FormControlProps, FormControlState, IActionParam, IParam, MainControl, UIUtil, verifyValue } from '@core';

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
   * @description 检验表单动态逻辑
   * @param {IParam} data 表单数据
   * @param {IParam} logic 动态逻辑
   * @return {*} 
   * @memberof FormControl
   */
  public verifyGroupLogic(data: IParam, logic: IParam) {
    if (logic.logicType == 'GROUP' && logic.logics?.length > 0) {
      let result: boolean = true;
      if (logic.groupOP == 'AND') {
        const falseItem = logic.logics.find((childLogic: IParam)=> {
          return !this.verifyGroupLogic(data, childLogic);
        })
        result = falseItem ? false : true;
      } else if (logic.groupOP == 'OR') {
        const trueItem = logic.logics.find((childLogic: IParam)=> {
          return this.verifyGroupLogic(data, childLogic);
        })
        result = trueItem ? true : false;
      }
      // 是否取反
      return logic.notMode ? !result : result;
    } else if (logic.logicType == 'SINGLE') {
      return verifyValue(data[logic.name], logic.condOP, logic.value);
    }
    return false;
  }

  /**
   * @description 在表单数据改变（单一属性变化）时被调用。会依次执行以下逻辑：
   * 1. 重置项逻辑
   * 2. 表单项更新
   * 3. 动态控制逻辑
   * 4. 自动保存逻辑
   * @param {string} name 表单项名称
   * @param {*} value 表单项值
   * @memberof FormControl
   */
  public formDataChange(name: string, value: any) {
    this.controlState.data[name] = value;
    this.resetFormData(name);
    // TODO 表单项更新
    this.formDynamicLogic(name);
    // TODO 自动保存（可以单独做一个逻辑块，监听data的变化）
  }

  /**
   * @description 表单项重置
   * @param {string} name
   * @memberof FormControl
   */
  public resetFormData(name: string) {
    const { detailsModel } = this.controlState;
    Object.values(detailsModel).forEach((item: IParam) => {
      if (item.resetItemName && Object.is(name, item.resetItemName)) {
        this.formDataChange(item.name, null);
        if (item.valueItemName) {
          this.formDataChange(item.valueItemName, null);
        }
      }
    })
  }

  /**
   * @description 表单动态逻辑
   * @param {string} name 表单项名称
   * @memberof FormControl
   */
  public formDynamicLogic(name: string) {
    const { data } = this.controlState;
    const { detailsModel } = toRefs(this.controlState);
    Object.values(detailsModel.value).forEach((item: IParam) => {
      if (item.groupLogics?.length > 0) {
        item.groupLogics.forEach((logic: IParam) => {
          let relatedNames = logic.relatedDetailNames || [];
          if (Object.is(name, '') || relatedNames.indexOf(name) != -1) {
            let ret = this.verifyGroupLogic(data, logic);
            switch (logic.logicCat) {
              // 动态空输入，不满足则必填
              case 'ITEMBLANK':
                item.required = !ret;
                break;
              // 动态启用，满足则启用
              case 'ITEMENABLE':
                item.disabled = !ret;
                break;
              // 动态显示，满足则显示
              case 'PANELVISIBLE':
                item.visible = ret;
                break;
            }
          }
        });
      }
    });
  }

  /**
   * @description 表单执行某些整体数据发生变化行为之后，依次执行以下逻辑
   * 1.根据行为类型将主键合并到context中
   * 2.设置新建默认值和更新默认值
   * 4.计算行为权限状态
   * 5.设置表单项启用
   * 6.表单动态逻辑
   * @param {string} action
   * @memberof FormControl
   */
  public afterFormAction(action: string) {
    const { appDeCodeName, data } = this.controlState;
    const { context } = toRefs(this.controlState);
    if (appDeCodeName) {
      if (Object.is(action, 'save') || Object.is(action, 'autoSave') || Object.is(action, 'submit')) {
        if (data[appDeCodeName]) {
          Object.assign(context.value, { [appDeCodeName]: data[appDeCodeName] });
        }
      }
    }
    this.setDefaultValue(action);
    this.calcActionAuthState();
    this.setFormEnableCond();
    this.formDynamicLogic('');
  }

  /**
   * @description 设置表单启用项
   * @memberof FormControl
   */
  public setFormEnableCond() {
    const { data } = this.controlState;
    const { detailsModel } = toRefs(this.controlState);
    Object.values(detailsModel.value).forEach((item: IParam) => {
      if (Object.is(item.detailType, 'FORMITEM')) {
        switch (item.enableCond) {
          case 0:
            // 不启用 
            item.disabled = false;
            break;
          case 1:
            // 新建 
            if (Object.is(data.srfuf, '0')) {
              item.disabled = true;
            } else {
              item.disabled = false;
            }
            break;
          case 2:
            // 更新
            if (Object.is(data.srfuf, '1')) {
              item.disabled = true;
            } else {
              item.disabled = false;
            }
            break;
          case 3:
            // 启用
            item.disabled = true;
            break;
          default:
            break;
        }
      }
    });
  }

  /**
   * @description 计算行为权限状态
   * @memberof FormControl
   */
  public calcActionAuthState() {
    const { data, UIService, actionModel } = this.controlState;
    const { detailsModel } = toRefs(this.controlState);
    const tempModel = deepCopy(actionModel);
    UIUtil.calcActionItemAuthState(data, tempModel, UIService);
    Object.values(detailsModel.value).forEach((item: IParam) => {
      if (Object.is(item.detailType, 'BUTTON') && item.uIActionTag) {
        // 更新按钮的权限状态值
        item.visible = tempModel[item.uIActionTag].visible;
        item.disabled = tempModel[item.uIActionTag].disabled;
        item.isPower = tempModel[item.uIActionTag].dataActionResult === 1 ? true : false;
      } else if (Object.is(item.detailType, 'GROUPPANEL') && item.uIActionGroup?.details?.length > 0) {
        // 更新分组面板界面行为组的权限状态值
        item.uiActionGroup.details.forEach((actionDetail: any) => {
          actionDetail.visible = tempModel[actionDetail.uIActionTag].visible;
          actionDetail.disabled = tempModel[actionDetail.uIActionTag].disabled;
        });
      }
    });
  }
  /**
   * @description 设置默认值
   * @param {string} action 表单行为
   * @memberof FormControl
   */
  public setDefaultValue(action: string) {
    // TODO 新建默认值和更新默认值
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
        const { controlService, context, viewParams, showBusyIndicator, controlAction } = this.controlState;
        const { data } = toRefs(this.controlState);
        if (!controlAction.loadAction) {
          return;
        }
        // 处理请求参数
        let _context = deepCopy(context);
        let _viewParams = deepCopy(viewParams);

        // 发起请求处理与解析请求
        const response = await controlService.get(
          _context,
          { viewParams: _viewParams },
          { action: controlAction.loadAction, isLoading: showBusyIndicator },
        );
        if (response.status && response.status == 200) {
          data.value = response.data;
          this.afterFormAction('load');
        }
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
