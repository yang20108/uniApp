<template>
	<view class="page-body" :style="'height:'+scrollHeight+'px;'">
		<scroll-view class="nav-left" scroll-y="true">
			<view class="nav-left-item" v-for="(listL, keyL) in areasList" :key="keyL" @click="getStepItemLists(listL, keyL)">
				<view class="nav-left-item-active" :class="keyL == categoryActive ? 'active' : ''">{{ listL.AreaName }}</view>
			</view>
		</scroll-view>
		<scroll-view class="nav-right" scroll-y="true" scroll-with-animation>
			<view class="uni-card">
				<view class="uni-list">
					<view class="uni-list-cell uni-collapse" v-for="(step,index) in stepsList" :key="index" :class="index === stepsList.length - 1 ? 'uni-list-cell-last' : ''">
						<view class="uni-list-cell-navigate uni-navigate-bottom uni-list-cell-navigate-item" hover-class="uni-list-cell-hover"
						 :class="step.showList ? 'uni-active' : ''" @click="trigerCollapse(index)">
							{{step.Name}}
						</view>
						<view class="uni-list uni-collapse" :class="step.showList ? 'uni-active' : ''">
							<view class="uni-list-cell">
								<view class="uni-list-cell-navigate uni-flex">
									<view class="step-item-label">施工状态</view>
									<view class="step-item-content">
										<picker mode="selector" :value="step.Status" :range="workState" disabled="true">
											<view>{{workState[step.Status]}}</view>
										</picker>
									</view>
								</view>
							</view>
							<view class="uni-list-cell" v-for="(att,attKey) in step.Templates" :key="attKey" :class="attKey === step.Templates.length - 1 ? 'uni-list-cell-last' : ''">
								<view class="uni-list-cell-navigate uni-flex">
									<view class="step-item-label">{{att.DisplayName}}</view>
									<view class="step-item-content">
										<view v-if="'Text' === att.DataType">{{att.Value}}</view>
										<view v-if="'Dropdownlist' === att.DataType">{{att.Value}}</view>
										<view v-if="'MultiSelect' === att.DataType">{{att.Value}}</view>
										<view v-if="'Upload' === att.DataType">
											<view class="uni-uploader__files uni-flex-width">
												<view class="uni-uploader__file" v-for="(image,imgKey) in att.Value" :key="imgKey">
													<image class="uni-uploader__img" :src="image"></image>
												</view>
											</view>
										</view>
									</view>
								</view>
							</view>
							<view class="uni-list-cell">
								<view class="uni-list-cell-navigate uni-flex">
									<view class="step-item-label">备注</view>
									<view class="step-item-content">{{step.Mark}}</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollHeight: 500,
				categoryActive: 0,
				condInfo: "",
				areasList: [{
					"AreaName": "人工岛",
					"Steps": [{
						"Name": "基坑浇筑",
						"Status": 0,
						"Templates": [{
							"DisplayName": "文本",
							"DataType": "Text",
							"Value": "干活"
						}, {
							"DisplayName": "下拉框",
							"DataType": "Dropdownlist",
							"Value": "项目工程"
						}, {
							"DisplayName": "多选框",
							"DataType": "MultiSelect",
							"Value": "加固,巡检,报警"
						}, {
							"DisplayName": "图片",
							"DataType": "Upload",
							"Value": [
								"../../static/img/sztd_grid_1.jpg",
								"../../static/img/sztd_grid_2.jpg",
								"../../static/img/sztd_grid_3.jpg"
							]
						}],
						"Mark": "",
						"showList": false
					}]
				}],
				stepsList: [],
				workState: ['施工中', '停工', '完工', '未施工']
			}
		},
		methods: {
			trigerCollapse(e) {
				for (let i = 0, len = this.stepsList.length; i < len; ++i) {
					if (e === i) {
						this.stepsList[i].showList = !this.stepsList[i].showList;
					} else {
						this.stepsList[i].showList = false;
					}
				}
			},
			getStepItemLists: function(area, index) {
				this.categoryActive = index;
				// console.log("area => " + JSON.stringify(area));
				// 获取分区下的分部分项和工序
				this.stepsList = area.Steps;
			},
		},
		onLoad: function(load) {
			this.scrollHeight = uni.getSystemInfoSync().windowHeight;
			if (load.condInfo) {
				this.condInfo = JSON.parse(load.condInfo);
				this.areasList[this.categoryActive].AreaName = this.condInfo.SiteName;
				this.areasList[this.categoryActive].Steps[this.categoryActive].Mark = this.condInfo.StepDate;
				this.areasList[this.categoryActive].Steps[0].showList = true;
				this.getStepItemLists(this.areasList[this.categoryActive], this.categoryActive);
				load.condInfo = undefined;
			}
		}
	}
</script>

<style>
	.step-item-label {
		width: 30%;
		text-align: right;
	}

	.step-item-content {
		width: 70%;
		padding-left: 10px;
		word-wrap: break-word;
		word-break: break-all;
	}

	.uni-list .uni-list-cell:last-child:after {
		height: 0upx;
	}

	.uni-list-cell-last.uni-list-cell:after {
		height: 2upx;
	}
</style>
