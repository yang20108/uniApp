<template>
	<view>
		<games-fish ref="fish" :fishsum="5" :bospeed="2" :fishmaxspeed="3"></games-fish>
	</view>
</template>

<script>
	import gamesFish from "../../components/custom-tools/games-fish.vue";
	export default {
		data() {
			return {}
		},
		methods: {

		},
		components: {
			gamesFish
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: "打小鱼"
			})
		}
	}
</script>

<style>
</style>
