<template>
	<view>
		默认组件模板
	</view>
</template>

<script>
	/**
	 * name:组件名称+用途
	 * 属性：
	 * str string类型 属性描述
	 * 事件：
	 * event Function类型 事件描述
	 */
	export default {
		name: "组件名称",
		props: {
			propsA: {
				type: Array,
				default: function() {
					return [];
				}
			}
		},
		data() {
			return {}
		},
		methods: {
			eventName: function() {
				this.$emit("funName", "回传数据");
			}
		}
	}
</script>

<style>
</style>
