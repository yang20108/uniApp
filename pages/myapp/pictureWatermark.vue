<template>
	<view>
		<button type="primary" @tap="takePhoto">拍照</button>
		<image mode="widthFix" :src="src" @click="preview"></image>
		<view style="position: absolute;top: -999999px;">
			<view>
				<canvas :canvas-id="canvasId" :style="{'width':w+'px','height':h+'px'}"></canvas>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				canvasId: 'firstCanvas',
				src: '',
				w: 0,
				h: 0
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
						var resFile = res.tempFilePaths[0];
						uni.getImageInfo({
							src: resFile,
							success: (succ) => {
								// console.log("succ: " + JSON.stringify(succ));
								that.w = succ.width / 3;
								that.h = succ.height / 3;
								let ctx = uni.createCanvasContext(that.canvasId); /** 创建画布 */
								//将图片src放到cancas内，宽高为图片大小
								ctx.drawImage(resFile, 0, 0, that.w, that.h)
								ctx.setFontSize(18)
								ctx.setFillStyle('#19e3e3')
								ctx.rotate(30 * Math.PI / 180);
								ctx.fillText('我是水印', that.w * 0.5, that.h * 0.3)
								/** 除了上面的文字水印，这里也可以加入图片水印 */
								//ctx.drawImage('/static/watermark.png', 0, 0, that.w, that.h)
								ctx.draw(false, function() {
									setTimeout(() => {
									uni.canvasToTempFilePath({
										canvasId: that.canvasId,
										success(ctfp) {
											// console.log("ctfp: " + JSON.stringify(ctfp));
											that.src = ctfp.tempFilePath;
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
