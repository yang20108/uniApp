<template>
	<view>
		<view class="analysis-padding" style="box-shadow: 0px 1px 4px #cccccc;">
			<view class="analysis-title">安全状态汇总</view>
			<view class="analysis-flex" style="margin-top: 5px;">
				<view style="text-align: center;">
					<view style="color: #0AE309;">6</view>
					<view style="color: #47547C;">安全可控</view>
				</view>
				<view class="analysis-title-item"></view>
				<view style="text-align: center;">
					<view style="color: #0AE309;">6</view>
					<view style="color: #47547C;">监测预警</view>
				</view>
				<view class="analysis-title-item"></view>
				<view style="text-align: center;">
					<view style="color: #E8E800;">6</view>
					<view style="color: #47547C;">巡视预警</view>
				</view>
				<view class="analysis-title-item"></view>
				<view style="text-align: center;">
					<view style="color: #E8E800;">6</view>
					<view style="color: #47547C;">综合预警</view>
				</view>
			</view>
		</view>
		<view class="analysis-padding" style="margin-top: 15px;box-shadow: 0px 1px 4px #cccccc;">
			<view class="analysis-title">工点安全状态</view>
			<view class="analysis-cell" v-for="(segment, segmentK) in SegmentList" :key="segmentK">
				<view class="analysis-navigate analysis-bottom" :class="segment.show ? 'uni-active' : ''"
				 hover-class="uni-list-cell-hover" @click="bindSegment(segmentK)">
					<view style="width: 65%;" class="uni-flex">
						<text class="tmicon tm-type"></text>
						<view class="analysis-lable text-overflow">{{segment.name}}</view>
					</view>
					<view class="uni-flex analysis-static">
						<text class="iconfont icon-anquan analysis-icon-number"></text>
						<image v-if="false" class="analysis-img analysis-icon-number" src="@/static/logo.png"></image>
						<view class="analysis-text-number">{{segment.number}}</view>
						<text class="iconfont icon-yujing analysis-icon-count"></text>
						<image v-if="false" class="analysis-img analysis-icon-count" src="../../static/logo.png"></image>
						<view class="analysis-text-count">{{segment.count}}</view>
					</view>
				</view>
				<view class="analysis-list analysis-collapse" :class="segment.show ? 'analysis-active' : ''">
					<view class="sub-border" :style="0===subK?'':'margin-top:10px;'"
					 v-for="(sub, subK) in SubNameList" :key="subK">
						<view class="sub-name analysis-bottom" :class="sub.show ? 'uni-active' : ''" @click="bindSubName(subK)">
							<view class="message-qipao" :class="1===sub.value?'message-qipao-kong':'message-qipao-jing'">{{sub.type}}</view>
							<view style="width: 77%;line-height: 20px;" class="def-size15 text-new-line">{{sub.name}}</view>
						</view>
						<view class="analysis-list analysis-collapse" :class="sub.show ? 'analysis-active def-margin-top10' : ''">
							<view class="uni-flex">
								管控建议：
								<view class="uni-flex sub-jian">
									<view class="sub-item">(评论员：张三</view>
									<view class="sub-item">评估时间：2020-12-12  14:51)</view>
								</view>
							</view>
							<view class="sub-item def-margin-top10">1.加密桥墩监测，对39#、48#桥墩裂缝情况每日进行检查；</view>
							<view class="sub-item def-margin-top10">2.严格按照施工方案进行回填砂作业，施工过程中做到对称缓慢施工；</view>
							<view class="sub-item def-margin-top10">3.严格控制周边荷载（含堆载）；</view>
							<view class="sub-item def-margin-top10">4.做好应急准备工作。</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				SegmentList: [
					{name: "标段1", number: 1, count: 10, show: true},
					{name: "标段2", number: 99, count: 99, show: false},
					{name: "标段3", number: 10, count: 8, show: false}
				],
				SubNameList: [
					{type: "安全可控", value: 1, name: "堰筑段主线隧道（东端、西端）", show: false},
					{type: "安全可控", value: 1, name: "堰筑段主线隧道（东端、西端）", show: false},
					{type: "监测预警", value: 2, name: "堰筑段主线隧道（东端、西端）", show: false}
				]
			}
		},
		methods: {
			bindSegment(e) {
				for (let i = 0, len = this.SegmentList.length; i < len; ++i) {
					if (e === i) {
						this.SegmentList[i].show = !this.SegmentList[i].show;
					} else {
						this.SegmentList[i].show = false;
					}
				}
			},
			bindSubName(e) {
				for (let i = 0, len = this.SubNameList.length; i < len; ++i) {
					if (e === i) {
						this.SubNameList[i].show = !this.SubNameList[i].show;
					} else {
						this.SubNameList[i].show = false;
					}
				}
			}
		},
		onLoad() { }
	}
</script>

<style>
</style>
