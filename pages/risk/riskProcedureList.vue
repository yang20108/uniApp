<template>
	<view>
		<scroll-view :style="'height: '+scrollHeight+'px;width: 100%;'" scroll-y>
			<view class="uni-list">
				<view class="uni-list-cell" v-for="(proItem,proKey) in procedureList" :key="proKey">
					<view class="uni-list-cell-navigate uni-list-cell-navigate-item" @click="toRiskProcedureCheck(proItem)"
					 hover-class="uni-list-cell-hover">
						{{proItem}}
						<text class="iconfont icon-szright personnel-info-right"></text>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="btn-double">
			<button class="btn-double-pro btn-cancel-bgc" @click="bindRiskPage(false)">取消</button>
			<button class="btn-double-pro btn-confirm-bgc" @click="bindRiskPage(true)">确定</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollHeight: 500,
				procedureList: ["斜拉索", "钢箱梁桥面吊机吊装", "混凝土采集检测", "探测设备维护", "安全吊装"]
			}
		},
		methods: {
			toRiskProcedureCheck() {
				uni.navigateTo({
					url: './riskProcedureCheck'
				});
			},
			bindRiskPage(isT) {
				uni.navigateBack({
					delta: 2
				})
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: "当前工序"
			})
			this.scrollHeight = uni.getSystemInfoSync().windowHeight - 70;
		}
	}
</script>

<style>
</style>