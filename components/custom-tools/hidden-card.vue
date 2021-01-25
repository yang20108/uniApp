<template>
	<view class="hidden-card">
		<view style="margin: 10px 10px 0px 10px;" class="uni-flex">
			<text class="iconfont hidden-def-bg" :class="[hidIcon,hidIcon?'hidden-icon-sty':'']"></text>
			<view class="hidden-title">{{hidTitle}}</view>
		</view>
		<view style="margin: 3px 10px 10px 10px;" class="uni-flex">
			<view v-if="hidTag" class="hidden-tag">{{hidTag}}</view>
			<view v-if="hidCount" class="hidden-tag"><span style="color: #F59A23;">{{hidCount}}</span>个隐患</view>
			<view v-if="hidLevel" class="hidden-tag">{{hidLevel}}</view>
			<view v-if="hidClose" class="hidden-tag">{{hidClose}}</view>
		</view>
		<view class="hidden-botm">
			<view style="color: #cfcfcf;">{{hidTips}}</view>
			<view style="color: #3396FB;font-weight: 700;" @tap="doAction">{{hidName}}</view>
		</view>
	</view>
</template>

<script>
	/**
	 * name：隐患排查列表项
	 * 属性：
	 * hidIcon 字体图标
	 * hidTitle 标题
	 * hidTag 标签
	 * hidCount 数量标签
	 * hidLevel 层级标签
	 * hidTips 提示
	 * hidName 操作名称
	 * hidClose 是否闭合
	 * 事件：
	 * action 事件操作
	 */
	export default {
		name: "hidden-card",
		props: {
			hidIcon: {
				type: String,
				default: ""
			},
			hidTitle: {
				type: String,
				default: ""
			},
			hidTag: {
				type: String,
				default: ""
			},
			hidCount: {
				type: [String,Number],
				default: ""
			},
			hidLevel: {
				type: String,
				default: ""
			},
			hidTips: {
				type: String,
				default: ""
			},
			hidName: {
				type: String,
				default: ""
			},
			hidClose: {
				type: String,
				default: ""
			}
		},
		data() {
			return {}
		},
		methods: {
			doAction() {
				this.$emit("action")
			}
		}
	}
</script>

<style>
	.hidden-card {
		border: 1px solid #E0E0E0;
		border-radius: 5px;
		background-color: #FFFFFF;
	}

	.hidden-def-bg {
		height: 30px;
		line-height: 30px;
		color: #FFFFFF;
		background-color: #FFFFFF;
		font-size: 20px !important;
		text-align: center;
		border-radius: 7px;
	}

	.hidden-icon-sty {
		margin-right: 5px;width: 30px;
	}

	.hidden-title {
		font-style: normal;
		font-size: 18px;
		color: #7F7F7F;
		line-height: 20px;
		margin: auto 0px;
	}

	.hidden-tag {
		color: #7F7F7F;
		background: inherit;
		background-color: #e7e7e7;
		padding: 0px 5px;
		margin-right: 10px;
	}

	.hidden-botm {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-top: 1px solid #E0E0E0;
		padding: 5px 10px;
	}
</style>
