<template>
	<view>
		<view style="font-size: 35upx;">子级slot页面内容：</view>
		<slot>我是匿名slot默认内容</slot>
		<slot name="slotName">我是具名slot默认内容</slot>
	</view>
</template>

<script>
	/* 
	 * slot插槽需求：某区域视图内容显示不确定因素（比如：两个页面类似相同，页面使用的数据相同）
	 */
	export default {
		name: 'page-slot',
		data() {
			return {};
		},
		methods: {},
		onShow() {},
		onLoad(load) {}
	}
</script>

<style>

</style>
