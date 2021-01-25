<template>
	<view class="view-auto-height">
		<scroll-view class="view-auto-scroll" scroll-y="true">
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<picker class="width-match" mode="date" @change="bindDatePicker">
						<view style="padding: 15px;" class="uni-list-cell-navigate">
							<view class="width-match tm-list-title">日期选择</view>
							<view class="tm-list-date">{{dateNow?dateNow:"请选择..."}}</view>
							<text class="iconfont icon-szright tm-list-nav"></text>
						</view>
					</picker>
				</view>
				<view style="padding: 15px;" class="uni-list-cell-navigate" hover-class="uni-list-cell-hover" @click="bindSites">
					<view class="width-match tm-list-title">工点选择</view>
					<view class="tm-list-date">{{SiteProject.SiteName}}</view>
					<text class="iconfont icon-szright tm-list-nav"></text>
				</view>
			</view>
		</scroll-view>
		<view class="btn-double">
			<button class="btn-double-pro btn-cancel-bgc" @click="onClick(false)">取消</button>
			<button class="btn-double-pro btn-confirm-bgc" @click="onClick(true)">确认</button>
		</view>
		<search-picker v-if="siteDataList.length" ref="searchPicker" :mode="pickerLevel" :pickerList="siteDataList"
		 @onConfirm="onConfirm"></search-picker>
	</view>
</template>

<script>
	import searchPicker from "../../components/linkage-picker/linkage-picker.vue"
	import modelData from "../../common/modelData.js"
	export default {
		data() {
			return {
				dateNow: "",
				siteDataList: modelData.modelSiteData(),
				pickerLevel: 3,
				SiteProject: {
					LineId: "", // 线路id
					LineName: "", // 线路名称
					SegmentId: "", // 标段ID
					SegmentName: "", // 标段名称
					AreaId: "", // 工区id
					AreaName: "", // 工区名称
					SiteId: "", // 工点id
					SiteName: "" // 工点名称
				}
			}
		},
		methods: {
			onClick(ist) {
				if (ist) {
					uni.$emit("bindSites", {
						DateNow: this.dateNow,
						SiteProject: this.SiteProject
					});
				}
				uni.navigateBack({ delta: 1 })
			},
			bindDatePicker(e) {
				this.dateNow = e.target.value
			},
			bindSites() {
				// 判断有没有工点数据
				if (0 >= this.siteDataList.length) { return; }
				this.$refs.searchPicker.showPicker()
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
			}
		},
		components: {
			searchPicker
		},
		onLoad() {
			this.onConfirm([0,0,0])
		}
	}
</script>

<style>
	.tm-list-title {
		line-height: 20px;
		color: #101010;
		font-size: 16px;
		font-family: "Microsoft YaHei";
		word-break: break-all;
		word-wrap: break-word;
	}

	.tm-list-date {
		width: 50%;
		line-height: 20px;
		font-size: 15px;
	}

	.tm-list-nav {
		color: #B2BCCF;
		font-size: 18px;
		height: 20px;
		line-height: 20px;
	}
</style>
