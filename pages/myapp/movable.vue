<template>
	<view style="padding: 0 30rpx;">
		<movable-app :listData="appListData" @clickItem="clickItem" @listChange="listChange"></movable-app>
	</view>
</template>

<script>
	import movableApp from "@/components/custom-tools/movable-app.vue";
	export default {
		components: {
			movableApp
		},
		data() {
			return {
				appListData: [
					{appId: 1,appIcon: "icon-wancheng",appName: "成功"},
					{appId: 2,appIcon: "icon-bitian",appName: "小红花"},
					{appId: 3,appIcon: "icon-zhiwu",appName: "名片"},
					{appId: 4,appIcon: "icon-rocket",appName: "升级"},
					{appId: 5,appIcon: "icon-youjian",appName: "邮件"},
					{appId: 6,appIcon: "icon-gongsi",appName: "公司"},
				]
			}
		},
		methods: {
			listChange(option) {
				// console.log("option: " + JSON.stringify(option));
			},
			clickItem(idx) {
				console.log("clickItem: " + JSON.stringify(this.appListData[idx]));
			}
		}
	}
</script>

<style>
</style>
