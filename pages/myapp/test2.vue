<template>
	<view class="fs ta">
		<image style="width: 300upx;height: 300upx;margin-top: 200upx;" src="../../static/logo.png"></image>
		<view>
			<text style="font-size: 30upx;color: #09BB07;">Hello</text>
		</view>
		<button @click="onClick">button</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'test2'
			}
		},
		methods: {

			onClick: function() {
				var pages = getCurrentPages();
				var page = pages[pages.length - 1];
				// #ifdef APP-PLUS
				var currentWebview = page.$getAppWebview();
				// #endif
				/* 创建直播*/
				var pusher = plus.video.createLivePusher("", {
					url: 'rtmp://testlivesdk.v0.upaiyun.com/live/upyunb',
					top: '100px',
					left: '0px',
					width: '100%',
					height: '300px',
					position: 'static'
				});
				currentWebview.append(pusher); 

				/**
				* 自定义扫码
				* 此处未演示扫码成功回调的地址设置，实际请参考HTML5Plus API自行处理
				* 注意扫码区域需为正方形，否则影响扫码识别率
				var barcode = plus.barcode.create('barcode', [plus.barcode.QR], {
					top: '100px',
					left: '0px',
					width: '300px',
					height: '300px',
					position: 'static'
				});
				currentWebview.append(barcode); */

				/** 给titleNView右上角加个红点
				* 具体尺寸在商用时需自行计算。红点图在附件里。
				* nview的api非常多，具体参考：http://www.html5plus.org/doc/zh_cn/nativeobj.html#plus.nativeObj.View
				* 清除刚才绘制的红点：nTitle.reset();
				var nTitle = currentWebview.getTitleNView();
				nTitle.drawBitmap("static/reddot.png", {}, {
					top: '3px',
					left: '340px',
					width: '4px',
					height: '4px'
				}); */

				/* 给tabbar加个凸起
				 * 开源示例：https://github.com/xiaotimo/uni-app-tabbar
				 
				var centerButtonOnTab = new plus.nativeObj.View("", {
					top: '500px',
					left: '160px',
					height: '50px',
					width: '50px',
					backgroundColor: '#FF0000'
				});
				plus.webview.currentWebview().append(centerButtonOnTab);*/
			}
		},
		components: {}
	}
</script>

<style>
	.body {
		/* background-color: #D9A0E7; */
		height: 100%;
		font-size: 38upx;
		text-align: center;
	}

	.fs {
		font-size: 38upx;
	}

	.ta {
		text-align: center;
	}
</style>
