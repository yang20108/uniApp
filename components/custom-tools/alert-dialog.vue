<template>
	<view>
		<view v-if="showAlert" class="tm-mask">
			<view class="tm-box">
				<view style="width: 100%;height: 100%;text-align: center;background-color: #FFFFBB;">文本</view>
			</view>
			<text class="iconfont icon-clear icon-style" @click="onClose"></text>
		</view>
	</view>
</template>

<script>
	/**
	 * 仿原生dialog弹框
	 * 属性：
	 * showAlert[boolean] 是否显示
	 * 事件：
	 * onClose[function] 关闭dialog
	 */
	export default {
		name: 'alert-dialog',
		props: {
			showAlert: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {}
		},
		methods: {
			onClose: function() {
				this.$emit("onClose");
			}
		},
	}
</script>

<style>
	.tm-mask {
		width: 100%;
		position: fixed;
		top: 0;
		/* #ifdef H5 */
		top: 45px;
		/* #endif */
		bottom: 0;
		display: flex;
		flex-direction: column;
		padding-top: 20%;
		align-items: center;
		background: rgba(0, 0, 0, 0.34);
		z-index: 999;
	}

	.tm-box {
		width: 80%;
		height: 60%;
		background: #FFFFFF;
		border: 2px solid #d1dadac7;
		border-radius: 10px;
		padding: 10px;
	}

	.tm-box:after {
		height: 30px;
		width: 2px;
		content: '';
		position: absolute;
		bottom: 24%;
		left: 48.5%;
		background: #6F6F6F;
		margin: 5px;
	}

	.icon-style {
		margin-top: 50px;
		/* background-color: #FFFFFF; */
		font-size: 35px;
		padding: 2px 1px 0px 1px;
		border-radius: 20px;
		height: 34px;
		line-height: 34px;
		color: #FFFFFF;
	}
</style>
