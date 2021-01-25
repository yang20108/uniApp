<template>
	<view>
		<scroll-view :style="'height: '+scrollHeight+'px;width: 100%;'" scroll-y>
			<view class="uni-input-group">
				<tb-row-item label="工点" :required="true" :selection="true">
					<input class="tb-row-input" type="text" :disabled="disabled" :value="pointsValue" @click="toPointsSelect"
					 placeholder="请说明..." />
				</tb-row-item>
				<tb-row-item label="风险名称" :required="true">
					<input class="tb-row-input" type="text" :disabled="disabled" value="深中大桥" placeholder="请说明..." />
				</tb-row-item>
				<tb-row-item label="当前工序" :required="true">
					<checkbox-group class="tb-row-group" @change="checkboxChange">
						<view class="tb-row-group-item" v-for="(checkItem, checkKey) in checkboxSelectList" :key="checkKey">
							<checkbox :value="checkKey+''" :checked="checkItem.checked"></checkbox>
							<view class="tb-row-item-label">{{ checkItem.name }}</view>
						</view>
					</checkbox-group>
				</tb-row-item>
				<tb-row-item label="检查时间">
					<input class="tb-row-input" type="text" :disabled="disabled" value="2019-09-12" />
				</tb-row-item>
				<view style="position: relative;">
				<custom-combox class="tb-row-item" label="检查人" :candidates="candidates" v-model="checkUser" placeholder="请选择..."></custom-combox>
				</view>
				<tb-row-item label="检查单位">
					<input class="tb-row-input" type="text" :disabled="disabled" value="深中监理分局" />
				</tb-row-item>
				<tb-row-item label="检测情况">
					<input class="tb-row-input" type="text" :disabled="disabled" value="无" />
				</tb-row-item>
				<!-- #ifdef APP-PLUS -->
				<tb-row-textarea class="tb-row-item_after" label="补充说明" @bindRecognize="bindRecognize">
					<textarea class="tb-row-textarea" :value="recognizeValue" placeholder="请说明..."></textarea>
				</tb-row-textarea>
				<!-- #endif -->
				<!-- #ifdef H5 -->
				<tb-row-item class="tb-row-item_after" label="补充说明">
					<textarea class="tb-row-textarea" placeholder="请说明..."></textarea>
				</tb-row-item>
				<!-- #endif -->
			</view>
		</scroll-view>
		<view class="btn-single">
			<button class="btn-single-next" @click="toRiskList">下一步</button>
		</view>
	</view>
</template>

<script>
	import customCombox from "@/components/custom-tools/custom-combox.vue";
	import tbRowTextarea from "@/components/tb-row-item/tb-row-textarea.vue";
	export default {
		data() {
			return {
				scrollHeight: 500,
				pointsValue: "S04标>伶仃洋大桥",
				disabled: true,
				checkboxSelectList: [
					{"name": "测量","checked": true},
					{"name": "渠道","checked": false},
					{"name": "侧边梁","checked": false},
					{"name": "大桥架构","checked": false},
					{"name": "其他","checked": false}
				],
				candidates: ["sysadmin","田涛","陈益明"],
				checkUser: "",
				checkedSelectList: [{
					"name": "测量",
					"checked": true
				}],
				todayDate: "2019-09-06",
				recognizeValue: ""
			}
		},
		methods: {
			checkboxChange(e) {
				var values = e.target.value,
					items = this.checkboxSelectList;
				this.checkedSelectList = [];
				for (var i = 0; i < items.length; i++) {
					items[i].checked = false;
					for (var j = 0; j < values.length; j++) {
						if (items.indexOf(items[i]) == values[j]) {
							items[i].checked = true;
							this.checkedSelectList.push(items[i])
							break
						}
					}
				}
			},
			bindRecognize(e) {
				this.recognizeValue += e;
			},
			toPointsSelect() {
				uni.navigateTo({
					url: '../sztd/pointsSelect'
				});
			},
			toRiskList() {
				uni.navigateTo({
					url: './riskProcedureList'
				});
			}
		},
		components: {
			customCombox,
			tbRowTextarea
		},
		onShow() {
			// 绑定名为"data"的事件
			uni.$on("data", data => {
				// console.log("data: " + JSON.stringify(data));
				this.pointsValue = data.treeName + ">" + data.siteItem;
				// 取消名为"data"的事件绑定
				// uni.$off("data");
			})
		},
		onLoad() {
			this.scrollHeight = uni.getSystemInfoSync().windowHeight - 70;
		}
	}
</script>

<style>
</style>
