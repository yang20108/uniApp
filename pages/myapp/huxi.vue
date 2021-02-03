<template>
	<view style="padding: 10px;box-sizing: border-box;">
		<view class="box test1"></view>
		<view class="box test2"></view>
		<view class="box test3"></view>
		<view style="border: 5rpx solid #EEEEEE;"></view>
		<view class="box test4"></view>
		<view class="box test5"></view>
		<view class="box test6"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
	}
</script>

<style lang="scss">
	.box {
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
		margin: 80rpx auto;
	}

	@keyframes test1 {
		from {
			box-shadow: 0rpx 0rpx 4rpx #f00;
		}

		to {
			box-shadow: 0rpx 0rpx 30rpx #f00;
		}
	}

	.test1 {
		animation: test1 1s ease-in-out infinite alternate;
	}

	@keyframes test2 {
		from {
			box-shadow: 0rpx 0rpx 5rpx #8688ff;
		}

		to {
			box-shadow: 0rpx 0rpx 30rpx #8688ff;
		}
	}

	.test2 {
		animation: test2 2s ease-in-out infinite alternate;
	}

	@keyframes test3 {
		from {
			box-shadow: 0rpx 0rpx 5rpx #1d96ff;
		}

		to {
			box-shadow: 0rpx 0rpx 30rpx #1d96ff;
		}
	}

	.test3 {
		animation: test3 3s ease-in-out infinite alternate;
	}

	@keyframes test4 {
		from {
			box-shadow: 0rpx 0rpx 5rpx #0dbe19;
		}

		to {
			box-shadow: 0rpx 0rpx 30rpx #0dbe19;
		}
	}

	.test4 {
		animation: test4 1s ease-out infinite;
	}

	@keyframes test5 {
		from {
			box-shadow: 0rpx 0rpx 5rpx #02e1e1;
		}

		to {
			box-shadow: 0rpx 0rpx 30rpx #02e1e1;
		}
	}

	.test5 {
		animation: test5 2s ease infinite;
	}

	@keyframes test6 {
		from {
			box-shadow: 0rpx 0rpx 5rpx #aa00ff;
		}

		to {
			box-shadow: 0rpx 0rpx 30rpx #aa00ff;
		}
	}

	.test6 {
		animation: test6 3s linear infinite;
	}
</style>
