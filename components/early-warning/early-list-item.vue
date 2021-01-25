<template>
	<view style="padding: 10px;" class="uni-list-cell-navigate" :hover-class="hover?'uni-list-cell-hover':''" @click="bindClick">
		<view :style="{backgroundColor: iconColor}" class="iconfont early-item-icon">!</view>
		<view :style="username?'width: 70%':'width: 90%'" class="early-item-body">
			<view class="early-item-title">{{title}}</view>
			<view class="early-item-content">{{content}}</view>
			<view style="margin-top: 5px;" class="early-item-content">{{describe}}</view>
			<view style="margin-top: 5px;" class="early-item-content">{{date}}</view>
		</view>
		<view v-if="username" class="early-item-date">{{username}}</view>
	</view>
</template>

<script>
	/**
	 * name:预警列表项
	 * 属性：
	 * iconColor string类型，图标背景色
	 * hover Boolean类型 点击效果
	 * title string类型，提示的名称或标题
	 * content String类型 描述或内容
	 * describe String类型 描述或内容
	 * date string类型，日期
	 * username string类型，人员名称
	 * 事件：
	 * onclick Function类型 点击事件
	 */
	export default {
		name: "early-list-item",
		props: {
			iconColor: {
				type: String,
				default: "#FFFFFF"
			},
			hover: {
				type: Boolean,
				default: true
			},
			title: {
				type: String,
				required: true,
				default: ""
			},
			content: {
				type: String,
				default: ""
			},
			describe: {
				type: String,
				default: ""
			},
			date: {
				type: String,
				default: ""
			},
			username: {
				type: String,
				default: ""
			}
		},
		data() {
			return {

			}
		},
		methods: {
			bindClick() {
				this.$emit("onclick")
			}
		}
	}
</script>

<style>
	.early-item-icon {
		width: 30px;
		height: 30px;
		line-height: 30px;
		color: #FFFFFF;
		font-size: 25px;
		text-align: center;
		border-radius: 50px;
		align-self: flex-start;
	}

	.early-item-body {
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
		line-height: 16px;
		text-align: right;
	}
</style>
