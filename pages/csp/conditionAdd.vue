<template>
	<view>
		<scroll-view :style="'height: '+scrollHeight+'px;width: 100%;'" scroll-y>
			<view class="uni-input-group">
				<tb-row-item label="工点" :required="true" :selection="true">
					<input class="tb-row-input" type="text" :disabled="disabled" :value="pointsValue" @click="toPointsSelect" placeholder="请说明..." />
				</tb-row-item>
				<tb-row-item label="填报人">
					<input class="tb-row-input" type="text" :disabled="disabled" value="sysadmin" placeholder="请说明..." />
				</tb-row-item>
				<tb-row-item label="施工状态" :selection="true">
					<picker mode="selector" :value="radioValue" :range="radioSelect" @change="radioChange">
						{{ radioSelect[radioValue] }}
					</picker>
				</tb-row-item>
				<tb-row-item label="日期" :selection="true">
					<picker mode="date" :value="todayDate" @change="bindDateChange">
						<view class="uni-flex def-font-size"><input disabled="true" :value="todayDate" /></view>
					</picker>
				</tb-row-item>
				<tb-row-item label="补充说明">
					<textarea class="tb-row-textarea" placeholder="请说明..."></textarea>
				</tb-row-item>
			</view>
		</scroll-view>
		<view class="btn-single">
			<button class="btn-single-next" @click="toConditionList">下一步</button>
		</view>
	</view>
</template>

<script>
	import tbRowItem from "@/components/tb-row-item/tb-row-item.vue";
	export default {
		components: {
			tbRowItem
		},
		data() {
			return {
				scrollHeight: 500,
				pointsValue: "S04标>伶仃洋大桥",
				disabled: true,
				radioValue: 0,
				radioSelect: ['未开工', '施工中', '竣工', '停工'],
				todayDate: "2019-09-06"
			}
		},
		methods: {
			radioChange(e) {
				this.radioValue = e.target.value;
			},
			bindDateChange(e) {
				this.todayDate = e.target.value;
			},
			toPointsSelect() {
				uni.navigateTo({
					url: '../sztd/pointsSelect'
				});
			},
			toConditionList() {
				uni.navigateTo({
					url: './conditionList'
				});
			}
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
