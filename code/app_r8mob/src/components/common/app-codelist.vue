<script setup lang="ts">
import { AppCodeListConfig } from '@/app/config';
import { deepCopy, IParam, isExistAndNotEmpty } from '@core';
import { ref, Ref } from 'vue';

interface Props {
    codeListTag: string,
    context: any,
    data?: any,
    localContext?: any,
    localParam?: any,
    name: string,
    textOnly?: boolean,
    textSeparator?: string
    value: any,
    viewParams?: any,
}

const props = withDefaults(defineProps<Props>(), {
    textOnly: true,
    textSeparator: '、'
});

//  代码表服务
const codeListService = App.getCodeListService();

//  显示文本值
const text: Ref<string> = ref('');

//  代码表项
const items: Ref<any[]> = ref([]);

//  默认值分隔符
const valueSeparator: string = ',';

//  数据处理
const handleData = async () => {
    const tag = props.codeListTag;
    if (!tag) {
        return;
    }
    const context = deepCopy(props.context);
    const viewParams = deepCopy(props.viewParams);
    handleParams(context, viewParams);
    codeListService.getCodeListItems({ tag, context, viewParams }).then((codeListItems: IParam[]) => {
        items.value = getSelectedItems(codeListItems);
        if (props.textOnly) {
            text.value = getText();
        }
    }).catch((error) => {
        console.warn(`代码表 ${tag} 获取数据项失败`);
    })
}

const handleParams = (context: IParam, viewParams: IParam) => {

}

//  获取文本
const getText = (): string => {
    let text: string = '';
    items.value.forEach((item: any, index: number) => {
        if (index !== 0) {
            text += props.textSeparator;
        }
        text += item.text;
    });
    return isExistAndNotEmpty(text) ? text : '---';
}

//  获取选中数据
const getSelectedItems = (codeListItems: IParam[]): any[] => {
    const codeList = AppCodeListConfig[props.codeListTag];
    const _valueSeparator = codeList.valueSeparator || valueSeparator;
    // 值的集合
    let values: any[] = [];
    // 选中代码表项的集合
    const selectedItems: any[] = [];
    if(codeList.orMode == 'NUM'){
        codeListItems.forEach((_item: any, index: number)=>{
            const nValue = parseInt((props.value as any), 10);
            if((parseInt(_item.value, 10) & nValue) > 0){
                selectedItems.push(deepCopy(_item));
            } 
        });
    } else {
        //  数值直接赋值
        if (typeof props.value === 'number'){
            values = [props.value];
        } else {
            values = [...props.value.toString().split(_valueSeparator)];
        }
        values.forEach((v: any)=>{
            let selected = codeListItems.find((_item:any)=> _item.value == v);
            if (selected) {
                selectedItems.push(selected);
            } else {
                selectedItems.push({text: v});
            }
        })
    }
    return selectedItems;
}

//  部件挂载
onMounted(() => {
    handleData();
})

</script>

<template>
    <div class="app-codelist">
        <span v-if="textOnly">{{text}}</span>
        <template v-else>
            <template v-if="items.length == 0">
                <span>---</span>
            </template>
            <template v-else>
                <template v-for="(item, index) in items" :key="index">
                    <span class="app-codelist-item">
                        <i v-if="item.cssClass" :class="item.cssClass"></i>
                        <img v-if="item.imagePath" :src="item.imagePath" />
                        <span :class="item.textClass" :style="item.color ? { color: item.color } : ''">
                            {{item.text}}
                        </span>
                        <span v-if="index !== items.length - 1">{{textSeparator}}</span>
                    </span>
                </template>
            </template>
        </template>
    </div>
</template>