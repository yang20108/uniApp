<template>
	<view>
		<dangerous-card-list title="工点"></dangerous-card-list>
		<view class="csp-content-card">
			<risk-card-row rowTitle="工点" :rowValue="SiteProject.SiteName?SiteProject.SiteName:'请选择'" :hoverClass="true" @bindClick="siteSelect"></risk-card-row>
			<linkage-picker v-if="0!=pickerLevel" ref="linkagePicker" :mode="pickerLevel" :defaultIndex="[0,0,0]" :pickerList="cspSiteList" @onConfirm="confirm"></linkage-picker>
			<risk-card-row rowTitle="填报人" rowValue="董勤"></risk-card-row>
			<risk-card-row rowTitle="日期" rowValue="2020-03-03 17:36:11"></risk-card-row>
		</view>
		<dangerous-card-list title="工况信息"></dangerous-card-list>
		<view class="csp-content-card">
			<csp-collapse>
				<csp-collapse-item :title="csp.titleDescribe" :checked="csp.Checked" :open="true">
					<dangerous-card-slot title="当前施工阶段" :must="true">
						<checkbox-group class="csp-item-margin">
							<block v-for="(jd, keyJ) in csp.ConstructionStageList" :key="keyJ">
								<view class="csp-item-checkbox">
									<checkbox :checked="jd.CanSelect"></checkbox>
									<view class="csp-item-checkbox-label">{{jd.Text}}</view>
								</view>
							</block>
						</checkbox-group>
					</dangerous-card-slot>
					<view v-if="csp.Templates && csp.Templates.length">
						<block v-for="(temp, tempK) in csp.Templates" :key="tempK">
							<dangerous-card-slot v-if="'Number'===temp.DataType" :title="temp.DisplayName" :must="true">
								<input class="csp-item-margin csp-item-input" type="number" v-model="temp.Value" placeholder="请输入..." />
							</dangerous-card-slot>
							<dangerous-card-slot v-if="'Mileage'===temp.DataType" :title="temp.DisplayName" :must="true">
								<span class="csp-mileage-k">K</span>
								<input class="csp-item-margin csp-item-input csp-mileage-k1" :id="csp.AreaID+',one,'+temp.FieldName" type="number"
								 v-model.number="temp.MileageOne" placeholder="请输入..." />
								<span class="csp-mileage-add">+</span>
								<input class="csp-item-margin csp-item-input csp-mileage-k1" :id="csp.AreaID+',two,'+temp.FieldName" type="number"
								 v-model.number="temp.MileageTow" placeholder="请输入..." />
								<view class="csp-mileage-tips">{{temp.Text}}</view>
								<view style="clear: both;"></view>
							</dangerous-card-slot>
						</block>
					</view>
					<dangerous-card-slot title="现场描述" :must="true">
						<textarea class="csp-item-margin csp-item-textarea" v-model="csp.Descript" placeholder="请输入..." maxlength="500"></textarea>
					</dangerous-card-slot>
					<dangerous-card-slot title="现场图片">
						<view class="csp-item-margin tb-row-image">
							<block v-for="(img, imgKey) in csp.Images" :key="imgKey">
								<view class="tb-row-image-item">
									<image class="tb-row-image-item-img" :id="img" :src="img" :data-src="img" @tap="previewImage"></image>
									<text class="iconfont icon-clear tb-row-image-item-clear" type="clear" @click="clearImage(imgKey)"></text>
								</view>
							</block>
							<view class="tb-row-image-box">
								<view class="tb-row-image-add" @tap="bindPicture"></view>
							</view>
						</view>
					</dangerous-card-slot>
					<view class="csp-item-btn-in">
						<button class="csp-item-in-item" @click="saveAreaData">保存</button>
					</view>
				</csp-collapse-item>
			</csp-collapse>
		</view>
		<view class="csp-item-btn-out">
			<button class="csp-item-out-item">提交</button>
			<view style="clear: both;"></view>
		</view>
	</view>
</template>

<script>
	import dangerousCardList from "../../components/dangerous-card/dangerous-card-list.vue"
	import riskCardRow from "../../components/risk-card/risk-card-row.vue"
	import linkagePicker from "../../components/linkage-picker/linkage-picker.vue"
	import cspCollapse from "../../components/csp-collapse/csp-collapse.vue"
	import cspCollapseItem from "../../components/csp-collapse/csp-collapse-item.vue"
	import dangerousCardSlot from "../../components/dangerous-card/dangerous-card-slot.vue"
	import modelData from "../../common/modelData.js"
	export default {
		data() {
			return {
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
				},
				cspSiteList: modelData.modelSiteData(),
				csp: modelData.modelDangerousRisk()
			}
		},
		methods: {
			siteSelect() {
				// 判断有没有工点数据
				/* if (0 >= this.pickerLevel) {
					return;
				} */
				this.$refs.linkagePicker.showPicker();
			},
			confirm(e) {
				if (e && e.length) {
					// 拼装动态工点展示信息
					this.SiteProject.LineId = this.cspSiteList[e[0]].ID;
					this.SiteProject.LineName = this.cspSiteList[e[0]].label;
					this.SiteProject.SegmentId = this.cspSiteList[e[0]].children[e[1]].ID;
					this.SiteProject.SegmentName = this.cspSiteList[e[0]].children[e[1]].label;
					this.SiteProject.SiteId = this.cspSiteList[e[0]].children[e[1]].children[e[2]].SiteID;
					this.SiteProject.SiteName = this.cspSiteList[e[0]].children[e[1]].children[e[2]].label;
				}
			},
			openState(e) {
				console.log("e: " + JSON.stringify(e));
			},
			bindPicture() {
				uni.chooseImage({
					count: 5 - this.csp.Images.length,
					success: res => {
						//console.log("imgPaths => "+ JSON.stringify(res.tempFilePaths))
						this.csp.Images = this.csp.Images.concat(res.tempFilePaths);
					}
				});
			},
			clearImage(index) {
				this.csp.Images.splice(index, 1);
			},
			previewImage() {},
			saveAreaData() {
				this.csp.Checked = true
			}
		},
		components: {
			dangerousCardList,
			riskCardRow,
			cspCollapse,
			cspCollapseItem,
			dangerousCardSlot
		}
	}
</script>

<style>
</style>
