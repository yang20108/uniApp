<template>
	<scroll-view v-if="imgs.length" class="early-img" :scroll-x="true">
		<image class="early-img-item" v-for="(img, imgK) in imgs" :key="imgK" :src="img" @click="previewImage"></image>
	</scroll-view>
</template>

<script>
	/**
	 * name:预警图片展示项
	 * 属性：
	 * imgs Array类型 图片集合
	 * 事件：
	 */
	export default {
		name: "early-imgs",
		props: {
			imgs: {
				type: Array,
				default () {
					return [];
				}
			}
		},
		data() {
			return {}
		},
		methods: {
			previewImage: function(e) {
				// console.log("e: " + JSON.stringify(e));
				var current = e.target.dataset.src;
				uni.previewImage({
					current: current,
					urls: this.imgs
				});
			}
		}
	}
</script>

<style>
	.early-img {
		width: 100%;
		display: flex;
		flex-direction: row;
		white-space: nowrap;
	}

	.early-img-item {
		width: 70px;
		height: 70px;
		display: inline-block;
		margin: 5px;
	}
</style>
