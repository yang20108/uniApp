<template>
	<view class="view-auto-height">
		<search-bar :disabled="true" :inputVal="siteProject.SiteName+' '+siteProject.checkDate" :isDelShow="siteProject.SiteName" placeholder="搜索"
		 @onClick="toRiskSiteSelect" @onClear="onClear"></search-bar>
		<view v-if="siteProject.SiteName" style="padding: 10px;background-color: #FFFFFF;">
			<tab-state2 :current="current" :titleList="currentList" @bindCurrent="bindCurrent"></tab-state2>
		</view>
		<view class="view-auto-scroll">
			<view v-if="siteProject.SiteName" class="uni-list">
				<tab-list-check-box class="uni-list-cell" :title="zI.title" :level="zI.level" :date="zI.date" :checked="zI.checked"
				 v-for="(zI, zK) in PatrolList" :key="zK" @bindClick="bindClick(zI)"></tab-list-check-box>
			</view>
			<view v-else style="text-align: center;padding-top: 30px;">无分区数据</view>
		</view>
		<view v-if="checkedPatrolList.length" class="btn-single">
			<button class="btn-single-next" @click="toRiskShowInfo">巡查</button>
		</view>
	</view>
</template>

<script>
	import searchBar from "../../components/uni-search/uni-search-bar.vue"
	import tabState2 from "../../components/tab-state/tab-state2.vue"
	import tabListCheckBox from "../../components/tab-state/tab-list-checkbox.vue"
	import modelData from "../../common/modelData.js"
	export default {
		data() {
			return {
				siteProject: {
					SiteId: "",
					SiteName: "桐木岭站",
					checkDate: ""
				},
				current: 0,
				currentList: [
					{id:"ZTFQ", title: "主体分区"},
					{id:"FSFQ", title: "附属分区"}
				],
				PatrolList: modelData.modelRiskShow(),
				checkedPatrolList: []
			}
		},
		methods: {
			bindCurrent(e) {
				this.current = e
			},
			bindClick(item) {
				item.checked = !item.checked
				this.checkedPatrolList = []
				for (var i = 0; i < this.PatrolList.length; i++) {
					var riskI = this.PatrolList[i];
					if (riskI.checked) {
						this.checkedPatrolList.push(riskI)
					}
				}
			},
			toRiskShowInfo() {
				uni.navigateTo({
					url: "./riskShowInfo"
				})
			},
			toRiskSiteSelect() {
				uni.navigateTo({
					url: "../sztd/siteSelect"
				})
			},
			onClear() {
				this.siteProject.SiteId = "";
				this.siteProject.SiteName = "";
				this.siteProject.checkDate = "";
				this.checkedPatrolList = [];
			}
		},
		components: {
			searchBar,
			tabState2,
			tabListCheckBox
		},
		onShow() {
			uni.$once("bindSites", res => {
				// console.log("res: " + JSON.stringify(res));
				this.siteProject.SiteId = res.SiteProject.SiteId;
				this.siteProject.SiteName = res.SiteProject.SiteName;
				this.siteProject.checkDate = res.DateNow;
				// 取消事件绑定
				// uni.$off("bindSites");
			})
		}
	}
</script>

<style>
</style>
