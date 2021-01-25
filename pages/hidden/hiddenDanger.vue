<template>
	<view class="view-auto-height">
		<search-bar :disabled="true" :inputVal="SiteProject.SiteName" placeholder="请选择工点"
		 @onClick="showPicker($event)"></search-bar>
		<search-picker v-if="siteDataList.length" ref="searchPicker" :mode="3" :pickerList="siteDataList"
		 @onConfirm="onConfirm"></search-picker>
		<view class="view-auto-scroll">
			<view v-if="Datas.length" style="margin: 10px;">
				<block v-for="(d, dK) in Datas" :key="dK">
				<hidden-card :hidIcon="d.icon" :hidTitle="d.CheckContent" :hidLevel="d.Level"
				 :hidTips="d.tips" :hidName="d.name" @action="toHandleGovern(d)"></hidden-card>
				<view style="height: 10px;"></view>
				</block>
			</view>
			<view v-else style="text-align: center;margin-top: 30px;">没有更多数据</view>
		</view>
	</view>
</template>

<script>
	import searchBar from "../../components/uni-search/uni-search-bar.vue"
	import searchPicker from "../../components/linkage-picker/linkage-picker.vue"
	import hiddenCard from "@/components/custom-tools/hidden-card.vue";
	import modelData from "../../common/modelData.js"
	import tools from "../../common/tools.js"
	export default {
		data() {
			return {
				pickerLevel: 0,
				siteDataList: modelData.modelSiteData(),
				SiteProject: {
					"SiteId": "",
					"SiteName": ""
				},
				Datas: [
					{id:"LJZL",icon:"",CheckContent:"附属6号出入口旁排污方涵围护桩施工",Level:"Ⅰ级隐患",
					tips:"2小时前·来自某某公司·李明",name:"立即治理"},
					{id:"LJFH",icon:"icon-rember hidden-icon-orgin",CheckContent:"附属6号出入口旁排污方涵围护桩施工",Level:"Ⅱ级隐患",
					tips:"2小时前·来自某某公司·李明",name:"立即复核"},
					{id:"LJBH",icon:"icon-rember hidden-icon-blue",CheckContent:"出入口旁排污方涵围护桩施工",Level:"Ⅱ级隐患",
					tips:"2小时前·来自某某公司·李明",name:"立即闭合"}
				]
			}
		},
		methods: {
			toHandleGovern(item) {
				uni.navigateTo({
					url: "./hiddenGovern?typeId=" + item.id 
				})
			},
			showPicker(e) {
				// 判断有没有工点数据
				if (0 >= this.siteDataList.length) {
					return;
				}
				this.$refs.searchPicker.showPicker();
			},
			onConfirm(arr) {
				if (arr && arr.length) {
					this.SiteProject = tools.GetSiteProject(arr, this.siteDataList);
				}
			},
			bindBack() {
				uni.navigateBack({
					delta: 1
				})
			}
		},
		components: {
			searchBar,
			searchPicker,
			hiddenCard
		},
		onLoad() { }
	}
</script>

<style>
</style>
