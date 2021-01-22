<template>
	<view class="tb-row-item">
		<view class="tb-text-title">
			<view class="item-title">
				<text class="tmicon tm--bitian iconfont-required" v-if="required"></text>
				<view class="item-label">{{ label }}</view>
			</view>
			<view class="item-body"></view>
			<view class="item-selection">
				<text class="tmicon tm-voice tb-row-yuyin" @click="startRecognize"></text>
			</view>
		</view>
		<view class="tb-text-body">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	/**
	 * name:表单textarea大文本组件项
	 * 属性：
	 * label string类型，表单项的提示名称
	 * required boolean类型，此项是否必填项
	 * 事件：
	 * startRecognize function类型，语音文字识别并回传数据
	 */
	export default {
		name: "tb-row-textarea",
		props: {
			label: {
				type: String,
				default: ""
			},
			required: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				text: ""
			}
		},
		methods: {
			// 语音识别
			startRecognize() {
				var options = {};
				options.engine = 'iFly';
				this.text = "";
				const _this = this;
				plus.speech.startRecognize(options, function(s) {
					_this.text += s;
					_this.$emit("bindRecognize", _this.text);
				}, function(e) {
					uni.showToast({
						title: "语音识别失败：" + e.message,
						icon: 'none'
					});
					console.log("语音识别失败：" + e.message);
				});
			}
		}
	}
</script>

<style>
	.tb-text-title {
		display: inline-flex;
		display: -webkit-inline-flex;
		line-height: 100upx;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.tb-row-item {
		padding: 22upx 0upx;
		font-size: 24upx;
		position: relative;
		width: 100%;
	}

	.item-title {
		display: inline-flex;
		display: -webkit-inline-flex;
		width: 25%;
		justify-content: flex-end;
	}

	.iconfont-required {
		font-size: 10px;
		color: red;
		margin-top: 5px;
	}

	.item-label {
		padding-left: 2px;
		font-size: 16px;
	}

	.item-body {
		width: 60%;
		margin-left: 25px;
		padding-right: 5px;
	}

	.item-selection {
		width: 10%;
		height: 30px;
		line-height: 30px;
	}

	.tb-row-yuyin {
		border: 1px solid #FFFFFF;
		border-radius: 40px;
		font-size: 22px;
		/* #ifdef APP-PLUS */
		color: transparent;
		-webkit-background-clip: text;
		background-image: linear-gradient(0deg, rgb(161, 48, 181) 0%, rgb(68, 102, 226) 100%);
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
		background-image: -moz-linear-gradient(70deg, rgb(161, 48, 181) 0%, rgb(68, 102, 226) 100%);
		background-image: -webkit-linear-gradient(70deg, rgb(161, 48, 181) 0%, rgb(68, 102, 226) 100%);
		background-image: -ms-linear-gradient(70deg, rgb(161, 48, 181) 0%, rgb(68, 102, 226) 100%);
		/* #endif */
	}

	.tb-row-yuyin:active {
		border-color: #C4C4C4;
	}

	.tb-text-body {
		margin: 3px 20px 0px 30px;
		font-size: 16px;
		color: grey;
	}
</style>
