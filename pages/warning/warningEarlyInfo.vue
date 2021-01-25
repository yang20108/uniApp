<template>
	<view class="view-auto-height">
		<warning-step id="wast" :stepList="stepList" @stepClick="stepClick"></warning-step>
		<scroll-view :scroll-into-view="scrollViewId" style="border-top: 0.5px solid #c8c7cc;" class="view-auto-scroll" :scroll-y="true">
			<!-- 预警发布 -->
			<csp-collapse id="YJFB" v-if="warnDetailInfo.YJFB">
				<early-collapse-item :title="stepList[0].name" :open="true">
					<early-info-item rowTitle="预警名称" :rowValue="warnDetailInfo.YJFB.WarnName"></early-info-item>
					<early-info-item rowTitle="预警类型" :rowValue="warnDetailInfo.YJFB.WarnTypeName"></early-info-item>
					<early-info-item rowTitle="预警等级" :rowValue="warnDetailInfo.PublishInfoBase.WarnLevelText"></early-info-item>
					<early-info-item rowTitle="预警部位" :rowValue="warnDetailInfo.YJFB.WarnPart"></early-info-item>
					<early-info-item rowTitle="现场工况" :rowValue="warnDetailInfo.YJFB.SiteCondition"></early-info-item>
					<early-info-item rowTitle="初步原因分析" :rowValue="warnDetailInfo.YJFB.Reason"></early-info-item>
					<early-info-item rowTitle="监测情况描述" :rowValue="warnDetailInfo.YJFB.SurveySituationDesc"></early-info-item>
					<early-info-item rowTitle="巡视问题描述" :rowValue="warnDetailInfo.YJFB.PatrolQuestionDesc"></early-info-item>
					<early-info-item rowTitle="可能带来的影响" :rowValue="warnDetailInfo.YJFB.PossibleImpact"></early-info-item>
					<early-info-item rowTitle="预警监测数据"></early-info-item>
					<!-- 检测数据：只展示勾选的测点信息 -->
					<single-table :columns="columnsList" :datas="columnsData"></single-table>
					<early-imgs :imgs="warnDetailInfo.YJFB.SurveyImageUrls"></early-imgs>
					<early-info-item style="color:gray;" rowTitle="发起人"></early-info-item>
					<early-user v-if="warnDetailInfo.YJFB.CreateUserName" :user="warnDetailInfo.YJFB.CreateUserName" :unit="warnDetailInfo.YJFB.CreateUserUnitType"
					 :unitname="warnDetailInfo.YJFB.CreateUnitName" :date="warnDetailInfo.YJFB.CreateDate" :imgSrc="imgSrc"></early-user>
					<early-info-item v-if="warnDetailInfo.YJFB.ConfirmMsg" style="color:gray;" rowTitle="确认人"></early-info-item>
					<early-user v-if="warnDetailInfo.YJFB.ConfirmUserName" :user="warnDetailInfo.YJFB.ConfirmUserName" :unit="warnDetailInfo.YJFB.ConfirmUserUnitType"
					 :unitname="warnDetailInfo.YJFB.ConfirmUnitName" :date="warnDetailInfo.YJFB.ConfirmDate" :imgSrc="imgSrc"></early-user>
					<early-info-item v-if="warnDetailInfo.YJFB.ConfirmMsg" rowTitle="确认回复" :rowValue="warnDetailInfo.YJFB.ConfirmMsg"></early-info-item>
				</early-collapse-item>
			</csp-collapse>
			<!-- 预警处置 -->
			<csp-collapse id="YJCZ" v-if="warnDetailInfo.YJCZ">
				<early-collapse-item :title="stepList[1].name">
					<early-user v-if="warnDetailInfo.YJCZ.CreateUserName" :user="warnDetailInfo.YJCZ.CreateUserName" :imgSrc="imgSrc"
					 :unit="warnDetailInfo.YJCZ.CreateUserUnitType" :unitname="warnDetailInfo.YJCZ.CreateUnitName" :date="warnDetailInfo.YJCZ.CreateDate"></early-user>
					<early-info-item rowTitle="会议名称" :rowValue="warnDetailInfo.YJCZ.MeetingName"></early-info-item>
					<early-info-item rowTitle="会议时间" :rowValue="warnDetailInfo.YJCZ.MeetingDate"></early-info-item>
					<early-info-item rowTitle="会议地点" :rowValue="warnDetailInfo.YJCZ.MeetingAddress"></early-info-item>
					<early-info-item rowTitle="现场实际工况" :rowValue="warnDetailInfo.YJCZ.ActualSiteCondition"></early-info-item>
					<early-info-item rowTitle="警情分析" :rowValue="warnDetailInfo.YJCZ.WarnAnalysis"></early-info-item>
					<early-info-item rowTitle="处理措施" :rowValue="warnDetailInfo.YJCZ.TreatmentMeasure"></early-info-item>
					<early-info-item rowTitle="阈值及消警条件" :rowValue="warnDetailInfo.YJCZ.EliminateCondition"></early-info-item>
					<early-info-item rowTitle="消警申请日期" :rowValue="warnDetailInfo.YJCZ.EliminateApplyDate"></early-info-item>
				</early-collapse-item>
			</csp-collapse>
			<!-- 警情跟踪 -->
			<csp-collapse id="JQGZ" v-if="warnDetailInfo.JQGZ">
				<early-collapse-item :title="stepList[2].name">
					<view style="display: flex;flex-direction: row;">
						<view class="warning-jian-btn" v-for="(survey, surveyK) in warnDetailInfo.JQGZ.SurveyData" :key="surveyK" @click="SurveyDataChange(survey.Item2, surveyK)">{{survey.Item1}}</view>
					</view>
					<early-info-item rowTitle="监测数据"></early-info-item>
					<single-table :columns="columnsList" :datas="SurveyData"></single-table>
					<view style="margin-top: 10px;" class="shen-info-list" v-for="(track, trackK) in warnDetailInfo.JQGZ.TrackList" :key="trackK">
						<early-user :user="track.CreateUserName" :unit="track.CreateUserUnitType" :unitname="track.CreateUnitName" :date="track.CreateDate" :imgSrc="imgSrc"></early-user>
						<early-info-item rowTitle="跟踪内容" :rowValue="track.TrackContent"></early-info-item>
					</view>
				</early-collapse-item>
			</csp-collapse>
			<!-- 消警申请 -->
			<csp-collapse id="XJSQ" v-if="warnDetailInfo.XJSQ || warnDetailInfo.WarningReview || warnDetailInfo.WarningApply">
				<early-collapse-item :title="stepList[3].name">
					<early-info-item v-if="warnDetailInfo.WarningApply" rowTitle="延期审批"></early-info-item>
					<view v-if="warnDetailInfo.WarningApply" style="margin-top: 10px;" class="shen-info-list">
						<early-user :user="warnDetailInfo.WarningApply.CreateUserName" :unit="warnDetailInfo.WarningApply.CreateUserUnitType"
						:unitname="warnDetailInfo.WarningApply.CreateUnitName" :date="warnDetailInfo.WarningApply.CreateDate" :imgSrc="imgSrc"></early-user>
						<early-info-item rowTitle="申请内容" :rowValue="warnDetailInfo.WarningApply.Content"></early-info-item>
					</view>
					<view v-if="warnDetailInfo.WarningReview" style="margin-top: 10px;" class="shen-info-list">
						<early-user :user="warnDetailInfo.WarningReview.CreateUserName" :unit="warnDetailInfo.WarningReview.CreateUserUnitType"
						:unitname="warnDetailInfo.WarningReview.CreateUnitName" :date="warnDetailInfo.WarningReview.CreateDate" :imgSrc="imgSrc"></early-user>
						<early-info-item rowTitle="回复内容" :rowValue="warnDetailInfo.WarningReview.Content"></early-info-item>
					</view>
					<view style="margin-top: 10px;" class="shen-info-list" v-for="(sqItem, sqK) in warnDetailInfo.XJSQ" :key="sqK">
						<early-user :user="sqItem.CreateUserName" :unit="sqItem.CreateUserUnitType" :unitname="sqItem.CreateUnitName" :date="sqItem.CreateDate" :imgSrc="imgSrc"></early-user>
						<early-info-item rowTitle="申请内容" :rowValue="sqItem.Content"></early-info-item>
					</view>
				</early-collapse-item>
			</csp-collapse>
			<!-- 消警审核 -->
			<csp-collapse id="XJSH" v-if="warnDetailInfo.XJSH">
				<early-collapse-item :title="stepList[4].name">
					<view :style="{marginTop:0!=shenK?'10px':'0px'}" class="shen-info-list" v-for="(shen, shenK) in warnDetailInfo.XJSH" :key="shenK">
						<early-user :user="shen.CreateUserName" :unit="shen.CreateUserUnitType" :unitname="shen.CreateUnitName" :date="shen.CreateDate" :imgSrc="imgSrc"></early-user>
						<early-info-item rowTitle="审核回复内容" :rowValue="shen.Content"></early-info-item>
					</view>
				</early-collapse-item>
			</csp-collapse>
		</scroll-view>
	</view>
</template>

<script>
	import warningStep from "../../components/early-warning/warning-step.vue"
	import cspCollapse from "../../components/csp-collapse/csp-collapse.vue"
	import earlyCollapseItem from "../../components/early-warning/early-collapse-item.vue"
	import earlyInfoItem from "../../components/early-warning/early-info-item.vue"
	import singleTable from "../../components/custom-tools/single-table.vue"
	import earlyImgs from "../../components/early-warning/early-imgs.vue"
	import earlyUser from "../../components/early-warning/early-user.vue"
	import modelData from "../../common/modelData.js"
	export default {
		data() {
			return {
				stepList: [
					{id: "YJFB", name: '预警发布', state: ""},
					{id: "YJCZ", name: '预警处置', state: ""},
					{id: "JQGZ", name: '警情跟踪', state: ""},
					{id: "XJSQ", name: '消警申请', state: ""},
					{id: "XJSH", name: '消警审核', state: ""}
				],
				scrollViewId: "",
				warnDetailInfo: {
					YJFB: "", // 预警发布
					YJCZ: "", // 预警处置
					JQGZ: "", // 警情跟踪
					XJSQ: "", // 消警申请
					XJSH: "" // 消警审核
				},
				columnsList: [{title: "监测项目"},{title: "测组"},{title: "测点"},{title: "速率"},{title: "累计值"}],
				columnsData: [],
				SurveyData: [],
				imgSrc: "../../static/img/user-icon.png"
			}
		},
		methods: {
			stepClick(e) {
				var id = this.stepList[e].id;
				let that = this;
				var selectorQuery = uni.createSelectorQuery();
				selectorQuery.select("#wast").boundingClientRect();
				selectorQuery.select('#' + id).boundingClientRect();
				selectorQuery.exec(function(res) {
					var wastView = res[0],
						dynamicView = res[1];
					if (wastView && dynamicView) {
						that.scrollViewId = dynamicView.id;
					}
				})
			},
			SurveyDataChange(data, e) {
				this.SurveyData = data
			}
		},
		components: {
			warningStep,
			cspCollapse,
			earlyCollapseItem,
			earlyInfoItem,
			singleTable,
			earlyImgs,
			earlyUser
		},
		onLoad() {
			var sdata = modelData.modelEarlyInfo()
			for (var i = 0; i < this.stepList.length; i++) {
				var stepI = this.stepList[i];
				// 匹配当前流程节点
				if (stepI.name === sdata.CurNodeName) {
					stepI.state = "current";
					for (var j = 0; j < i; j++) {
						this.stepList[j].state = "pass"
					}
				} else if ("预警闭合" === sdata.CurNodeName) {
					stepI.state = "pass";
				}
			}
			// 处理监测数据
			if (sdata.YJFB && sdata.YJFB.SurveyData) {
				for (var m = 0; m < sdata.YJFB.SurveyData.length; m++) {
					var dM = sdata.YJFB.SurveyData[m]
					// 注意此处顺序对应columnsList
					this.columnsData.push([
						{"value":dM.SurveyProjectName}, // 监测项目
						{"value":dM.GroupName}, // 测组
						{"value":dM.PointName}, // 测点
						{"value":dM.CValue}, // 变化速率
						{"value":dM.AValue} // 累计值/观测值
					]);
				}
			}
			if (sdata.JQGZ && sdata.JQGZ.SurveyData && sdata.JQGZ.SurveyData.length) {
				for (var p = 0; p < sdata.JQGZ.SurveyData.length; p++) {
					var suP = sdata.JQGZ.SurveyData[p],
							items = [];
					for (var o = 0; o < suP.Item2.length; o++) {
						var itmeO = suP.Item2[o];
						items.push([
							{"value":itmeO.SurveyProjectName}, // 监测项目
							{"value":itmeO.GroupName}, // 测组
							{"value":itmeO.PointName}, // 测点
							{"value":itmeO.CValue}, // 变化速率
							{"value":itmeO.AValue} // 累计值/观测值
						]);
					}
					suP.Item2 = items
				}
				this.SurveyData = sdata.JQGZ.SurveyData[0].Item2
			}
			this.warnDetailInfo = sdata;
		}
	}
</script>

<style>
	.warning-jian-btn {
		width: 90px;
		height: 30px;
		line-height: 30px;
		margin: 0px 2px;
		border-radius: 5px;
		text-align: center;
		background-color: #0081ff;
		color: #FFFFFF;
	}

	.shen-info-list {
		position: relative;
	}

	.shen-info-list:after {
		position: absolute;
		z-index: 3;
		right: 0;
		bottom: -1px;
		left: 0px;
		height: 0.5px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.shen-info-list:last-child::after {
		height: 0px;
	}
</style>