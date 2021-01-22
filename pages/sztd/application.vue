<template>
	<view>
		<swiper class="application-swiper" style="height: 250px;" :indicator-dots="true" :autoplay="true" :interval="3000"
		 :duration="1000" :circular="true">
			<swiper-item v-for="(img, index) in gridImgList" :key="index">
				<image class="swiper-img-item" :src="img"></image>
			</swiper-item>
		</swiper>
		<view class="grid-card">
			<view class="grid-decorate-top">
				<image class="grid-decorate-top-img" src="../../static/img/grid_decorate_top.png"></image>
			</view>
			<view class="grid-square">
				<view class="grid-square-9">
					<view class="grid-square-9-item" hover-class="uni-grid-9-item-hover" v-for="(grid, index) in gridList" :key="index"
					 @click="onClickNav(grid)">
						<text style="text-align: center;" class="iconfont uni-square-9-image" :class="grid.icon"></text>
						<text class="uni-square-9-text">{{grid.title}}</text>
					</view>
				</view>
			</view>
			<view class="">
				<image class="grid-decorate-bottom-img" src="../../static/img/grid_decorate_bottom.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gridImgList: [
					'../../static/img/sztd_grid_1.jpg',
					'../../static/img/sztd_grid_2.jpg',
					'../../static/img/sztd_grid_3.jpg'
				],
				gridList: [{
					title: '施工工况',
					icon: 'icon-gongkuang square-icon-csp',
					url: '../csp/condition'
				}, {
					title: '风险动态',
					icon: 'icon-fengxianfenxi square-icon-risk',
					url: '../risk/riskDynamic'
				}, {
					title: '风险巡查',
					icon: 'icon-yinhuanchaxun square-icon-risk-patrol',
					url: '../risk/riskPatrol'
				}, {
					title: '危大工程',
					icon: 'icon-gongcheng square-icon-dan',
					url: '../dangerous/dangerous'
				}, {
					title: '预警汇总',
					icon: 'icon-yujingxinxi square-icon-early',
					url: '../warning/warningEarly'
				}, {
					title: '预警处理',
					icon: 'icon-daichuli square-icon-handle',
					url: '../warning/warningHandle'
				}, {
					title: '巡查报告',
					icon: 'icon-xunchabaogao square-icon-xcbg',
					url: '../risk/riskShow'
				}, {
					title: '隐患排查',
					icon: 'icon-risk square-icon-yhpc',
					url: '../handle/handleDanger'
				}, {
					title: '综合分析',
					icon: 'icon-zonghefenxi square-icon-zonghefenxi',
					url: '../analysis/analysisSynthesize'
				}]
			}
		},
		methods: {
			onClickNav(grid) {
				uni.navigateTo({
					url: grid.url
				});
			}
		},
		onLoad() {
			// 过滤掉没有"url"的grid
			this.gridList = this.gridList.filter(function(grid) {
				return grid.url;
			});
		}
	}
</script>

<style>
	.swiper-img-item {
		width: 100%;
		height: 100%;
	}

	.grid-card {
		height: auto;
		width: -webkit-fill-available;
		background: #fff;
		border-radius: 20upx;
		box-shadow: 0 6upx 18upx rgba(0, 0, 0, 0.12);
		position: absolute;
		margin: 60upx 40upx;
		top: 200px;
		bottom: 0px;
	}

	.grid-decorate-top {}

	.grid-decorate-top-img {
		width: 120px;
		height: 30px;
		float: right;
		margin-right: 40px;
	}

	.grid-square {
		padding: 30px 10px;
	}

	.grid-square-9 {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.grid-square-9-item {
		width: 210upx;
		height: 200upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-color: #eee;
		box-sizing: border-box;
	}

	.uni-square-9-image {
		width: 100upx;
		height: 55px;
		line-height: 55px;
		font-size: 40px;
		padding: 4px 7px;
		color: #FFFFFF;
		border-radius: 50px;
	}

	.square-icon-xcbg {
		background-color: #5AABDB;
	}

	.square-icon-yhpc {
		background-color: #FF9F00;;
	}

	.square-icon-zonghefenxi {
		/* #ifdef APP-PLUS */
		background-image: linear-gradient(140deg, #3CB88E 44%, #64DEB5 97%);
		/* #endif */
		/* #ifdef H5 */
		background-image: -moz-linear-gradient( 140deg, #3CB88E 44%, #64DEB5 97%);
		background-image: -webkit-linear-gradient( 140deg, #3CB88E 44%, #64DEB5 97%);
		background-image: -ms-linear-gradient( 140deg, #3CB88E 44%, #64DEB5 97%);
		/* #endif */
	}

	.square-icon-csp {
		/* #ifdef APP-PLUS */
		background-image: linear-gradient(0deg, rgb(78, 122, 237) 0%, rgb(94, 202, 250) 100%);
		/* #endif */
		/* #ifdef H5 */
		background-image: -moz-linear-gradient(70deg, rgb(78, 122, 237) 0%, rgb(94, 202, 250) 100%);
		background-image: -webkit-linear-gradient(70deg, rgb(78, 122, 237) 0%, rgb(94, 202, 250) 100%);
		background-image: -ms-linear-gradient(70deg, rgb(78, 122, 237) 0%, rgb(94, 202, 250) 100%);
		/* #endif */
	}

	.square-icon-risk {
		/* #ifdef APP-PLUS */
		background-image: linear-gradient(0deg, rgb(200, 143, 38) 0%, rgb(232, 210, 68) 100%);
		/* #endif */
		/* #ifdef H5 */
		background-image: -moz-linear-gradient(70deg, rgb(200, 143, 38) 0%, rgb(232, 210, 68) 100%);
		background-image: -webkit-linear-gradient(70deg, rgb(200, 143, 38) 0%, rgb(232, 210, 68) 100%);
		background-image: -ms-linear-gradient(70deg, rgb(200, 143, 38) 0%, rgb(232, 210, 68) 100%);
		/* #endif */
	}

	.square-icon-risk-patrol {
		/* #ifdef APP-PLUS */
		background-image: linear-gradient(0deg, rgb(209, 121, 24) 0%, rgb(242, 184, 118) 100%);
		/* #endif */
		/* #ifdef H5 */
		background-image: -moz-linear-gradient(70deg, rgb(209, 121, 24) 0%, rgb(242, 184, 118) 100%);
		background-image: -webkit-linear-gradient(70deg, rgb(209, 121, 24) 0%, rgb(242, 184, 118) 100%);
		background-image: -ms-linear-gradient(70deg, rgb(209, 121, 24) 0%, rgb(242, 184, 118) 100%);
		/* #endif */
	}

	.square-icon-dan {
		/* #ifdef APP-PLUS */
		background-image: linear-gradient(0deg, rgb(226, 52, 60) 0%, rgb(239, 96, 106) 60%, rgb(251, 140, 151) 100%);
		/* #endif */
		/* #ifdef H5 */
		background-image: -moz-linear-gradient(70deg, rgb(226, 52, 60) 0%, rgb(239, 96, 106) 60%, rgb(251, 140, 151) 100%);
		background-image: -webkit-linear-gradient(70deg, rgb(226, 52, 60) 0%, rgb(239, 96, 106) 60%, rgb(251, 140, 151) 100%);
		background-image: -ms-linear-gradient(70deg, rgb(226, 52, 60) 0%, rgb(239, 96, 106) 60%, rgb(251, 140, 151) 100%);
		/* #endif */
	}

	.square-icon-early {
		/* #ifdef APP-PLUS */
		background-image: linear-gradient(0deg, rgba(75, 190, 110, 1), rgba(123, 230, 133, 1));
		/* #endif */
		/* #ifdef H5 */
		background-image: -moz-linear-gradient(70deg, rgba(75, 190, 110, 1), rgba(123, 230, 133, 1));
		background-image: -webkit-linear-gradient(70deg, rgba(75, 190, 110, 1), rgba(123, 230, 133, 1));
		background-image: -ms-linear-gradient(70deg, rgba(75, 190, 110, 1), rgba(123, 230, 133, 1));
		/* #endif */
	}

	.square-icon-handle {
		/* #ifdef APP-PLUS */
		background-image: linear-gradient(0deg, rgb(103, 190, 36), rgb(152, 230, 103));
		/* #endif */
		/* #ifdef H5 */
		background-image: -moz-linear-gradient(70deg, rgb(103, 190, 36), rgb(152, 230, 103));
		background-image: -webkit-linear-gradient(70deg, rgb(103, 190, 36), rgb(152, 230, 103));
		background-image: -ms-linear-gradient(70deg, rgb(103, 190, 36), rgb(152, 230, 103));
		/* #endif */
	}

	.uni-square-9-text {
		line-height: 60upx;
		height: 60upx;
		text-align: center;
		font-size: 36upx;
	}

	.grid-decorate-bottom-img {
		width: 200px;
		height: 35px;
		margin-left: 70px;
		position: absolute;
		bottom: -1px;
	}
</style>
