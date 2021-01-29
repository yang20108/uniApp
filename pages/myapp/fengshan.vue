<template>
	<view>
		<view class="feng-body">
			<view class="feng-head">
				<view class="feng-quan"></view>
				<text class="iconfont icon-fengshan feng-ye rotation" :class="level"></text>
			</view>
			<view class="feng-zhu">
				<view class="feng-dong"></view>
			</view>
			<view class="feng-zuo"></view>
		</view>
		<view class="btn-row">
			<view class="btn-cell" v-for="(btn, btnK) in btnList" :key="btnK" @click="bindDang(btnK)">
				<view class="btn-item" :class="btnIndex === btnK ? 'btn-down' : 'btn-up'">
					<text>{{btn}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				playing: true, //可自行控制是否需要转动
				level: 'one',
				btnIndex: 0,
				btnList: ["一档", "二档", "三档"]
			};
		},
		methods: {
			bindDang(index) {
				this.btnIndex = index;
				if (0 === index) {
					this.level = "one";
				} else if (1 === index) {
					this.level = "two";
				} else if (2 === index) {
					this.level = "three";
				}
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #E0EEE0;
	}

	.feng-body {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 100px;
	}

	.feng-head {
		position: relative;
		display: flex;
		justify-content: center;

		.feng-quan {
			width: 200rpx;
			height: 200rpx;
			border: 2px solid #C1CDC1;
			border-radius: 50%;
		}

		.feng-ye {
			position: absolute;
			color: #A4D3EE;
			font-size: 100px;
			text-align: center;
			top: 2px;
			width: 200rpx;
			height: 200rpx;
			line-height: 200rpx;
		}
	}

	.feng-head::after {
		content: "";
		position: absolute;
		bottom: 0;
		height: 2px;
		width: 20px;
		background-color: #C1CDC1;
	}

	.one {
		-webkit-transform: rotate(360deg);
		animation: rotation 2s linear infinite;
	}

	.two {
		-webkit-transform: rotate(360deg);
		animation: rotation 1s linear infinite;
	}

	.three {
		-webkit-transform: rotate(360deg);
		animation: rotation 0.5s linear infinite;
	}

	@-webkit-keyframes rotation {
		from {
			-webkit-transform: rotate(360deg);
		}

		to {
			-webkit-transform: rotate(0deg);
		}
	}

	.suspended {
		animation-play-state: paused;
	}

	.feng-zhu {
		height: 30px;
		width: 20px;
		background-color: #C1CDC1;
	}

	.feng-dong {
		width: 7px;
		height: 12px;
		border-radius: 3px;
		margin: auto;
		margin-top: 10px;
		background-color: #E0EEE0;
	}

	.feng-zuo {
		height: 6px;
		width: 56px;
		border-radius: 5px;
		background-color: #C1CDC1;
	}

	.btn-row {
		padding: 100rpx 20rpx 20rpx 20rpx;
		margin: 10rpx;
		border-radius: 10rpx;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;

		.btn-cell {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 25%;
			height: 200rpx;

			.btn-up {
				border-radius: 30px;
				background: linear-gradient(145deg, #ffffff, #dadbde);
				box-shadow: 3px 3px 2px #616163,
					-3px -3px 2px #ffffff;
			}

			.btn-down {
				border-radius: 30px;
				background: #f2f3f7;
				box-shadow: inset 3px 3px 2px #d3d3d7,
					inset -3px -3px 2px #ffffff;
			}

			.btn-item {
				width: 250rpx;
				height: 70rpx;

				text {
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 30rpx;
					color: #757575;
				}
			}
		}
	}
</style>
