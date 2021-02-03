<template>
	<view>
		<view style="display: flex;justify-content: space-between;padding: 20px;box-sizing: border-box;">
			<view style="font-size: 18px;">{{ 1 === key ? "白天" : "黑夜" }}</view>
			<custom-switch v-model="on" size="1" :activeValue="1" :inactive-value="0" @change="toggleMode"></custom-switch>
		</view>
	</view>
</template>

<script>
	import customSwitch from "@/components/custom-tools/custom-switch.vue";
	export default {
		components: {
			customSwitch
		},
		data() {
			return {
				key : 1,
				on: true
			}
		},
		methods: {
			toggleMode(e) {
				this.key = e;
			}
		}
	}
</script>

<style>
</style>
