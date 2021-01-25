<template>
	<view>
		<view style="padding: 30px;">
			<view class="lock-title">输入身份密码验证</view>
			<view class="lock-content">时刻保护你的秘密，祝您聊天愉快。{{textTips}} </view>
		</view>
		<view style="text-align: center;">
			<view class="flex-box">
				<block v-for="(nc, index) in numberCount" :key="index">
					<view class="number-item box" :style="rangesStr.length===index&&isInput?'border-color: #57A6F4;':''" @click="showKeyBoard">
						{{rangesStr[index]?rangesStr[index]:""}}
						<view class="line" :style="rangesStr.length===index&&isInput?'display: block;':''"></view>
					</view>
				</block>
			</view>
			<view style="margin-top: 30px;" class="btn-double" v-if="showBtn&&'unlock'!=lockClose">
				<button class="btn-double-pro btn-cancel-bgc" @click="bindLock(false)">取消</button>
				<button class="btn-double-pro btn-confirm-bgc" @click="bindLock(true)">{{lockStr?"确认":"保存"}}</button>
			</view>
			<view style="color: red;margin-top: 10px;">{{textErrorTips}}</view>
		</view>
		<key-board ref="keyboard" type="number" mode="number" @val="keyVal" @del="keyDel" @hide="isInput=false"></key-board>
	</view>
</template>

<script>
	import keyBoard from "../../components/custom-tools/keyboard-float.vue";
	import service from "../../common/service.js"
	export default {
		data() {
			return {
				numberCount: 4,
				rangesStr: "",
				lockStr: "",
				lockClose: false,
				textTips: "请在下方输入框内输入设置密码！",
				textErrorTips: "请牢记您的密码，忘记后无法找回", // 密码验证失败！
				isInput: false,
				isBack: true,
				showBtn: false
			}
		},
		methods: {
			keyDel() {
				let d = this.rangesStr;
				this.rangesStr = d.substring(0, d.length - 1);
			},
			keyVal(value) {
				if (4 <= this.rangesStr.length || "." === value) {
					return;
				}
				this.rangesStr += value;
			},
			showKeyBoard() {
				this.isInput = true;
				this.$refs.keyboard._keyShow();
			},
			bindLock(isT) {
				let that = this;
				if (isT) {
					if (!this.rangesStr) {
						this.textErrorTips = "密码可设置1-4位数，否则无法正常保存";
						return;
					}

					// 修改或关闭密码时，进行身份验证
					if (this.lockStr) {
						if (this.lockStr != this.rangesStr) {
							this.textErrorTips = "密码验证失败";
							return;
						}
						this.textErrorTips = "密码验证成功";
						if (!this.lockClose) {
							this.textTips = "请设置新密码";
							this.rangesStr = "";
							this.lockStr = "";
							return;
						}
					}

					// 保存或关闭输入的密码
					this.textTips = this.lockClose ? "请稍等，正在关闭密码设置！" : "请稍等，正在保存密码设置！";
					uni.showLoading({
						title: '',
						mask: false
					});
					setTimeout(function() {
						if (that.lockClose) {
							service.removeChatLock();
							that.textErrorTips = "密码关闭成功";
						} else {
							service.setChatLock(that.rangesStr);
							that.textErrorTips = "密码设置成功";
						}
						uni.hideLoading();
						uni.showToast({
							title: that.textErrorTips,
							icon: 'none'
						});
						setTimeout(function() {
							that.onBackChat();
						}, 300);
					}, 2000);
				} else {
					that.onBackChat();
				}
			},
			onBackChat() {
				this.isBack = false;
				uni.navigateBack({
					delta: 1
				})
			}
		},
		watch: {
			rangesStr: {
				immediate: true,
				handler() {
					if (this.rangesStr) {
						if (!this.lockStr && !this.lockClose) {
							this.textErrorTips = "密码可设置1-4位数（越难安全性越高）";
						}
						if ("unlock" === this.lockClose && this.lockStr === this.rangesStr) {
							this.onBackChat();
						}
						this.showBtn = true;
					} else {
						this.showBtn = false;
					}
					if (4 === this.rangesStr.length) {
						this.$refs.keyboard._keyHide();
					}
				}
			}
		},
		components: {
			keyBoard
		},
		onLoad(load) {
			uni.setNavigationBarTitle({
				title: "聊天"
			})
			this.lockStr = service.getChatLock();
			if (this.lockStr) {
				this.textTips = "请输入旧密码";
				this.textErrorTips = "";
			}
			if (load.lockClose) {
				this.lockClose = load.lockClose;
				if ("unlock" === this.lockClose) {
					this.textTips = "请验证密码";
				}
				load.lockClose = undefined;
			}
		},
		onBackPress() {
			return this.isBack;
		}
	}
</script>

<style>
	page {
		background: #FFFFFF;
	}

	.lock-view-btn {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 30px;
	}

	.lock-btn {
		width: 40%;
		height: 40px;
		line-height: 40px;
		margin: 10px;
		color: #FFFFFF;
		background-color: #57A6F4;
		border-color: #57A6F4;
	}

	.lock-title {
		font-size: 22px;
		font-weight: bold;
		font-family: Microsoft JhengHei;
	}

	.lock-content {
		font-size: 15px;
		color: #898989;
		line-height: 20px;
	}

	.flex-box {
		width: 65%;
		height: 50px;
		margin: 50px auto 20px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.box {
		box-sizing: border-box;
		border: 1px solid #898989;
	}

	.number-item {
		width: 50px;
		height: 50px;
		font-size: 35px;
		font-weight: bold;
		color: #333333;
		line-height: 50px;
		margin: 1px;
		position: relative;
	}

	@keyframes twinkling {
		0% {
			opacity: 0.2;
		}

		50% {
			opacity: 0.5;
		}

		100% {
			opacity: 0.2;
		}
	}

	.line {
		display: none;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 2upx;
		height: 40upx;
		background: #333333;
		animation: twinkling 1s infinite ease;
	}
</style>
