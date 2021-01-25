<template>
	<view>
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<view class="top_nav_segmented">
			<text class="iconfont icon-bottom nav-icon-left" @tap="bindBack"></text>
			<view class="nav_segmented">
				<slot></slot>
			</view>
			<view class="nav-icon-right"></view>
		</view>
	</view>
</template>

<script>
	/**
	 * name:标题栏
	 * 属性：
	 * 事件：
	 * 注意：使用时在pages.json里面当前页面下设置如下
	 * "style": {
	 * 	"app-plus": {
	 * 		"titleNView": false
	 * 	}
	 * }
	 */
	export default {
		name: "uni-title-block",
		data() {
			return {
				colors: ['#4cd964', '#dd524d']
			}
		},
		methods: {
			bindBack() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style lang="scss">
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-color: $page-bgc-color;
	}

	.top_view {
		height: var(--status-bar-height);
		width: 100%;
		position: fixed;
		background-color: $page-bgc-color;
		top: 0;
		z-index: 999;
	}

	.top_nav_segmented {
		background-color: $page-bgc-color;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 5upx 0upx;
	}

	.nav_segmented {
		flex: 1;
		text-align: center;
		color: #FFFFFF;
		font-size: 16px;
		/* #ifdef H5 */
		font-weight: 700;
		/* #endif */
	}

	.nav-icon-left {
		position: relative;
		width: 30px;
		margin: 0 2px;
		word-break: keep-all;
		white-space: pre;
		cursor: pointer;
		font-size: 20px;
		text-align: center;
		color: #FFFFFF;
		transform: rotate(90deg);
	}

	.nav-icon-right {
		margin-left: auto;
		width: 40upx;
		height: 70upx;
		line-height: 70upx;
		font-size: 34upx;
		color: white;
		text-align: center;
		margin-right: 20upx;
	}
</style>
