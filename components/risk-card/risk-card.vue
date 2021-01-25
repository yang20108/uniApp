<template>
	<view class="uni-list-card" :style="{'margin-top': spacing+'px'}">
		<view class="uni-flex uni-flex-item">
			<view :style="{width: 'verify'===stateShow?'50%':'100%'}">
				<view class="text-new-line">{{dataModel.SegmentName}} — {{dataModel.SiteName}}</view>
				<view v-if="'riskcore'===stateType" class="def-color-text text-new-line">
					风险源：{{dataModel.RiskItemName}}
					<span v-if="'overtime'===stateShow" class="span-overtime">超时</span>
				</view>

				<!-- 管控措施start -->
				<view v-if="'gkcs'===stateType" class="def-color-text text-new-line">
					管控措施：{{dataModel.Content}}
					<span v-if="'overtime'===stateShow" class="span-overtime">超时</span>
				</view>
				<view v-if="'gkcs'===stateType" class="def-color-text text-new-line">{{dataModel.ItemRecodeSerialNumber}}</view>
				<!-- 管控措施end -->

				<!-- 预警事件start -->
				<view v-if="'sjmc'===stateType" class="def-color-text text-new-line">
					事件名称：{{dataModel.EventName}}
					<!-- <span v-if="'overtime'===stateShow" class="span-overtime">超时</span> -->
				</view>
				<view v-if="'sjmc'===stateType" class="def-color-text text-new-line">{{dataModel.EarlyWarningNumber}}</view>
				<!-- 预警事件end -->
				<view v-if="'serial'===stateType" class="def-color-text text-new-line">
					{{dataModel.SerialNumber}}
					<span v-if="'overtime'===stateShow" class="span-overtime">超时</span>
				</view>
			</view>
			<view v-if="'verify'===stateShow" class="uni-flex risk-static">
				<view class="def-color-text risk-static-item">已落实{{dataModel.HandleedCount}}</view>
				<view class="def-color-text risk-static-item">未落实{{dataModel.UnHandleCount}}</view>
			</view>
		</view>
		<view v-if="riskShowInfo" class="risk-lable">
			<slot name="slot-info"></slot>
		</view>
		<view v-if="riskShowImg && dataModel.ImgList.length" class="risk-lable">
			<view class="uni-flex uni-flex-img">
				<swiper class="risk-img" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
					<swiper-item v-for="(img, index) in dataModel.ImgList" :key="index">
						<image class="view-hundred-percent" :id="index" :src="img" @error="imgError(img,$event)" />
					</swiper-item>
				</swiper>
				<view class="risk-img-number text-new-line" :hover-class="dataModel.ImgList.length?'uni-list-cell-hover':''" @click="changePreview(true)">总数{{dataModel.ImgList.length}}张></view>
			</view>
		</view>
		<view v-if="btnShowLists.length" class="uni-flex" style="margin-top: 20px;">
			<block v-for="(btn, btnK) in btnShowLists" :key="btnK">
				<button class="risk-btn-item" :class="btn.class" @click="bindClick(btn.value, dataModel)">{{btn.button}}</button>
			</block>
		</view>
		<risk-card-img v-if="riskCardImgShow" :imgList="dataModel.ImgList" :checkUser="dataModel.UserName" :checkDate="dataModel.DynamicTime"
		 :textDescribe="dataModel.RiskName" @preview="changePreview(false)"></risk-card-img>
	</view>
</template>

<script>
	/**
	 * name:风险模块数据展示卡片
	 * 属性：
	 * spacing Number String类型 顶部间距
	 * dataModel Object类型 风险数据模型展示（数据模型查看modelData.js文件modelRisk风险数据模型）
	 * dataType String类型 数据类型这里分为2类：local未提交（本地的）、submit已提交
	 * btnLists Array类型 操作按钮集合
	 * riskShowInfo Boolean类型 是否显示风险信息
	 * riskShowImg Boolean类型 是否显示风险图片
	 * stateShow String类型 以何种状态显示 verify是否落实 overtime超时
	 * stateType String类型 以何种类型显示 riskcore风险源 gkcs管控措施 serial检查单号 sjmc事件名称
	 * 事件：
	 * btnClick Function类型 操作按钮回调事件 + 参数
	 * preview Function类型 图片预览状态
	 */
	import riskCardImg from './risk-card-img.vue';
	export default {
		name: 'risk-card',
		props: {
			spacing: {
				type: [Number, String],
				default: 20
			},
			dataModel: {
				type: Object,
				default: function() {
					return {};
				}
			},
			dataType: {
				type: String,
				default: 'local'
			},
			btnLists: {
				type: Array,
				default: function() {
					return [];
				}
			},
			riskShowInfo: {
				type: Boolean,
				default: false
			},
			riskShowImg: {
				type: Boolean,
				default: true
			},
			stateShow: {
				type: String,
				default: ''
			},
			stateType: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				riskCardImgShow: false,
				imgDef: require('../../static/logo.png'),
				buttonList: [{
						button: '提交',
						value: '1',
						class: 'tm-bottom-btn-next'
					},
					{
						button: '编辑',
						value: '2',
						class: 'tm-bottom-btn-edit'
					},
					{
						button: '删除',
						value: '3',
						class: 'tm-bottom-btn-del'
					},
					{
						button: '详情',
						value: '4',
						class: 'tm-bottom-btn-next'
					},
					{
						button: '预警',
						value: '5',
						class: 'tm-bottom-btn-yj'
					},
					{
						button: '复查',
						value: '6',
						class: 'tm-bottom-btn-fc'
					}
				]
			};
		},
		methods: {
			bindClick(value, data) {
				this.$emit('btnClick' + value, data);
			},
			imgError(img, e) {
				// console.log("e: " + JSON.stringify(e));
				img.imgSrc = this.imgDef;
			},
			/**
			 * @param {Object} isT 是否展示：true展示，false不展示
			 * @param {Object} index 集合下标
			 */
			changePreview(isT) {
				this.riskCardImgShow = isT;
				this.$emit('preview', {
					isT: isT,
					type: this.dataType
				});
			}
		},
		computed: {
			btnShowLists: function() {
				if (this.btnLists.length) {
					var list = [];
					for (var i = 0; i < this.btnLists.length; i++) {
						var btnI = this.btnLists[i];
						for (var j = 0; j < this.buttonList.length; j++) {
							var btnJ = this.buttonList[j];
							if (btnI === btnJ.value) {
								list.push(btnJ);
							}
						}
					}
					// console.log("list: " + JSON.stringify(list));
					return list;
				}
				return [];
			}
		},
		components: {
			riskCardImg
		}
	};
</script>

<style>
	.risk-img-number {
		width: 25%;
		line-height: 20px;
		color: blue;
		text-align: center;
		text-decoration: underline;
		margin-right: 5px;
	}

	.risk-static {
		width: 50%;
		float: right;
		justify-content: center;
		align-items: center;
	}

	.risk-static-item {
		width: 60px;
		text-align: center;
		margin: 0px 3px;
		background-color: #f0f0f0;
		font-size: 12px;
		padding: 2px 7px;
		word-break: break-word;
	}

	.risk-lable {
		border: 1px solid rgba(168, 168, 168, 0.4);
		margin: 5px 0px;
		padding: 5px;
	}

	.uni-flex-img {
		align-items: center;
		justify-content: space-between;
	}

	.risk-img {
		width: 70%;
		height: 90px;
	}

	.risk-btn-item {
		width: 100px;
		height: 40px;
		line-height: 40px;
	}

	.span-overtime {
		width: 40px;
		color: red;
		border: 1px solid #cc3333;
		background-color: #ffcccc;
		text-align: center;
		padding: 0px 5px;
		margin-left: 5px;
	}

	.def-color-text {
		color: #a8a8a8;
	}

	.text-new-line {
		word-wrap: break-word;
		word-break: break-all;
	}

	.tm-bottom-btn-next {
		color: #FFFFFF;
		border-radius: 50px;
		/* #ifdef APP-PLUS */
		background-image: linear-gradient(90deg, rgb(17, 162, 217) 0%, rgb(104, 116, 238) 100%);
		/* #endif */
		/* #ifdef H5 */
		background-image: -moz-linear-gradient(0deg, rgb(17, 162, 217) 0%, rgb(104, 116, 238) 100%);
		background-image: -webkit-linear-gradient(0deg, rgb(17, 162, 217) 0%, rgb(104, 116, 238) 100%);
		background-image: -ms-linear-gradient(0deg, rgb(17, 162, 217) 0%, rgb(104, 116, 238) 100%);
		/* #endif */
	}

	.tm-bottom-btn-edit {
		color: #FFFFFF;
		border-radius: 50px;
		/* #ifdef APP-PLUS */
		background-image: linear-gradient(90deg, rgb(117, 211, 175) 0%, rgb(168, 193, 137) 100%);
		/* #endif */
		/* #ifdef H5 */
		background-image: -moz-linear-gradient(0deg, rgb(117, 211, 175) 0%, rgb(168, 193, 137) 100%);
		background-image: -webkit-linear-gradient(0deg, rgb(117, 211, 175) 0%, rgb(168, 193, 137) 100%);
		background-image: -ms-linear-gradient(0deg, rgb(117, 211, 175) 0%, rgb(168, 193, 137) 100%);
		/* #endif */
	}

	.tm-bottom-btn-del {
		color: #FFFFFF;
		border-radius: 50px;
		/* #ifdef APP-PLUS */
		background-image: linear-gradient(90deg, rgb(179, 206, 227) 0%, rgb(124, 167, 209) 100%);
		/* #endif */
		/* #ifdef H5 */
		background-image: -moz-linear-gradient(0deg, rgb(179, 206, 227) 0%, rgb(124, 167, 209) 100%);
		background-image: -webkit-linear-gradient(0deg, rgb(179, 206, 227) 0%, rgb(124, 167, 209) 100%);
		background-image: -ms-linear-gradient(0deg, rgb(179, 206, 227) 0%, rgb(124, 167, 209) 100%);
		/* #endif */
	}

	.tm-bottom-btn-yj {
		color: #FFFFFF;
		border-radius: 50px;
		/* #ifdef APP-PLUS */
		background-image: linear-gradient(90deg, rgb(238, 163, 105) 0%, rgb(230, 67, 101) 100%);
		/* #endif */
		/* #ifdef H5 */
		background-image: -moz-linear-gradient(0deg, rgb(238, 163, 105) 0%, rgb(230, 67, 101) 100%);
		background-image: -webkit-linear-gradient(0deg, rgb(238, 163, 105) 0%, rgb(230, 67, 101) 100%);
		background-image: -ms-linear-gradient(0deg, rgb(238, 163, 105) 0%, rgb(230, 67, 101) 100%);
		/* #endif */
	}

	.tm-bottom-btn-fc {
		color: #FFFFFF;
		border-radius: 50px;
		/* #ifdef APP-PLUS */
		background-image: linear-gradient(90deg, rgb(24, 175, 238) 0%, rgb(29, 179, 191) 100%);
		/* #endif */
		/* #ifdef H5 */
		background-image: -moz-linear-gradient(0deg, rgb(24, 175, 238) 0%, rgb(29, 179, 191) 100%);
		background-image: -webkit-linear-gradient(0deg, rgb(24, 175, 238) 0%, rgb(29, 179, 191) 100%);
		background-image: -ms-linear-gradient(0deg, rgb(24, 175, 238) 0%, rgb(29, 179, 191) 100%);
		/* #endif */
	}
</style>
