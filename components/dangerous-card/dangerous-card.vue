<template>
	<view style="padding: 15px;" class="uni-list-cell uni-list-cell-navigate" :hover-class="hover?'uni-list-cell-hover':''" @click="bindClick">
		<text v-if="tmicon" class="iconfont tm-list-icon" :class="tmicon"></text>
		<view class="tm-list-body">
			<view class="tm-list-title">{{title}}
				<span v-if="tips" :style="{backgroundColor: tipsColor}" class="tm-wait-submit">{{tips}}</span>
			</view>
			<view class="tm-list-content">{{content}}</view>
		</view>
		<view v-if="date" :style="{width:tmicon?'42%':''}" class="tm-list-date">{{date}}</view>
		<text v-if="hover" class="iconfont icon-szright tm-list-nav"></text>
	</view>
</template>

<script>
	/**
	 * name: 列表项展示组件
	 * 属性：
	 * hover Boolean类型 点击效果
	 * tmicon String类型 缩略图，这里采用字体图标库class
	 * title String类型 标题
	 * content String类型 描述或内容
	 * date String类型 日期
	 * tips String类型 文字提示
	 * tipsColor String类型 文字提示背景色
	 * 事件：
	 * onclick Function类型 点击事件
	 */
	export default {
		name: "dangerous-card",
		props: {
			hover: {
				type: Boolean,
				default: true
			},
			tmicon: {
				type: String,
				default: ""
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
			date: {
				type: String,
				default: ""
			},
			tips: {
				type: String,
				default: ""
			},
			tipsColor: {
				type: String,
				default: "rgb(245, 245, 245)"
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
	.tm-list {
		width: 100%;
		height: 45px;
		line-height: 45px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.tm-list-icon {
		width: 35px;
		height: 35px;
		line-height: 35px;
		font-size: 28px;
		color: #3296E1;
		margin-right: 10px;
		/* #ifdef APP-PLUS */
		background-image: linear-gradient(90deg, rgb(230, 64, 99) 0%, rgb(50, 107, 192) 100%);
		color: transparent;
		-webkit-background-clip: text;
		/* #endif */
		/* #ifdef H5 */
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-ms-background-clip: text;
		-ms-text-fill-color: transparent;
		-moz-background-clip: text;
		-moz-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
		background-image: -moz-linear-gradient(90deg, rgb(230, 64, 99) 0%, rgb(50, 107, 192) 100%);
		background-image: -webkit-linear-gradient(90deg, rgb(230, 64, 99) 0%, rgb(50, 107, 192) 100%);
		background-image: -ms-linear-gradient(90deg, rgb(230, 64, 99) 0%, rgb(50, 107, 192) 100%);
		/* #endif */
	}

	.tm-list-body {
		width: 100%;
	}

	.tm-list-title {
		line-height: 20px;
		color: #101010;
		font-size: 16px;
		font-family: "Microsoft YaHei";
		word-break: break-all;
		word-wrap: break-word;
	}

	.tm-wait-submit {
		font-size: 14px;
		margin-left: 3px;
		padding: 2px 4px;
		color: #FFFFFF;
	}

	.tm-list-content {
		line-height: 15px;
		color: #808080;
		word-break: break-all;
		word-wrap: break-word;
	}

	.tm-list-date {
		width: 35%;
		line-height: 20px;
		font-size: 15px;
	}

	.tm-list-nav {
		color: #B2BCCF;
		font-size: 18px;
		height: 20px;
		line-height: 20px;
	}

	/* #ifdef APP-PLUS */
	.uni-list-cell:after {
		position: absolute;
		z-index: 10;
		right: 0;
		bottom: 0;
		left: 30upx;
		border: 0.5px solid #c8c7cc;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.uni-list .uni-list-cell:last-child:after {
		border: 0px;
	}

	.uni-list-cell-last .uni-list-cell:after {
		border: 0px;
	}

	/* #endif */
</style>
