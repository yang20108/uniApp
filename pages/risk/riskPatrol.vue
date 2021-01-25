<template>
	<view>
		<view class="uni-common-pd" style="z-index: 10;position: fixed;">
			<view class="segmented-control" :class="styleType">
				<view class="segmented-control-item" :class="styleType" v-for="(item, index) in titleList" :key="index"
				 @click="onClickItem(index)">
					{{item}}
					<view :class="index === current ? 'segmented-control-active' : ''"></view>
				</view>
			</view>
		</view>
		<view v-if="0===current">
			<scroll-view class="view-auto-scroll" :scroll-y="true">
				<block v-for="(local, keyL) in localList" :key="keyL">
					<risk-card :spacing="keyL == 0 ? 80 : 20" :dataModel="local" :riskShowInfo="true" stateShow="verify" stateType="riskcore"
					 :btnLists="local.Buttons" @preview="changePreview($event, keyL)">
						<template v-slot:slot-info>
							<risk-card-row rowTitle="检查人" :rowValue="local.UserName"></risk-card-row>
							<risk-card-row rowTitle="检查单位" :rowValue="local.UnitName"></risk-card-row>
							<risk-card-row rowTitle="检查符合率" :rowValue="local.CoverRate+'%'"></risk-card-row>
							<risk-card-row rowTitle="检查时间" :rowValue="local.CheckTime"></risk-card-row>
						</template>
					</risk-card>
				</block>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import riskCard from '../../components/risk-card/risk-card.vue';
	import riskCardRow from '../../components/risk-card/risk-card-row.vue';
	import modelData from "../../common/modelData.js"
	export default {
		data() {
			return {
				current: 0,
				styleType: 'button',
				titleList: ['未提交', '已提交'],
				localList: modelData.modelRiskPatrol()
			}
		},
		methods: {
			onClickItem(index) {
				this.current = index
			},
			changePreview(e, index) {
				// console.log("index: " + index);
				// console.log("e: " + JSON.stringify(e));
			}
		},
		components: {
			riskCard,
			riskCardRow
		},
		onLoad() {}
	}
</script>

<style>
</style>
