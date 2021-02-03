<template>
	<view class="g-container">
		<view class="g-number">{{val}}</view>
		<view class="g-contrast">
			<view class="g-circle"></view>
			<ul class="g-bubbles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				val: 0
			};
		},
		onLoad() {
			setInterval(this.start, 1000);
			// 5000是每隔五秒运行一次  setInterval(this.run, 5000);
		},
		methods: {
			start() {
				this.val = this.val + 1
				if (101 <= this.val) {
					this.val = 0;
				}
			},
			run() {
				//执行网络请求
				uni.request({
					method: 'GET', //请求方式
					url: '' //请求地址
				}).then(res => {
					console.log(res);
				})
			}
		},
		computed: {}
	}
</script>

<style lang="scss">
	page {
		background-color: #000000;
	}

	.g-number {
		position: absolute;
		width: 300px;
		top: 23%;
		text-align: center;
		font-size: 32px;
		z-index: 10;
		color: #fff;
	}

	.g-container {
		position: relative;
		width: 300px;
		height: 400px;
		margin: auto;
	}

	.g-contrast {
		filter: contrast(15) hue-rotate(0);
		width: 300px;
		height: 400px;
		background-color: #000;
		overflow: hidden;
		animation: hueRotate 10s infinite linear;
	}

	.g-circle {
		position: relative;
		width: 300px;
		height: 300px;
		box-sizing: border-box;
		filter: blur(8px);

		&::after {
			content: "";
			position: absolute;
			top: 40%;
			left: 50%;
			transform: translate(-50%, -50%) rotate(0);
			width: 200px;
			height: 200px;
			background-color: #00ff6f;
			border-radius: 42% 38% 62% 49% / 45%;
			animation: rotate 10s infinite linear;
		}

		&::before {
			content: "";
			position: absolute;
			width: 176px;
			height: 176px;
			top: 40%;
			left: 50%;
			transform: translate(-50%, -50%);
			border-radius: 50%;
			background-color: #000;
			z-index: 10;
		}
	}

	.g-bubbles {
		position: absolute;
		left: 50%;
		bottom: 0;
		width: 100px;
		height: 40px;
		transform: translate(-50%, 0);
		border-radius: 100px 100px 0 0;
		background-color: #00ff6f;
		filter: blur(5px);
	}

	li {
		position: absolute;
		border-radius: 50%;
		background: #00ff6f;
	}

	@for $i from 0 through 15 {
		li:nth-child(#{$i}) {
			$width: 15 + random(15) + px;
			left: 15 + random(70) + px;
			top: 50%;
			transform: translate(-50%, -50%);
			width: $width;
			height: $width;
			animation: moveToTop #{random(6) + 3}s ease-in-out -#{random(5000)/1000}s infinite;
		}
	}

	@keyframes rotate {
		50% {
			border-radius: 45% / 42% 38% 58% 49%;
		}

		100% {
			transform: translate(-50%, -50%) rotate(720deg);
		}
	}

	@keyframes moveToTop {
		90% {
			opacity: 1;
		}

		100% {
			opacity: .1;
			transform: translate(-50%, -180px);
		}
	}

	@keyframes hueRotate {
		100% {
			filter: contrast(15) hue-rotate(360deg);
		}
	}
</style>
