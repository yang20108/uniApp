<template>
	<view>
		<early-step-title title="预警发布">
			<early-info-item rowTitle="工点" :rowValue="WarningInfo.WarnSiteInfo.SiteName"></early-info-item>
			<early-info-item rowTitle="预警名称" :rowValue="WarningInfo.YJFB.WarnName"></early-info-item>
			<early-info-item rowTitle="预警类型" :rowValue="WarningInfo.YJFB.WarnTypeName"></early-info-item>
			<early-info-item rowTitle="预警等级" :rowValue="WarningInfo.PublishInfoBase.WarnLevelText"></early-info-item>
			<early-info-item rowTitle="预警部位" :rowValue="WarningInfo.PublishInfoBase.WarningLocation"></early-info-item>
			<early-info-item rowTitle="现场工况" :rowValue="WarningInfo.PublishInfoBase.SiteCondition"></early-info-item>
			<early-info-item rowTitle="初步分析原因" :rowValue="WarningInfo.PublishInfoBase.CauseAnalysis"></early-info-item>
			<early-info-item rowTitle="监测情况描述" :rowValue="WarningInfo.YJFB.SurveySituationDesc"></early-info-item>
			<early-info-item rowTitle="巡视问题描述" :rowValue="WarningInfo.YJFB.PatrolQuestionDesc"></early-info-item>
			<early-info-item rowTitle="可能带来的影响" :rowValue="WarningInfo.YJFB.PossibleImpact"></early-info-item>
		</early-step-title>
		<!-- 预警升降级 -->
		<csp-collapse style="margin-top: 10px;">
			<early-collapse-item title="预警升降级" :padding="false">
				<view style="transform: translateY(-10px);" class="uni-input-group">
					<tb-row-item class="tb-row-item_after" label="升降级">
						<picker class="warning-picker" mode="selector" :id="warningLevelList" :value="warningLevelIndex" :range="warningLevelList">
							{{ warningLevelList[warningLevelIndex] }}
							<uni-icons class="pos-icons" color="#bbb" size="20" type="arrowdown" />
						</picker>
					</tb-row-item>
					<tb-row-item class="tb-row-item_after" label="升级理由">
						<textarea class="uni-input-textarea" placeholder="请说明..."></textarea>
					</tb-row-item>
				</view>
				<view class="pro-list-btn">
					<button class="pro-list-button btn-cancel-bgc">取消</button>
					<button class="pro-list-button btn-confirm-bgc">确定</button>
				</view>
			</early-collapse-item>
		</csp-collapse>
		<!-- 预警确认 -->
		<early-step-title style="margin-top: 10px;" title="预警确认" :showInfo="true" :padding="false" @showStepInfo="showStepInfo">
			<view class="uni-input-group">
				<tb-row-item class="tb-row-item_after" label="确认回复" :required="true">
					<textarea class="uni-input-textarea" placeholder="请说明..."></textarea>
				</tb-row-item>
			</view>
			<view class="pro-list-btn">
				<button class="pro-list-button btn-cancel-bgc">不通过</button>
				<button class="pro-list-button btn-confirm-bgc">通过</button>
			</view>
		</early-step-title>
	</view>
</template>

<script>
	import earlyStepTitle from "../../components/early-warning/early-step-title.vue"
	import earlyInfoItem from "../../components/early-warning/early-info-item.vue"
	import tbRowItem from "../../components/tb-row-item/tb-row-item.vue"
	import cspCollapse from "../../components/csp-collapse/csp-collapse.vue"
	import earlyCollapseItem from "../../components/early-warning/early-collapse-item.vue"
	import uniIcons from "../../components/uni-icons/uni-icons.vue"

	import modelData from "../../common/modelData.js"
	export default {
		data() {
			return {
				WarningInfo: modelData.modelEarlyInfo(),
				warningLevelIndex: 0,
				warningLevelList: [
					"红色预警",
					"橙色预警",
					"黄色预警"
				]
			}
		},
		methods: {
			showStepInfo() {}
		},
		components: {
			earlyStepTitle,
			earlyInfoItem,
			tbRowItem,
			cspCollapse,
			earlyCollapseItem,
			uniIcons
		}
	}
</script>

<style>
	.uni-input-textarea {
		width: 100%;
		height: 160upx;
		padding-top: 20upx;
		border: #f3f3f3 1px solid;
		background: #f9f9f9;
		text-indent: 10upx;
	}
	.pro-list-btn {
		display: flex;
		padding: 10px 5px;
	}
	.pro-list-button {
		width: 45%;
		color: #FFFFFF;
		border-radius: 50px;
	}
	.warning-picker {
		height: 22px;
		line-height: 22px;
		border: 1px solid rgba(204,204,204,0.5);
		border-radius: 3px;
		padding: 5px;
		position: relative;
	}
	.pos-icons {
		height: 20px;
		line-height: 20px;
		position: absolute;
		right: 10px;
	}
</style>