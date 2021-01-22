<template>
	<view class="login-body" style="background-image: url('../../static/img/sztd_login_bgi.png');">
		<view class="login-logo">
			<image class="login-logo-img" src="../../static/img/sztd_logo.png"></image>
		</view>
		<view class="login-input">
			<view class="login-input-account">
				<text class="iconfont icon-geren iconfont-sztd-login"></text>
				<input class="login-input-text" v-model="account" placeholder="请输入用户名" placeholder-style="color: #FFFFFF;" />
				<text class="iconfont icon-clear iconfont-sztd-login" @click="account='';password='';"></text>
			</view>
			<view class="login-input-account">
				<text class="iconfont icon-suo1 iconfont-sztd-login"></text>
				<input class="login-input-text" :password="!showPassword" v-model="password" placeholder="请输入密码" placeholder-style="color: #FFFFFF;" />
				<text v-if="!showPassword" class="iconfont icon-eye-close iconfont-sztd-login" @click="showPassword = !showPassword"></text>
				<text v-else class="iconfont icon-ai-eye iconfont-sztd-login" @click="showPassword = !showPassword"></text>
			</view>
		</view>
		<view class="login-auto">
			<view>
				<checkbox class="login-checkbox" color="#FFFFFF" :checked="checked"></checkbox>
			</view>
			<view class="login-auto-text" @click="checked = !checked">自动登录</view>
		</view>
		<button class="login-btn" @click="bindLogin">登录</button>
		<view class="login-auto-text login-forget">
			<navigator url="../sztd/setting" hover-class="navigator-hover">设置</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				account: "",
				password: "",
				showPassword: false,
				checked: false
			}
		},
		methods: {
			bindLogin() {
				uni.switchTab({
					url: './application'
				})
			}
		},
		computed: {},
		components: {},
		onBackPress() {},
		onShow() {},
		onLoad(load) {
			// #ifdef APP-PLUS
			// plus.navigator.setFullscreen(true); // 设置应用全屏
			// #endif
		}
	}
</script>

<style>
	.login-body {
		width: 100%;
		height: 100%;
		/* app中无法显示，所以使用行内样式
		background-image: url("../../static/img/sztd_login_bgi.png"); */
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	.login-logo {
		text-align: center;
	}

	.login-logo-img {
		width: 120px;
		height: 110px;
		margin-top: 90px;
	}

	.login-input {
		padding: 30px 20px 15px 20px;
	}

	.login-input-account {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-bottom: 1px #DEDEDE solid;
		text-align: center;
		padding: 20px 5px 2px 5px;
	}

	.iconfont-sztd-login {
		font-size: 18px;
		color: #FFFFFF;
		height: 20px;
		line-height: 20px;
		padding-top: 3px;
		margin-left: 1px;
	}

	.login-input-text {
		font-size: 18px;
	}

	.login-auto {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.login-auto-text {
		font-size: 15px;
		color: #FFFFFF;
	}

	.login-forget {
		width: 35px;
		float: right;
		text-align: center;
		margin: 10px 10px 0px 0px;
	}

	.login-btn {
		margin: 20px 5px 0px 5px;
		color: #2079C4;
		background-color: #CDDDF6;
	}
</style>
