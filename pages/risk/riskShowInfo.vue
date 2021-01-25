<template>
	<view>
		<uni-title-block>
			<tab-state3 :current="current" :titleList="currentList" @bindCurrent="bindCurrent"></tab-state3>
		</uni-title-block>
	</view>
</template>

<script>
	import uniTitleBlock from "../../components/uni-nav-bar/uni-title-block.vue"
	import tabState3 from "../../components/tab-state/tab-state3.vue"
	export default {
		data() {
			return {
				current: 0,
				currentList: [
					{"id": "PDBG", "title": "派单报告"},
					{"id": "RCBG", "title": "日常报告"},
				]
			}
		},
		methods: {
			bindCurrent(e) {
				this.current = e
			}
		},
		components: {
			uniTitleBlock,
			tabState3
		}
	}
</script>

<style>
</style>
