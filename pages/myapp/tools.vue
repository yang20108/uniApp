<template>
	<view style="padding: 3px;">
		<button type="primary" @click="setTitle">修改title</button>
		<button type="primary" @click="setThemeColor">修改Theme背景色</button>
		<alert-dialog :showAlert="showAlert" @onClose="showDialog"></alert-dialog>
		<button type="primary" @click="showDialog">仿原生dialog</button>
		<!-- #ifdef APP-PLUS -->
		<button type="primary" @click="getVersion">获取版本号version</button>
		<button type="primary" @click="openURL">打开第三方程序</button>
		<button type="primary" @click="launchApplication">调用第三方（淘宝）程序</button>
		<!-- #endif -->
		<!-- <camera device-position="back" flash="off" @error="error" style="width: 100%; height: 300px;"></camera>
		<view>预览</view>
		<image mode="widthFix" :src="src"></image> -->
		<button type="primary" @click="richAlert" disabled="true">DCloud-RichAlert</button>
		<view v-if="showMask" class="tm-mask">
			<view class="tm-box" @click.stop="">
				<view>这是一个假页面，在原来页面上添加了一个面具、朦层页面</view>
				<button type="primary" @click="closeMask">关闭朦层页面</button>
			</view>
		</view>
		<button type="primary" @click="showMask = true">朦层页面</button>
		<button type="primary" plain="true" :disabled="1===timer" @click="dian">防止高频点击</button>
		<button type="primary" plain="true" @click="moren('ttttttt','llllllllll')">占位法参数跳转</button>
		<button type="primary" plain="true" @click="message">全局统一吐司提示</button>
	</view>
</template>

<script>
	import alertDialog from "@/components/custom-tools/alert-dialog.vue";
	export default {
		data() {
			return {
				showAlert: false,
				showMask: false,
				src: "",
				url: "https://uniapp.dcloud.io/",
				appInf: "", // 要启动第三方程序的描述信息
				ids: [
					{name: 'App Store',scheme: 'itms-apps://'},
					{name: '支付宝',pname: 'com.eg.android.AlipayGphone',scheme: 'alipay://'},
					{name: '淘宝',pname: 'com.taobao.taobao',scheme: 'taobao://'},
					{name: 'QQ',pname: 'com.tencent.mobileqq',scheme: 'mqq://'},
					{name: '微信',pname: 'com.tencent.mm',scheme: 'weixin://'},
					{name: '京东',pname: 'com.jingdong.app.mall',scheme: 'openApp.jdMobile://'},
					{name: '新浪微博',pname: 'com.sina.weibo',scheme: 'sinaweibo://'},
					{name: '优酷',pname: 'com.youku.phone',scheme: 'youku://'}  
				],
				timer: 0
			}
		},
		methods: {
			message() {
				this.$msg("这是全局统一吐司");
			},
			moren (type='add', loading) {
				uni.navigateTo({
					url: `./test?type=${JSON.stringify(type)}&data=${loading}`
				})
			},
			dian () {
				//防止高频点击
				if(this.timer == 1){
					return;
				}
				this.timer = 1;
				setTimeout(()=>{
					this.timer = 0;
				}, 1000)
			},
			launchApplication() {
				var name = "",exist = false;
				// 判断Android和ios平台
				if ("Android" === plus.os.name) {
					this.appInf = "com.taobao.taobao"
					// 判断第三方程序是否已存在
					exist = plus.runtime.isApplicationExist({pname:this.appInf})
					if (!exist) {
						uni.showToast({
							icon: "none",
							title: "未安装应用"
						})
						return
					}
					plus.runtime.launchApplication({pname:this.appInf},
						function(fail) {
							console.log("调用失败: " + JSON.stringify(fail));
						}
					)
				} else if ("ios" === plus.os.name) {
					this.appInf = "taobao://"
					// 判断第三方程序是否已存在
					exist = plus.runtime.isApplicationExist({action:this.appInf})
					if (!exist) {
						uni.showToast({
							icon: "none",
							title: "未安装应用"
						})
						return
					}
					plus.runtime.launchApplication({action:this.appInf},
						function(fail) {
							console.log("调用失败: " + JSON.stringify(fail));
						}
					)
				}
			},
			openURL() {
				plus.runtime.openURL(this.url,
					function(fail) {
						console.log("打开失败：" + JSON.stringify(fail));
					}
				)
			},
			closeMask() {
				this.showMask = !this.showMask;
			},
			richAlert() {
				const dcRichAlert = uni.requireNativePlugin('DCloud-RichAlert');
				dcRichAlert.show({
					position: 'bottom',
					title: "提示信息",
					titleColor: '#FF0000',
					content: "<a href='https://uniapp.dcloud.io/' value='Hello uni-app'>uni-app</a> 是一个使用 Vue.js 开发跨平台应用的前端框架!\n免费的\n免费的\n免费的\n重要的事情说三遍",
					contentAlign: 'left',
					checkBox: {
						title: '不再提示',
						isSelected: true
					},
					buttons: [{
						title: '取消'
					}, {
						title: '否'
					}, {
						title: '确认',
						titleColor: '#3F51B5'
					}]
				}, result => {
					console.log(result)
				});
			},
			error(e) {
				console.log(e.detail);
			},
			takePicture: function() {
				const ctx = uni.createCameraContext();
				ctx.takePhoto({
					quality: 'high',
					success: (res) => {
						this.src = res.tempImagePath
					}
				});
			},
			getVersion: function() {
				plus.runtime.getProperty(plus.runtime.appid, (wgtinfo) => {
					// console.log(JSON.stringify(wgtinfo));
					uni.showModal({
						content: "当前版本号：" + wgtinfo.version + "（" + wgtinfo.versionCode + "）",
						showCancel: false
					})
				})
				// console.log((plus.runtime.version).split('.').join(''));
			},
			showDialog() {
				this.showAlert = !this.showAlert;
			},
			setThemeColor: function() {
				uni.setNavigationBarColor({
					frontColor: '#ffffff', // 前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000
					backgroundColor: '#B19FB6' //背景颜色值，有效值为十六进制颜色
					//animation 动画效果
					//animation.duration 动画变化时间，默认0，单位：毫秒
					//animation.timingFunc 	动画变化方式，默认 linear
				})
			},
			setTitle: function() {
				uni.setNavigationBarTitle({
					title: '修改后的Title',
				});
			}
		},
		computed: {},
		components: {
			alertDialog
		},
		onBackPress() {
			if (this.showMask) {
				this.showMask = false;
				return true;
			}
		},
		onShow() {},
		onLoad(load) {}
	}
</script>

<style>
	button {
		margin-bottom: 2upx;
	}
</style>
