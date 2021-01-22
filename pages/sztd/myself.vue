<template>
	<view>
		<view style="height: 30px;"></view>
		<view class="uni-list">
			<view class="uni-list-cell uni-list-cell-navigate" hover-class="uni-list-cell-hover" @click="bindClick('telsafe')">
				<view class="setting-body">
					<text class="iconfont icon-lianxiren setting-icon setting-icon-user"></text>
					<view class="setting-tip">
						<view class="setting-tip-title">18668000179</view>
						<view class="setting-tip-content">上海同是科技股份有限公司</view>
					</view>
					<text class="iconfont icon-szright iconfont-setting-nav"></text>
				</view>
			</view>
		</view>
		<view class="uni-list active">
			<view class="uni-list-cell uni-list-cell-navigate" hover-class="uni-list-cell-hover" @click="bindClick('gesture')">
				<view class="setting-body-gesture">
					<text class="iconfont icon-shoushimima setting-icon2 setting-icon-gesture"></text>
					<view class="setting-tip setting-tip-title-gesture">手势登录</view>
					<text class="iconfont icon-szright iconfont-setting-gesture"></text>
				</view>
			</view>
			<view class="uni-list-cell uni-list-cell-navigate" hover-class="uni-list-cell-hover" @click="bindClick('password')">
				<view class="setting-body-gesture">
					<text class="iconfont icon-xiugaimima setting-icon2 setting-icon-pwd"></text>
					<view class="setting-tip setting-tip-title-gesture">修改密码</view>
					<text class="iconfont icon-szright iconfont-setting-gesture"></text>
				</view>
			</view>
		</view>
		<view class="uni-list active">
			<view class="uni-list-cell uni-list-cell-navigate" hover-class="uni-list-cell-hover" @click="bindClick('clear')">
				<view class="setting-body">
					<text class="iconfont icon-qingchuhuancun setting-icon setting-icon-clear"></text>
					<view class="setting-tip">
						<view class="setting-tip-title">清除缓存</view>
						<view class="setting-tip-content">176.29KB</view>
					</view>
					<text class="iconfont icon-szright iconfont-setting-nav"></text>
				</view>
			</view>
			<view class="uni-list-cell uni-list-cell-navigate" hover-class="uni-list-cell-hover" @click="bindClick('update')">
				<view class="setting-body">
					<text class="iconfont icon-jianchagengxin setting-icon setting-icon-update"></text>
					<view class="setting-tip">
						<view class="setting-tip-title">检查更新</view>
						<view class="setting-tip-content">1.0.0</view>
					</view>
					<text class="iconfont icon-szright iconfont-setting-nav"></text>
				</view>
			</view>
		</view>
		<button class="setting-btn-logout">注销当前账号</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			bindClick(item) {
				switch (item) {
					case "telsafe":
						console.log("telsafe");
						break;
					case "gesture":
						console.log("gesture");
						break;
					case "password":
						console.log("password");
						break;
					case "clear":
						console.log("clear");
						break;
					case "update":
						uni.navigateTo({
							url: './checkUpdate'
						})
						break;
				}
			}
		}
	}
</script>

<style>
	.uni-list.active {
		margin-top: 30px;
	}

	.setting-body {
		width: 100%;
		height: 45px;
		line-height: 45px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.setting-body-gesture {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.setting-icon {
		height: 45px;
		line-height: 45px;
		font-size: 35px;
		padding: 0px 3px 0px 3px;
		color: #3296E1;
	}

	.setting-icon2 {
		height: 35px;
		line-height: 35px;
		font-size: 35px;
		padding: 0px 3px 0px 3px;
		color: #3296E1;
	}

	.setting-icon-user {
		/* #ifdef APP-PLUS */
		background-image: linear-gradient(90deg, rgb(108, 167, 202) 0%, rgb(137, 158, 209) 100%);
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
		background-image: -moz-linear-gradient(90deg, rgb(108, 167, 202) 0%, rgb(137, 158, 209) 100%);
		background-image: -webkit-linear-gradient(90deg, rgb(108, 167, 202) 0%, rgb(137, 158, 209) 100%);
		background-image: -ms-linear-gradient(90deg, rgb(108, 167, 202) 0%, rgb(137, 158, 209) 100%);
		/* #endif */
	}

	.setting-icon-gesture {
		/* #ifdef APP-PLUS */
		background-image: linear-gradient(90deg, rgb(43, 188, 115) 0%, rgb(61, 193, 205) 100%);
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
		background-image: -moz-linear-gradient(90deg, rgb(43, 188, 115) 0%, rgb(61, 193, 205) 100%);
		background-image: -webkit-linear-gradient(90deg, rgb(43, 188, 115) 0%, rgb(61, 193, 205) 100%);
		background-image: -ms-linear-gradient(90deg, rgb(43, 188, 115) 0%, rgb(61, 193, 205) 100%);
		/* #endif */
	}

	.setting-icon-pwd {
		/* #ifdef APP-PLUS */
		background-image: linear-gradient(90deg, rgb(17, 162, 217) 0%, rgb(104, 116, 238) 100%);
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
		background-image: -moz-linear-gradient(90deg, rgb(17, 162, 217) 0%, rgb(104, 116, 238) 100%);
		background-image: -webkit-linear-gradient(90deg, rgb(17, 162, 217) 0%, rgb(104, 116, 238) 100%);
		background-image: -ms-linear-gradient(90deg, rgb(17, 162, 217) 0%, rgb(104, 116, 238) 100%);
		/* #endif */
	}

	.setting-icon-clear {
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

	.setting-icon-update {
		/* #ifdef APP-PLUS */
		background-image: linear-gradient(90deg, rgb(161, 48, 181) 0%, rgb(68, 102, 226) 100%);
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
		background-image: -moz-linear-gradient(90deg, rgb(161, 48, 181) 0%, rgb(68, 102, 226) 100%);
		background-image: -webkit-linear-gradient(90deg, rgb(161, 48, 181) 0%, rgb(68, 102, 226) 100%);
		background-image: -ms-linear-gradient(90deg, rgb(161, 48, 181) 0%, rgb(68, 102, 226) 100%);
		/* #endif */
	}

	.setting-tip {
		padding: 1px 0px 0px 0px;
		width: 75%;
	}

	.setting-tip-title {
		color: #101010;
		font-size: 18px;
		font-family: "Microsoft YaHei";
		height: 25px;
		line-height: 25px;
	}

	.setting-tip-title-gesture {
		color: #101010;
		font-size: 18px;
		font-family: "Microsoft YaHei";
	}

	.setting-tip-content {
		color: #808080;
		font-size: 13px;
		height: 15px;
		line-height: 15px;
		margin-top: 1px;
	}


	.iconfont-setting-nav {
		color: #B2BCCF;
		font-size: 18px;
		height: 20px;
		line-height: 20px;
		margin-top: 15px;
	}

	.iconfont-setting-gesture {
		color: #B2BCCF;
		font-size: 18px;
		height: 20px;
		line-height: 20px;
		margin-top: 8px;
	}

	.setting-btn-logout {
		margin: 25px 10px 0px 10px;
		border-radius: 50px;
		/* #ifdef APP-PLUS */
		background-image: linear-gradient(90deg, rgb(238, 164, 104) 0%, rgb(230, 64, 99) 100%);
		/* #endif */
		/* #ifdef H5 */
		background-image: -moz-linear-gradient(0deg, rgb(238, 164, 104) 0%, rgb(230, 64, 99) 100%);
		background-image: -webkit-linear-gradient(0deg, rgb(238, 164, 104) 0%, rgb(230, 64, 99) 100%);
		background-image: -ms-linear-gradient(0deg, rgb(238, 164, 104) 0%, rgb(230, 64, 99) 100%);
		/* #endif */
		box-shadow: 0px 4px 8px 0px rgba(237, 147, 103, 0.29);
		color: #FFFFFF;
	}
</style>
