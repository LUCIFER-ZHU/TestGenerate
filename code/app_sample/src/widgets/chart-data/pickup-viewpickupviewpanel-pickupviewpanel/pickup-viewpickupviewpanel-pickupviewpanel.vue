<script setup lang="ts">
	import { Subject } from 'rxjs';
	import { IActionParam, IParam, ControlAction, PickupViewPanelControl } from '@ibiz-core';
	import { CtrlConfig } from './pickup-viewpickupviewpanel-pickupviewpanel-config';

	interface Props {
		context: IParam;
		viewParams?: IParam;
		controlAction: ControlAction;
		showBusyIndicator?: boolean;
		isSingleSelect?: boolean;
		viewMode?: number;
		selectedData?: string;
		isShowButton?: boolean;
		viewSubject: Subject<IActionParam>;
	}

	const props = withDefaults(defineProps < Props > (), {
		viewSubject: () => new Subject < IActionParam > (),
		viewMode: 0,
		isSingleSelect: false,
		isShowButton: true,
		showBusyIndicator: true,
	})

	// emit声明
	interface CtrlEmit {
		(name: "ctrlEvent", value: IActionParam): void;
	}

	const emit = defineEmits < CtrlEmit > ();

	// 安装功能模块，提供状态和能力方法
	const { state, inited, viewdata, viewparam } = new PickupViewPanelControl(CtrlConfig).moduleInstall(props);


</script>

<template>
	<div class="ibiz-pickupviewpanel">
		<component
			v-if="inited && state.embeddedView && state.embeddedView.viewName"
			:if="state.embeddedView.viewName"
			:viewdata="viewdata"
			:viewparam="viewparam"
			:isSingleSelect="state.isSingleSelect"
			:isShowButton="state.isShowButton"
			:selectedData="state.selectedData"
		></component>
	</div>
</template>