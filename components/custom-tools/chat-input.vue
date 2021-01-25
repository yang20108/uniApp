<template>
	<view class="footer">
		<view class="footer-left">
			<text class="iconfont icon-voice tm-voice-icon" @tap="startRecognize"></text>
		</view>
		<view class="footer-center">
			<input class="input-text" type="text" v-model="inputValue"></input>
		</view>
		<view class="footer-right" @tap="sendMessge">
			<view id='msg-type' class="uni-msg-type">发送</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "chat-input",
		data() {
			return {
				inputValue: ''
			}
		},
		methods: {
			startRecognize: function() {
				// #ifdef H5
				console.log("暂不支持");
				return;
				// #endif
				var options = {};
				var that = this;
				options.engine = 'iFly';
				that.inputValue = "";
				plus.speech.startRecognize(options, function(s) {
					console.log("语音识别 success => " + s);
					that.inputValue += s;
				}, function(e) {
					uni.showModal({
						content: "网络不好，没听清哦！",
						showCancel: false
					})
					console.log("语音识别失败：" + e.message);
				});
			},
			sendMessge: function() {
				var that = this;
				if (that.inputValue.trim() == '') {
					that.inputValue = '';
				} else {
					//点击发送按钮时，通知父组件用户输入的内容
					this.$emit('send-message', {
						type: 'text',
						content: that.inputValue
					});
					that.inputValue = '';
				}
			}
		}
	}
</script>

<style>
	.footer {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 80upx;
		min-height: 80upx;
		border-top: solid 1px #bbb;
		overflow: hidden;
		padding: 5upx;
		background-color: #fafafa;
	}

	.footer-left {
		width: 80upx;
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.tm-voice-icon {
		width: 40px;
		height: 40px;
		font-size: 22px;
		line-height: 40px;
		flex-shrink: 0;
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

	.footer-right {
		width: 120upx;
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #1482D1;
	}

	.footer-center {
		flex: 1;
		height: 80upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.footer-center .input-text {
		flex: 1;
		background: #fff;
		border: solid 1upx #ddd;
		padding: 10upx !important;
		font-family: verdana !important;
		overflow: hidden;
		border-radius: 15upx;
	}

	.uni-msg-type {
		color: #57A6F4;
		font-size: 16px;
	}
</style>
