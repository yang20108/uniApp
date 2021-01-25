<template>
	<view class="view-auto-height">
		<search-bar :disabled="true" :inputVal="SiteProject.SiteName" :isDelShow="SiteProject.SiteName" placeholder="请选择工点"
		 @onClick="showPicker($event)" @onClear="onClear"></search-bar>
		<search-picker v-if="siteDataList.length" ref="searchPicker" :mode="pickerLevel" :pickerList="siteDataList"
		 @onConfirm="onConfirm"></search-picker>
		 <tab-state :titleList="currentList" :current="current" @bindCurrent="bindCurrent"></tab-state>
		 <scroll-view class="view-auto-scroll" :scroll-y="true">
		 	<view class="uni-list">
		 		<block v-for="dataI in dataList" :key="dataI.WarnID">
		 			<early-list-item class="uni-list-cell" :iconColor="dataI.iconColor" :title="dataI.WarnName" :content="dataI.LineName+'-'+dataI.SegmentName+'-'+dataI.SiteName"
		 			 :describe="dataI.WarnUnitName" :date="dataI.CreateDate" :username="dataI.CreateUserName" @onclick="clickItem"></early-list-item>
		 		</block>
		 	</view>
		 </scroll-view>
	</view>
</template>

<script>
	import searchBar from "../../components/uni-search/uni-search-bar.vue"
	import searchPicker from "../../components/linkage-picker/linkage-picker.vue"
	import tabState from "../../components/tab-state/tab-state.vue"
	import earlyListItem from "../../components/early-warning/early-list-item.vue"
	import modelData from "../../common/modelData.js"
	export default {
		data() {
			return {
				SiteProject: {
					LineId: "", // 线路id
					LineName: "", // 线路名称
					SegmentId: "", // 标段ID
					SegmentName: "", // 标段名称
					AreaId: "", // 工区id
					AreaName: "", // 工区名称
					SiteId: "", // 工点id
					SiteName: "" // 工点名称
				},
				siteDataList: modelData.modelSiteData(),
				pickerLevel: 3,
				current: 0,
				currentList: [
					{"title":"预警确认","number":9},
					{"title":"预警处置","number":22},
					{"title":"警情跟踪","number":3},
					{"title":"消警申请","number":13},
					{"title":"延期申请","number":2},
					{"title":"消警审核","number":5}
				],
				dataList: modelData.modelHandleList()
			}
		},
		methods: {
			showPicker(e) {
				// 判断有没有工点数据
				if (0 >= this.siteDataList.length) {
					return;
				}
				this.$refs.searchPicker.showPicker();
			},
			onClear() {
				this.SiteProject.SiteId = ""
				this.SiteProject.SiteName = ""
			},
			onConfirm(e) {
				if (e && e.length) {
					// 拼装动态工点展示信息
					this.SiteProject.LineId = this.siteDataList[e[0]].ID;
					this.SiteProject.LineName = this.siteDataList[e[0]].label;
					this.SiteProject.SegmentId = this.siteDataList[e[0]].children[e[1]].ID;
					this.SiteProject.SegmentName = this.siteDataList[e[0]].children[e[1]].label;
					this.SiteProject.SiteId = this.siteDataList[e[0]].children[e[1]].children[e[2]].SiteID;
					this.SiteProject.SiteName = this.siteDataList[e[0]].children[e[1]].children[e[2]].label;
				}
			},
			bindCurrent(e) {
				this.current = e;
			},
			clickItem(item) {
				uni.navigateTo({
					url: "./warningHandleInfo"
				})
			}
		},
		components: {
			searchBar,
			searchPicker,
			tabState,
			earlyListItem
		}
	}
</script>