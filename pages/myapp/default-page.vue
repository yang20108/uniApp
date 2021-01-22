<template>
	<view>
		默认页面模板 + 默认api接口请求模板
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: []
			}
		},
		methods: {
			request() {
				uni.showLoading({
					mask: true
				})
				let that = this;
				uni.request({
					header: {
						"content-type": "application/x-www-form-urlencoded",
						"UserToken": ""
					},
					method: "GET",
					url: "http://192.168.90.64:8888/mAccount/LogOn",
					data: {
						"username": "",
						"password": ""
					},
					success(succ) {
						if (200 === succ.statusCode) {
							console.log("succ.data: " + JSON.stringify(succ.data));
							that.dataList = [];
							if (succ.data && 0 < succ.data.length) {
								that.dataList = succ.data;
							}
						} else {
							console.log("fail => mAccount/LogOn:" + succ.statusCode);
						}
					},
					fail() {
						console.log("fail => mAccount/LogOn");
						uni.showToast({
							icon: 'none',
							title: '请检查网络或服务.'
						});
					},
					complete() {
						uni.hideLoading();
					}
				})
			}
		},
		computed: {},
		components: {},
		onBackPress() {},
		onShow() {},
		onLoad(load) {}
	}
</script>

<style>
</style>
