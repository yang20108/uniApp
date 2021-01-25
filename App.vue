<script>
	import service from "common/service.js";
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			let pages = getCurrentPages();
			if (pages.length) {
				var pageRoute = pages[pages.length - 1].route; // route页面栈第一个页面
				var splits = pageRoute.split("/");
				var lockStr = service.getChatLock();
				// 开启手势锁
				if (lockStr && "lockNumber" != splits[splits.length - 1]) {
					uni.navigateTo({
						url: "/pages/myapp/lockNumber?lockClose=unlock"
					})
				}
			}
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "./common/uni.css";
	@import "./common/public.css";
	@import "./common/iconfont.css";

	page {
		background-color: #F4F5F6;
		height: 100%;
		font-size: 28upx;
	}


	button.primary {
		background-color: #0FAEFF;
	}

	button::after {
		border: none;
	}
</style>
