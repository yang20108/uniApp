<template>
	<view>
		<view
		 :style="{
			backgroundColor: value ? '#45e3f9' : '#20114c',
			transform:`scale(${size})`
		 }"
		 class="main-container"
		 @tap="onClick">
			<view class="content" :style="{ left: value ? '0' : '-80rpx' }">
				<!-- 云 -->
				<view class="left">
					<view :style="{
						top: item.top + 'rpx',
						left: value ? item.left + 'rpx' : '0rpx',
						transform: `scale(${item.scale})`,
						transition: item.transition + 's'
					 }"
					 class="cloud"
					 v-for="(item, index) in cloudList" :key="index">
						<view class="cloud-square"></view>
						<view class="cloud-circle"></view>
						<view class="cloud-circle small"></view>
					</view>
				</view>
				<!-- 太阳 and 月亮 -->
				<view class="middle" :style="{ backgroundColor: value ? '#ffe2a7' : '#fff' }">
					<view class="crater-box" :style="{ transform: !value ? 'translate(0,0)' : 'translate(50rpx,-50rpx)' }">
						<view class="crater"
						 :class="[`crater${item.id}`]"
						 :style="{
							 top: item.top + 'rpx',
							 left: item.left + 'rpx',
							 transform: `scale(${item.scale})`,
							 opacity: item.opacity
						 }"
						 v-for="(item, index) in craterList" :key="index"></view>
					</view>
				</view>
				<!-- 星星 -->
				<view class="right">
					<view class="star-box">
						<view class="star"
						 :class="[{ twinkle: !value }, `star${item.id}`]"
						 v-for="(item, index) in starList" :key="index"
						 :style="{
							 top: item.top + 'rpx',
							 left: !value ? item.left + 'rpx' : '50rpx',
							 transition: item.transition + 's',
							 animationDelay: item.delay + 's'
						 }"></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * switch 夜间模式选择器
	 * @description 个性化的夜间模式开关。
	 * @property {String Number} size 开关尺寸，缩放倍数,建议 (0.5-2)
	 * @property {Boolean | Number | String} active-value 打开选择器时通过change事件发出的值（默认true）
	 * @property {Boolean | Number | String} inactive-value 关闭选择器时通过change事件发出的值（默认false）
	 * @event {Function} change 在switch打开或关闭时触发
	 * @example <custom-switch v-model="on" size="1.2" :activeValue="1" :inactive-value="0" @change="toggleMode"></custom-switch>
	 */
	export default {
		name: 'custom-switch',
		props: {
			// 开关缩放倍数 (0.5-2)
			size: {
				type: [Number, String],
				default: 1
			},
			// 通过v-model双向绑定的值
			value: {
				type: Boolean,
				default: false
			},
			// 打开选择器时的值
			activeValue: {
				type: [Number, String, Boolean],
				default: true
			},
			// 关闭选择器时的值
			inactiveValue: {
				type: [Number, String, Boolean],
				default: false
			}
		},
		data() {
			return {
				cloudList: [{
						id: 1,
						top: 30,
						left: 12,
						scale: 0.8,
						transition: 0.2
					},
					{
						id: 2,
						top: 8,
						left: 40,
						scale: 0.4,
						transition: 0.4
					},
					{
						id: 3,
						top: 46,
						left: 50,
						scale: 0.6,
						transition: 0.8
					}
				],
				starList: [{
						id: 1,
						top: 24,
						left: 12,
						delay: 0.2,
						transition: 0.2
					},
					{
						id: 2,
						top: 26,
						left: 24,
						delay: 0.5,
						transition: 0.4
					},
					{
						id: 3,
						top: 42,
						left: 28,
						delay: 0.3,
						transition: 0.8
					},
					{
						id: 4,
						top: 54,
						left: 38,
						delay: 0.7,
						transition: 0.8
					},
					{
						id: 5,
						top: 32,
						left: 46,
						delay: 0.8,
						transition: 0.8
					},
					{
						id: 6,
						top: 46,
						left: 50,
						delay: 0.6,
						transition: 0.8
					}
				],
				craterList: [{
						id: 1,
						top: 6,
						left: 28,
						scale: 0.3,
						opacity: 0.6
					},
					{
						id: 2,
						top: 12,
						left: 10,
						scale: 0.4,
						opacity: 0.8
					},
					{
						id: 3,
						top: 24,
						left: 32,
						scale: 0.6,
						opacity: 1
					},
					{
						id: 4,
						top: 28,
						left: 10,
						scale: 0.2,
						opacity: 0.4
					}
				]
			}
		},
		methods: {
			onClick() {
				this.$emit('input', !this.value)
				this.$nextTick(() => {
					this.$emit('change', this.value ? this.activeValue : this.inactiveValue)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	$custom-transition: all cubic-bezier(0.2, 0.1, 0.1, 0.8);

	.main-container {
		position: relative;
		width: 160rpx;
		height: 80rpx;
		background-color: #20114c;
		border-radius: 40rpx;
		transition: 1s $custom-transition;
		overflow: hidden;

		.content {
			position: absolute;
			top: 0;
			height: 100%;
			width: 240rpx;
			transition: 0.6s $custom-transition;
			overflow: hidden;

			.left {
				position: absolute;
				top: 50%;
				left: 0;
				height: 100%;
				width: 86rpx;
				transform: translateY(-50%);
				z-index: 1;

				.cloud {
					top: 50%;
					left: 50%;
					position: absolute;
					width: 36rpx;
					height: 26rpx;

					&-square {
						position: absolute;
						bottom: 0;
						width: 36rpx;
						height: 18rpx;
						border-radius: 9rpx;
						background-color: #fff;
					}

					&-circle {
						position: absolute;
						top: 0;
						right: 4rpx;
						height: 18rpx;
						width: 18rpx;
						border-radius: 9rpx;
						background-color: #fff;
					}

					.small {
						top: 4rpx;
						left: 2rpx;
						transform: scale(0.8);
					}
				}
			}

			.middle {
				position: absolute;
				top: 50%;
				left: 50%;
				width: 66rpx;
				height: 66rpx;
				border-radius: 33rpx;
				transform: translate(-50%, -50%);
				overflow: hidden;
				cursor: pointer;
				transition: 0.6s $custom-transition;
				box-shadow: 0 0 10rpx rgba($color: #fff, $alpha: 0.5);

				.crater-box {
					transition: 0.6s;

					.crater {
						position: absolute;
						width: 28rpx;
						height: 28rpx;
						border-radius: 50%;
						background: linear-gradient(to bottom, #efedf3, #fff);
					}
				}
			}

			.right {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				right: 0;
				height: 100%;
				width: 86rpx;
				z-index: 1;
				overflow: hidden;

				.star-box {
					height: 100%;
					$width: 10rpx;
					$height: 10rpx;

					.star {
						position: absolute;
						width: $width;
						height: $height;
						border-radius: 50%;
						background-color: #fff;
						transition: 0.2s;
					}

					.star1 {
						width: $width * 0.2;
						height: $height * 0.2;
					}

					.star2 {
						width: $width * 0.4;
						height: $height * 0.4;
					}

					.star3 {
						width: $width * 0.3;
						height: $height * 0.3;
					}

					.star4 {
						width: $width * 0.5;
						height: $height * 0.5;
					}

					.star5 {
						width: $width * 0.3;
						height: $height * 0.3;
					}

					.star6 {
						width: $width * 0.3;
						height: $height * 0.3;
					}

					.star7 {
						width: $width * 0.2;
						height: $height * 0.2;
					}
				}

				.meteor-box {
					overflow: hidden;

					.meteor {
						position: absolute;
						width: 1rpx;
						height: 24rpx;
						background: #fff;
						transform: rotate(45deg);
						transition: 0.6s;
						z-index: -1;
					}
				}
			}
		}

		&:active {
			.content .circle {
				animation: dawn 1s;
			}
		}

		.dawn {
			animation: dawn 0.6s $custom-transition;
		}

		.twinkle {
			animation: twinkle 2s infinite ease-in-out;
		}

		@keyframes dawn {

			0%,
			100% {
				background-color: #fff;
			}

			80% {
				background-color: #e2fdff;
			}

			90% {
				background-color: #edffff;
			}
		}

		@keyframes twinkle {

			0%,
			100% {
				transform: scale(1);
			}

			20% {
				transform: scale(1.2);
			}

			40% {
				transform: scale(1.4);
			}

			60% {
				transform: scale(1.2);
			}

			80% {
				transform: scale(1.1);
			}
		}
	}
</style>
