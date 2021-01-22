<template>
	<view>
		<view class="uni-common-pd">
			<view class="segmented-control" :class="styleType">
				<view class="segmented-control-item" :class="styleType" v-for="(item, index) in titleList" :key="index" @click="onClickItem(index)">
					{{item}}
					<view :class="index === current ? 'segmented-control-active' : ''"></view>
				</view>
			</view>
		</view>
		<view>
			<view v-show="current === 0">
				<scroll-view :style="'width: 100%;height: ' + scrollHeight + 'px;background-color: #FFFFFF;'" :scroll-y="true">
					<view class="uni-list">
						<view class="uni-list-cell" v-for="(local, keyL) in localList" :key="keyL">
							<view class="uni-list-navigate">
								<scroll-view class="scroll-view-body" scroll-x>
									<view class="scroll-view-item" hover-class="uni-list-cell-hover">
										<view class="scroll-view-item scroll-item-head">
											<view class="scroll-item-title">{{local.title}}</view>
											<view class="scroll-item-content">{{local.content}}</view>
										</view>
										<view class="scroll-view-item scroll-item-date">{{local.date}}</view>
									</view>
									<view class="scroll-view-item scroll-item-btn scroll-btn-sub">提交</view>
									<view class="scroll-view-item scroll-item-btn scroll-btn-del">删除</view>
								</scroll-view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view v-show="current === 1">
				<scroll-view :style="'width: 100%;height:'+scrollHeight+'px;background-color: #FFFFFF;'" :scroll-y="true">
					<view class="uni-list">
						<view class="uni-list-cell" v-for="(local, keyL) in submitedList" :key="keyL" @click="toConditionShowInfo(local)" hover-class="uni-list-cell-hover">
							<view class="uni-list-cell-navigate-item list-commit-title">{{local.SiteName}}</view>
							<view class="list-commit-date">{{local.StepDate}}
								<text class="tmicon tm-szright personnel-info-right"></text>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				styleType: 'button',
				titleList: ["未提交", "已提交"],
				localList: [
					{"title":"沿江高速保护","content":"S03标","date":"2019-03-20"},
					{"title":"沿江高速保护","content":"S03标","date":"2019-03-20"},
					{"title":"沿江高速保护","content":"S03标","date":"2019-03-20"}
				],
				submitedList: [
					{"SiteName":"人工岛","StepDate":"2018-09-13"},
					{"SiteName":"沿江高速保护","StepDate":"2019-03-20"}
				],
				scrollHeight: 450
			}
		},
		methods: {
			onClickItem(index) {
				const _this = this;
				if (this.current != index) {
					this.current = index;
				}
			},
			toConditionShowInfo(item) {
				uni.navigateTo({
					url: './conditionShowInfo?condInfo=' + JSON.stringify(item)
				});
			}
		},
		onNavigationBarButtonTap(data) {
			if (0 === data.index) {
				uni.navigateTo({
					url: '../csp/conditionAdd'
				})
			}
		},
		onLoad() {
			this.scrollHeight = uni.getSystemInfoSync().windowHeight - 70;
		}
	}
</script>

<style>
</style>
