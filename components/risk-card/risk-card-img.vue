<template>
	<view class="risk-img-mask">
		<view class="risk-img-box" @click.stop="changePreview">
			<view style="width: 90%;" @click.stop="">
				<view class="def-color-text2 risk-img-number">{{imgIndex}}/{{imgList.length}}</view>
				<view class="risk-img-body">
					<swiper class="rick-card-swiper sw_wh" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"
					 :circular="true" @change="changeSwiper">
						<swiper-item v-for="(img, index) in imgList" :key="index">
							<image class="view-hundred-percent" :id="index" :src="img" @error="imgError(img,$event)"></image>
						</swiper-item>
					</swiper>
				</view>
				<view class="risk-tips">
					<view class="def-color-text2">{{checkUser}}</view>
					<view class="def-color-text2 risk-tips-time">{{checkDate}}</view>
					<view class="def-color-text2 risk-tips-name">{{textDescribe}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * name:风险模块数据展示卡片 - 图片预览
	 * 属性：
	 * imgList Array类型 表示预览图片集合
	 * checkUser String类型 检查人
	 * checkDate String类型 检查日期
	 * textDescribe String类型 文字描述
	 * 事件：
	 */
	export default {
		name: "risk-card-img",
		props: {
			imgList: {
				type: Array,
				default: function() {
					return [];
				}
			},
			checkUser: {
				type: String,
				default: ""
			},
			checkDate: {
				type: String,
				default: ""
			},
			textDescribe: {
				type: String,
				default: ""
			}
		},
		data() {
			return {
				imgIndex: 1,
				imgDef: require("../../static/logo.png")
			}
		},
		methods: {
			changePreview() {
				this.$emit("preview");
			},
			changeSwiper(e) {
				this.imgIndex = e.detail.current + 1;
			},
			imgError(img, e) {
				// console.log("e: " + JSON.stringify(e));
				img.imgSrc = this.imgDef;
			}
		}
	}
</script>

<style>
	.sw_wh {
		width: 95%;
		height: 90%;
	}

	.risk-img-mask {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		background: rgba(0, 0, 0, 0.75);
		z-index: 999;
	}

	.risk-img-box {
		width: 100%;
		height: 100%;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.def-color-text2 {
		color: #FFFFFF;
	}

	.risk-img-number {
		width: 50px;
		height: 25px;
		text-align: center;
		margin-left: 5px;
	}

	.risk-img-body {
		height: 150px;
		border: 1px dotted #ffffff;
		margin: 10px 0px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.risk-tips {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.risk-tips-time {
		width: 78px;
		overflow: hidden;
		white-space: nowrap;
	}

	.risk-tips-name {
		text-align: center;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		width: 50%;
	}
</style>
