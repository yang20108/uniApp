<template>
	<view :style="{margin: rowSpacing+'px 0px'}" class="uni-flex">
		<view class="item-width-title text-new-line">{{rowTitle}}</view>
		<view class="item-width-value flex-value" :hover-class="hoverClass?'uni-list-cell-hover':''" @click="bindClick">
			<view class="text-new-line def-color-text def-font-size3 item-value">{{rowValue}}</view>
			<uni-icons v-if="hoverClass" class="row-icon" color="#bbb" size="20" type="arrowdown" />
		</view>
	</view>
</template>

<script>
	/**
	 * name:预警模块数据展示 - 表单行信息
	 * 属性：
	 * rowTitle String类型 表示表单项名称或提示标题
	 * rowValue String类型 表示表单项value值
	 * rowSpacing Number类型 表示表单项之间间距
	 * hoverClass Boolean类型 点击效果
	 * 事件：
	 * bindClick Function类型 触发点击事件
	 */
	import uniIcons from '../uni-icons/uni-icons.vue'
	export default {
		name: "early-info-item",
		props: {
			rowTitle: {
				type: String,
				default: ""
			},
			rowValue: {
				type: String,
				default: ""
			},
			rowSpacing: {
				type: Number,
				default: 5
			},
			hoverClass: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {}
		},
		methods: {
			bindClick() {
				this.$emit("bindClick")
			}
		},
		components: {
			uniIcons
		}
	}
</script>

<style>
	.item-width-title {
		font-size: 15px;
		width: 30%;
		line-height: 20px;
	}

	.item-width-value {
		width: 68%;
		padding-left: 5px;
	}

	.item-value {
		width: 90%;
		line-height: 20px;
	}

	.flex-value {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.row-icon {
		line-height: 20px;
		transform: rotate(270deg);
	}
</style>
