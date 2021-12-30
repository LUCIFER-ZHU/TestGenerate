import { IContext, IParam } from '@ibiz-core';
import { Ref } from 'vue';
import { deepCopy } from '../../utils';

/**
 * 为源响应式对象上的某个属性新创建一个单向的Ref,类似于vue的toRef但区别在于，修改返回的Ref，不会影响源响应对象的该属性。而源响应对象上的属性值变化会响应式影响到返回的Ref
 *
 * @param object 源响应对象,可以是ref对象，也可以是reactive对象
 * @param key 响应对象上的属性的key值
 * 
 * ```ts
 * const object = ref({foo: 1});
 * // 或者 const object = reactive({foo: 1})
 * const foo = toOneWayRef(object, 'foo');
 * foo.value = 2;
 * console.log(object.foo) // 1
 * console.log(foo.value) // 2
 * object.foo = 3
 * console.log(object.foo) // 3
 * console.log(foo.value) // 3
 * ```
 * ps：如果要维持props的父对于props修改的响应性，props必须是Ref
 * ```ts
 * const father = reactive({ props: { foo: 1 }})
 * const props = toRef(father,'props');
 * const foo = toOneWayRef(props, 'foo');
 * const foo1 = toOneWayRef(props.value,'foo')
 * father.props = {foo: 3}
 * console.log(father.props.foo) // 3
 * console.log(foo.value) // 3
 * console.log(foo1.value) // 1
 * ```
 * 
 */
export function toOneWayRef<T extends object, K extends keyof T>(object: Ref<T> | T, key: K): Ref<T[K]>{

  // 创建空的Ref
  const propertyRef: Ref<T[K]> = ref({}) as any;
  // 用watch来监听源响应对象的key属性，并建立单向响应
  watch(
    () => isRef(object) ? (object.value as T)[key] : object[key],
    (newVal: any, oldVal: any) => {
      // 用immediate来初始化最初的值，用deepCopy来切断与源值的关联
      propertyRef.value = deepCopy(newVal) as T[K];
    },
    {
      immediate: true,
      deep: true,
    },
  );
  return propertyRef;
}

/**
 * @description 使用上下文参数逻辑块
 * @export
 * @param {Record<any, any>} props
 */
export function useContextParams(props: Record<any, any>) {
  const { contextProp, viewParamsProp } = toRefs(props);

  // 维护上下文并监控其变化
  const context: Ref<IContext> = ref({});
  watch(
    contextProp,
    (newVal: any, oldVal: any) => {
      context.value = deepCopy(newVal || {});
    },
    {
      immediate: true,
      deep: true,
    }
  );

  // 维护视图参数并监控其变化
  const viewParams: Ref<IParam> = ref({});
  watch(
    viewParamsProp,
    (newVal: any, oldVal: any) => {
      viewParams.value = deepCopy(newVal || {});
    },
    {
      immediate: true,
      deep: true,
    }
  );
  return { context, viewParams };
}

/**
 * @description 值规则校验
 * @export
 * @param {Record<any, any>} props
 */
 export async function verifyRules(_rule: any, value: any, condition: any) {
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
      if (condition.includeMinValue && Object.is(value,condition.minValue)) {
        return Promise.resolve();
      } else if (condition.includeMaxValue && Object.is(value,condition.maxValue)) {
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