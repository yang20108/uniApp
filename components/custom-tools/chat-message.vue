<template>
	<view class="m-item" :id="'message'+cid">
		<view class="m-left">
			<image class="head_icon" :style="borderRadius?'border-radius: 50px;':''" v-if="message.user=='home'" :src="aiIcon"></image>
		</view>
		<view class="m-content">
			<view class="m-content-head" :class="message.user=='customer'?'m-content-head-right':'m-content-head-left'">
				<view :class="'m-content-head-'+message.user">{{message.content}} </view>
			</view>
		</view>
		<view class="m-right">
			<image class="head_icon" :style="borderRadius?'border-radius: 50px;':''" v-if="message.user=='customer'" :src="myIcon"
			 @longtap="longTop"></image>
		</view>
	</view>
</template>

<script>
	/**
	 * name:message-show 聊天记录模块组件
	 * 属性：
	 * message Object类型 聊天对象
	 * cid Number, String类型 聊天对象的先后位置
	 * aiIcon String类型 智能机器人的图像
	 * myIcon String类型 我的图像
	 * borderRadius Boolean类型 图像是否圆角
	 * 事件：
	 * longTop Function类型 "我的"图片长按事件
	 */
	export default {
		props: {
			message: {
				type: Object,
				default () {
					return {};
				}
			},
			cid: {
				type: [Number, String],
				default: ''
			},
			aiIcon: {
				type: String,
				default: ""
			},
			myIcon: {
				type: String,
				default: ""
			},
			borderRadius: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			longTop() {
				this.$emit("long-top");
			}
		}
	}
</script>

<style>
	.m-item {
		display: flex;
		flex-direction: row;
		padding-top: 40upx;
	}

	.m-left {
		display: flex;
		width: 120upx;
		justify-content: center;
		align-items: flex-start;
	}

	.m-content {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		word-break: break-all;
	}

	.m-right {
		display: flex;
		width: 120upx;
		justify-content: center;
		align-items: flex-start;
	}

	.head_icon {
		width: 80upx;
		height: 80upx;
	}

	.m-content-head {
		position: relative;
	}

	.m-content-head-right {
		display: flex;
		justify-content: flex-end;
	}

	.m-content-head-left {
		display: flex;
		justify-content: flex-start;
	}

	.m-content-head-home {
		text-align: left;
		background: #FFAEB9;
		border: 1px #FFAEB9 solid;
		border-radius: 20upx;
		padding: 20upx;
		color: white;
	}

	.m-content-head-home:before {
		border: 15upx solid transparent;
		border-right: 15upx solid #FFAEB9;
		left: -26upx;
		width: 0;
		height: 0;
		position: absolute;
		content: ' '
	}

	.m-content-head-customer {
		border: 1upx #57A6F4 solid;
		background: #57A6F4;
		border-radius: 20upx;
		padding: 20upx;
		color: white;
	}

	.m-content-head-customer:after {
		border: 15upx solid transparent;
		border-left: 15upx solid #57A6F4;
		top: 20upx;
		right: -26upx;
		width: 0;
		height: 0;
		position: absolute;
		content: ' '
	}
</style>
