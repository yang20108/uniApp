<template>
	<view>
		<view class="progress-custom">
			<view class="progress-custom-bar bor-radius">
				<view class="progress-custom-inner-bar bor-radius" :style="'width:'+percent+'%;'">
					<text class="progress-custom-text">{{percent}}%</text>
				</view>
				<text class="iconfont icon-rocket progress-rocket-bgc"></text>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * name: 自定义progress组件
	 * 属性：
	 * percent Number类型 progress的进度状态
	 * 事件：
	 */
	export default {
		name: "custom-progress",
		props: {
			percent: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
			}
		},
		methods: {
			eventName: function() {
				this.$emit("funName", "回传数据");
			}
		}
	}
</script>

<style>
	.progress-custom {
		display: flex;
		align-items: center;
	}

	.progress-custom-bar {
		display: flex;
		flex: 1;
		height: 25px;
		background-color: #EBEBEB;
	}

	.progress-custom-inner-bar {
		width: 0px;
		height: 100%;
		/* #ifdef APP-PLUS */
		background-image: linear-gradient(90deg, rgb(17, 162, 217) 0%, rgb(104, 116, 238) 100%);
		/* #endif */
		/* #ifdef H5 */
		background-image: -moz-linear-gradient(0deg, rgb(17, 162, 217) 0%, rgb(104, 116, 238) 100%);
		background-image: -webkit-linear-gradient(0deg, rgb(17, 162, 217) 0%, rgb(104, 116, 238) 100%);
		background-image: -ms-linear-gradient(0deg, rgb(17, 162, 217) 0%, rgb(104, 116, 238) 100%);
		/* #endif */
	}

	.bor-radius {
		border-radius: 50px;
	}

	.progress-custom-text {
		height: 25px;
		line-height: 25px;
		color: #FFFFFF;
		font-size: 16px;
		float: right;
		padding-right: 10px;
	}

	.progress-rocket-bgc {
		height: 25px;
		line-height: 25px;
		font-size: 25px;
		margin-left: 5px;
		/* #ifdef APP-PLUS */
		background-image: linear-gradient(90deg, rgb(17, 162, 217) 0%, rgb(104, 135, 238) 100%);
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
		background-image: -moz-linear-gradient(90deg, rgb(17, 162, 217) 0%, rgb(104, 135, 238) 100%);
		background-image: -webkit-linear-gradient(90deg, rgb(17, 162, 217) 0%, rgb(104, 135, 238) 100%);
		background-image: -ms-linear-gradient(90deg, rgb(17, 162, 217) 0%, rgb(104, 135, 238) 100%);
		/* #endif */
	}
</style>
