<template>
	<view>
		<button type="primary" @tap="takePhoto">拍照</button>
		<image mode="widthFix" :src="src" @click="preview"></image>
		<view style="position: absolute;top: -999999px;">
			<view>
				<canvas :style="{'width':w,'height': h}" canvas-id="firstCanvas"></canvas>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: '',
				w: '',
				h: ''
			}
		},
		methods: {
			preview() {
				uni.previewImage({
					urls: [this.src],
					current: 0
				})
			},
			takePhoto() {
				var that = this;
				uni.chooseImage({
					count: 1,
					success(res) {
						uni.getImageInfo({
							src: res.tempFilePaths[0],
							success: (ress) => {
								that.w = ress.width / 3 + 'px';
								that.h = ress.height / 3 + 'px';
								let ctx = uni.createCanvasContext('firstCanvas'); /** 创建画布 */
								//将图片src放到cancas内，宽高为图片大小
								ctx.drawImage(res.tempFilePaths[0], 0, 0, ress.width / 3, ress.height / 3)
								ctx.setFontSize(18)
								ctx.setFillStyle('#10fff0')
								ctx.rotate(30 * Math.PI / 180);
								let textToWidth = ress.width / 3 * 0.5;
								let textToHeight = ress.height / 3 * 0.3;
								ctx.fillText('添加水印', textToWidth, textToHeight)
								/** 除了上面的文字水印，这里也可以加入图片水印 */
								//ctx.drawImage('/static/watermark.png', 0, 0, ress.width / 3, ress.height / 3)
								ctx.draw(false, () => {
									setTimeout(() => {
										uni.canvasToTempFilePath({
											canvasId: 'firstCanvas',
											success: (res1) => {
												that.src = res1.tempFilePath;
											}
										});
									}, 1000);
								});
							}
						})
					}
				});
			}
		}
	}
</script>

<style>
</style>
