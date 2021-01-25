<template>
	<view>
		<image v-if="imgSrc" style="width: 200px;height: 200px;" :src="imgSrc"></image>
		<button @click="snapshotPusher">抓拍</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgSrc: "",
				pusher: null
			}
		},
		methods: {
			snapshotPusher() {
				let that = this;
				this.pusher.snapshot(function(e) {
					that.pusher.stop();
					that.pusher.close();
					var src = "file://" + e.tempImagePath.substring(1)
					var reader = new plus.io.FileReader();
					reader.onloadend = function(e) {
						var speech = e.target.result; // base64图片
						that.imgSrc = speech;
					};
					reader.readAsDataURL(src);
				}, function(e) {
					console.log("snapshotPusher error: " + JSON.stringify(e));
				});
			}
		},
		onLoad() {
			// #ifdef APP-PLUS
			var pages = getCurrentPages();
			var page = pages[pages.length - 1];
			var currentWebview = page.$getAppWebview();
			var styles = {}
			styles.url = "";
			styles.width = "100%";
			styles.height = "500px";
			styles.top = "100px";
			styles.position = "static";
			styles.beauty = true; // 是否美颜
			styles.whiteness = 2; // 是否美白(0~5值越大美白程度越大)
			this.pusher = plus.video.createLivePusher('livepusher', styles);
			currentWebview.append(this.pusher);
			// #endif
		}
	}
</script>

<style>
</style>
