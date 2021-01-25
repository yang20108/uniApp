<template>
	<view class="uni-list-cell-navigate" :hover-class="hover?'uni-list-cell-hover':''" @click="bindClick">
		<checkbox class="tm-item-box" :checked="checked"></checkbox>
		<view class="early-item-body">
			<view class="early-item-title">{{title}}</view>
			<view style="margin-top: 5px;" class="early-item-content">{{date}}</view>
		</view>
		<view class="early-item-date">{{level}}</view>
	</view>
</template>

<script>
	/**
	 * name:checkbox列表项
	 * 属性：
	 * hover Boolean类型 点击效果
	 * title string类型，提示的名称或标题
	 * date string类型，日期
	 * level string类型，等级
	 * checked Boolean类型，是否选中
	 * 事件：
	 * onclick Function类型 点击事件
	 */
	export default {
		name: "tab-list-checkbox",
		props: {
			hover: {
				type: Boolean,
				default: true
			},
			title: {
				type: String,
				required: true,
				default: ""
			},
			date: {
				type: String,
				default: ""
			},
			level: {
				type: String,
				default: ""
			},
			checked: {
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
		}
	}
</script>

<style>
	.early-item-body {
		width: 90%;
		margin-left: 10px;
	}

	.early-item-title {
		font-size: 16px;
		line-height: 22px;
		margin-bottom: 5px;
		word-wrap: break-word;
		word-break: break-word;
	}

	.early-item-content {
		line-height: 18px;
		color: rgb(166, 166, 170);
		word-wrap: break-word;
		word-break: break-word;
	}

	.early-item-date {
		width: 20%;
		color: #FF0000;
		line-height: 16px;
		text-align: right;
	}

	.tm-item-box {
	}
</style>
