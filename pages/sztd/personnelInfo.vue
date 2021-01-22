<template>
	<view>
		<view class="uni-list">
			<view class="uni-list-cell uni-list-cell-navigate nav-right-item">
				<view class="personnel-info-card2">
					<text class="iconfont icon-lianxiren iconfont-sztd-info sztd-info-name-bgc"></text>
					<view class="personnel-info">
						<view class="personnel-info-title2">全伟雄</view>
						<view class="personnel-info-content">姓名</view>
					</view>
				</view>
			</view>
			<view class="uni-list-cell uni-list-cell-navigate nav-right-item">
				<view class="personnel-info-card2">
					<text class="iconfont icon-gongsi iconfont-sztd-info sztd-info-company-bgc"></text>
					<view class="personnel-info">
						<view class="personnel-info-title2">广州广船国际股份有限公司</view>
						<view class="personnel-info-content">单位</view>
					</view>
				</view>
			</view>
			<view class="uni-list-cell uni-list-cell-navigate nav-right-item">
				<view class="personnel-info-card2">
					<text class="iconfont icon-zhiwu iconfont-sztd-info sztd-info-post-bgc"></text>
					<view class="personnel-info">
						<view class="personnel-info-title2">项目经理</view>
						<view class="personnel-info-content">职务</view>
					</view>
				</view>
			</view>
			<view class="uni-list-cell uni-list-cell-navigate nav-right-item">
				<view class="personnel-info-card2">
					<text class="iconfont icon-lianxi iconfont-sztd-info sztd-info-phone-bgc"></text>
					<view class="personnel-info">
						<view class="personnel-info-title2">{{phone}}</view>
						<view class="personnel-info-content">联系方式</view>
					</view>
				</view>
			</view>
			<view class="uni-list-cell uni-list-cell-navigate nav-right-item">
				<view class="personnel-info-card2">
					<text class="iconfont icon-youjian iconfont-sztd-info sztd-info-mail-bgc"></text>
					<view class="personnel-info">
						<view class="personnel-info-title2">无</view>
						<view class="personnel-info-content">电子邮件</view>
					</view>
				</view>
			</view>
		</view>
		<view class="btn-single">
			<button class="btn-single-next uni-common-mt" @click="bindPhone">打电话</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: "17521042973"
			}
		},
		methods: {
			bindPhone() {
				uni.makePhoneCall({
					phoneNumber: this.phone
				});
			}
		},
		onLoad() {

		}
	}
</script>

<style>
	.personnel-info-card2 {
		width: 100%;
		display: flex;
		flex-direction: row;
	}

	.iconfont-sztd-info {
		height: 40px;
		line-height: 40px;
		font-size: 28px;
		padding: 0px 3px 0px 3px;
		color: #3296E1;
	}

	.sztd-info-name-bgc {
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

	.sztd-info-company-bgc {
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

	.sztd-info-post-bgc {
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

	.sztd-info-phone-bgc {
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

	.sztd-info-mail-bgc {
		/* #ifdef APP-PLUS */
		background-image: linear-gradient(90deg, rgb(139, 55, 217) 0%, rgb(238, 164, 104) 100%);
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
		background-image: -moz-linear-gradient(90deg, rgb(139, 55, 217) 0%, rgb(238, 164, 104) 100%);
		background-image: -webkit-linear-gradient(90deg, rgb(139, 55, 217) 0%, rgb(238, 164, 104) 100%);
		background-image: -ms-linear-gradient(90deg, rgb(139, 55, 217) 0%, rgb(238, 164, 104) 100%);
		/* #endif */
	}

	.personnel-info-title2 {
		color: #101010;
		font-size: 16px;
		height: 25px;
		line-height: 25px;
	}
</style>
