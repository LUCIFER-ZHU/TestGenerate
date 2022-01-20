import { Ref } from 'vue';
import { IContext, IParam } from '@core';
import { deepCopy } from '../../utils';

/**
 * @description 界面基类
 * @export
 * @class UIBase
 */
export class UIBase {
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
    public static toOneWayRef<T extends object, K extends keyof T>(object: Ref<T> | T, key: K): Ref<T[K]> {

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
    public static useContextParams(props: Record<any, any>) {
        const { context, viewParams } = toRefs(props);

        // 维护上下文并监控其变化
        const _context: Ref<IContext> = ref({});
        watch(
            context,
            (newVal: any, oldVal: any) => {
                _context.value = deepCopy(newVal || {});
            },
            {
                immediate: true,
                deep: true,
            }
        );

        // 维护视图参数并监控其变化
        const _viewParams: Ref<IParam> = ref({});
        watch(
            viewParams,
            (newVal: any, oldVal: any) => {
                _viewParams.value = deepCopy(newVal || {});
            },
            {
                immediate: true,
                deep: true,
            }
        );
        return { context: _context, viewParams: _viewParams };
    }
}