<template>
	<view class="view-auto-height">
		<uni-nav-bar color="#ffffff" background-color="#57A6F4" :status-bar="true"
		 left-icon="arrowleft" title="自定义title" @clickLeft="back">
			<template v-slot:right>
				<navigator v-if="add" url="./dangerousAdd">
					<text class="iconfont icon-icon-add" style="font-size: 18px;"></text>
				</navigator>
			</template>
		</uni-nav-bar>
		<tab-state :titleList="currentList" :current="current" @bindCurrent="bindCurrent"></tab-state>
		<scroll-view class="view-auto-scroll" :scroll-y="true">
			<view class="uni-list">
				<block v-for="(dataI, keyI) in dataList" :key="keyI">
					<dangerous-card :title="dataI.SiteName" :date="dataI.StepDate"
					 @onclick="bindClick(dataI)"></dangerous-card>
				</block>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue"
	import tabState from "../../components/tab-state/tab-state.vue"
	import dangerousCard from "../../components/dangerous-card/dangerous-card.vue"
	import tools from "../../common/tools.js"
	export default {
		data() {
			return {
				add: 0 === tools.random(0, 10) % 2,
				current: 0,
				currentList: [
					{title: "已提交", number: 0},
					{title: "未提交", number: 0}
				],
				dataList: [{
					"CreatDateTime":"2020-03-02T17:03:45",
					"UploadDateTime":"2020-03-02T17:03:45",
					"Areas":[],
					"DailyConditionID":"ab9c0b39-5484-48ac-b9c7-b8350c6fd3fd",
					"SiteID":"0b6ac1ed-a4bf-4f85-9727-222d57a81c0b",
					"SiteName":"园亭路站",
					"StepDate":"2020-03-02",
					"UnitID":"e3c3fd05-0409-41c3-9847-293664321872",
					"UnitName":"安监部",
					"CreatorID":"fc949c6c-5597-4bd3-9e16-7fe0611ef5a1",
					"CreatorName":"陈益明",
					"Checked":false,
				}]
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			bindCurrent(e) {
				this.current = e
			},
			bindClick(data) {
			}
		},
		components: {
			uniNavBar,
			tabState,
			dangerousCard
		}
	}
</script>

<style>
</style>
