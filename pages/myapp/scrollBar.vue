<template>
	<view>
		<scroll-view class="scroll-view" :scrollLeft="scrollLeft" scroll-x scrollWithAnimation>
			<view style="display: flex;position: relative;">
				<view class="detail" v-for="(item,index) in tabsList" :key="index"
				 @click="clickItem(index)">
					{{item}}
				</view>
				<view class="btm-line" :style="{left: barLeft+'px', width: barWidth+'rpx'}"></view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex: 1,
				tabsList: [
					'全部',
					'待付款',
					'待使用',
					'待评价',
					'待收货',
					'待晒图',
					'退款/售后',
				],
				scrollLeft: 0,
				barLeft: 14,
				barWidth: 60
			}
		},
		methods: {
			clickItem(idx) {
				const query = uni.createSelectorQuery().in(this);
				var offsetLeft = 0;
				query.selectAll(".detail").boundingClientRect((res) => {
					for (var i = 0; i < idx; i++) {
						offsetLeft += res[i].width;
					}
					// 计算提示位置
					this.barLeft = offsetLeft + (res[idx].width - uni.upx2px(this.barWidth)) / 2;
					// 计算滚动条位置
					this.countScroll(offsetLeft, res[idx].width);
				}).exec();
			},
			countScroll(offsetLeft, width) {
				//console.log("offsetLeft",offsetLeft,"width",width)
				const query = uni.createSelectorQuery().in(this);
				query.select(".scroll-view").fields({
					rect: true,
					size: true,
					scrollOffset: true
				}, data => {
					var offL = offsetLeft + width / 2; //内容中心距离距 父级左边的距离
					var showW = data.width / 2; //父级中心位置
					this.scrollLeft = (offL < showW) ? 0 : offL - showW;
				}).exec();
			}
		}
	}
</script>

<style>
	.detail {
		white-space: nowrap;padding: 10rpx 30rpx;
	}
	.btm-line {
		position: absolute;
		bottom: 3rpx;
		height: 4rpx;
		border-radius: 3rpx;
		background-color: #50CC94;
		transition: left .3s, width .3s;
	}
</style>
