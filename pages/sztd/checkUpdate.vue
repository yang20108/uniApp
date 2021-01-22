<template>
	<view class="update-body" style="background-image: url('../../static/img/sztd_update_bgi.jpg');">
		<view class="update-body-nei">
			<custom-progress :percent="percent"></custom-progress>
			<view class="update-body-text">{{checkTip}}</view>
		</view>
	</view>
</template>

<script>
	import customProgress from "../../components/custom-tools/custom-progress.vue"
	export default {
		data() {
			return {
				checkTip: "新版本正在努力更新中，请稍等！",
				percent: 68
			}
		},
		methods: {},
		components: {
			customProgress
		},
		onLoad(load) {

		}
	}
</script>

<style>
	.update-body {
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	.update-body-nei {
		position: relative;
		top: 40%;
		padding: 10px 20px;
		text-align: center;
	}

	.update-body-text {
		font-size: 18px;
		font-family: "Source Han Sans CN";
		line-height: 0.556;
		color: #6C6C6C;
		margin-top: 30px;
	}
</style>
