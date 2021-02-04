<template>
	<view>
		<radio-group style="padding: 10px;text-align: center;" @change="bindcha">
			<radio :checked="'1'===type" value="1">横屏显示</radio>
			<view style="width: 10px;"></view>
			<radio :checked="'0'===type" value="0">竖屏显示</radio>
		</radio-group>
		<view style="padding: 10px;box-sizing: border-box;" v-for="(item, ik) in list" :key="ik">
			<image :src="item" :data-src="item" mode="aspectFit" @click="onclick"></image>
		</view>
		<image-preview ref="ImagePreview" :direction="direction" :circular="true" :imgs="list"></image-preview>
	</view>
</template>

<script>
	import imagePreview from "@/components/custom-tools/image-preview.vue";
	export default {
		components: {
			imagePreview
		},
		data() {
			return {
				type: '0',
				direction: "vertical",
				list: [
					"../../static/img/animalsCat.jpg",
					"../../static/img/sztd_grid_1.jpg",
					"../../static/img/sztd_login_bgi.png"
				]
			}
		},
		methods: {
			bindcha(e) {
				this.type = e.detail.value;
				if ('0' === this.type) {
					this.direction = "vertical"
				} else if ('1' === this.type) {
					this.direction = "row";
				}
			},
			onclick(e) {
				var param = e.currentTarget.dataset.src;
				this.$refs.ImagePreview.open(param);
			}
		}
	}
</script>

<style>
</style>
